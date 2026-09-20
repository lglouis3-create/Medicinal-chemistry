#!/usr/bin/env python3
"""Crops for the questions written from Louis's Quizlet sets (09/20): the
slides those cards were made from, shown after the answer. Lecture 14 crops
come from the re-uploaded copy that carries the structure drawings.

    python3 harvest_quizlet.py
"""
import json, os
import pdfplumber
import harvest

SPEC = [
  # key                     pdf                     slide  mode           for
  ("cyp_endo_xeno",         "MCMet-9.15.2026.pdf",    5,   "below_title", "sa-cyp-5"),
  ("cyp_2d6_profile",       "MCMet-9.15.2026.pdf",   26,   "below_title", "sa-cyp-7"),
  ("fa_induction_bullets",  "MCMet-9.16.2026.pdf",   53,   "below_title", "sa-fa-6"),
  ("fa_inducer_list",       "MCMet-9.16.2026.pdf",   54,   "below_title", "sa-fa-5"),
  ("fa_cyclosporin_case",   "MCMet-9.16.2026.pdf",   55,   "below_title", "fa-14"),
  ("fa_inhibitor_list",     "MCMet-9.16.2026.pdf",   60,   "below_title", "sa-fa-5"),
  ("fa_gfj_felodipine",     "MCMet-9.16.2026.pdf",   66,   "auto",        "fa-13"),
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
