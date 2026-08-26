# Hyper Detailing Umeå — Landing Page

Single-page marketing site for Hyper Detailing, a car detailing company in Umeå.
Built with Astro (static output), converted from the "Darken" Figma template and
fully customized for the client. All copy is in Swedish.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start local dev server at `localhost:4321`  |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Before launch — replace placeholders

1. **Images** — every photo slot renders a dashed placeholder box until the real
   file exists. Drop the finished images into `public/assets/photos/` using the
   exact filenames and sizes listed in [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md)
   (which also contains ready-to-use AI image generation prompts). The site
   switches to the real images automatically.
2. **Client details** — phone, email, address, opening hours and social links
   are placeholders, centralized in [`src/data/site.ts`](src/data/site.ts).
3. **Off-page content** — `SocialProof.astro` (stats strip) and
   `Testimonials.astro` (reviews) are currently not rendered on the page but
   remain in `src/components/` with invented placeholder content; verify with
   the client before re-adding them.

## Page structure

| Section | Component | Anchor |
|---|---|---|
| Navbar | `Navbar.astro` | — |
| Hero (full-viewport image) | `Hero.astro` | — |
| Showcase (split image/copy card) | `Showcase.astro` | — |
| Ticker (draggable photo marquee) | `Marquee.astro` | `#galleri` |
| Services | `Features.astro` | `#tjanster` |
| FAQ | `Faq.astro` | `#faq` |
| CTA | `Cta.astro` | — |
| Footer / contact | `Footer.astro` | `#kontakt` |

Built but not currently rendered: `Gallery.astro`, `Testimonials.astro`,
`SocialProof.astro` — drop them back into `src/pages/index.astro` to re-enable.

Design tokens (colors, type scale, fluid scaling) live in
`src/styles/global.css`. The brand look is a dark theme with an orange accent
(`#fe4a00`), matching the original template palette.
