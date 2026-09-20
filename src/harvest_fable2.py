#!/usr/bin/env python3
"""Crops for the second round of select-all questions (09/20): each is the
list slide a question is built from, shown after the answer. Merged into
images.json in place.

    python3 harvest_fable2.py
"""
import json, os
import pdfplumber
import harvest

SPEC = [
  # key                       pdf                     slide  mode           for
  ("cyp_characteristics",     "MCMet-9.15.2026.pdf",   10,   "below_title", "sa-cyp-4"),
  ("fa_intrinsic_factors",    "MCMet-9.16.2026.pdf",   33,   "below_title", "sa-fa-1"),
  ("fa_protein_binding",      "MCMet-9.16.2026.pdf",   38,   "below_title", "sa-fa-3"),
  ("el_renal_factors",        "MCMet-9.17.2026.pdf",    9,   "below_title", "sa-el-2"),
  ("el_tubular_transporters", "MCMet-9.17.2026.pdf",   13,   "below_title", "sa-el-3"),
  ("el_urinary_ph",           "MCMet-9.17.2026.pdf",   14,   "below_title", "sa-el-4"),
  ("el_ehr",                  "MCMet-9.17.2026.pdf",   18,   "below_title", "sa-el-5"),
  ("tx_causes",               "MCMet-9.17.2026.pdf",   29,   "below_title", "sa-tox-3"),
  ("tx_risk_factors",         "MCMet-9.17.2026.pdf",   47,   "below_title", "sa-tox-4"),
  ("tx_treatments",           "MCMet-9.17.2026.pdf",   62,   "below_title", "sa-tox-7"),
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
