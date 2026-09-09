// Real customer reviews, read straight off the company's Google Business
// profile ("Hyperdetailing", Industrivägen 22, Umeå) on 2026-09-09.
//
// The profile had 15 reviews, all five stars; these are the ten that carry a
// written comment (five are star-only). Names and quotes are VERBATIM as
// Google shows them — reviewers' own spelling, punctuation and capitalisation
// are kept. Do not "fix" them; a tidied-up review reads as a fabricated one,
// and showing invented or edited reviews is misleading marketing under
// marknadsföringslagen (2008:486). Only add quotes you can point to on the
// profile, and keep googleReviewCount in step with it.

export type ReviewSource = "google";

export interface Review {
  name: string;
  quote: string;
  source: ReviewSource;
}

// The business's Google Maps profile — where every quote below can be verified.
// Used by the hero badge and the spotlight rating row.
export const googleReviewsUrl = "https://maps.app.goo.gl/4qqXahKoziN2y8rDA";

// Snapshot of the profile on 2026-09-09: 5,0 average from 15 reviews.
// Update when the count changes — a stale number is worse than none.
export const googleRating = "5,0";
export const googleReviewCount = 15;

export const reviews: Review[] = [
  {
    name: "Rasmus Berglund",
    quote:
      "Helt fantastisk service, trevlig och kunnig kille samt allt till ett mycket bra pris. Kommer inte gå någon annanstans i Umeå framöver",
    source: "google",
  },
  {
    name: "Caspar Jönsson",
    quote:
      "Var hos Hyperdetailing nyligen med min Sharan för en rekond, både in- och utsidan. Mycket nöjd med resultatet. Kändes väldigt lyxigt",
    source: "google",
  },
  {
    name: "Alexander Eriksson",
    quote: "Riktigt trevlig kille som verkligen gör ett grymt bra jobb. Supernöjd!",
    source: "google",
  },
  {
    name: "Ricky",
    quote: "Toppen, noggrannhet och tillgänglighet. Rekommenderas!",
    source: "google",
  },
  {
    name: "Anwar Hajar",
    quote: "Mycket bra service och trevlig personal.",
    source: "google",
  },
  {
    name: "Sidad Mohammed Ali",
    quote: "Utmärkt resultat. Helt nöjd",
    source: "google",
  },
  {
    name: "Samuel",
    quote: "Grym service och bra pris",
    source: "google",
  },
  {
    name: "Azad Hajar",
    quote: "Mycket bra service!",
    source: "google",
  },
  {
    name: "Jotyar Ahmad",
    quote: "Fantastisk",
    source: "google",
  },
  {
    name: "Vadar Hajr",
    quote: "Prisvärt",
    source: "google",
  },
];
