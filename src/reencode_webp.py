#!/usr/bin/env python3
"""Re-encode every JPEG or PNG crop in images.json as WebP, the way 4a32dad did.

4a32dad (2026-10-30) re-encoded the 189 slide crops from JPEG to WebP at
quality 80 with dimensions unchanged, and switched harvest.py, harvest_mask.py
and mkimg.py to emit the same. It committed the new images.json but no script
for the re-encoding itself; this is that step, written down so it can be rerun:
Pillow's WebP encoder, quality 80, method 6 (the settings 4a32dad's harvest.py
`encode()` uses), no resizing.

Checked on 2026-11-01 (Pillow 12.3.0, libwebp 1.6.0): run on the restore line's
images.json (189 JPEGs, the same bytes as at 67fe35c), it gives byte for byte
the 189 WebP images of `main` at 4a32dad.

The kit core's harvest.py and harvest_mask.py (copied into src/ by the move
onto the core) still emit JPEG. Run this after either of them adds crops, so
the page stays WebP:

    python3 reencode_webp.py            # rewrites images.json in place
    python3 reencode_webp.py --check    # exit 1 if any crop is not WebP
"""
import base64, io, json, os, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
PATH = os.path.join(HERE, 'images.json')
QUALITY = 80   # 4a32dad: harvest.py QUALITY
METHOD = 6     # 4a32dad: crop.save(buf, "WEBP", quality=QUALITY, method=6)


def to_webp(data_url):
    raw = base64.b64decode(data_url.split(',', 1)[1])
    im = Image.open(io.BytesIO(raw))
    im.load()
    buf = io.BytesIO()
    im.save(buf, 'WEBP', quality=QUALITY, method=METHOD)
    return 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode('ascii')


def main():
    images = json.load(open(PATH, encoding='utf-8'))
    todo = [k for k, v in images.items() if not v.startswith('data:image/webp')]
    if '--check' in sys.argv:
        print(f'{len(images)} crops, {len(todo)} not WebP' + (f': {", ".join(todo[:10])}' if todo else ''))
        sys.exit(1 if todo else 0)
    before = sum(len(v) for v in images.values())
    for k in todo:
        images[k] = to_webp(images[k])
    after = sum(len(v) for v in images.values())
    if todo:
        tmp = PATH + '.tmp'
        with open(tmp, 'w', encoding='utf-8') as fh:
            json.dump(images, fh)
        os.replace(tmp, PATH)
    print(f'{len(images)} crops; re-encoded {len(todo)}; base64 {before:,} -> {after:,} characters')


if __name__ == '__main__':
    main()
