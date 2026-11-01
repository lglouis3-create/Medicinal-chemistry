# Citation check against the lecture decks, 2026-11-01

Asked by Louis on 2026-11-01, before he approves the move onto the kit core. Branch
`kit/move-to-core` at 8c81588. No question, answer, explanation, citation, table or guide
was changed; the findings below are for Louis to decide. The decks are Louis's own files:
they were downloaded from his Google Drive into a scratch folder outside the repository and
are not committed.

## The decks

All 20 decks that `src/course.js` names were downloaded (Google Drive connector; every
file's byte size equals the size Drive reports). Pages = slides (one slide per page in
every deck, by `pdfplumber`).

| course.js deck | Drive file | Drive id | bytes | slides |
|---|---|---|---|---|
| MCFGs8_1718_26.pdf | MCFGs-8.17-18.26.pdf | 1qprZQwaaPntuB-VipgORd2BWDkBcceL3 | 5,950,293 | 96 |
| 081926_Stereochemistry.pdf | 08-19-26_Stereochemistry.pdf | 1Allaa8hz4xQM3N1_KKh-2dHWWrRPGJIt | 992,311 | 33 |
| 082026_Drugdiscovery.pdf | 08-20-26_Drugdiscovery.pdf | 1eQqOBB34lXa4MP3ociQcs0Ac9CYD2haz | 1,976,049 | 45 |
| 082426_IntroductiontoSAR.pdf | 08-24-26_-Introduction-to-SAR.pdf | 1nNr7Mqjl4PdymxLdT8oMZAo9z8hPbdrY | 375,893 | 10 |
| 082426_DrugReceptorInteractions.pdf | 08-24-26_Drug-Receptor-Interactions.pdf | 12AWTOgN3FDyU6YdS1oZHyED9mbPXIE-y | 732,941 | 14 |
| 082426_ReviewAminoacids.pdf | 08-24-26_Review-Amino-acids.pdf | 1iDCMdWmm_dbJ9iApPA7HORWea2kVx3yi | 305,595 | 12 |
| 082626_Bioisosterism.pdf | 08-26-26_Bioisosterism.pdf | 1A2BsIUfkFnovdfaT9UdSK_4nl6cxsSOJ | 711,279 | 17 |
| 082726_PhysicochemicalProp1.pdf | 08-27-26_Physicochemical-Prop-1.pdf | 17gMjZMdwQpe-V96EvUUZqBfMRo8GHJFy | 4,361,077 | 45 |
| 082726_PracticeProblemAnswers.pdf | 08-27-26_Practice-Problem-Answers.pdf | 1wRmYty_MVl0pBUkEYx9f6P-WzpsEZ4SC | 235,891 | 5 |
| 090226_PhysicochemicalProp2.pdf | 09-02-26_Physicochemical-Prop-2.pdf | 12QwykYl1pmQwtND6lVHAGlscRp3eimT7 | 940,673 | 25 |
| 090326_PhysicochemicalProp3.pdf | 09-03-26_Physicochemical-Prop-3.pdf | 1efHTspk4HMH4Q_LHkJJYFPBE2Tnt5Kmz | 976,250 | 24 |
| 090326_ADMETAbsorption_I.pdf | 09-03-26_ADMET--Absorption_I.pdf | 1a_tIkdpLUNUgzN4VRBrXC-GNBOrXq8A5 | 1,437,713 | 37 |
| 090426_ADMETAbsorption_II.pdf | 09-04-26_ADMET--Absorption_II.pdf | 1V_MP1kgHPjwDoh1v4vJ4h8nawxJHqSeO | 608,074 | 23 |
| 090426_Distribution.pdf | 09-04-26_Distribution.pdf | 1_ZcV574wFgNJm6fW7mlSdQUaQqkHB6Mi | 577,424 | 27 |
| MCMet-9_4_26-9_9_26.pdf | MCMet-9.4.26 - 9.9.26.pdf | 1SLxhOCmrZPFzuq8XgmWyjEYoO3FGFcUo | 2,785,936 | 57 |
| MCMet-9_10_26.pdf | MCMet-9.10.26.pdf (A) | 1NnyIzJ86iZ7DHow4TD20Br_7WQnUtVEj | 2,256,039 | 64 |
| | MCMet-9.10.26.pdf (B) | 1MWmq_liPDrumhXRDr_vM23OoRgqqQzBE | 2,256,350 | 64 |
| MCMet-9_15_2026.pdf | MCMet-9.15.2026.pdf | 1XXi0ETqLoI-KKqnDobKbZ9ioIqKMPnBm | 4,192,627 | 60 |
| MCMet-9_16_2026.pdf | MCMet-9.16.2026.pdf (A) | 1U2yuzSBCY4Zg6zKuDmW12c8IgZo_mXPU | 3,473,397 | 67 |
| | MCMet-9.16.2026 (1).pdf (B) | 1WpG1A1b_uQJrv5QwG9phtwf9Qr9a3Ks8 | 3,116,757 | 67 |
| MCMet-9_17_2026.pdf | MCMet-9.17.2026.pdf (A) | 166Ah7aoNWJ4j7GK_O3qQUZqKyeAozq0a | 2,766,805 | 66 |
| | MCMet-9.17.2026 (1).pdf (B) | 1Sq5_H_jrThS7GMvxZy1rmHdzA_MSn-NV | 3,232,108 | 66 |
| Ex4-Prep-Work.pdf | Ex4-Prep-Work.pdf (A) | 1WpTmJ9YBFURQvC_DMKiFtJnhRugjGKNC | 387,503 | 2 |
| | Ex4-Prep-Work (1).pdf (B) | 1AwK7fKUahFTKPaeawHtdb7qVbyvRG-Ym | 371,189 | 2 |

