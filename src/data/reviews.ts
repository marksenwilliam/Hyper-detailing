// Real customer reviews, transcribed from screenshots of the client's Google
// Business profile and Facebook page (supplied August 2026).
//
// Quotes are VERBATIM — reviewers' own spelling, punctuation and emoji are kept
// as written. Do not "fix" them; a tidied-up review reads as a fabricated one.
//
// Google reviews carry a star rating; Facebook entries are recommendations,
// which have no stars — hence the source union rather than a rating field.

export type ReviewSource = "google" | "facebook";

export interface Review {
  name: string;
  quote: string;
  source: ReviewSource;
}

// TODO: Add the client's Google profile URL so the hero rating badge links to
// the live reviews. Left empty on purpose — the badge renders unlinked until
// there is a real URL to point at.
export const googleReviewsUrl = "";

export const reviews: Review[] = [
  {
    name: "Sandra Maria Bergman",
    quote: "Jäkligt bra service, blir alltid nöjd med tvätten😜 och servicen med bilen😜",
    source: "google",
  },
  {
    name: "Åsa Oskarsson",
    quote: "Jättenöjd! Kunnig, trevlig och duktig personal",
    source: "facebook",
  },
  {
    name: "Jon Ahlman",
    quote: "Fantastiskt prisvärt! Snabb service och trevligt bemötande.",
    source: "google",
  },
  {
    name: "Robert Lindgren",
    quote:
      "Trevlig personal som gjorde ett helt suveränt jobb. Bilen såg hemsk ut innan och efteråt var den riktigt ren och fin. Kan starkt rekommendera att lämna in bilen här.",
    source: "facebook",
  },
  {
    name: "Marko Pöllänen",
    quote: "Super trevligt mottagande. Seriöst och kunnigt rekommenderar varmt detta företag.",
    source: "google",
  },
  {
    name: "Anneli Niemi",
    quote: "Så nöjd. Trevlig personal och ren och snygg bil. Tack 💗",
    source: "facebook",
  },
  {
    name: "Alexander Eriksson",
    quote: "Riktigt trevlig kille som verkligen gör ett grymt bra jobb. Supernöjd!",
    source: "google",
  },
  {
    // TODO: The source screenshot cut this review off mid-sentence — paste the
    // full text from Facebook and drop the ellipsis.
    name: "Mirsad Imeri",
    quote:
      "Jag rekommenderar starkt detta företag dom höll va dom lovade resultatet blev enastående jag är super nöjd och rekommenderar flera att rekonda ni kan lämna bilen…",
    source: "facebook",
  },
  {
    name: "Sofia Eklund",
    quote:
      "Alltid snabb service och enkla att ha att göra med. Lämnat in både för basservice, tvätt och andra reperationer. Alltid nöjd efteråt, så rekommenderar varmt! 😊",
    source: "google",
  },
  {
    name: "Samuel",
    quote: "Grym service och bra pris",
    source: "google",
  },
  {
    name: "Vadar Hajr",
    quote: "Prisvärt",
    source: "google",
  },
];
