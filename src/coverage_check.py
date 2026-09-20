#!/usr/bin/env python3
"""Map the question bank against the two documents that define the exam.

Final-Review.pdf names ten Yendapally topics for the 8 Yendapally questions.
Ex4-Prep-Work names six Sikazwe review areas and ten practice questions, each
of which asks for something specific — a cofactor, a ranking, a definition.

A topic with no question is a hole. A topic with questions that never touch
what the practice question actually asks for is a subtler hole, so each entry
carries the phrases that would have to appear somewhere in a question for that
ask to be covered, and both are checked.

    python3 coverage_check.py
"""
import json, re, subprocess, sys

HTML = '/mnt/user-data/outputs/PHAR4342_Final_Drill.html'

# ---------------------------------------------------------------- exam scope
# Each entry: label, the (topic, sub) buckets that serve it, and the phrases
# that show the specific ask is actually answered somewhere in the bank.
YEN = [
 ('Stereochemistry — assign R and S',
  [('stereo', 'rs')],
  [r'\bR\b.*\bS\b', r'priorit', r'lowest priority', r'clockwise']),
 ('Drug discovery — sources and uses, with examples',
  [('disc', 'sources'), ('disc', 'approach')],
  [r'plant', r'microorganism', r'mammalian']),
 ('Structure–activity relationship',
  [('disc', 'sar')],
  [r'structure.activity', r'\bSAR\b', r'agonist', r'antagonist', r'quaternary ammonium']),
 ('Drug–receptor interactions — amino acid side chains and the bonds they form',
  [('recept', 'bonds'), ('recept', 'aa')],
  [r'ionic', r'hydrogen bond', r'hydrophobic', r'covalent',
   r'side chain', r'aspart|glutam|lysin|argin|serin|cystein']),
 ('Bioisosterism',
  [('disc', 'bio')],
  [r'bioisoster', r'classical', r'non-?classical', r'tetrazole']),
 ('Physicochemical — acidic, basic and neutral groups',
  [('physchem', 'acidbase')],
  [r'\bacidic\b', r'\bbasic\b', r'\bneutral\b', r'pKa']),
 ('Physicochemical — partition coefficient, water solubility, effect of '
  'hydrophilic and lipophilic groups',
  [('physchem', 'logp')],
  [r'partition coefficient', r'log ?P|logP|ClogP', r'water solub',
   r'hydrophilic', r'lipophilic']),
 ('ADMET Absorption I — efflux and influx transporters, examples, effect on '
  'bioavailability',
  [('admet', 'trans')],
  [r'efflux', r'influx', r'P-?gp|P-?glycoprotein', r'bioavailab',
   r'PEPT1|OATP|BCRP|MRP']),
 ('ADMET Absorption II — drug–drug interactions, examples and effects',
  [('admet', 'ddi')],
  [r'drug.drug interaction|\bDDI\b', r'chelat', r'adsorb|activated charcoal',
   r'motility|peristalsis', r'rifampi|verapamil']),
 ('ADMET Distribution — factors and significance of Vd',
  [('admet', 'vd')],
  [r'volume of distribution|\bVd\b', r'plasma protein|albumin',
   r'tissue|body water|blood flow']),
]

SIK = [
 ('Functional groups — amines, amides, carboxylic acids, esters, carbamates, '
  'carbonates, sulfur groups',
  [('fgs', None)],
  [r'\bamine\b', r'\bamide\b', r'carboxylic acid', r'\bester\b',
   r'carbamate', r'carbonate', r'sulfon|sulfox|sulfide']),
 ('Metabolism patterns and consequences (practice Q2ii: itemize all)',
  [('dmfound', 'conseq'), ('dmfound', 'phases'), ('dmfound', 'analysis')],
  [r'inactiv', r'active metabolite', r'\bprodrug\b', r'toxic metabolite|bioactivat|reactive metabolite',
   r'unchanged|no change', r'pattern']),
 ('Metabolic pathways — enzyme, functional group affected, cofactor '
  '(practice Q1, Q3, Q4, Q6, Q7, Q10)',
  [('paths', None)],
  [r'cofactor|co-factor', r'UDPGA|PAPS|glutathione|acetyl-?CoA|SAM',
   r'UGT|SULT|GST|NAT|COMT|TPMT', r'phase 1|phase 2']),
 ('CYP lecture — induction, inhibition, polymorphism',
  [('cyp', None)],
  [r'induc', r'inhibit', r'polymorph', r'poor metabol|ultrarapid',
   r'CYP3A4|CYP2D6|CYP2C19']),
 ('Functional groups and metabolism, plus factors influencing metabolism',
  [('fgdm', None), ('factors', None)],
  [r'\bage\b|neonat|elderly', r'genetic', r'disease|hepatic impair',
   r'\bdose\b', r'\broute\b']),
 ('Elimination and toxicity',
  [('elim', None), ('tox', None)],
  [r'renal|kidney', r'biliary|bile', r'pH trapping', r'enterohepatic',
   r'toxicophor', r'NAPQI|acetaminophen|APAP']),
]

