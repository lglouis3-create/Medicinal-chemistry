#!/usr/bin/env python3
"""Apply the 09/20 wording review: stems and options rewritten to the
professors' short form, same keyed answers. Findings come from
scratchpad/review/findings_{0..3}.json; overrides below replace or drop
individual proposals after a read-through.

    python3 apply_review2.py
"""
import json, re, glob, sys

REV = "/tmp/claude-0/-home-claude/4beeba17-49f6-5d89-b1c9-e2d2c4e60bef/scratchpad/review"

# proposals not applied (reason in the comment)
SKIP = {
  "el-15",     # handled by hand below: transcript 09/17 asks this exact T/F, keep, reword
  "fg-17",     # rewritten by hand to a different correct pair (was a duplicate of fg-12)
}

# proposals replaced by hand (same correctness pattern as the original)
OVERRIDE = {
  "cyp-y2": {"stem": "The correct order of the four steps of the CYP oxidation cycle is:",
    "options": ["Drug binds Fe³⁺ → first e⁻ → O₂ binds, second e⁻ → drug oxidised",
                "O₂ binds → drug binds → both e⁻ arrive → drug oxidised",
                "Drug oxidised → NADPH regenerates enzyme → O₂ binds → drug released",
                "Both e⁻ from NADPH → drug binds → O₂ binds → drug released"]},
  "tx-3": {"stem": "Which set lists the toxicophore categories?",
    "options": ["Electrophilic carbons, carbonyls and double bonds; free radicals; others",
                "Alcohols, ethers, alkanes and amides",
                "Glucuronides, sulfates and glutathione conjugates",
                "UGT, ST, NAT and GST"]},
  "df-4": {"stem": "Regarding drug metabolism patterns, which statement is correct?",
    "options": ["Parent drug can go straight to Phase 2",
                "Phase 1 always precedes Phase 2",
                "Every drug is metabolised",
                "Phase 2 metabolites are always inactive"]},
  "p2-1": {"stem": None,
    "options": ["UGT with UDPGA; renal", "SULT with PAPS; biliary",
                "GST with glutathione; biliary", "NAT with acetyl-CoA; renal"]},
  "tx-27": {"stem": "N-Hydroxylation of an aromatic amine such as acetylaminofluorene is a bioactivation to:",
    "options": None},
  "el-15": {"stem": "TRUE/FALSE: both high log P and low log P drugs can be eliminated in sweat.",
    "options": ["True", "False; hydrophilic drugs only", "False; lipophilic drugs only",
                "True; transdermal drugs only"]},
}

# explanations that the rewrite made wrong
WHY = {
  "fg-8": [
    "Slide 20 gives epoxides two fates: hydrolysis by epoxide hydrolases (EHs), which opens the strained ring to a diol, and conjugation by Phase 2 glutathione S-transferases (GSTs), which caps the electrophilic carbon with glutathione. Both end the reactivity. Lecture 15 adds what happens when both are outrun: the epoxide carbon reacts with nucleophilic sites on protein or DNA.",
    None, None, None],
  "dd-12": [
    "Observation of side effects is one of the six discovery approaches in the drug discovery deck, with sildenafil and the phenothiazines as its examples. The other five are discovery without a lead molecule, natural products, random screening, rational drug design and drug metabolism studies.",
    "Phase 4 is post-marketing surveillance, a stage a drug passes through once a candidate already exists. The clinical phases are how a molecule is tested, not how it is found.",
    "Preclinical testing is where a candidate is evaluated in vitro and in animals before human trials. It is a development stage, not a way of finding a new molecule.",
    "Chemical synthesis is how a molecule is made once it has been designed or identified. The deck lists it among the sources of drug molecules, not among the six approaches to discovering one."],
  "ab2-1": [
    "Chelation with metal ions is one of the four absorption mechanisms in the deck: a surface the drug adsorbs onto, a metal ion that chelates it (iron and antacids with tetracycline), a change in gastrointestinal motility, and a change in the transport proteins of the gut wall. Each acts before the drug has crossed the gut wall.",
    "Induction changes how fast a drug is metabolised once it is in the body. That is a metabolic interaction, not an absorption one; it does not alter how much drug crosses the gut wall.",
    "Urinary pH changes how much drug is reabsorbed in the renal tubule, which is pH trapping and belongs to elimination. It acts after the drug has already been absorbed and distributed.",
    "Enterohepatic recycling returns drug from bile and gut back to the circulation after it has been absorbed, metabolised and excreted into bile. It prolongs duration rather than changing absorption."],
}

