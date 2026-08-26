# Visual assets — Hyper Detailing Umeå

The live page uses a trust-first visual split:

- About 65–67% of rendered image area is intentional 3D brand/service art.
- About 33–35% is genuine customer photography used only as proof of results.
- Generated photorealistic cars are not used in the live gallery.

## 3D visual system

All live 3D assets are stored in `public/generated-graphics/hyper-3d/`.

Shared direction:

> Premium, unmistakably intentional automotive 3D CGI. Deep graphite studio,
> low beveled display plinth, matte graphite and satin-black objects, brushed
> aluminum, cool white materials and restrained warm orange accents (#fe4a00).
> Crisp product-render lighting and simplified art-directed geometry. No real
> garage, people, text, logos, plates, purple/pink neon, browser UI, watermarks
> or faux documentary photography.

All live image slots and the file each one currently renders. Paths are relative
to `public/`; everything below is already in place.

| File | Size | Use |
|---|---:|---|
| `assets/photos/Car_in_setting_with_logo_202608060903.jpeg` | 2752×1536 | **Hero**, desktop/tablet — real photo (Audi RS7, branded plate, shop exterior in snow). Also the og:image |
| `assets/photos/hero-mobile.webp` | 1200×2150 | **Hero**, mobile ≤767px — 9:16 crop of the same photo |
| `assets/photos/3D_car_graphic_for_website_202608060743.jpeg` | 2752×1536 | **Showcase** split card, 16:9 frame |
| `assets/photos/Orange_themed_instead_of_blue_202608060819.jpeg` | 2752×1536 | **Services** — ceramic-coating wide card |
| `assets/photos/3D_car_graphic_for_website_202608060757.jpeg` | 2752×1536 | **Services** — exterior-detailing card |
| `assets/photos/service-invandig-rekond.webp` | 2752×1536 | **Services** — interior-detailing card |
| 6 files under `generated-cars/` | mixed | **Ticker** (`src/data/gallery.ts`) — real customer cars |

The Showcase render establishes the 3D style anchor: a black sports car being
foam-washed and polished by robotic arms under warm orange neon. The hero itself
is real photography, so the "no real garage / plates" exclusions below apply to
the 3D artwork only. Service graphics should reuse the Showcase render's
materials, lighting and orange accent language while changing only the service
metaphor:

- Ceramic coating: sculptural hood/fender, applicator, lifted translucent
  protective membrane and hydrophobic water beads.
- Exterior detailing: foam, pressure lance, wheel brush and controlled water
  arcs moving from dirty/foamed to clean/glossy.
- Interior detailing: cabin cutaway, dashboard/vent detailing brush, crevice
  nozzle over the footwell carpet, dry particle removal and folded microfiber.
  NO upholstery extractor, spray or wet seats — the client does not offer
  seat washing, so the artwork must not imply it.

Exports are WebP quality 92 with embedded sRGB ICC profiles, except the JPEG OG
image. Desktop and mobile compositions are authored separately rather than
force-cropped from one source.

## Genuine results gallery

The gallery uses only customer originals. These files are stored in
`public/assets/photos/real-results/` and are 1200×900 WebP (4:3), quality 88,
with embedded sRGB ICC profiles.

| Output | Source |
|---|---|
| `gallery-real-bmw-before.webp` | `public/3/SnapInsta.to_651683890_17959059042063206_2265143372558444267_n.jpg` |
| `gallery-real-bmw-after.webp` | `public/3/SnapInsta.to_652668183_17959059060063206_6692365318440100647_n.jpg` |
| `gallery-real-mercedes.webp` | `public/7/651169609_122105635677264467_494095690252545750_n.jpg` |
| `gallery-real-tesla.webp` | `public/1/SnapInsta.to_639910855_17956317651063206_1305402950213514510_n.jpg` |
| `gallery-real-golf.webp` | `public/2/SnapInsta.to_638311377_17956100787063206_5849243968104863974_n.jpg` |
| `gallery-real-volvo.webp` | `public/4/SnapInsta.to_651836957_17959058982063206_7464773623141775265_n.jpg` |

Allowed processing for proof photos:

- crop and resize;
- color-profile normalization;
- WebP encoding;
- full registration-plate blur where a plate is readable.

Do not use generative fill, background replacement, cloning, relighting or
beautification on proof photos. Originals must remain untouched.

## Trust rule

3D explains the service and builds the visual brand. Genuine customer photos
substantiate claims and results. Never present generated imagery as documentary
evidence.