# Specific asks from the ten practice questions that are easy to miss.
ASKS = [
 ('T/F: CYPs also catalyse epoxidation, dealkylation and dehalogenation',
  [r'epoxidation', r'dealkylation', r'dehalogenation']),
 ('Itemize all metabolic patterns and consequences discussed in class',
  [r'itemi[sz]e|list all|which set|all four|all three']),
 ('Rank the routes of elimination from major to minor',
  [r'rank|order|major to minor']),
 ('Hydrophilic vs lipophilic xenobiotics — which route each takes',
  [r'hydrophilic .*(urine|renal|kidney)|(urine|renal|kidney) .*hydrophilic',
   r'lipophilic .*(bile|biliary|fec)|(bile|biliary|fec) .*lipophilic']),
 ('Identify the toxicophoric functionalities discussed in class',
  [r'toxicophor']),
 ('What is pH trapping?', [r'pH trapping|ion trapping']),
 ('What is enterohepatic recycling?', [r'enterohepatic']),
 ('Enzyme + cofactor + elimination route named together',
  [r'cofactor.{0,400}?(renal|urine|bile|biliary)|'
   r'(renal|urine|bile|biliary).{0,400}?cofactor']),
]


def load():
    js = r"""
      const fs=require('fs'), vm=require('vm');
      let c=[...fs.readFileSync(process.argv[1],'utf8')
              .matchAll(/<script>([\s\S]*?)<\/script>/g)][0][1];
      const b=c.lastIndexOf('   BOOT'); c=c.slice(0,c.lastIndexOf('/* ===',b));
      c+='\nglobalThis.__Q=QUESTIONS;';
      const sb={console,localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
        document:{querySelector:()=>({}),querySelectorAll:()=>[],getElementById:()=>({}),
                  createElement:()=>({}),body:{}},
        window:{},prompt:()=>'x',setTimeout:()=>0,clearTimeout(){},
        Date,Math,JSON,Object,Array,String,Number,Boolean,RegExp,Error,isNaN,parseInt,parseFloat};
      sb.globalThis=sb; vm.createContext(sb); vm.runInContext(c,sb);
      process.stdout.write(JSON.stringify(sb.__Q.map(q=>({
        id:q.id, prof:q.prof, tier:q.tier, topic:q.topic, sub:q.sub,
        text:[q.stem, ...(q.options||[]).map(o=>o.t+' '+(o.why||'')),
              Array.isArray(q.teach)?q.teach.map(p=>p.h+' '+p.t).join(' '):(q.teach||''),
              q.cite||'', q.note||''].join(' ')
      }))));
    """
    r = subprocess.run(['node', '-e', js, '--', HTML], capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit('ERROR: could not read the built page\n' + r.stderr.strip())
    return json.loads(r.stdout)


def report(title, entries, Q, exam_share):
    print('\n=== %s — %s ===' % (title, exam_share))
    holes = 0
    for label, buckets, phrases in entries:
        pool = [q for q in Q if any(
            q['topic'] == t and (s is None or q['sub'] == s) for t, s in buckets)]
        blob = ' '.join(q['text'] for q in pool)
        missing = [p for p in phrases if not re.search(p, blob, re.I)]
        mark = 'ok  ' if pool and not missing else ('THIN' if pool else 'HOLE')
        if mark != 'ok  ':
            holes += 1
        print('  %s %3d q  %s' % (mark, len(pool), label))
        if missing:
            print('          not found in those questions: %s'
                  % ', '.join(m[:42] for m in missing))
    return holes


def main():
    Q = load()
    print('=== Exam scope coverage ===')
    print('  Sources: Final-Review.pdf (Yendapally topics, exam split)')
    print('           Ex4-Prep-Work 1.pdf (Sikazwe review areas + 10 practice questions)')
    print('  Bank: %d questions' % len(Q))

    h1 = report('Yendapally', YEN, Q, '8 of the 50 questions')
    h2 = report('Sikazwe', SIK, Q, '42 of the 50 questions')

    print('\n=== Specific asks from the ten practice questions ===')
    blob = ' '.join(q['text'] for q in Q)
    h3 = 0
    for label, phrases in ASKS:
        missing = [p for p in phrases if not re.search(p, blob, re.I | re.S)]
        if missing:
            h3 += 1
            print('  MISS  %s' % label)
            print('          no question contains: %s'
                  % ', '.join(m[:52] for m in missing))
        else:
            print('  ok    %s' % label)

    print('\n=== Weight against the blueprint ===')
    pools = {}
    for q in Q:
        k = q['prof'] + ' ' + q['tier']
        pools[k] = pools.get(k, 0) + 1
    need = {'Yendapally old': 8, 'Sikazwe new': 38, 'Sikazwe old': 4}
    for k in sorted(pools):
        n, w = pools[k], need.get(k, 0)
        print('  %-16s %4d questions in the bank, supplies %2d of the 50  '
              '(%d questions per exam question)'
              % (k, n, w, round(n / w) if w else 0))

    total = h1 + h2 + h3
    print('\n%s' % ('no holes found against the stated scope' if not total
                    else '%d scope entries are thin or missing' % total))
    return 0


if __name__ == '__main__':
    sys.exit(main())