### The two versions of four decks

- **MCMet-9.10.26**: both copies have the same text on all 64 slides and render the same.
- **MCMet-9.16.2026** and **MCMet-9.17.2026**: the slide wording is the same in both copies
  (the text differences are footers, subscripts, viewer "Loading…" overlays and handwritten
  notes on some slides). But one copy of each is a re-export whose drawings did not survive:
  9.16 "(1)" (1WpG1…) and 9.17 without "(1)" (166Ah…) render with 31–60% of the ink of
  the other copy on 21 and 20 slides (9.16: slides 6–8, 10, 12–15, 18, 20, 22, 23, 26–28,
  34, 36, 57, 58, 62, 63; 9.17: slides 2, 15, 25, 32–34, 36–38, 40, 41, 48, 53, 54, 57, 58,
  60, 61, 63, 64). Seen on 9.17 slides 33 and 37: the structures are missing. The copies to
  keep for citation work are **9.16 1U2yu…** and **9.17 "(1)" 1Sq5…**.
- **Ex4-Prep-Work**: page 2 is the same in both; on page 1 the only difference is the
  header line, which copy (1), cut to a shorter page, does not have.
- No citation depends on wording that differs between two copies. Claims about drawings on
  the slides listed above can be seen only in the two copies named to keep.

## cite_check.py

`src/cite_check.py` unchanged, run from `src/` in a scratch worktree of 8c81588 with
`decks/` linked to the scratch folder, `pdfplumber` 0.11.10 in a scratch virtual
environment. The committed `index.html` was confirmed to equal a fresh `build.py` output
except for the build time.

| run | result |
|---|---|
| whole bank (479 questions), versions A | PASS: 1191 slide references checked against 20 decks, exit 0 |
| whole bank, versions B | PASS: 1191 slide references checked against 20 decks, exit 0 |
| the 92 new questions only (a scratch copy filtered by id), A and B | PASS: 289 slide references checked against 20 decks, exit 0 |

What the PASS covers: the check confirms a cited slide number is no higher than the deck's
slide count. It reads a slide number only when a deck is named earlier in the same field,
and "Lecture 13 slide 14" (no `#`) does not count as naming a deck. So it read 1191 of the
2734 slide numbers in the questions (for the 92 new questions, 289 of 1124); the others,
mostly in option explanations and `teach`, were neither checked nor listed as unchecked. It
does not read `tell.js` (140 slide numbers) or `guide.js` (681).

## The wider check

A scratch script took every slide reference in the bank, the Tell-apart table and the
Guides, found its deck (named in the text, else the question's `cite`, else the section
heading), and compared the sentence around the reference with the slide: the text layer,
plus OCR of every slide (RapidOCR, 200 dpi), and for the 9.17 deck the copy that keeps its
drawings. Slides whose content is a picture were viewed where the claim depended on it.

- **Range**: all 2734 question slide numbers, 140 Tell-apart and 681 Guide slide numbers are
  within their decks once the deck is resolved.
- **Content**: a reference was flagged when a number in its sentence (other than 1–4) is not
  on the cited slide, or fewer than a third of the sentence's content words are. Every
  flagged reference in the focus set was read against its slide: 240 of 871 in the 92 new
  questions, 16 of 76 in Tell apart, 117 of 564 in the Guides. The rest were accepted on the
  measure, not read one by one.
- The older 387 questions: all 18 references with a missing number were read and are
  explained (the number is on the other slide of a two-slide citation, or is correct
  arithmetic on the slide, such as 66% for the CYP2 slices of L13 slide 14); the other 442
  flagged references in them were not read.

## Findings

### 1. A bare slide number that reads as the wrong lecture

In each of these, the text names one lecture and a later bare "slide N" means another. A
reader following the text opens the wrong slide. The intended slide supports the claim in
every case.

