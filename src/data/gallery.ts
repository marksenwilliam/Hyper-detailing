// Real customer cars, shown one at a time by the Spotlight rotator
// (Spotlight.astro). Sources should be wide (≈16:9) — the window crops with
// object-fit: cover on a wide frame at every breakpoint.
export interface GalleryShot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryShots: GalleryShot[] = [
  {
    // Square source in a wide window: the car sits centred with headroom top
    // and bottom, so object-fit: cover trims only ceiling and floor.
    src: "/generated-cars/bil-a-kia-ceed-sw/site/gallery-rear-square.webp",
    alt: "Kia Ceed SW efter rekond, fotograferad bakifrån",
    width: 800,
    height: 800,
  },
  {
    src: "/generated-cars/golf-alltrack/4k/high-overhead-three-quarter.jpg",
    alt: "Volkswagen Golf Alltrack efter rekond, fotograferad snett ovanifrån",
    width: 3840,
    height: 2160,
  },
  {
    src: "/generated-cars/bil-c-volvo-xc60/2k/low-rear-three-quarter.webp",
    alt: "Volvo XC60 efter rekond, fotograferad bakifrån i låg vinkel",
    width: 2048,
    height: 1152,
  },
  {
    src: "/generated-cars/bil-d-mercedes-s-class/high-quality/front-three-quarter.webp",
    alt: "Mercedes S-klass efter rekond, fotograferad snett framifrån",
    width: 2560,
    height: 1920,
  },
  {
    src: "/generated-cars/bil-b-bmw-5-series/high-quality/front-three-quarter.webp",
    alt: "BMW 5-serie efter rekond, fotograferad snett framifrån",
    width: 2560,
    height: 1920,
  },
  {
    src: "/7/641426997_122103204957264467_7687419129836615744_n-16x9-polished.jpg",
    alt: "Svart Volvo efter rekond i tvätthallen",
    width: 2048,
    height: 1152,
  },
];
