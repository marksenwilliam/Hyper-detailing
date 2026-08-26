# Generates the Hyper Detailing brand asset set.
# The "H" mark is traced from the client's logotype (measured off the source
# JPEG); the wordmark is converted to real outlines from Plus Jakarta Sans
# SemiBold — the site's own typeface — so the SVGs are self-contained and need
# no font at render time.
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform

SCRATCH = os.path.dirname(os.path.abspath(__file__))
FONT = os.path.join(SCRATCH, "fonts", "PJS-600.ttf")
OUT = r"c:/Users/marks/Desktop/Vibe Websites/CLIENT WEBSITES/Hyper Detailing Umeå/public/assets/brand"
os.makedirs(OUT, exist_ok=True)

# ---------------------------------------------------------------- the H mark
# Traced from the client's logotype. Geometry solved by fitting a parametric
# oblique-H against the source bitmap (coordinate descent, 99.3% IoU):
# 40.69-unit stems, 0.268 shear (~15deg), stem gap 162.5, crossbar y 55..96,
# over a 150-unit cap height.
MARK_W, MARK_H = 243.39, 150.0
MARK_PATH = (
    "M40.2 0L80.89 0L66.15 55L187.96 55L202.7 0L243.39 0"
    "L203.19 150L162.5 150L176.97 96L55.16 96L40.69 150L0 150Z"
)

# ------------------------------------------------------------- the wordmark
TEXT = "HYPER DETAILING CO"
font = TTFont(FONT)
upm = font["head"].unitsPerEm
glyphset = font.getGlyphSet()
cmap = font.getBestCmap()
hmtx = font["hmtx"]

# Cap height from the H glyph's own bounding box
glyf = font["glyf"]
cap_height = glyf["H"].yMax


def wordmark_path(tracking_em: float):
    """Lay the text out at 1000upm, return (path_d, advance_width)."""
    parts = []
    x = 0.0
    tracking = tracking_em * upm
    for i, ch in enumerate(TEXT):
        name = cmap.get(ord(ch))
        if name is None:
            continue
        if ch != " ":
            pen = SVGPathPen(glyphset, ntos=lambda v: f"{v:.1f}")
            # flip Y (font space is y-up, SVG is y-down) and shift into place
            tpen = TransformPen(pen, Transform(1, 0, 0, -1, x, cap_height))
            glyphset[name].draw(tpen)
            d = pen.getCommands()
            if d:
                parts.append(d)
        x += hmtx[name][0]
        if i < len(TEXT) - 1:
            x += tracking
    return "".join(parts), x


# Track the wordmark out to the source logotype's proportions: measured off the
# original, the wordmark is 247px wide at a 15px cap height.
TARGET_RATIO = 247.0 / 15.0  # width expressed in cap heights
lo, hi = 0.0, 1.0
for _ in range(60):
    mid = (lo + hi) / 2
    _, w = wordmark_path(mid)
    if (w / cap_height) < TARGET_RATIO:
        lo = mid
    else:
        hi = mid
TRACKING = (lo + hi) / 2
WORD_D, WORD_ADV = wordmark_path(TRACKING)
print(f"tracking: {TRACKING:.4f}em   advance: {WORD_ADV:.0f}   cap: {cap_height}")


def svg(w, h, body, extra=""):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{w:.0f}" height="{h:.0f}" '
        f'viewBox="0 0 {w:.2f} {h:.2f}" fill="none" role="img"{extra}>\n{body}</svg>\n'
    )


def write(name, content):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as fh:
        fh.write(content)
    print("  wrote", name)


# Scale factors: render the wordmark so its cap height is CAP px
def word_group(cap_px, color, tx=0.0, ty=0.0):
    s = cap_px / cap_height
    return (
        f'  <g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})" fill="{color}">\n'
        f'    <path d="{WORD_D}"/>\n  </g>\n'
    )


