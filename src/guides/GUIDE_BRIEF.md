# Objective guides for PHAR 4342 lectures 13–15 — writer's brief

The student (Louis, P2 pharmacy) sits the cumulative final at 9:00 tomorrow.
Thirty-eight of its fifty questions come from lectures 13, 14 and 15 by
Dr. Sikazwe. He will read these guides in the morning, in about an hour, so
each objective must be one screen of dense, correct material, laid out the
same way every time. You write ONE OR TWO objectives, as HTML fragments, to
the output path you are given.

## Sources — and nothing else

- `L13_slides.txt`, `L14_slides.txt`, `L15_slides.txt` in this folder: the
  printed text of every slide, delimited `===== L14 SLIDE 29 =====`. The
  slide number in the delimiter is the number you cite. Some slides are
  pictures with a title only; say so rather than inventing their content.
  Lines that are garbled or that read like handwriting (e.g. "canbeaffectedby
  age", "double check hisexactphrasing") are the student's pen notes over the
  slide, NOT the lecturer's text: never cite them as slide content.
- The lecture transcripts, in the attached Claude Project (use the `Projects`
  tool, `project_read` with the exact doc name):
  `Intro to Med Chem - 09_15 Lecture.txt` (lecture 13),
  `Intro to Med Chem - 09_16 - Lecture .txt` (lecture 14, note the spaces),
  `Intro to Med Chem - 09_17.txt` (lecture 15). Read the whole transcript for
  your deck once, then quote from it. Auto-captions garble drug names and
  numbers, so quote only passages whose meaning is clear, and mark every
  transcript-sourced statement with **(T)** at the start of the sentence.
- `../review/STYLE.md`: the professor's own question wording (PollEv items,
  practice exam, prep sheet). Use it for the "How he will ask it" box.
- The figure keys listed at the end of this brief. A figure token is
  `{{fig:KEY|caption}}` on its own line; the app expands it. Use two to four
  per objective where the slide is a table, a pie, a plot or a scheme. Never
  invent a key.

Rules that are not negotiable:
1. Every number, percentage, drug name, enzyme, isoform, half-life and list
   comes from a slide (cite `slide N` in the sentence or the table row) or
   from the transcript (marked (T)). If you cannot find it in either, leave it
   out. No textbook knowledge, no "standard pharmacology".
2. When the transcript and a slide disagree, or two slides disagree, state
   both with their sources and say which one an exam written from these
   lectures would key. Known conflicts: L13 slide 30 says CYP3A4 is one third
   of liver CYP while the slide 14 pie gives it 11%; the 09/15 and 09/16
   lectures name the intermediate metaboliser (IM) as the normal phenotype
   while the textbook convention is EM; L15 slide 23 calls cimetidine a PPI
   (it is an H2 antagonist); L14 slide 29 prints "Acylsynthatases" (a typo).
