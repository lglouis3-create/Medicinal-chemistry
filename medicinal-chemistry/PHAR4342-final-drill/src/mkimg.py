#!/usr/bin/env python3
"""Crop the title off a slide, trim whitespace, downscale, and emit base64 JPEG."""
import base64, io, json, os, sys
from PIL import Image, ImageChops

TITLE_CUT = 196          # px of title band to remove from the top
FOOTER_CUT = 60          # px of footer/copyright band to remove from the bottom
MAX_W = 940              # output width cap
QUALITY = 72


def trim_white(im, tol=246):
    """Crop away near-white margins."""
    g = im.convert("L")
    bg = Image.new("L", g.size, 255)
    diff = ImageChops.difference(g, bg)
    # anything darker than tol counts as content
    mask = diff.point(lambda p: 255 if p > (255 - tol) else 0)
    bbox = mask.getbbox()
    if bbox:
        pad = 12
        l, t, r, b = bbox
        l = max(0, l - pad); t = max(0, t - pad)
        r = min(im.size[0], r + pad); b = min(im.size[1], b + pad)
        return im.crop((l, t, r, b))
    return im


def make(deck, slide, title_cut=TITLE_CUT, footer_cut=FOOTER_CUT, box=None):
    path = f"deck_{deck}/{slide}.jpeg"
    if not os.path.exists(path):
        raise FileNotFoundError(path)
    im = Image.open(path).convert("RGB")
    w, h = im.size
    if box:
        im = im.crop(box)
    else:
        im = im.crop((0, title_cut, w, h - footer_cut))
    im = trim_white(im)
    if im.size[0] > MAX_W:
        r = MAX_W / im.size[0]
        im = im.resize((MAX_W, max(1, int(im.size[1] * r))), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=QUALITY, optimize=True)
    return base64.b64encode(buf.getvalue()).decode("ascii"), im.size, len(buf.getvalue())


if __name__ == "__main__":
    spec = json.load(open(sys.argv[1]))
    out = {}
    total = 0
    for key, v in spec.items():
        b64, size, nbytes = make(v["deck"], v["slide"],
                                 v.get("title_cut", TITLE_CUT),
                                 v.get("footer_cut", FOOTER_CUT),
                                 v.get("box"))
        out[key] = "data:image/jpeg;base64," + b64
        total += nbytes
        print(f"  {key:28s} {v['deck']}/{v['slide']:>3}  {size[0]}x{size[1]}  {nbytes/1024:6.1f} KB")
    json.dump(out, open(sys.argv[2], "w"))
    print(f"\n{len(out)} images, {total/1024/1024:.2f} MB raw JPEG")
