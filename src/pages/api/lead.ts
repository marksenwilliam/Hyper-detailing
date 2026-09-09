// POST /api/lead — receives the booking form and creates (or updates) a contact
// in the client's GoHighLevel sub-account.
//
// Runs on the server (Vercel function) so the Private Integration Token never
// reaches the browser. Both secrets come from the environment — see
// .env.example and the `env` schema in astro.config.mjs.
//
// Flow: validate → POST /contacts/upsert (creates, or updates an existing
// contact with the same e-mail/phone) → if there is a message, attach it as a
// note on the contact. The reg.nr lands in the custom field {{contact.reg_nr}}.
import type { APIRoute } from "astro";
import { GHL_PIT, GHL_LOCATION_ID } from "astro:env/server";

export const prerender = false;

const GHL_API = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

// Custom field key in the sub-account (merge tag {{contact.reg_nr}})
const REG_NR_FIELD_KEY = "reg_nr";

// Shown in the contact's "source" and as tags, so the client can filter
// website leads in GHL.
const SOURCE = "Webbplats – bokningsformulär";
const TAGS = ["webbplats", "bokningsförfrågan"];

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Swedish numbers as people type them ("070-123 45 67", "0701234567",
// "+46 70 123 45 67", "0046…") → E.164, which is what GHL stores.
const normalizePhone = (raw: string) => {
  let digits = raw.replace(/[^\d+]/g, "");
  if (digits.startsWith("00")) digits = `+${digits.slice(2)}`;
  if (digits.startsWith("0")) digits = `+46${digits.slice(1)}`;
  else if (!digits.startsWith("+")) digits = `+${digits}`;
  return digits;
};

// "abc 123" → "ABC123"
const normalizeRegNr = (raw: string) => raw.toUpperCase().replace(/[\s-]+/g, "");

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    const type = request.headers.get("content-type") ?? "";
    if (type.includes("application/json")) {
      data = (await request.json()) as Record<string, unknown>;
    } else {
      data = Object.fromEntries((await request.formData()).entries());
    }
  } catch {
    return json(400, { ok: false, error: "invalid_body" });
  }

  // Honeypot: the form has a visually hidden "website" field that people
  // never fill in. Bots do — answer OK and drop it.
  if (text(data.website, 200)) return json(200, { ok: true });

  const lead = {
    firstName: text(data.firstName, 80),
    lastName: text(data.lastName, 80),
    email: text(data.email, 200).toLowerCase(),
    phone: text(data.phone, 40),
    regNr: text(data.regNr, 20),
    message: text(data.message, 4000),
  };

  const missing = (["firstName", "lastName", "email", "phone", "regNr"] as const).filter(
    (key) => !lead[key],
  );
  if (missing.length) return json(400, { ok: false, error: "missing_fields", fields: missing });

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
    return json(400, { ok: false, error: "invalid_email" });
  }

  const phone = normalizePhone(lead.phone);
  if (!/^\+\d{8,15}$/.test(phone)) return json(400, { ok: false, error: "invalid_phone" });

  const regNr = normalizeRegNr(lead.regNr);
  if (!/^[A-ZÅÄÖ0-9]{2,10}$/.test(regNr)) return json(400, { ok: false, error: "invalid_reg_nr" });

  const headers = {
    Authorization: `Bearer ${GHL_PIT}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  // ---- 1. Create or update the contact
  const upsert = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone,
      country: "SE",
      source: SOURCE,
      tags: TAGS,
      customFields: [{ key: REG_NR_FIELD_KEY, field_value: regNr }],
    }),
  });

  if (!upsert.ok) {
    console.error("[lead] GHL upsert failed", upsert.status, await upsert.text());
    return json(502, { ok: false, error: "crm_error" });
  }

  const { contact } = (await upsert.json()) as { contact?: { id?: string } };

  // ---- 2. The free-text message becomes a note on the contact
  if (lead.message && contact?.id) {
    const note = await fetch(`${GHL_API}/contacts/${contact.id}/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        body: `Meddelande från bokningsformuläret på webbplatsen:\n\n${lead.message}`,
      }),
    });
    // A failed note must not fail the booking request — the contact exists.
    if (!note.ok) console.error("[lead] GHL note failed", note.status, await note.text());
  }

  return json(200, { ok: true });
};

// Anything but POST
export const ALL: APIRoute = () => json(405, { ok: false, error: "method_not_allowed" });