def mark_group(h_px, color, tx=0.0, ty=0.0):
    s = h_px / MARK_H
    return (
        f'  <g transform="translate({tx:.2f} {ty:.2f}) scale({s:.5f})" fill="{color}">\n'
        f'    <path d="{MARK_PATH}"/>\n  </g>\n'
    )


WORD_W_AT_CAP = WORD_ADV / cap_height  # width per 1px of cap height
MARK_W_AT_H = MARK_W / MARK_H  # width per 1px of mark height

VARIANTS = [("", "#ffffff"), ("-dark", "#0a0502"), ("-accent", "#fe4a00")]

for suffix, color in VARIANTS:
    # ---- 1. mark only -------------------------------------------------
    h = 149.0
    write(
        f"logo-mark{suffix}.svg",
        svg(MARK_W_AT_H * h, h, mark_group(h, color), ' aria-label="Hyper Detailing"'),
    )

    # ---- 2. wordmark only ---------------------------------------------
    cap = 60.0
    write(
        f"logo-wordmark{suffix}.svg",
        svg(WORD_W_AT_CAP * cap, cap, word_group(cap, color),
            ' aria-label="Hyper Detailing Co"'),
    )

    # ---- 3. horizontal lockup: H left, text right ----------------------
    mh = 96.0  # mark height
    mw = MARK_W_AT_H * mh
    cap_h = mh * 0.30  # wordmark cap height relative to the mark
    gap = mh * 0.30
    ww = WORD_W_AT_CAP * cap_h
    total_w = mw + gap + ww
    body = mark_group(mh, color)
    body += word_group(cap_h, color, tx=mw + gap, ty=(mh - cap_h) / 2)
    write(
        f"logo-horizontal{suffix}.svg",
        svg(total_w, mh, body, ' aria-label="Hyper Detailing Co"'),
    )

    # ---- 4. stacked lockup: H over text over rule ----------------------
    # Proportions measured from the source: gaps of 22 and 13 against a
    # 150-tall mark, wordmark cap 15, rule 3 thick.
    mh = 150.0
    mw = MARK_W_AT_H * mh
    cap_s = 15.0
    gap1, gap2 = 22.0, 13.0
    rule_h = 3.0
    ws = WORD_W_AT_CAP * cap_s
    total_w = max(mw, ws)
    total_h = mh + gap1 + cap_s + gap2 + rule_h
    body = mark_group(mh, color, tx=(total_w - mw) / 2)
    body += word_group(cap_s, color, tx=(total_w - ws) / 2, ty=mh + gap1)
    # Gradient rule, echoing the original lockup
    body += (
        f'  <defs><linearGradient id="hd-rule{suffix}" x1="0" y1="0" x2="1" y2="0">\n'
        f'    <stop offset="0" stop-color="{color}" stop-opacity="0.15"/>\n'
        f'    <stop offset="0.5" stop-color="{color}" stop-opacity="0.9"/>\n'
        f'    <stop offset="1" stop-color="{color}" stop-opacity="0.15"/>\n'
        f'  </linearGradient></defs>\n'
        f'  <rect x="0" y="{mh + gap1 + cap_s + gap2:.2f}" width="{total_w:.2f}" '
        f'height="{rule_h}" fill="url(#hd-rule{suffix})"/>\n'
    )
    write(
        f"logo-stacked{suffix}.svg",
        svg(total_w, total_h, body, ' aria-label="Hyper Detailing Co"'),
    )

# ---- 5. app / favicon tile: mark centred on the dark brand square --------
TILE = 256.0
mh = 132.0
mw = MARK_W_AT_H * mh
tile_body = (
    f'  <rect width="{TILE:.0f}" height="{TILE:.0f}" rx="56" fill="#090401"/>\n'
    + mark_group(mh, "#ffffff", tx=(TILE - mw) / 2, ty=(TILE - mh) / 2)
)
write("logo-tile.svg", svg(TILE, TILE, tile_body, ' aria-label="Hyper Detailing"'))

print("\ntracking(em):", round(TRACKING, 4))