3. British -ise spelling (metabolise, oxidise, hydrolyse), matching the app.
4. No metaphors or similes, no sentence about the writing itself, no sentence
   about how you produced it, no study advice ("make sure you", "remember
   to"). State the mechanism and the fact.
5. Plain sentences a tired reader can parse once. Define every abbreviation
   at first use inside your fragment.
6. No `<script>`, no `<style>`, no `<h1>`/`<h2>`, no backticks (`) and no `${`
   anywhere in the fragment (it is embedded in a JavaScript template string).
   Use &amp; &lt; &gt; for &, <, > in text. Subscripts as <sub>2</sub>,
   superscripts as <sup>+</sup>, arrows as &rarr;, dashes as &ndash; / &mdash;.

## The layout — identical for every objective

```html
<section class="gobj" id="gobj-N">
<h3>Lecture 13 (MCMet-9_15_2026.pdf) &mdash; Objective 1 of 3: CYP characteristics, catalytic cycle and reactions</h3>
<div class="gbar"><span>OBJECTIVE (his slide 4)</span><b>Explain CYP characteristics, cat. cycle, &amp; reactions</b><i>slides 5&ndash;13</i></div>

<h4>Read this first &mdash; the words on these slides</h4>
<dl class="gwords">
<dt>Term</dt><dd>Plain definition, one or two sentences, with the slide it appears on.</dd>
...
</dl>

<h4>The points, in slide order</h4>
<p class="prose"><b>1. Heading of the point (slide N).</b> What the slide says, then his reasoning. (T) "A short verbatim quote from the lecture if it adds the emphasis or the exact term."</p>
...   (one <p> per point; tables as <table class="reftab"> with a header row; figure tokens between points where the slide is a picture)

<div class="ghook"><b>Memory hook</b> One acronym or one structural pattern that holds the list, built from the slide's own order, with each letter expanded. If two things are easily swapped, give the one feature that separates them. Nothing figurative.</div>

<div class="gpoll"><b>Poll or practice item on this objective</b> The professor's own item verbatim (from STYLE.md or a slide headed Q:/TRUE/FALSE/Pollev), each option judged TRUE or FALSE against a point number, and the answer.</div>

<div class="gask"><b>How he will ask it, and how to answer</b>
<ul><li>Format 1 he uses for this material, with an example stem in his words.</li><li>Format 2 ...</li></ul>
<ul><li>Step 1 &mdash; what to check first in the stem.</li><li>Step 2 &mdash; ...</li><li>Step 3 &mdash; which option is the usual trap and why.</li></ul>
</div>
</section>
```

Length: 700–1300 words per objective plus tables. The "words" list carries 8–14
terms. The points cover every content slide in the range; a picture-only slide
gets one line ("Slide 21 is the 1A2 substrate list, no text") or a figure
token if a key exists for it. The poll box uses a real item; if the deck has
no poll on this objective, use the closest item from STYLE.md or the prep
sheet, and say where it is from.

## Figure keys (from images.json; use only these)

Lecture 13: cyp_endo_xeno (s5 endobiotic/xenobiotic lists), cyp_nomenclature (s9 CYP2D6*4), cyp_characteristics (s10), cyp_heme_site, cyp_catalytic_cycle (s12), cyp_oxidative_reactions (s13), cyp_liver_share (s14 pie), cyp_intestine_share (s15 pie), cyp_drug_share (s16 pie), cyp_enzyme_share, cyp_phase1_enzyme_share, cyp_1a2_substrates (s21), cyp_2b6_substrates (s23), cyp_2d6_profile (s26), cyp_2e1_substrates (s29), cyp_ind_inh_lists (s32), cyp_inducer_table (s33), cyp_gfj_table (s35), cyp_bioactivation_table (s37), cyp_polymorphism_table (s38), cyp_ethnic_frequencies (s39), cyp_pm_um_populations (s40), cyp_active_drug_grid (s41), cyp_prodrug_grid (s42), cyp_tramadol_odt (s47), cyp_polymorphic_adr_table.
Lecture 14: fgm_alkene, fgm_aromatic (s7 benzene), fgm_amide, fgm_amine (s10), fgm_carbonyl (s12), fgm_ca (s13), fgm_carbonate, fgm_carbamate, fgm_ester, fgm_ether, fgm_thioether_ox, fgm_epoxide (s20), fgm_hhc (s21), fgm_hydroxy (s22), fgm_phenol_ph2 (s23), fgm_purine (s24), fgm_pyrimidine (s25), fgm_quinone (s26), fgm_phosphate (s27), fgm_sulfate (s28), tbl_ph2_a (s29), tbl_ph2_b (s30), fa_intrinsic_factors (s33), fa_dose (s34), fa_route (s35/36 first-pass examples), fa_protein_binding (s38), fa_distribution (s39), fa_disease (s43), fa_neonate (s46), fa_elderly (s47), fa_species (s50), fa_induction_bullets (s53), fa_inducer_list (s54), fa_cyclosporin_case (s55), fa_dietary_ind (s56–57), fa_inhibitor_list (s60), fa_dietary_inh (s62–63), tbl_ddi (s65), fa_gfj_felodipine (s66 plot), dm_triazolam_rifampin.
Lecture 15: el_renal_factors (s9), el_tubular_transporters (s13), el_urinary_ph (s14), el_ehr (s18–20), tx_causes (s29), tx_mech_toxicophores (s30), tx_halothane (s31), tx_allylic_tamoxifen (s32), tx_epoxide_cbz (s33), tx_aflatoxin (s34), rx_bap_bpde (s35), tx_aldehyde_abacavir (s36), tx_dblbond (s37), tx_michael, tx_inh_radical (s39), tx_phenytoin (s40), tx_ros (s41), rx_ethanol_hapten (s42), tx_azo_solventred (s43), tx_noh_aaf (s44), tx_risk_factors (s47), tx_nitrofurantoin (s48), tx_apap_slide (s49), tx_ndsri (s50), tx_doxorubicin (s52), tx_herg (s53), tx_clozapine (s54), tx_amiodarone (s55), tx_neuro (s56), tx_nephro (s57), tx_dermal (s58), tx_defense1 (s60), tx_defense2 (s61), tx_treatments (s62), tx_nac (s63), tx_2pam (s64).

## Before you finish

Re-read your fragment against the slide dump: every "slide N" must exist in
the range and say what you attribute to it; every number must be findable in
the dump or the transcript. Delete anything you cannot point to. Check the
fragment for the forbidden characters (backtick, `${`, `<h1`, `<h2`, `<script`).
Write only the fragment to the output path — no markdown fences, no
commentary — then report: word count, the slides you covered, the transcript
passages you quoted (by a few words each), and anything you left out because
it could not be sourced.
