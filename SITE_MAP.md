# Site Map — Hyper Detailing Umeå

Astro site: one landing page plus two legal pages. Converted from the "Darken"
Figma template (`usBV1zSLtqoxIMKvuXX33f`); for the original template's design
specs see [PROJECT_BRIEF.md](PROJECT_BRIEF.md) (historical reference).

## Page: Home (`/`)

| Section | Component | Anchor | Notes |
|---|---|---|---|
| Navbar | `Navbar.astro` | — | Fixed floating pill; hamburger ≤991px; links are root-relative (`/#tjanster`) so they also work from the legal pages; "Boka tid" → `/#kontakt` |
| Hero | `Hero.astro` | `#top` | Full-viewport video stage (desktop + portrait cuts, photo fallback). Google rating badge links to the Google profile; animated "Boka nu" CTA → `#kontakt`; map card (bottom-left) → Google Maps; pause/play button (bottom-right) for the video |
| Reviews + cars | `Spotlight.astro` | `#galleri` | Two rotators: the ten written five-star reviews from the Google Business profile, verbatim (4 s), and real customer photos from `src/data/gallery.ts` (2 s). Prev/next, dots, pause/play; any manual control stops auto-rotation. Rating row links to Google |
| Services | `Features.astro` | `#tjanster` | Wide card (utvändig rekond, cross-fading 3D visuals) + two half cards (keramiskt vaxskydd, invändig rekond); stacked static cards ≤767px. Copy from `src/data/services.ts` |
| Prices | `Pricing.astro` | `#priser` | One card per package from `src/data/packages.ts`; note states prices incl. VAT and how "från"-prices work |
| FAQ | `Faq.astro` | `#faq` | Accordion, item 2 open by default |
| CTA | `Cta.astro` | — | Artwork card with "Boka tid" → `#kontakt` and "Ring …" → `tel:` |
| Contact & booking | `Contact.astro` | `#kontakt` | Direct channels (call, SMS, e-mail, address → Google Maps, "Vägbeskrivning (GPS)" → directions, hours) + booking request form (förnamn, efternamn, telefon, e-post, reg.nr, meddelande) → `POST /api/lead` → GoHighLevel contact + note |

## Route: `POST /api/lead`

`src/pages/api/lead.ts`, the site's only server-rendered route (Vercel
function). Validates the booking form, upserts the contact in the GoHighLevel
sub-account (custom field `reg_nr`, tags, source) and adds the message as a
note. Secrets via `astro:env/server` (`GHL_PIT`, `GHL_LOCATION_ID`). See README.
| Footer | `Footer.astro` | — | Contact + hours, service/quick links, socials (only those with a URL), legal identity (org.nr / VAT when set), links to `/integritetspolicy` and `/villkor` |

Site-wide (BaseLayout): every `tel:` / `sms:` / `mailto:` link is watched. If no
app takes the click within 0.9 s (desktop without a dialer or mail client), the
number is copied and a toast says so, or Gmail's compose window opens with the
same subject/body.

## Page: `/integritetspolicy`

GDPR art. 13 privacy notice — controller, data categories and purposes, legal
bases, retention, recipients (incl. Google/Gmail transfer basis), no cookies,
rights, IMY complaint route. Shell: `LegalPage.astro`.

## Page: `/villkor`

Consumer terms — booking, prices incl. VAT, cancellation, 14-day ångerrätt for
distance bookings, drop-off/pick-up, workmanship, damage, reklamation
(konsumenttjänstlagen), ARN, personal data. Shell: `LegalPage.astro`.

## Page: `/404`

Custom not-found page (`src/pages/404.astro`) with links back to `/#top` and
`/#kontakt`. Static hosts serve `dist/404.html` automatically.

## Not rendered (kept in `src/components/`)

`Gallery.astro` (3-col results grid, reads `src/data/gallery.ts`),
`Showcase.astro`, `Testimonials.astro` and `SocialProof.astro`. The last two
hold invented placeholder content.

## Shared pieces

| Piece | Where | Description |
|---|---|---|
| `ImagePlaceholder.astro` | Hero, Spotlight, Features | Renders a dashed placeholder box until the file exists under `public/`; supports `mobileSrc`, `loading` and `fetchpriority` |
| `src/data/site.ts` | Navbar, Footer, Cta, Contact, Hero, BaseLayout, legal pages | Central client config: name, legal identity, contact, hours, socials, map link |
| `src/data/reviews.ts` | Hero, Spotlight | Verbatim reviews + Google profile URL, rating and review count |
| `src/data/gallery.ts` | Spotlight, Gallery | Real customer photos (plates blurred) |
| `src/data/services.ts` / `packages.ts` | Features / Pricing, Contact (service select) | Service categories / price list |
| `.section-label` / `.section-heading` / `.btn` | global.css | Eyebrow, heading with orange accent span, primary/ghost buttons |
| Scroll animations | BaseLayout | GSAP + ScrollTrigger (bundled from npm) via `data-animate="fade-up|stagger"`, respects `prefers-reduced-motion` |
| Fonts | BaseLayout | Plus Jakarta Sans 400–700, self-hosted via `@fontsource` |
| SEO | BaseLayout, `astro.config.mjs`, `public/robots.txt` | Canonical, Open Graph (1200×630 `og-image.jpg`), `AutomotiveBusiness` JSON-LD with geo/hours/map, sitemap |

## Layout system

- **Page width cap**: `BaseLayout` wraps `<main>` and the footer in a single
  `.page-shell` capped at `--size-page-max` (1440px) and centred; every section
  is a rounded card on the page ground, separated by `--page-gap`.
- Fluid em scaling: root font-size follows the viewport (`--size-font`), design
  width 1440px, breakpoints at 991 / 767 / 479px (see `global.css`).
- Decorative layers live inside their section and are clipped by the section
  card's `overflow: hidden`.
