#!/usr/bin/env python3
"""Question-by-question comparison of main and the 09/21 round, for OPEN_QUESTIONS.md.

    python3 question_diff.py <bank_main.json> <bank_restore.json> <skills_live.json> <files.json>

The two bank files are what loadq.js (beside this file) prints for each line's
question files; skills_live.json is the skill the live page's own skillOf()
gives each question (skills_live.js, run on the live index.html); files.json
maps each question file on this branch to the ids it holds. Prints the
Markdown table of every shared id whose content differs, with both versions.
Used on 2026-11-01 for the move onto the kit core; nothing here edits a question.
"""
import json, sys

main = json.load(open(sys.argv[1]))['q']
rest = json.load(open(sys.argv[2]))['q']
live_skill = json.load(open(sys.argv[3]))
# last commit on main touching each question file (git log -1 origin/main -- <file>): 9103bc6
# for every file except q8_atlas.js
MAIN_COMMIT = {'q8_atlas.js': '7aa5816'}

def file_of(qid, files):
    for f, ids in files.items():
        if qid in ids:
            return f
    return '?'

files = json.load(open(sys.argv[4]))
missing = [k for k in main if k not in rest]
rows, changed = [], 0
for k in main:
    a, b = main[k], rest.get(k)
    if b is None or a == b:
        continue
    fields = sorted(f for f in set(a) | set(b) if a.get(f) != b.get(f))
    f = file_of(k, files)
    mc = MAIN_COMMIT.get(f, '9103bc6')
    if fields != ['skill']:
        raise SystemExit(f'{k}: differs in {fields}; this script only tabulates skill differences')
    moves = live_skill[k] != b['skill']
    changed += moves
    rows.append((0 if moves else 1, f, k, f"no `skill` field (the live page groups it as `{live_skill[k]}`, from its tags)",
                 f"`skill:'{b['skill']}'`", mc, 'yes' if moves else 'no'))
rows.sort()
print(f'main ids missing after the move: {len(missing)}')
print(f'shared ids that differ: {len(rows)}; Weak spots grouping changes for {changed}')
print()
print('| id | file | main version (commit) | 09/21 version (2ebfade), kept | Weak spots grouping changes |')
print('|---|---|---|---|---|')
for _, f, k, va, vb, mc, mv in rows:
    print(f'| `{k}` | {f} | {va} ({mc}) | {vb} | {mv} |')
