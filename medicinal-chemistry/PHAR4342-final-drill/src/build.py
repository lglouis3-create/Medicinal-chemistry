#!/usr/bin/env python3
"""Assemble the single-file quiz app from shell + data + views.

Every JavaScript source is syntax-checked before anything is assembled, and the
assembled script is checked again before the output file is replaced. A source
with a stray comma or bracket therefore stops the build with the offending file
and line named, instead of producing an HTML file that loads to a blank screen.
"""
import json, re, io, os, subprocess, sys, tempfile

# The data files, in the order they are concatenated into the page. TOPICS is
# declared at the top of q1_cyp.js, so it has to precede the other question
# files; atlas.js has to precede q8_atlas.js, which draws on it.
DATA_FILES = ['atlas.js', 'diagrams.js',
              'q1_cyp.js', 'q2_fgdm.js', 'q3_elimtox.js', 'q4_paths.js',
              'q5_yendapally.js', 'q6_variants.js', 'q7_fgs.js',
              'q8_atlas.js', 'q9_gaps.js', 'q10_sata.js', 'q11_sata2.js',
              'q12_figures.js', 'q13_quizlet.js']

# Everything that has to parse before a build is allowed to proceed. Derived
# from DATA_FILES rather than listed again, so adding a question file cannot
# leave it syntax-checked in one place and unchecked in the other.
SOURCES = DATA_FILES + ['reference.js', 'views.js']


def node_check(path, label):
    """Run node --check and stop the build on a syntax error."""
    r = subprocess.run(['node', '--check', path], capture_output=True, text=True)
    if r.returncode != 0:
        msg = (r.stderr or r.stdout).strip()
        sys.exit(f'ERROR: {label} has a JavaScript syntax error\n{msg}')


print('checking sources...')
for f in SOURCES:
    node_check(f, f)
print(f'  {len(SOURCES)} sources parse cleanly')

shell = open('shell.html', encoding='utf-8').read()
images = json.load(open('images.json'))

parts = []
parts.append('const IMAGES = ' + json.dumps(images) + ';\n')
# rings.json is no longer inlined: the ring questions draw from the atlas, and
# the atlas structures are verified. rings.py is kept, corrected, for reference.
for f in DATA_FILES:
    parts.append(open(f, encoding='utf-8').read() + '\n')
parts.append(open('reference.js', encoding='utf-8').read() + '\n')
DATA = ''.join(parts)

# replace the three placeholder declarations in the shell with the real data
old = """const IMAGES = /*__IMAGES__*/{};
const QUESTIONS = /*__QUESTIONS__*/[];
const TOPICS = /*__TOPICS__*/[];"""
if old not in shell:
    sys.exit('ERROR: data placeholder block not found in shell.html')
shell = shell.replace(old, DATA)

# append the views/runtime just before the closing script tag
views = open('views.js', encoding='utf-8').read()
marker = '</script>\n</body>'
if marker not in shell:
    sys.exit('ERROR: closing script marker not found')
shell = shell.replace(marker, '\n' + views + '\n</script>\n</body>')

# check the assembled script as one unit, so an assembly-level fault is caught too
scripts = re.findall(r'<script>([\s\S]*?)</script>', shell)
if len(scripts) != 1:
    sys.exit(f'ERROR: expected exactly 1 script block in the output, got {len(scripts)}')
with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as t:
    t.write(scripts[0])
    tmp_js = t.name
try:
    node_check(tmp_js, 'the assembled app script')
finally:
    os.unlink(tmp_js)
print('  assembled script parses cleanly')

# write to a temporary file first, so a failed build never leaves a half-written
# or truncated HTML in place of the last good one
out = '/mnt/user-data/outputs/PHAR4342_Final_Drill.html'
os.makedirs('/mnt/user-data/outputs', exist_ok=True)
tmp_out = out + '.tmp'
with open(tmp_out, 'w', encoding='utf-8') as fh:
    fh.write(shell)
os.replace(tmp_out, out)
print(f'wrote {out}  ({len(shell)/1024/1024:.2f} MB)')
