// The client's price list, as given over SMS (augusti 2026).
//
// Feeds the pricing section (#priser) only. The three cards under "Våra
// tjänster" describe the service *categories* and live in ./services — this
// file describes what the customer actually buys, and what it costs.
//
// TODO: The bullet points below are written from the package names alone.
// Have the client confirm exactly what each package includes before launch.

export interface Package {
  /** Anchor-safe key, also used for the list key */
  id: string;
  name: string;
  /** Price as displayed — kept as a string so the thousands space stays exact */
  price: string;
  /** Prefix with "från" when the final sum depends on bilens storlek och skick */
  from?: boolean;
  /** Suffix after the price, e.g. "per detalj" */
  unit?: string;
  /** One-liner under the price */
  desc: string;
  points: string[];
}

export const packages: Package[] = [
  {
    id: "in-och-utvandig",
    name: "In & utvändig rekond",
    price: "699 kr",
    desc: "Grundpaketet – bilen ren både utvändigt och invändigt.",
    points: [
      "Handtvätt av lack, fälgar och rutor",
      "Dammsugning av mattor och golv",
      "Avtorkning av paneler, lister och glas",
    ],
  },
  {
    id: "ultra-rekond",
    name: "Ultra rekond",
    price: "1 495 kr",
    desc: "Utvändig rekond med keramiskt spraylackskydd – och invändig rekond på köpet.",
    points: [
      "Utvändig rekond med dekontaminering av lacken",
      "Keramiskt spraylackskydd som avslutning",
      "Invändig rekond av kupén",
    ],
  },
  {
    id: "storsta-rekond",
    name: "Största rekond",
    price: "2 995 kr",
    from: true,
    desc: "Vårt mest omfattande paket – bilen tas om hand från grunden.",
    points: [
      "Fullständig dekontaminering av lack, glas och fälgar",
      "Djuprengöring av paneler, mattor och golv",
      "Exakt pris sätts efter bilens storlek och skick",
    ],
  },
  {
    id: "keramiskt-lackskydd",
    name: "Keramiskt lackskydd",
    price: "4 995 kr",
    desc: "Keramiskt lackskydd med 8 års hållbarhet.",
    points: [
      "8 års hållbarhet",
      "Vattenavvisande yta som håller bilen ren längre",
      "Skydd mot vägsalt, UV-ljus och fågelspillning",
    ],
  },
  {
    id: "lackering",
    name: "Lackering",
    price: "3 000 kr",
    unit: "per detalj",
    desc: "Lackering av enskild detalj eller yta – priset gäller per detalj.",
    points: [
      "Pris per detalj eller yta",
      "Offert efter genomgång av skadan",
    ],
  },
];
