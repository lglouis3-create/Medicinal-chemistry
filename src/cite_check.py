#!/usr/bin/env python3
"""Check every slide number cited anywhere in the bank against the real deck.

A citation drifts silently: the text stays plausible and only the number is
wrong, so reading does not catch it. This reads the page count of each deck on
hand and reports any cited slide that falls outside it, plus any deck named in a
citation that is not on hand to check.

Citations are scanned in `cite`, `teach`, `note` and every option's `why`, since
slide numbers appear in all four.

    python3 cite_check.py
"""
import glob, json, os, re, subprocess, sys

import pdfplumber

DECK_DIRS = ["yen", "."]

# how a citation spells a deck -> the file on disk
ALIASES = {
    "mcmet-9_15_2026.pdf": "MCMet-9.15.2026.pdf",
    "mcmet-9_16_2026.pdf": "MCMet-9.16.2026.pdf",
    "mcmet-9_17_2026.pdf": "MCMet-9.17.2026.pdf",
    "mcmet-9_10_26.pdf":   "MCMet-9_10_26.pdf",
    "mcmet-9_4_26.pdf":       "MCMet-9_4_26-9_9_26.pdf",
    "mcmet9_4_26__9_9_26.pdf": "MCMet-9_4_26-9_9_26.pdf",
    "mcmet-9_4_26-9_9_26.pdf": "MCMet-9_4_26-9_9_26.pdf",
    "mcfgs8_1718_26.pdf":  "MCFGs8_1718_26.pdf",
    "090326_admetabsorption_i.pdf": "090326_ADMETAbsorption_I.pdf",
    "090226_physicochemicalprop2.pdf": "090226_PhysicochemicalProp2.pdf",
    "082426_introductiontosar.pdf": "082426_IntroductiontoSAR.pdf",
    "ex4-prep-work.pdf": None,
}
# lecture number -> file, for citations that say "Lecture #11" instead
LECTURES = {
    "10": "MCMet-9_4_26-9_9_26.pdf",
    "11": "MCMet-9_10_26.pdf",
    "13": "MCMet-9.15.2026.pdf",
    "14": "MCMet-9.16.2026.pdf",
    "15": "MCMet-9.17.2026.pdf",
}

PDF_IN_TEXT = re.compile(r"([A-Za-z0-9_.\-]+\.pdf)", re.I)
# A citation may name a second deck in words rather than by filename, as in
# "... slides 13; Absorption I slide 24". Without these the slide number is
# attributed to the previous deck and reported as out of range.
BARE_DECK = re.compile(
    r"\b(Absorption I{1,2}|Distribution|Stereochemistry|Bioisosterism|"
    r"Physicochemical Properties [123]|Drug Discovery|Drug\u2013Receptor Interactions|"
    r"Introduction to SAR|Practice Problem Answers|Functional group deck)\b")
BARE_MAP = {
    "Absorption I": "090326_ADMETAbsorption_I.pdf", "Absorption II": "090426_ADMETAbsorption_II.pdf",
    "Distribution": "090426_Distribution.pdf",
    "Stereochemistry": "081926_Stereochemistry.pdf",
    "Bioisosterism": "082626_Bioisosterism.pdf",
    "Physicochemical Properties 1": "082726_PhysicochemicalProp1.pdf",
    "Physicochemical Properties 2": None,
    "Physicochemical Properties 3": "090326_PhysicochemicalProp3.pdf",
    "Drug Discovery": "082026_Drugdiscovery.pdf",
    "Drug\u2013Receptor Interactions": "082426_DrugReceptorInteractions.pdf",
    "Introduction to SAR": None,
    "Practice Problem Answers": "082726_PracticeProblemAnswers.pdf",
    "Functional group deck": "MCFGs8_1718_26.pdf",
}
LECTURE_IN_TEXT = re.compile(r"[Ll]ecture\s*#\s*(\d+)")
# "slide 34", "slides 29-30", "slides 46, 50, 56", "slides 42 to 62"
SLIDES = re.compile(r"slides?\s+((?:\d+\s*(?:[-–]|,|and|to)?\s*)+)", re.I)


def page_counts():
    counts = {}
    for d in DECK_DIRS:
        for f in glob.glob(os.path.join(d, "*.pdf")):
            name = os.path.basename(f)
            if name in counts:
                continue
            try:
                with pdfplumber.open(f) as doc:
                    counts[name] = len(doc.pages)
            except Exception:
                pass
    return counts


