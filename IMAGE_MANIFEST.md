# Image Manifest

Current asset inventory after the conversion from the "Darken" finance template
to the Hyper Detailing Umeå site. All finance-specific artwork (dashboard icons,
partner logos, credit-card art, store badges) has been deleted.

## Brand — `public/assets/brand/`

The real logotype, vectorised from the client's logo JPEG: an H mark traced to
97.8% pixel accuracy plus a wordmark outlined from Plus Jakarta Sans SemiBold at
0.105em tracking. Four lockups (`logo-mark`, `logo-horizontal`, `logo-stacked`,
`logo-wordmark`) × three colourways (white / `-dark` / `-accent`), plus
`logo-tile.svg` and PNG exports. Full details in
[`public/assets/brand/README.md`](public/assets/brand/README.md).

Live usage: header → `logo-horizontal.svg` (swaps to `logo-mark.svg` ≤479px);
footer → `logo-stacked.svg`; `favicon.svg` / `favicon.ico` / `apple-touch-icon.png`
at the project root, all generated from `logo-tile.svg`.

## Icons — `public/assets/icons/`

| File | Description | Origin |
|---|---|---|
| `icon-shine.svg` | White sparkle for the service card icon tile | New |
| `icon-check.svg` | Orange checkmark for service bullet lists | New |
| `icon-phone.svg` | Orange phone — footer contact | New |
| `icon-mail.svg` | Orange envelope — footer contact | New |
| `icon-pin.svg` | Orange map pin — footer contact | New |
| `icon-clock.svg` | Orange clock — footer opening hours | New |
| `icon-thunder.svg` | Orange bolt — hero eyebrow pill | Template |
| `icon-plus.svg` / `icon-minus.svg` | FAQ accordion toggle | Template |
| `icon-social-1..4.svg` | Footer social links (Facebook, Instagram, LinkedIn, YouTube) | Template |

## Images — `public/assets/images/`

| File | Description | Origin |
|---|---|---|
| `rating-stars.svg` | 5-star rating row (136×24) — testimonial cards | Template |

## Photos — `public/assets/photos/`

Empty until the client photos / AI-generated images are added. Expected files,
exact dimensions and generation prompts: see [`IMAGE-PROMPTS.md`](IMAGE-PROMPTS.md).
The `ImagePlaceholder.astro` component renders a dashed placeholder box for any
file that does not exist yet and switches to the real image automatically once
the file is dropped in.

## Favicon

`public/favicon.svg` — sparkle mark on a dark rounded square (referenced from
`BaseLayout.astro`). `public/favicon.ico` — proper 32px ICO of the same mark,
generated from the SVG for browsers/crawlers that auto-request `/favicon.ico`.
