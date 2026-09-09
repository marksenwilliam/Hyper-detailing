// Central site configuration for Hyper Detailing Umeå.
//
// Phone, address, opening hours and the Google Maps link were verified against
// the company's Google Business profile ("Hyperdetailing", Industrivägen 22)
// on 2026-09-09. Email came from the client over SMS (August 2026).
//
// TODO before launch (cannot be looked up — the client must supply them):
//   - orgNumber   organisationsnummer (E-handelslagen 8 § requires it on the site)
//   - vatNumber   momsregistreringsnummer, if the business is momsregistrerad
//   - legalName   the registered company name, if it differs from the brand name
//   - socials     Facebook / Instagram page URLs (rows without a URL are not rendered)

export const site = {
  name: "Hyper Detailing",
  fullName: "Hyper Detailing Umeå",
  tagline: "Professionell bilvård i Umeå",
  description:
    "Hyper Detailing i Umeå erbjuder rekond, polering och keramiska lackskydd i toppklass. Boka tid idag och ge din bil showroom-finish.",

  // ---- Legal identity (shown in the footer and on /villkor + /integritetspolicy)
  legalName: "Hyper Detailing Umeå",
  orgNumber: "",
  vatNumber: "",

  // ---- Contact
  phone: "076-843 63 93",
  phoneHref: "tel:+46768436393",
  smsHref: "sms:+46768436393",
  email: "hyperdetailingumea@gmail.com",
  address: "Industrivägen 22",
  postalCode: "901 30",
  city: "Umeå",

  // Google Maps share link for the business profile (also where the reviews live)
  mapsUrl: "https://maps.app.goo.gl/4qqXahKoziN2y8rDA",
  geo: { latitude: 63.8402648, longitude: 20.2291308 },
  // Turn-by-turn directions straight to the shop. On a phone this opens the
  // Google Maps app in navigation mode; on desktop the directions view.
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=63.8402648,20.2291308&destination_place_id=ChIJtQou0tBbfEYR5VnB2-lHz34",

  // ---- Opening hours (Google Business profile: every day 09–19)
  hours: [{ days: "Måndag–söndag", time: "09.00–19.00" }],

  // Machine-readable mirror of `hours` for schema.org structured data.
  hoursSpec: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],

  // ---- Social profiles. Leave `href` empty until the real URL is known —
  // the footer skips entries without one, so no dead "#" links ship.
  socials: [
    { label: "Facebook", href: "", icon: "/assets/icons/icon-social-1.svg" },
    { label: "Instagram", href: "", icon: "/assets/icons/icon-social-4.svg" },
  ],

  // Date stamped on the legal pages ("Senast uppdaterad")
  legalUpdated: "9 september 2026",
};

/** Socials that actually have a URL to link to */
export const activeSocials = site.socials.filter((s) => s.href);

/** "Industrivägen 22, 901 30 Umeå" */
export const fullAddress = `${site.address}, ${site.postalCode} ${site.city}`;