def load_questions():
    """Read the bank out of the built page, the same way the node checks do."""
    js = r"""
      const fs=require('fs'),vm=require('vm');
      let c=[...fs.readFileSync(process.argv[1],'utf8')
        .matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
      const b=c.lastIndexOf('   BOOT'); c=c.slice(0,c.lastIndexOf('/* ===',b));
      c+='\nglobalThis.__Q=QUESTIONS;';
      const sb={console,localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
        document:{querySelector:()=>({}),querySelectorAll:()=>[],getElementById:()=>({}),
                  createElement:()=>({}),body:{}},window:{},prompt:()=>'x',
        setTimeout:()=>0,clearTimeout(){},Date,Math,JSON,Object,Array,String,Number,
        Boolean,RegExp,Error,isNaN,parseInt,parseFloat};
      sb.globalThis=sb;vm.createContext(sb);vm.runInContext(c,sb);
      const tt=t=>Array.isArray(t)?t.map(p=>[p.h,p.t].filter(Boolean).join('. ')).join(' '):(t||'');
      process.stdout.write(JSON.stringify(sb.__Q.map(q=>({
        id:q.id, cite:q.cite||'', teach:tt(q.teach), note:q.note||'',
        whys:q.options.map(o=>o.why||'')}))));
    """
    out = subprocess.run(
        ["node", "-e", js, "/mnt/user-data/outputs/PHAR4342_Final_Drill.html"],
        capture_output=True, text=True)
    if out.returncode != 0:
        sys.exit("ERROR: could not read the built page\n" + out.stderr.strip())
    return json.loads(out.stdout)


def resolve(name):
    """A deck as written in a citation -> the file on disk, or None."""
    key = name.lower()
    if key in ALIASES:
        return ALIASES[key]
    return name


def main():
    counts = page_counts()
    qs = load_questions()

    bad, unchecked, checked = [], {}, 0
    for q in qs:
        for field, text in [("cite", q["cite"]), ("teach", q["teach"]),
                            ("note", q["note"])] + \
                           [(f"why {i}", w) for i, w in enumerate(q["whys"])]:
            if not text:
                continue
            # walk the text, remembering the most recent deck named before each
            # slide reference, since one citation can name two decks
            marks = []
            for m in PDF_IN_TEXT.finditer(text):
                marks.append((m.start(), resolve(m.group(1)), m.group(1)))
            for m in LECTURE_IN_TEXT.finditer(text):
                marks.append((m.start(), LECTURES.get(m.group(1)), "Lecture #" + m.group(1)))
            for m in BARE_DECK.finditer(text):
                # skip one that is part of a filename already matched above
                if any(a <= m.start() < a + 40 and shown.lower().endswith(".pdf")
                       for a, _, shown in marks):
                    pass
                marks.append((m.start(), BARE_MAP.get(m.group(1)), m.group(1)))
            marks.sort()
            for sm in SLIDES.finditer(text):
                prior = [x for x in marks if x[0] < sm.start()]
                if not prior:
                    continue
                _, fname, shown = prior[-1]
                nums = [int(n) for n in re.findall(r"\d+", sm.group(1))]
                if fname is None:
                    unchecked.setdefault(shown, 0)
                    unchecked[shown] += 1
                    continue
                if fname not in counts:
                    unchecked.setdefault(shown, 0)
                    unchecked[shown] += 1
                    continue
                n = counts[fname]
                checked += len(nums)
                over = [x for x in nums if x < 1 or x > n]
                if over:
                    bad.append((q["id"], field, shown, fname, n, over))

    print("\n=== Citation check ===")
    if not counts:
        print("  NOT RUN: no lecture PDFs found under yen/ or the working directory.")
        print("  The decks are Louis's course files and are not shipped in the source")
        print("  zip, so this check only means something where they are present.")
        return 0
    print(f"  {checked} slide references checked against {len(counts)} decks on hand")
    if unchecked:
        print("\n  decks named but not on hand (references not checked):")
        for k, v in sorted(unchecked.items(), key=lambda kv: -kv[1]):
            print(f"    {v:>4}  {k}")
    if bad:
        print(f"\n  {len(bad)} citation(s) point past the end of their deck:")
        for qid, field, shown, fname, n, over in bad:
            print(f"    {qid:10s} {field:8s} {shown} has {n} slides, cites {over}")
    elif checked:
        print("\n  every checked slide number exists in its deck")
    else:
        print("\n  NOT RUN: decks were found but no citation matched one of them")
        return 0
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
