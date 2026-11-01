# Open questions for Louis: PHAR 4342 drill

Newest first. Each item says what is waiting, the evidence, and what happens if
nothing is decided.

## 2026-11-01: moving the drill onto the shared kit core

Prepared on the local branch `kit/move-to-core` (not pushed). Nothing below is live.

### Q1. Questions that differ between the live site and the 09/21 round (387 ids)

- Every one of the 387 question ids on the live site (`main`, 03a314d) is in the new
  build, which has 479 (`restore/2026-09-21-round`, baed236, 92 new ids).
- No question's stem, options, `why`, `teach`, `note`, `cite`, keyed answer or any
  other field differs, except one: the 09/21 round (commit 2ebfade) gave every
  question a `skill` field, which the live version (commit 9103bc6; `q8_atlas.js`
  7aa5816) does not have. So all 387 shared ids differ in that one field.
- As instructed, the 09/21 version is kept for every id. Nothing was chosen or edited.
- What it changes for you: the live page works out a question's skill from its tags
  (`skillOf()`), and Weak spots ("Which kind of question is failing") groups by it.
  For 304 of the 387 the explicit `skill` is the same as what the live page worked out;
  for 83 the group changes (table below, rows marked "yes" first).
- Decide: keep the 09/21 `skill` tags (the default if you say nothing), or name the
  ids whose skill should be different.
- Compared by `reviews/move-to-core/question_diff.py` (with `loadq.js` and
  `skills_live.js` beside it). The file column is the file on this branch;
  `q1_topics.js` is the file the live site calls `q1_cyp.js` (renamed so the kit's
  scheduler check can run on this bank; same contents).

