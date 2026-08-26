// The three services, in the order they are presented everywhere on the page.
//
// Shared by the hero strip (Hero.astro) and the cards in #tjanster
// (Features.astro): the hero's mobile dropdowns show the SAME description and
// bullet points as the cards further down, so the two cannot drift apart.
//
// TODO: Have the client confirm the exact steps included in each package, and
// add hållbarhet/duration claims only once they can stand behind them.

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface Service {
  /** Used to build the hero dropdown's id/aria wiring */
  id: string;
  title: string;
  /** One-liner under the title in the hero strip on desktop */
  tagline: string;
  /** Full description — service card body and hero dropdown alike */
  desc: string;
  points: string[];
  /** Bare icon, hero strip only */
  icon: string;
  /** Placeholder caption while an image file is missing */
  label: string;
  /** First entry is the primary shot; extra entries drive the card's cross-fade */
  images: ServiceImage[];
}

export const services: Service[] = [
  {
    id: "utvandig",
    title: "Utvändig rekond",
    tagline: "Skonsam handtvätt och full dekontaminering av lack, glas och fälgar.",
    desc: "Skonsam handtvätt och fullständig dekontaminering av lack, glas och fälgar. Vi får bort det en vanlig tvätt lämnar kvar – flygrost, asfalt och inbränd smuts – utan att lacken tar skada på vägen.",
    points: [
      "Förtvätt, skumtvätt och skonsam handtvätt",
      "Borttagning av flygrost, asfalt och insektsrester",
      "Rengöring av fälgar, hjulhus, lister och rutor",
    ],
    icon: "/assets/icons/icon-polisher.svg",
    label: "Tjänst — 3D-visualisering av utvändig rekond",
    images: [
      {
        src: "/assets/photos/3D_car_graphic_for_website_202608060757.jpeg",
        alt: "3D-visualisering av utvändig rekond – vit bil skumtvättas och poleras av robotarmar i studio med orange neonljus",
      },
      {
        src: "/assets/photos/3D_car_graphic_for_website_202608060743.jpeg",
        alt: "3D-visualisering av utvändig rekond – svart sportbil som skumtvättas och poleras av robotarmar i studio med orange neonljus",
      },
    ],
  },
  {
    id: "vaxskydd",
    title: "Keramiskt vaxskydd",
    tagline: "Vattenavvisande skydd som ger djupare glans och enklare tvätt.",
    desc: "Ett keramiskt vaxskydd som lägger sig som ett skal över lacken. Bilen får djupare glans, smutsen får sämre fäste och varje tvätt går snabbare än den förra.",
    points: [
      "Vattenavvisande yta som håller bilen ren längre",
      "Skydd mot vägsalt, UV-ljus och fågelspillning",
      "Djup lyster som lyfter fram lackens färg",
    ],
    icon: "/assets/icons/icon-shield.svg",
    label: "Tjänst — 3D-visualisering av vaxskydd",
    images: [
      {
        src: "/assets/photos/Orange_themed_instead_of_blue_202608060819.jpeg",
        alt: "3D-visualisering av keramiskt vaxskydd – skyddande membran med sköldemblem och vattenpärlor svävar över en billack",
      },
    ],
  },
  {
    id: "invandig",
    title: "Invändig rekond",
    tagline: "Djuprengöring av paneler, mattor och golv – och lukten med.",
    desc: "Djuprengöring av kupén – paneler, mattor, golv och varje yta du tar i. Lukt tar vi bort vid källan istället för att parfymera över den.",
    points: [
      "Rengöring av mattor, golv och lister",
      "Rengöring av paneler, display och ventilation",
      "Ozonbehandling som tar bort lukt vid källan",
    ],
    icon: "/assets/icons/icon-seat.svg",
    label: "Tjänst — 3D-visualisering av invändig rekond",
    images: [
      {
        src: "/assets/photos/service-invandig-rekond.webp",
        alt: "3D-visualisering av invändig rekond – bilkupé där ena halvan är dammig och matt och den andra nyrengjord och blank, delade av en orange ljuslinje",
      },
    ],
  },
];