| id | field | as written | read as | that slide shows | intended (supports it) |
|---|---|---|---|---|---|
| ta-20 | option 3 why | "…(Lecture 14 slide 53). … slide 50's analogy" | L14 slide 50 | inter-species differences (cats, pigs, CYP2D) | L13 slide 50: TRUE/FALSE, induction analogous to the rapid-metaboliser phenotype |
| ta-24 | teach; option 3 why | "Lecture 14 slide 53 … the table on slide 39" | L14 slide 39 | tissue drug binding | L13 slide 39: frequency table with NAT2 and thiopurine methyltransferase rows |
| ta-25 | teach; option 1 why | "(Lecture 14 slide 59) … by genotype (slide 40)" | L14 slide 40 | PollEv-1, protein binding, dose and route | L13 slide 40: PMs with no CYP2D6, UMs with gene duplications |
| ta-40 | option 2 why | "(Lecture 15 slide 7) … persistence that slide 21" | L15 slide 21 | intestinal elimination (diltiazem, midazolam) | L14 slide 21: halogenated HCs, long t½ |
| ta-47 | teach | "Lecture 15 slide 49. Route (slides 35, 36)" | L15 slides 35, 36 | B[a]P; aldehydes | L14 slides 35, 36: route of administration, first pass |
| cyp-i2 | teach | "MCMet-9_16_2026.pdf slide 63 … slide 32 … slide 20" | L14 slides 32, 20 | "Factors influencing DM" title; epoxides | L13 slide 32 (inhibitor list with omeprazole), L13 slide 20 (1A2 induced by omeprazole) |
| sa-cyp-3 | option 5 why | "Lecture 10 slide 49 … Slide 33 gives its induced CYPs" | L10 slide 33 | bio-activation consequence | L13 slide 33: rifampin 2C8, 2C9, 2C19, 2D6, 3A4, 2B6 |
| sa-fa-5 | teach (two places) | "Lecture 13 slide 32 … Slide 54" | L13 slide 54 | a diclofenac phase II question | L14 slide 54: inducer list with efavirenz, ritonavir, rifabutin |
| Guide, L14 objective 2 | list item | "(L13 slide 32, slide 54 figure)" | L13 slide 54 | as above | L14 slide 54 |

`ta-20`, `ta-24`, `ta-25`, `ta-40` and `ta-47` are among the 92 new questions.

### 2. A claim the cited slide does not print

- **ta-58**, option 3 why and teach: the time course of induction ("weeks", "builds over
  days") is given to L14 slide 53. Slide 53 prints the mechanism (more mRNA translation,
  less protein degradation) and the outcomes, and no time course. The keyed answer (2 to 3
  days, L14 slide 59) is printed.
- **ta-86**, option 4 why: "fexofenadine keeps the antihistamine effect without the channel
  block (slide 53)". L15 slide 53 prints terfenadine's hERG interaction and fexofenadine
  "(similarly acting)"; it does not say fexofenadine lacks the hERG block.
- **Tell apart, "Family vs subfamily vs isoform vs allele"**: "*4 the allele". Slide 9
  highlights *4 in CYP2D6*4 but does not print the word allele; the Guide marks the same
  point (T), the lecture audio. The Tell row does not mark it.
- **Guide, L13 objective 1**: "CYP vs FMO on N-oxidation and sulfoxidation: both do them
  (slide 13)". L13 slide 13 lists both reactions under CYP only; FMO's N-oxides and
  sulfoxides are on L11 slides 26–27.

### 3. Worth knowing, not a citation error

- L15 slide 32 is headed "Existing electrophilic carbons", but its second example
  (tamoxifen) is drawn with a CYP step before the carbocation. `ta-79` and `ta-80` key the
  heading.
- Readings off plots, with no printed value: `df-14` ("peaking near 0.3 ng/mL", L10 slide 49;
  the T curve peaks at about 0.27) and the Guide's L14 slide 66 values (about 2.5 and 10–11
  nmol/L). Both are consistent with the plots.
- The ten references to the Exam 4 prep sheet by question number (`cyp-y4`, `p1-1`,
  `p1-14`, `p1-16`, `p2-1`, `p2-2`, `p2-7`, `p2-14`, `sa-df-1`, `fgg-1`) each point to the
  item on the same topic, and the slide cited beside it matches.

## The Tell-apart row "Family vs subfamily vs isoform vs allele"

Correct as written. L13 slide 9 (the nomenclature figure, a picture) prints
"Subfamily (> 55% homology)" and "Gene Family(>40% homology)". L13 slide 19 prints ">18
Families (>40% homology)" and ">40 Subfamilies (>50% homology)". The subfamily cut-off
differs (55% against 50%) and the family cut-off is 40% on both. The one point not printed
is the word "allele" (finding 2).

## Results by part

| part | references | flagged and read | citations that do not match |
|---|---|---|---|
| 92 new questions | 871 | 240 | 5 questions with a bare number read as the wrong lecture (finding 1); 2 claims not printed on the cited slide (finding 2) |
| Tell apart (51 rows) | 76 | 16 | 1 point not printed (the allele word) |
| Guides (8 sections) | 564 | 117 | 1 bare number read as the wrong lecture; 1 citation covering half its sentence |
| older 387 questions | 1278 | 18 of 460 | 3 questions with a bare number read as the wrong lecture |

## Not checked

- Claims marked (T) or sourced to the lecture audio: no transcript was checked.
- References that passed the automated measure were not read one by one (631 in the new
  questions, 60 in Tell apart, 447 in the Guides, 818 in the older questions), nor the 442
  flagged references in the older questions that have no missing number.
- The check reads the sentence around a reference; a claim that sits in a different
  sentence from its slide number was compared with the slide only through that sentence.
