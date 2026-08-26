# Brand assets — Hyper Detailing Co

Vectorised from the client's logotype
(`public/7/631964628_122097254775264467_4919122088138284098_n.jpg`).

- The **H mark** is a true vector trace: its geometry (40.7-unit stems, 0.268
  shear ≈ 15°, 162.5 stem gap, crossbar at y 55–96 over a 150 cap height) was
  solved by fitting a parametric oblique-H against the source bitmap —
  **97.8% pixel overlap** with the original.
- The **wordmark** is set in **Plus Jakarta Sans SemiBold** (the site's own
  typeface) at **0.105em tracking**, which reproduces the source lockup's
  proportions (wordmark exactly as wide as the mark). Letters are converted to
  outlines, so every SVG is self-contained and needs no font at render time.

## Files

| File | Use |
|---|---|
| `logo-mark.svg` | The tilted H alone — favicons, avatars, tight spaces |
| `logo-horizontal.svg` | H left, wordmark right — **site header**, email signatures, letterheads |
| `logo-stacked.svg` | H over wordmark over gradient rule — **site footer**, closest to the original logotype |
| `logo-wordmark.svg` | Wordmark only — where the mark already appears nearby |
| `logo-tile.svg` | Mark centred on the dark rounded square — app icon / favicon source |

Each of the four lockups ships in three colourways:

| Suffix | Colour | Use on |
|---|---|---|
| *(none)* | `#ffffff` white | dark backgrounds (the site's default) |
| `-dark` | `#0a0502` near-black | light backgrounds, print, invoices |
| `-accent` | `#fe4a00` brand orange | accents, merch, single-colour applications |

## Raster exports

`logo-mark-512.png`, `logo-horizontal-1024.png`, `logo-stacked-1024.png` (plus
`-dark` variants) and `app-icon-512.png` — for places that can't take SVG
(social profiles, Google Business, print suppliers). All have transparent
backgrounds except `app-icon-512.png`.

Site icons live at the project root: `public/favicon.svg`, `public/favicon.ico`
(32px), `public/apple-touch-icon.png` (180px).

## Usage notes

- Keep clear space around the logo of at least the H's stem width.
- Don't recolour outside the three colourways, stretch, or un-slant the mark.
- On backgrounds busier than a flat colour, use the white version over a scrim.

## Regenerating

`build-logos.py` (kept with the session scratchpad) rebuilds the whole set from
the traced path + font outlines. It needs `fonttools` and the Plus Jakarta Sans
SemiBold TTF.
