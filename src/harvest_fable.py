#!/usr/bin/env python3
"""Two crops added at the 09/20 review: the toxicophore list on Lecture 15
slide 30, and the triazolam/rifampin plot on Lecture 10 slide 49, which the
slide itself marks as an exam case. Merged into images.json in place.

    python3 harvest_fable.py
"""
import json, os
import pdfplumber
import harvest

SPEC = [
  # key                     pdf                               slide  mode          for
  ("tx_mech_toxicophores",  "MCMet-9.17.2026.pdf",             30,   "below_title", "sa-tox-1"),
  ("dm_triazolam_rifampin", "yen/MCMet-9_4_26-9_9_26.pdf",     49,   "auto",        "df-11, sa-df-2"),
]
harvest.MAX_W = 980
harvest.QUALITY = 70

def main():
    images = json.load(open("images.json"))
    for key, pdf, n, mode, used in SPEC:
        workdir = "work_" + os.path.basename(pdf).replace(".pdf", "").replace(".", "_")
        pages = harvest.render(pdf, workdir)
        doc = pdfplumber.open(pdf)
        footer_pt = harvest.deck_footer_top(doc)
        crop, note = harvest.detect(doc.pages[n-1], pages[n-1], mode, footer_pt)
        if crop is None:
            raise SystemExit(f"ERROR: {key} (slide {n} of {pdf}) -> {note}")
        crop.save(os.path.join(workdir, f"{key}.png"))
        url, size, nbytes = harvest.encode(crop)
        images[key] = url
        print(f"  {key:24s} slide {n:2d}  {size[0]}x{size[1]}  {nbytes//1024} KB  ({note})  -> {used}")
    json.dump(images, open("images.json", "w"))
    print(f"images.json now holds {len(images)} figures")

if __name__ == "__main__":
    main()