| id | file | main version (commit) | 09/21 version (2ebfade), kept | Weak spots grouping changes |
|---|---|---|---|---|
| `sa-ab2-1` | q10_sata.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-cyp-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-cyp-2` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-fg-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-p2-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-p2-2` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-pc-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-pc-2` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-tox-2` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-cyp-3` | q11_sata2.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-el-2` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-el-3` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-el-4` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `sa-fa-1` | q11_sata2.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-fg-2` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-tox-4` | q11_sata2.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `sa-tox-6` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `fg-24` | q12_figures.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-32` | q12_figures.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-33` | q12_figures.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-e4` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `fa-12` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `fg-27` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `sa-cyp-6` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `sa-fa-4` | q13_quizlet.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-fa-5` | q13_quizlet.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `sa-tox-8` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `cyp-e2` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-e3` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-i6` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-p3` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `cyp-x1` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-x4` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `cyp-x5` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `cyp-y1` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `fa-10` | q2_fgdm.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `fa-11` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `fg-2` | q2_fgdm.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `el-13` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-10` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-12` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-13` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-16` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `tx-17` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-18` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-19` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-20` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-22` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-23` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-24` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-25` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-26` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-29` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-6` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `tx-7` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `df-10` | q4_paths.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `df-3` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `df-4` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `df-9` | q4_paths.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `fgg-1` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `p1-7` | q4_paths.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `ad-17` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `ad-2` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `ad-4` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `dd-3` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'tell'` | yes |
| `dd-5` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `dd-6` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `dr-3` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `dr-5` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `pc-10` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'calc'` | yes |
| `pc-7` | q5_yendapally.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `pc-9` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'calc'` | yes |
| `st-5` | q5_yendapally.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `v-ad-11b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'calc'` | yes |
| `v-cyp-e1b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `v-cyp-y1b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `v-pc-1b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'calc'` | yes |
| `v-st-3b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `v-tx-12b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `fgx-24` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'apply'` | yes |
| `fgx-5` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `ab2-1` | q9_gaps.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `ab2-2` | q9_gaps.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'recall'` | yes |
| `sa-ab2-2` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-dd-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-df-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-el-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-tox-1` | q10_sata.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-cyp-4` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-el-5` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-fa-2` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-fa-3` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-tox-3` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-tox-5` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-tox-7` | q11_sata2.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-22` | q12_figures.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-23` | q12_figures.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-25` | q12_figures.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-26` | q12_figures.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-31` | q12_figures.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `fa-13` | q13_quizlet.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fa-14` | q13_quizlet.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `sa-cyp-5` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-cyp-7` | q13_quizlet.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sa-fa-6` | q13_quizlet.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-b1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-b2` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-c1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-c2` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-c3` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-e1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f2` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-f3` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f4` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f5` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f6` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-f7` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `cyp-i1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-i2` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `cyp-i3` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-i4` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-i5` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-i7` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `cyp-p1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-p2` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-p4` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `cyp-p5` | q1_topics.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `cyp-w1` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-w2` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-x2` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-x3` | q1_topics.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `cyp-x6` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-y2` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-y3` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `cyp-y4` | q1_topics.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-1` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-2` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-3` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-4` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-5` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-6` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-7` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fa-8` | q2_fgdm.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `fa-9` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-1` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-10` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-11` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-12` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-13` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-14` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-15` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-16` | q2_fgdm.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fg-17` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-18` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-3` | q2_fgdm.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `fg-4` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-5` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-6` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-7` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-8` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-9` | q2_fgdm.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-1` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-10` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `el-11` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-12` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `el-14` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-15` | q3_elimtox.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `el-16` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-2` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-3` | q3_elimtox.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `el-4` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-5` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-6` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `el-7` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-8` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `el-9` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `tx-1` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-11` | q3_elimtox.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `tx-14` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-15` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-2` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-21` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-27` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-28` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-3` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-30` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-4` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-5` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-8` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `tx-9` | q3_elimtox.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-1` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-2` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-5` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-6` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-7` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-8` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgg-2` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgg-3` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgg-4` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-1` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-10` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-11` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-12` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-13` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-14` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-15` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-16` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-17` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p1-2` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-3` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-4` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-5` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-6` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-8` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p1-9` | q4_paths.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `p2-1` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-10` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-11` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-12` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-13` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-14` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-2` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-3` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-4` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-5` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-6` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-7` | q4_paths.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `p2-8` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `p2-9` | q4_paths.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-1` | q5_yendapally.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `ad-10` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-11` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-12` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-13` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `ad-14` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `ad-15` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `ad-16` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `ad-3` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `ad-5` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-6` | q5_yendapally.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `ad-7` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-8` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ad-9` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `dd-1` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-2` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-4` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-7` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dr-1` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dr-2` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `dr-4` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `pc-1` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `pc-2` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `pc-3` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `pc-4` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `pc-5` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `pc-6` | q5_yendapally.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `pc-8` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-1` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-2` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-3` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-4` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-6` | q5_yendapally.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `st-7` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `st-8` | q5_yendapally.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-11` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `df-12` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `df-13` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `fg-19` | q6_variants.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `fg-20` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fg-21` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-ad-1b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-ad-3b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-cyp-i2b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-cyp-p2b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-cyp-p7b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-dd-3b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-df-3b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-dr-1b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-el-11b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-el-2b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-el-3b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-el-7b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-11b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-12b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-13b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-14b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-16b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-fg-5b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-p1-15b` | q6_variants.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `v-p1-8b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-p2-1b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-pc-6b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-st-5b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-tx-11b` | q6_variants.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `v-tx-15b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-tx-1b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `v-tx-3b` | q6_variants.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-1` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-10` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-11` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-12` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-13` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-14` | q7_fgs.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `fgx-15` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-16` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-17` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-18` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-19` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-2` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-20` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-21` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-22` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-23` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-25` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-26` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-27` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-28` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-29` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-3` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-30` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-31` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-32` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-4` | q7_fgs.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `fgx-6` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-7` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-8` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fgx-9` | q7_fgs.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `fga-1` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-10` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-11` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-12` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-13` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-14` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-15` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-16` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-17` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-18` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-19` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-2` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-20` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-21` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-22` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-23` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-24` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-25` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-26` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-27` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-28` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-29` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-3` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-30` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-31` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-32` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-33` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-34` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-35` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-36` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-37` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-38` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-39` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-4` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-40` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-41` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-42` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-43` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-44` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-45` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-5` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-6` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-7` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-8` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `fga-9` | q8_atlas.js | no `skill` field (the live page groups it as `read`, from its tags) (7aa5816) | `skill:'read'` | no |
| `ab2-3` | q9_gaps.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `ab2-4` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ab2-5` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `ab2-6` | q9_gaps.js | no `skill` field (the live page groups it as `apply`, from its tags) (9103bc6) | `skill:'apply'` | no |
| `dd-10` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-11` | q9_gaps.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `dd-12` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-13` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-14` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `dd-15` | q9_gaps.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `df-14` | q9_gaps.js | no `skill` field (the live page groups it as `read`, from its tags) (9103bc6) | `skill:'read'` | no |
| `sar-1` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |
| `sar-2` | q9_gaps.js | no `skill` field (the live page groups it as `tell`, from its tags) (9103bc6) | `skill:'tell'` | no |
| `sar-3` | q9_gaps.js | no `skill` field (the live page groups it as `recall`, from its tags) (9103bc6) | `skill:'recall'` | no |


### Q2. Content outside the questions that differs between the two lines

The 09/21 round is the later line, so its version is in the new build. Listed so the
difference is seen:

1. **Tell apart, Lecture 13, row "Family vs subfamily vs isoform vs allele"** (`tell.js`).
   - Live (9103bc6): "CYP2D6*4: 2 is the family (&gt;40% homology), D the subfamily
     (&gt;50% homology), 6 the isoform, *4 the allele. More than 18 families and more than
     40 subfamilies." Trap column: "The two homology cut-offs swapped, or written as 55%
     (the slide says &gt;50%)."
   - 09/21 (2ebfade), kept: "CYP2D6*4: 2 is the family (&gt;40% homology), D the
     subfamily, 6 the isoform, *4 the allele. More than 18 families and more than 40
     subfamilies. The subfamily cut-off is printed twice and differently: slide 9 says
     &gt;55%, slide 19 says &gt;50%; the family cut-off is &gt;40% on both." Trap column:
     "The two homology cut-offs swapped. The 09/15 audio says the percentage itself will
     not be asked; the level (allele, isoform, subfamily, family) will."
   - Not checked against the slides in this session (the decks were not downloaded).
2. **Guides tab** (`guide.js`, 2ebfade): the eight objective guides are laid out one
   point per bullet with side-by-side tables, following `src/guides/BULLETS.md`, which
   says no fact, number, citation, (T) mark or quote was to change and that memory-hook
   boxes made of letter acronyms were removed. The new layout has 110 bullet blocks and
   38 tables where the live page has 110 paragraphs and 26 tables. Not re-verified fact
   by fact in this session.
3. `gen_atlas_q.py` (2ebfade) writes `skill:'read'` on the generated atlas questions.

### Q3. Things you will see differently, to keep or change

1. **Names.** The page title changes from "PHAR 4342 — Cumulative Final Drill" to "PHAR
   4342 — exam drill", the header from "PHAR 4342 — Cumulative Final" to "PHAR 4342 —
   Medicinal Chemistry", and the Home Screen name from "4342 Drill" to "PHAR 4342", all
   from the 09/21 `course.js` title and short name. Keep, or give the wording you want.
2. **Settings footer count is wrong**: it says "551 questions"; the bank has 479. The
   kit core's `build.py` counts the 72 topic and subtopic entries of `TOPICS` as
   questions. The 09/21 page had the same fault; the live page shows no count. This
   needs a kit core fix (listed as a needed core change in the move report); until
   then the footer number is wrong.
3. **Sideways scrolling on a phone** (375 px wide) on Guides (226 px), Tell apart (95 px)
   and Reference (176 px). The live page has exactly the same overflow, so this is not
   new, but the kit's browser check now fails on it. A fix (wide tables scroll inside
   their own box; the long link in the guide wraps) changes how those tabs look, so it
   waits for your yes.
4. **No exam date** (`when`) is set: the final was Mon 9/21 and no later date was
   invented, so there is no countdown and no exam-date spacing.
5. **"Explain more" links and the review plan's grouping by reading section** need
   `src/links.js`, which neither line had; it is empty, so the review plan groups by
   topic. Writing links is new content and waits for your yes.
6. **Diagrams tab**: the core has one; this course listed no figures for it, so the tab
   does not show. The course's drawn figures still show in the questions and reading
   tabs. Listing them in a Diagrams tab is a design change and waits for your yes.
7. **Your name in two code comments** (`atlas.js` line 4, `q13_quizlet.js` lines 2 and
   4) shipped inside the live page's source. They now say "the student", because no
   decision to keep a personal name in the shared build is recorded for this course.
   Say if you want them back.
8. **STYLE.md** (the professors' question formats, verbatim) exists on neither line;
   none was created, because its content has to come from the course material.

### Q4. Checks that did not run or that fail for a kit reason

See `reviews/LOG.md`, entry 2026-11-01. `cite_check.py` did not run (no decks here), so
the citations of the 92 new questions have not been checked against the decks in this
session.