def esc(s):
    return s.replace("\\", "\\\\").replace("'", "\\'")

def find_block(src, qid):
    m = re.search(r"\{id:'%s'" % re.escape(qid), src)
    if not m: return None
    start = m.start()
    n = re.search(r"\n\{id:'", src[m.end():])
    end = m.end() + n.start() if n else len(src)
    return start, end

def set_stem(block, stem):
    m = re.search(r"stem:'((?:[^'\\]|\\.)*)'", block)
    assert m, "no stem"
    return block[:m.start(1)] + esc(stem) + block[m.end(1):]

def set_options(block, texts, flags):
    ms = list(re.finditer(r"\{t:'((?:[^'\\]|\\.)*)',\s*correct:(true|false)", block))
    assert len(ms) == len(texts), f"option count {len(ms)} vs {len(texts)}"
    out, pos = [], 0
    for m, t, f in zip(ms, texts, flags):
        assert (m.group(2) == 'true') == f, "correctness order changed"
        out.append(block[pos:m.start(1)]); out.append(esc(t)); pos = m.end(1)
    out.append(block[pos:])
    return "".join(out)

def set_whys(block, whys):
    ms = list(re.finditer(r"why:'((?:[^'\\]|\\.)*)'", block))
    assert len(ms) == len(whys), f"why count {len(ms)} vs {len(whys)}"
    out, pos = [], 0
    for m, w in zip(ms, whys):
        if w is None: continue
        out.append(block[pos:m.start(1)]); out.append(esc(w)); pos = m.end(1)
    out.append(block[pos:])
    return "".join(out)

def main():
    findings = []
    for i in range(4):
        findings += json.load(open(f"{REV}/findings_{i}.json"))
    byid = {f["id"]: f for f in findings}
    files = {p: open(p).read() for p in sorted(glob.glob("q*.js"))}
    applied, missing = [], []
    for qid, f in byid.items():
        if qid in SKIP and qid not in OVERRIDE: continue
        stem, opts = f.get("stem"), f.get("options")
        if qid in OVERRIDE:
            o = OVERRIDE[qid]
            if o["stem"] is not None: stem = o["stem"]
            if o["options"] is not None:
                base = opts if opts else None
                opts = [{"t": t, "correct": (base[k]["correct"] if base else None)} for k, t in enumerate(o["options"])]
        if not stem and not opts and qid not in WHY: continue
        hit = False
        for p, src in files.items():
            loc = find_block(src, qid)
            if not loc: continue
            s, e = loc; block = src[s:e]
            if stem: block = set_stem(block, stem)
            if opts:
                flags = [o["correct"] for o in opts]
                if any(x is None for x in flags):   # override without a proposal: read flags from file
                    flags = [m.group(1) == 'true' for m in re.finditer(r"\{t:'(?:[^'\\]|\\.)*',\s*correct:(true|false)", block)]
                block = set_options(block, [o["t"] for o in opts], flags)
            if qid in WHY: block = set_whys(block, WHY[qid])
            files[p] = src[:s] + block + src[e:]
            hit = True; break
        (applied if hit else missing).append(qid)
    for p, src in files.items(): open(p, "w").write(src)
    print(f"applied {len(applied)}; missing {missing}")

if __name__ == "__main__":
    main()
