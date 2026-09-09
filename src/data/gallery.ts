// Real customer cars, shown one at a time by the Spotlight rotator
// (Spotlight.astro).
//
// ONLY genuine photos from the shop belong here. The section copy promises
// "varje bild är en riktig kundbil", and marknadsföringslagen (2008:486) treats
// AI-generated or retouched "results" presented as real ones as misleading
// marketing. The rendered cars under public/generated-cars/ are illustration
// material and must not be listed here.
//
// Every photo below has its registration plate blurred — a readable plate is
// personal data under GDPR, so blur it before adding a new shot.
//
// Sources are 4:3; the window crops with object-fit: cover, and the cars sit
// centred so only floor and ceiling are trimmed.
export interface GalleryShot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryShots: GalleryShot[] = [
  {
    src: "/assets/photos/real-results/gallery-real-bmw-after.webp",
    alt: "Svart BMW 5-serie Touring efter rekond, fotograferad bakifrån i tvätthallen",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/photos/real-results/gallery-real-tesla.webp",
    alt: "Vit Tesla Model Y efter rekond, fotograferad snett framifrån",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/photos/real-results/gallery-real-mercedes.webp",
    alt: "Svart Mercedes S-klass efter rekond, fotograferad snett framifrån",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/photos/real-results/gallery-real-golf.webp",
    alt: "Vit Volkswagen Golf Alltrack efter rekond, fotograferad snett framifrån",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/photos/real-results/gallery-real-volvo.webp",
    alt: "Vit Volvo XC60 efter rekond, fotograferad snett framifrån",
    width: 1200,
    height: 900,
  },
  {
    src: "/assets/photos/real-results/gallery-real-volvo-xc40.webp",
    alt: "Svart Volvo XC40 efter rekond med nytvättade gummimattor på tork i bakgrunden",
    width: 1600,
    height: 900,
  },
];
