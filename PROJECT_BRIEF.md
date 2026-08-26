# Project Brief — Darken (source template, historical reference)

> **Note:** This file documents the **original "Darken" Figma template** that the
> site was converted from — NOT the current project. The site has since been
> customized into a Swedish landing page for **Hyper Detailing Umeå** (car
> detailing): the hero dashboard, partner grids, credit-card mockups and
> testimonial carousel controls described below no longer exist. For the current
> site, see [README.md](README.md) and [SITE_MAP.md](SITE_MAP.md). The design
> tokens (colors, type scale, radii, breakpoints) below still apply.

Auto-generated from the Figma design during the Figma → Astro conversion.

**Source**: https://www.figma.com/design/usBV1zSLtqoxIMKvuXX33f/darken?node-id=2001-3127
**Figma file key**: `usBV1zSLtqoxIMKvuXX33f`
**Page node**: `2001:3127` ("Home")
**Framework**: Astro 7 (static), TypeScript strict, scoped component styles + CSS custom properties

## Product

Darken is a finance/analytics SaaS marketing site. Single long-form landing page:
hero with product dashboard, social proof, feature showcase, partner grid, FAQ,
testimonials, closing CTA, and a fat footer.

## Design frame

- **Frame width**: 1440px → `--size-container-ideal: 1440`
- **Container max**: 1440px, content column 1128px
- **Container padding**: 156px → `--container-padding: 9.75em`

## Brand colors

| Token | Value | Use |
|---|---|---|
| `--color-bg-dark` | `#090401` | Page background (hero, social proof) |
| — | `#0a0502` | Section background (features onward) |
| — | `#16120f` | Inner mock panels |
| `--color-accent` | `#fe4a00` | Primary orange — CTAs, accent words, chart highlight |
| `--color-text-white` | `#ffffff` | Headings, primary text |
| `--color-text-body` | `#787878` | Body copy |
| `--color-text-muted` | `#8c8c9a` | Nav links, table headers |
| `--color-surface` | `rgba(255,255,255,0.05)` | Navbar, credit card |
| `--color-surface-raised` | `rgba(255,255,255,0.03)` | Dashboard panels |
| `--color-border` | `rgba(255,255,255,0.1)` | Standard hairline |
| `--color-border-strong` | `rgba(255,255,255,0.2)` | Pills, ghost buttons |

Semantic deltas: green `#2dd683`, red `#e74a51`.

## Typography

**Plus Jakarta Sans** (400/500/600/700) for everything except the "Darken" wordmark,
which is **Roboto Medium**. Both loaded from Google Fonts.

| Token | Figma | em |
|---|---|---|
| `--text-6xl` | 60px / 72px, SemiBold | `3.75em`, lh `1.2` |
| `--text-4xl` | 48px / 56px, SemiBold | `3em`, lh `1.1667` |
| `--text-2xl` | 24px / 32px, SemiBold, ls -0.72px | `1.5em`, lh `1.333` |
| `--text-lg` | 20px / 28px, Medium | `1.25em`, lh `1.4` |
| `--text-base` | 16px / 24px, Regular | `1em`, lh `1.5` |
| `--text-sm` | 14px / 20px, Regular–Medium | `0.875em`, lh `1.4286` |

Letter-spacing is kept in **px** (per the scaling rules) — never converted to em.

## Radii

4px, 5px, 6px, 8px (`--radius-md`), 10px (`--radius-lg`), 12px (`--radius-xl`),
16px (`--radius-2xl`), and full pills.

## Reusable patterns

- **Eyebrow pill** (`.section-label`) — bordered chip with the ghost gradient
- **Buttons** — `.btn-primary` (solid orange) and `.btn-ghost` (translucent gradient + border)
- **Section heading** (`.section-heading`) — 48px with one clause in `.accent` orange
- **Ghost gradient** — `linear-gradient(180deg, rgba(234,234,251,0) → rgba(234,234,251,0.1))`
- **Mock panels** — dark card, hairline border, small radius; used by every product mockup

## Interactions implied by the design

- Navbar collapses to a hamburger at tablet
- FAQ is an accordion (item 2 ships open, matching the design)
- Testimonials carry prev/next controls and pagination dots
- Scroll-reveal animations (GSAP + ScrollTrigger, `prefers-reduced-motion` respected)

## Decorative elements

Recreated in CSS rather than exported as bitmaps: the hero and CTA arc glows
(concentric ellipse outlines + radial orange bloom), angled light rays, and the
dot-grid fields. All are constrained inside their section and masked with radial
gradients so they fade rather than hard-clip.

## Breakpoints

Desktop 992px+ (ideal 1440) · Tablet ≤991px (ideal 834) · Mobile landscape ≤767px
(ideal 550) · Mobile portrait ≤479px (ideal 390).
