#!/usr/bin/env python3
"""Encode the Yendapally-deck figures named in yen_images_spec.json.

harvest.py takes one deck at a time; the Yendapally figures come from five
decks, so this walks the spec deck by deck and writes a single merged JSON.

These decks are annotated exports: they carry handwriting, highlighting and
margin notes on top of the printed slide. The ink covers most of the slide, so
the auto detector returns close to the full content area rather than a tight
figure box. That is the correct result here, because the annotation is part of
what the crop is meant to show.

    python3 harvest_yen.py            # encode every key to yen_images.json
    python3 harvest_yen.py --preview  # also write full-size PNGs to work_yen/
"""
import json, os, sys

import pdfplumber

import harvest

DECK_DIR = "yen"
SPEC = "yen_images_spec.json"
OUT = "yen_images.json"
PREVIEW_DIR = "work_yen"

# Structures and tables have to stay readable once the crop is scaled down, and
# a whole annotated slide carries more detail than the tight figure crops the
# lecture-13 harvest produced. These two keep that legible without changing the
# defaults the earlier harvest was run at.
MAX_W = 980
QUALITY = 70


def main():
    preview = "--preview" in sys.argv
    spec = json.load(open(SPEC))
    out, total, rows = {}, 0, []

    harvest.MAX_W = MAX_W
    harvest.QUALITY = QUALITY
    if preview:
        os.makedirs(PREVIEW_DIR, exist_ok=True)

    for deck, keys in spec.items():
        pdf = os.path.join(DECK_DIR, deck + ".pdf")
        workdir = "work_" + deck
        pages = harvest.render(pdf, workdir)
        doc = pdfplumber.open(pdf)
        footer_pt = harvest.deck_footer_top(doc)
        for key, v in keys.items():
            n = v["slide"]
            crop, note = harvest.detect(doc.pages[n - 1], pages[n - 1],
                                        v.get("mode", "auto"), footer_pt)
            if crop is None:
                raise SystemExit(f"ERROR: {key} (slide {n} of {deck}) -> {note}")
            if preview:
                crop.save(os.path.join(PREVIEW_DIR, f"{key}.png"))
            url, size, nbytes = harvest.encode(crop)
            out[key] = url
            total += nbytes
            rows.append((key, deck, n, size, nbytes, v.get("for", "")))
        doc.close()

    json.dump(out, open(OUT, "w"))
    print(f"{'key':24s} {'slide':>5}  {'size':>11}  {'KB':>7}  question")
    for key, deck, n, size, nbytes, who in rows:
        print(f"{key:24s} {n:>5}  {size[0]:>5}x{size[1]:<5}  {nbytes/1024:6.1f}  {who}")
    print(f"\n{len(out)} figures, {total/1024/1024:.2f} MB raw JPEG -> {OUT}")


if __name__ == "__main__":
    main()
