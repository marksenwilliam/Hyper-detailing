// Central site configuration for Hyper Detailing Umeå.
// TODO: Replace every placeholder value below with the client's real details
// before launch — phone, email, address, org number, opening hours and socials.

export const site = {
  name: "Hyper Detailing",
  fullName: "Hyper Detailing Umeå",
  tagline: "Professionell bilvård i Umeå",
  description:
    "Hyper Detailing i Umeå erbjuder rekond, polering och keramiska lackskydd i toppklass. Boka tid idag och ge din bil showroom-finish.",

  // Email and address are the client's real details (SMS, augusti 2026).
  // TODO: phone and opening hours are STILL PLACEHOLDERS — the client gave
  // "09-19" without saying which days, so `hours`/`hoursSpec` below are
  // unverified. Confirm both before launch.
  phone: "090-123 45 67",
  phoneHref: "tel:+46901234567",
  email: "hyperdetailingumea@gmail.com",
  address: "Industrivägen 22",
  postalCode: "901 30",
  city: "Umeå",

  hours: [
    { days: "Måndag–fredag", time: "08.00–17.00" },
    { days: "Lördag", time: "10.00–14.00" },
    { days: "Söndag", time: "Stängt" },
  ],

  // Machine-readable mirror of `hours` for schema.org structured data.
  hoursSpec: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "14:00" },
  ],

  socials: [
    { label: "Facebook", href: "#", icon: "/assets/icons/icon-social-1.svg" },
    { label: "Instagram", href: "#", icon: "/assets/icons/icon-social-2.svg" },
    { label: "LinkedIn", href: "#", icon: "/assets/icons/icon-social-3.svg" },
    { label: "YouTube", href: "#", icon: "/assets/icons/icon-social-4.svg" },
  ],
};
