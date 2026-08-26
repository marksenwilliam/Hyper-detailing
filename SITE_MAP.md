# Site Map — Hyper Detailing Umeå

Single-page site (`src/pages/index.astro`), converted from the "Darken" Figma
template (`usBV1zSLtqoxIMKvuXX33f`). For the original template's design specs see
[PROJECT_BRIEF.md](PROJECT_BRIEF.md) (historical reference).

## Page: Home (`/`)

| Section | Component | Anchor | Background | Notes |
|---|---|---|---|---|
| Navbar | `Navbar.astro` | — | translucent | Absolutely positioned over the hero; hamburger ≤991px; "Boka tid" → `#kontakt` |
| Hero | `Hero.astro` | — | `#090401` | Full-viewport (100svh), full-bleed image with overlay: uppercase two-line h1, two outlined pill CTAs, bottom row of 3 service highlights (icon tile + h2 + blurb), dark scrim for legibility. Desktop/tablet: `Car_in_setting_with_logo_202608060903.jpeg` (real photo, 2752×1536); mobile ≤767px: `hero-mobile.webp` (same scene, 9:16 crop, 1200×2150) |
| Showcase | `Showcase.astro` | — | `#090401` | Split card: 16:9 image left (`3D_car_graphic_for_website_202608060743.jpeg`), copy right (h2 "Rekond i toppklass", sub, 2 bullets, orange pill CTA → `#tjanster`), dashed divider between. Stacks to one column ≤991px (divider goes horizontal) |
| Ticker | `Marquee.astro` | `#galleri` | `#090401` | Auto-scrolling filmstrip of the 6 real customer photos (from `src/data/gallery.ts`), 4:3 frames with a 2px seam, edge fades. Drag/swipe to scrub on mouse + touch, press-and-hold pauses, momentum on release. Carries the `#galleri` anchor |
| Services | `Features.astro` | `#tjanster` | `#090401` | Wide card (lackkorrigering & keramiskt lackskydd, checklist + 3D visual) + two half cards (utvändig/invändig rekond) |
| FAQ | `Faq.astro` | `#faq` | `#0a0502` | Accordion, item 2 open by default |
| CTA | `Cta.astro` | — | `#0a0502` | 1128×432 card with light rays + arc glow; "Boka tid" → `#kontakt`, phone link |
| Footer / contact | `Footer.astro` | `#kontakt` | `#0a0502` | Contact + opening hours (from `src/data/site.ts`), service/quick links, socials |

Not currently rendered (kept in `src/components/`): `SocialProof.astro` (stats
strip), `Testimonials.astro` (reviews), `Gallery.astro` (the 3-col results grid —
its photos now live in the ticker, and it still reads the same
`src/data/gallery.ts`, so it can be dropped back into `index.astro` any time).

## Shared pieces

| Piece | Where | Description |
|---|---|---|
| `ImagePlaceholder.astro` | Hero, Showcase, Marquee, Features | Renders a dashed placeholder box until the file exists under `public/`; supports `mobileSrc`, `loading` and `fetchpriority` |
| `src/data/site.ts` | Navbar, Footer, Cta, BaseLayout | Central client config: name, contact, hours, socials (placeholders until launch) |
| `src/data/gallery.ts` | Marquee, Gallery | The 6 real customer photos, shared so the ticker and the grid never drift apart |
| `.section-label` / `.section-heading` / `.btn` | global.css | Eyebrow pill, heading with orange accent span, primary/ghost buttons |
| Scroll animations | BaseLayout | GSAP + ScrollTrigger via `data-animate="fade-up|stagger"`, respects `prefers-reduced-motion` |

## Layout system

- **Page width cap**: `BaseLayout` wraps the navbar, `<main>` and the footer in a
  single `.page-shell` capped at `--size-page-max` (**1280px**) and centred, so
  every section — hero and footer included — is exactly the same width and their
  backgrounds line up instead of bleeding to the viewport edge. Above 1280px the
  body shows a deeper `#040200` gutter and the shell picks up hairline rails.
  (Modelled on the marksenmedia.se layout.)
- `--size-container-max` is kept equal to `--size-page-max`, so the 1440px design
  scales down proportionally into the cap (root font 14.22px, content column
  1002.7px = 1128 × 1280/1440) instead of just losing horizontal room.

- Fluid em scaling: root font-size follows the viewport (`--size-font`), design
  width 1440px, breakpoints at 991 / 767 / 479px (see `global.css`).
- Backgrounds span the full viewport; content is capped at `--size-container`
  with `--container-padding` inset.
- Decorative arcs/rays/dot fields live in `z-index: -1` layers clipped by
  `overflow: hidden` on their section.
