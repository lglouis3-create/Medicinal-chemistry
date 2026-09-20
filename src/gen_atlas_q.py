#!/usr/bin/env python3
"""Generate "name the structure" questions from the atlas.

    python3 gen_atlas_q.py > q8_atlas.js

The atlas is organised the way the confusions actually run: each section holds
the groups that get mistaken for one another, and the difference inside a
section is one atom or one position. That structure is what makes a usable
question. The drawn structure comes from the atlas renderer, the three wrong
options come from the same section, and each wrong option's explanation names
the specific misread that produces it rather than describing the group in the
abstract.

Two pieces are hand-written here rather than pulled from the atlas:

  SECTIONS  the concept block for each section, its verified deck slides, and
            the sentence naming what separates the members of that section.
  PAIRS     the confusions sharp enough to deserve their own diagnosis, keyed
            (correct answer, wrong answer).

Slide numbers were read off MCFGs8_1718_26.pdf page by page and are cited by
the slide's own title. Nothing here is cited to a slide that was not checked.
"""
import json, random, re, subprocess, sys

random.seed(4342)                # fixed shuffle, so rebuilds do not churn

# --------------------------------------------------------------------------
# Per-section material. `op` names the single operation that settles the
# section. `mis` is the misread that produces a wrong pick, written so it can
# follow "Reading it that way means ...".
# --------------------------------------------------------------------------
SECTIONS = {

 ('rank', 'Alcohols'): dict(
  sub='ox', cap=3,
  slides='slides 24–26 ("ALCOHOLS", "ALCOHOL FG Examples 1" and "2")',
  op='count the carbons bonded to the one carbon that carries the OH',
  mis='the carbons of the chain as a whole were counted instead of the carbons '
      'attached to the single carbon holding the hydroxy group',
  note='From lecture audio (Mon 08/17, 1:24:19), Dr. Sikazwe gives the mechanism '
       'in one line: "you can decrease polarity by just increasing how much you '
       'cover ... that hydroxy group."',
  teach=[
   ('What sets the rank',
    'The rank of an alcohol is decided by one carbon only: the carbon the hydroxy '
    'group is attached to. Count how many other carbons are bonded to that carbon. '
    'One makes it primary, two secondary, three tertiary. A long chain hanging off '
    'the far end of the molecule changes nothing, because that chain is not bonded '
    'to the carbon holding the OH.'),
   ('Why the rank changes how the molecule behaves',
    'Each carbon added to the carbon bearing the OH covers more of that hydroxy '
    'group. A hydroxy group is what makes an alcohol polar, because it hydrogen '
    'bonds to water; shielding it behind hydrocarbon leaves less of it available '
    'to do that. So polarity falls and lipophilicity rises as the rank goes up, '
    'and slide 24 draws exactly that arrow along ethanol, 2-propanol and '
    't-butanol: more water soluble at the primary end, more oily at the tertiary '
    'end.'),
   ('Why a tertiary alcohol is not oxidised',
    'Alcohol dehydrogenase works by removing a hydrogen from the carbon that '
    'holds the OH. A primary alcohol has two hydrogens there and goes to an '
    'aldehyde; a secondary alcohol has one and goes to a ketone; a tertiary '
    'alcohol carries three carbons on that position and no hydrogen at all, so '
    'there is nothing for the enzyme to remove and the reaction cannot run '
    '(Lecture #14, MCMet-9_16_2026.pdf slides 22–23; the 09/10 lecture states it '
    'as tertiary alcohols are not touched by alcohol dehydrogenase).'),
   ('Quaternary alcohol does not exist',
    'Four carbons on a carbon use all four of its bonds, leaving nothing for the '
    'oxygen to attach to. When the name appears in an answer list it can be struck '
    'out before the structure is even read.')]),

 ('rank', 'Amines'): dict(
  sub='n', cap=3,
  slides='slides 40–43 ("AMINES", "ALKYL AMINE Examples", "AROMATIC AMINE '
         'Examples", "QUATERNARY AMINE Examples")',
  op='count the carbons bonded to the nitrogen itself',
  mis='the count was taken on a neighbouring carbon rather than on the nitrogen',
  teach=[
   ('Count what is on the nitrogen',
    'An amine is ranked by how many carbons are bonded to the nitrogen: one is '
    'primary, two secondary, three tertiary, four quaternary. This is where alcohols '
    'and amines part company. For an alcohol the count is taken on the carbon next '
    'to the oxygen; for an amine it is taken on the nitrogen itself.'),
   ('Why the quaternary amine behaves unlike the other three',
    'A fourth carbon uses the nitrogen\'s lone pair, so the nitrogen carries a '
    'positive charge that does not appear and disappear with pH. With no lone pair '
    'left to accept a proton it is neither acidic nor basic, and the permanent charge '
    'keeps it from crossing into the central nervous system (CNS) by passive '
    'diffusion. Acetylcholine and bethanechol are built this way deliberately.'),
   ('Aromatic amine is a position, not a count',
    'An aryl amine is named by where the nitrogen sits: bonded straight to the ring. '
    'The ring pulls the nitrogen\'s lone pair into its own electron system, so that '
    'pair is less available to accept a proton and the amine is far less basic than '
    'an alkyl one. Put even a single carbon between the nitrogen and the ring and '
    'the group reverts to an ordinary alkyl amine.')]),

 ('oxy', 'One oxygen'): dict(
  sub='ox', cap=3,
  slides='slides 24–38 (alcohols 24, phenol 28, ether 31, aldehyde 35, ketone 37)',
  op='look at what the oxygen is bonded to and whether that bond is double',
  mis='the oxygen was found but what it is bonded to was not checked',
  teach=[
   ('One oxygen, and what decides the name',
    'Every group in this set holds a single oxygen, so the name comes entirely from '
    'what that oxygen is bonded to. An O–H on a carbon that is not aromatic is an '
    'alcohol. The same O–H on a benzene ring is a phenol. An oxygen with a carbon on '
    'each side and no double bond is an ether. A doubly bonded oxygen is a carbonyl, '
    'and what sits beside that carbonyl separates the last two: at least one hydrogen '
    'makes it an aldehyde, a carbon on both sides makes it a ketone.'),
   ('Why phenol is filed apart from the alcohols',
    'The ring withdraws electron density from the oxygen, and once the proton leaves, '
    'the ring delocalises the negative charge that is left behind. A phenol therefore '
    'gives up its proton where an alcohol does not, which makes phenol weakly acidic '
    'and alcohol neutral. That is a large enough difference in behaviour to earn a '
    'separate name and a separate slide.'),
   ('Why aldehydes are scarce in finished drugs',
    'An aldehyde carbon is exposed and reactive: it oxidises onward to a carboxylic '
    'acid, or reacts with other aldehyde molecules. Few marketed drugs carry one, '
    'which is itself a clue when an aldehyde appears among the options.')]),

 ('phenolics', 'Where the second hydroxy sits'): dict(
  sub='ox', cap=3,
  slides='slides 28–30 ("PHENOL & PHENOLICS", "PHENOL & PHENOLIC FG Examples", '
         '"PHENOL Note")',
  op='count the ring carbons between the two hydroxy groups',
  mis='both hydroxy groups were seen but their spacing around the ring was not counted',
  teach=[
   ('Count the ring positions between the two hydroxy groups',
    'All of these carry hydroxy groups on a benzene ring and differ only in spacing. '
    'On adjacent carbons gives catechol, the ortho arrangement. One carbon between '
    'them gives resorcinol, meta. Directly across the ring gives hydroquinone, para. '
    'A single hydroxy on its own is plain phenol.'),
   ('Only the ortho arrangement is a COMT substrate',
    'Catechol-O-methyltransferase (COMT) requires two hydroxy groups on neighbouring '
    'ring carbons in order to bind and methylate one of them. Resorcinol and '
    'hydroquinone hold their second hydroxy too far away and neither is a substrate. '
    'That is the reason terbutaline was built on a resorcinol ring: the same drug '
    'carrying a catechol ring would be methylated and cleared rapidly.'),
   ('What air and light do to a phenolic',
    'A phenolic oxidises to a quinone, and quinones are coloured. A white tablet that '
    'has turned pink or brown has been through this reaction, and the patient reports '
    'that the drug has stopped working.')]),

 ('ca', 'The parent, and the single-sided edits'): dict(
  sub='acyl', cap=3,
  slides='slides 46–52 ("CARBOXYLIC ACID" 46, "ESTER" 48, "CARBONATE" 49, '
         '"AMIDES" 50, "CARBAMATE" 51)',
  op='look at what sits on each side of the carbonyl carbon',
  mis='one side of the carbonyl was read and the other side was not',
  teach=[
   ('Start from the acid and change one side',
    'Carboxylic acid is the parent: a carbonyl carbon carrying a hydroxy, written '
    'COOH. Replace that hydroxy hydrogen with a carbon and it is an ester. Replace '
    'the whole hydroxy oxygen with a nitrogen and it is an amide. Put a second oxygen '
    'on the far side of the carbonyl and it is a carbonate. Put an oxygen on one side '
    'and a nitrogen on the other and it is a carbamate.'),
   ('Counting oxygens separates acid from carbonate',
    'A carboxylic acid holds two oxygens on the carbonyl carbon and a carbonate holds '
    'three. Counting them settles that pair faster than comparing shapes.'),
   ('Stability is what these edits buy',
    'Carboxylesterase cleaves esters quickly, so an ester is chosen when rapid '
    'breakdown is wanted and avoided when it is not. An amide resists the same enzyme '
    'far better, and a carbamate falls between the two. Procaine carries an ester and '
    'is cleaved by plasma esterases; acetaminophen carries an amide and is not.'),
   ('A carbamate has to be read whole',
    'A carbamate is O–C(=O)–N. Read only the left half and it looks like an ester; '
    'read only the right half and it looks like an amide. Both wrong answers come '
    'from stopping at one side of the carbonyl.')]),

 ('ca', 'The three that get mixed up'): dict(
  sub='acyl', cap=3,
  slides='slides 53–55 ("UREA", "IMIDE", "GUANIDINE")',
  op='write the group out as a formula and read the order of the atoms',
  mis='the right atoms were identified but their order around the centre was not',
  teach=[
   ('Write each one as a formula',
    'Urea is N–C(=O)–N: a carbonyl with a nitrogen on each side. Imide is '
    'C(=O)–N–C(=O): a nitrogen with a carbonyl on each side — the same three pieces '
    'in the opposite order. Guanidine is N–C(=N)–N: urea with the carbonyl oxygen '
    'replaced by a nitrogen. Biguanide is two guanidines sharing a nitrogen, and '
    'metformin is the one to know.'),
   ('The order decides how the group behaves',
    'In an imide the N–H sits between two carbonyls, both withdrawing electron '
    'density from it, so that hydrogen comes off and the group is acidic. Phenytoin '
    'salts are made at exactly this position. In a guanidine the extra nitrogen '
    'donates electron density instead, and the protonated form delocalises its '
    'positive charge over all three nitrogens, which makes a simple alkyl '
    'guanidine strongly basic and charged throughout the physiological range. '
    'Putting the guanidine on a ring pulls that electron density away again: '
    'clonidine is an aryl guanidine and is about half un-ionised at pH 7.4, '
    'which is how it reaches the central nervous system (CNS).')]),

 ('ca', 'Same group, closed into a ring'): dict(
  sub='acyl', cap=2,
  slides='slides 48 ("ESTER"), 50 ("AMIDES") and 74 ("4-SIDED RINGS")',
  op='find the carbonyl inside the ring and check the atom next to it',
  mis='the ring was named before the atom beside the carbonyl was identified',
  teach=[
   ('Closing a group into a ring does not change what it is',
    'A lactone is an ester whose two ends are joined into a ring; a lactam is an amide '
    'joined the same way. Both the ring name and the group name are correct. Ring size '
    'is written with a Greek letter, and β means a four-atom ring.'),
   ('The test for a β-lactam',
    'A β-lactam needs two things at once: a four-membered ring containing nitrogen, '
    'and a carbonyl inside that ring. Nitrogen without the carbonyl is an azetidine. '
    'That carbonyl is also the bond β-lactamase attacks, which is the chemistry '
    'behind penicillin resistance.'),
   ('A lactone is never a ketone',
    'Both show a C=O inside a ring. The oxygen sitting next to the carbonyl carbon is '
    'the whole difference, because a ketone carbonyl has a carbon on each side.')]),

 ('n', 'Nitro is not nitrile'): dict(
  sub='n', cap=3,
  slides='slides 44–45 ("CYANO or NITRILE", "NITRO"), with halogenated '
         'hydrocarbons on slides 22–23',
  op='name the atoms the group is built from and count each one',
  mis='the nitrogen was found and the two names were then taken as interchangeable',
  teach=[
   ('Two groups one letter apart in the name',
    'Nitro is NO2: a nitrogen bonded to the molecule and carrying two oxygens. '
    'Nitrile, also called cyano, is C≡N: a carbon triple bonded to a nitrogen, with '
    'no oxygen anywhere in the group. Looking for oxygen settles the pair at once.'),
   ('What they have in common',
    'Both withdraw electron density from whatever they are attached to, so both are '
    'electron-withdrawing groups, both lower the basicity of a nearby amine and both '
    'raise the acidity of a nearby acid (MCFGs8_1718_26.pdf slide 94).'),
   ('Azo and halogenated hydrocarbon in the same set',
    'An azo group is N=N joining two rings, and any molecule containing one is '
    'coloured red, orange or yellow — prontosil rubrum is the example. A halogenated '
    'hydrocarbon is a halogen bonded to carbon and nothing further, which raises '
    'lipophilicity and changes the electron distribution around it.')]),

 ('s', 'Zero, one, two, three oxygens'): dict(
  sub='sulf', cap=3,
  slides='slides 64–67 ("SULFIDES (Thioethers)", "SULFOXIDES", "SULFONES", '
         '"SULFONIC ACIDS")',
  op='count the oxygens attached to the sulfur',
  mis='the sulfur was found and its oxygens were not counted',
  teach=[
   ('Count the oxygens on the sulfur',
    'This set is one sulfur carrying a different number of oxygens each time. No '
    'oxygen, with a carbon on each side, is a sulfide, also called a thioether. One '
    'oxygen is a sulfoxide. Two is a sulfone. Three, with an OH, is a sulfonic acid. '
    'A sulfur carrying only a hydrogen at the end of a chain is a thiol.'),
   ('Where the behaviour changes',
    'Sulfide, sulfoxide and sulfone are all neutral. Sulfonic acid is not: three '
    'oxygens delocalise the negative charge of the anion so effectively that the '
    'proton comes off completely. It is a strong acid, stays ionised at every '
    'physiological pH, and the permanent charge keeps the molecule out of cells.'),
   ('How the drawing can mislead',
    'A sulfone is drawn with its two oxygens at right angles, or skewed, or one up '
    'and one down, depending on how the rest of the molecule is laid out. The number '
    'of oxygens is what names it, not the angle they are drawn at.')]),

 ('s', 'Sulfone plus something else'): dict(
  sub='sulf', cap=3,
  slides='slides 68–70 ("SULFONAMIDES & SULFONYLUREAS", "PHOSPHONATES", '
         '"PHOSPHATES")',
  op='find the central atom first, then read what is bonded to it',
  mis='part of the group was read and the atoms attached beyond it were not',
  teach=[
   ('Build them up from the sulfone',
    'A sulfonamide is a sulfone with a nitrogen on one side: S(=O)2–N. A sulfonylurea '
    'is that sulfonamide joined to a urea, so the whole chain reads S(=O)2–N–C(=O)–N. '
    'How much of the structure is being asked about decides which of the two names is '
    'correct, which is why the question matters as much as the drawing.'),
   ('A sulfonamide is acidic',
    'The two oxygens withdraw electron density from the N–H, so a sulfonamide gives '
    'up that proton, which is the opposite of what a nitrogen on its own would '
    'suggest. Sulfamethoxazole is acidic at this nitrogen. Furosemide carries a '
    'sulfonamide as well, but the group that makes furosemide acidic at body pH is '
    'its carboxylic acid, so a question about furosemide\'s ionisation is asking '
    'about the acid rather than the sulfonamide.'),
   ('The phosphorus pair',
    'Phosphonate and phosphate are built on phosphorus rather than sulfur, so neither '
    'can name a structure with no P in it. A phosphonate carries three oxygens on the '
    'phosphorus and a phosphate carries four. The bisphosphonates for bone density '
    'are phosphonates; a phosphate ester is a standard way to build a water-soluble '
    'prodrug.')]),

 ('small-rings', 'Strained and reactive'): dict(
  sub='rings', cap=3,
  slides='slides 73–74 ("Heterocyclics 3-SIDED RINGS", "4-SIDED RINGS")',
  op='count the atoms in the ring, then name the heteroatom in it',
  mis='the heteroatom was named and the ring size was not counted',
  teach=[
   ('Three-membered rings',
    'An epoxide, also called an oxirane, is a three-membered ring containing oxygen, '
    'and it is technically an ether as well. An aziridine is the same ring with '
    'nitrogen in place of that oxygen. Both carry severe angle strain, because 60° '
    'bond angles are far from the 109° a saturated carbon prefers, and that strain is '
    'released when a nucleophile opens the ring.'),
   ('Why the strain matters in this course',
    'An epoxide is the metabolite formed when a CYP enzyme oxidises an alkene or an '
    'aromatic ring, and its strain is why the product attacks protein and DNA rather '
    'than leaving the body unchanged (Lecture #15, MCMet-9_17_2026.pdf slides 31–44). '
    'An aziridine is built into several anticancer agents for the same reactivity.'),
   ('Four-membered rings',
    'Azetidine and β-lactam are both four-membered nitrogen rings, and the carbonyl '
    'is the only difference: the β-lactam has one inside the ring, the azetidine has '
    'none.')]),

 ('five', 'One heteroatom, and its saturated partner'): dict(
  sub='rings', cap=3,
  slides='slides 75–77 ("5-SIDED RINGS (1 O atom)", "(1 N atom)", "(1 S atom)")',
  op='name the heteroatom, then count the double bonds in the ring',
  mis='the heteroatom was named correctly and the double bonds were not counted',
  teach=[
   ('Name the atom, then count the double bonds',
    'Furan holds one oxygen and two double bonds; remove both and it becomes '
    'tetrahydrofuran (THF). Pyrrole holds one nitrogen and two double bonds; remove '
    'them and it becomes pyrrolidine. Thiophene holds one sulfur and two double bonds.'),
   ('The aromatic and saturated forms behave differently',
    'Pyrrole is flat and aromatic, so its nitrogen lone pair is part of the ring\'s '
    'electron system and is not available to accept a proton — the nitrogen is barely '
    'basic. Pyrrolidine is puckered and saturated, its lone pair is free, and it '
    'behaves as an ordinary basic secondary amine. The two rings differ by two lines '
    'on the page and behave nothing alike.'),
   ('Thiophene as a benzene replacement',
    'Thiophene is close enough to benzene in size and electron distribution to be '
    'swapped in without losing activity, which makes it a standard bioisostere.')]),

 ('five', 'Two heteroatoms'): dict(
  sub='rings', cap=3,
  slides='slides 78–80 ("5-SIDED RINGS (1 O + 1 N atoms)", "(2 N atoms)", '
         '"(1 S + 1 N atoms)")',
  op='read around the ring and count the carbons between the two heteroatoms',
  mis='the two heteroatoms were identified and their spacing was not read',
  teach=[
   ('Same atoms, different positions, different names',
    'Two nitrogens with one carbon between them is imidazole; the same two nitrogens '
    'side by side is pyrazole. An oxygen and a nitrogen separated by a carbon is '
    'oxazole; move that nitrogen next to the oxygen and it is isoxazole. A sulfur and '
    'a nitrogen separated by a carbon is thiazole. Counting atoms never settles these '
    'because the atoms are identical — the spacing is the answer.'),
   ('What the iso prefix marks',
    'Oxazole and isoxazole hold the same atoms in the same size ring. Reading around '
    'from the oxygen and noting whether the nitrogen is the very next atom or the one '
    'after it is the entire decision.'),
   ('Imidazoline is imidazole with one double bond removed',
    'Losing that double bond costs the ring its aromaticity, which changes how the '
    'nitrogens behave — oxymetazoline is built on it.')]),

 ('five', 'Keep adding nitrogens'): dict(
  sub='rings', cap=2,
  slides='slides 79–81 ("5-SIDED RINGS (2 N atoms)" and "5-SIDED RINGS")',
  op='count the nitrogens in the ring',
  mis='the ring was recognised as nitrogen-rich and the nitrogens were not counted',
  teach=[
   ('Count the nitrogens',
    'Three nitrogens in a five-membered ring is a triazole. Four is a tetrazole. A '
    'ring holding a sulfur plus two nitrogens is a thiadiazole. Counting is the whole '
    'task here.'),
   ('Why tetrazole earns the attention',
    'A tetrazole is about as acidic as a carboxylic acid, because its anion '
    'delocalises the negative charge across all four nitrogens much as a carboxylate '
    'spreads it across two oxygens. That makes it a standard non-classical '
    'replacement for COOH: losartan carries a tetrazole where a carboxylic acid would '
    'otherwise sit, keeping the acidity while avoiding the conjugation a carboxylic '
    'acid undergoes.')]),

 ('six', 'One nitrogen'): dict(
  sub='rings', cap=2,
  slides='slide 82 ("6-SIDED RINGS (1 N atom)")',
  op='count the double bonds left in the ring',
  mis='the nitrogen was found and the level of saturation was not read',
  teach=[
   ('Three rings, three levels of saturation',
    'Pyridine is a six-membered ring with one nitrogen and three double bonds, fully '
    'aromatic. Remove one double bond and it is a dihydropyridine (DHP). Remove all '
    'three and it is piperidine, fully saturated.'),
   ('Aromatic does not mean phenyl',
    'Pyridine satisfies aromaticity, but phenyl names a benzene ring made only of '
    'carbon. A ring containing a heteroatom is never phenyl, whatever its electron '
    'count.'),
   ('Where the middle rung shows up',
    'Dihydropyridine names a class of calcium channel blockers: amlodipine and '
    'nifedipine are built on that ring, which is why the class shares the name.')]),

 ('six', 'Two nitrogens'): dict(
  sub='rings', cap=3,
  slides='slides 83–85 ("6-SIDED RINGS (2 N atoms)…#1 and #2", "6-SIDED RINGS")',
  op='count the carbons between the two nitrogens, then check for double bonds',
  mis='both nitrogens were seen and the carbons between them were not counted',
  teach=[
   ('Where the two nitrogens sit',
    'Nitrogens one carbon apart is pyrimidine. Nitrogens directly across the ring '
    'from each other is pyrazine. The saturated version of that across-the-ring '
    'arrangement is piperazine. Replace one of piperazine\'s nitrogens with an oxygen '
    'and it becomes morpholine.'),
   ('Why pyrimidine keeps appearing',
    'Pyrimidine is the ring of cytosine, thymine and uracil, so drugs built to '
    'interfere with nucleic acid synthesis are built on it — 5-fluorouracil is one. '
    'Phenobarbital and sulfadiazine carry the same ring for unrelated reasons.')]),

 ('fused', 'Benzene plus a five-membered ring'): dict(
  sub='rings', cap=3,
  slides='slides 86–88 ("5/6 BICYCLIC RINGS…#1 through #3")',
  op='name the five-membered half of the fused pair',
  mis='the fusion was recognised and the five-membered ring was not named',
  teach=[
   ('Name the five-membered half',
    'Each of these is a benzene ring fused to a five-membered ring, so the whole name '
    'follows from identifying the smaller ring. Benzene plus pyrrole is indole. Plus '
    'imidazole is benzimidazole. Plus furan is benzofuran. Plus thiophene is '
    'benzothiophene. Plus thiazole is benzothiazole.'),
   ('Purine is the exception in this set',
    'Purine contains no benzene ring at all: it is an imidazole fused to a pyrimidine, '
    'so both rings carry nitrogen. It is the ring of adenine and guanine, which is why '
    'purine-based drugs such as azathioprine and acyclovir act on nucleic acids.')]),

 ('fused', 'Six fused to six'): dict(
  sub='rings', cap=3,
  slides='slides 90–92 ("6/6 BICYCLIC RINGS…#1 and #2", "6/7 BICYCLIC RINGS")',
  op='count the atoms in each ring, then find the heteroatoms in them',
  mis='the two rings were counted and their heteroatoms were not placed',
  teach=[
   ('Start from two fused benzenes',
    'Naphthalene is two fused benzene rings and holds no heteroatom. Put a nitrogen '
    'into one of them, next to a carbon shared by both rings, and it is quinoline; '
    'move that nitrogen one position further round and it is isoquinoline instead, '
    'so the position matters and not just the count. Two nitrogens one carbon apart '
    'in one ring gives quinazoline. A benzene fused to a six-membered lactone is a '
    'coumarin, found by looking for the ring oxygen sitting next to a carbonyl.'),
   ('Quinoline and quinolone are different words',
    'Quinoline is the fused ring itself, and quinine and chloroquine are built on it. '
    'A quinolone is that ring carrying a ketone, and it names the antibacterial class. '
    'One letter separates them.'),
   ('Reading the benzodiazepine name',
    'The name states the structure: benzo is the benzene ring, azepine is a '
    'seven-membered ring containing nitrogen, and di says there are two nitrogens in '
    'it. Diazepam and chlordiazepoxide are built on it.')]),

 ('fused', 'Tricyclics'): dict(
  sub='rings', cap=2,
  slides='slide 93 ("TRICYCLICS (3 Fused Rings)")',
  op='count the rings, then read the heteroatoms in the middle one',
  mis='three fused rings were counted and the middle ring\'s atoms were not read',
  teach=[
   ('Three fused rings, and what the names state',
    'A phenothiazine is three fused rings whose middle ring carries a sulfur and a '
    'nitrogen: thia names the sulfur, azine the nitrogen. A dibenzazepine is two '
    'benzene rings fused to a seven-membered nitrogen ring, and that ring system is '
    'the chemistry behind the phrase tricyclic antidepressant. Chlorpromazine is a '
    'phenothiazine; imipramine and carbamazepine are dibenzazepines.')]),
}

# --------------------------------------------------------------------------
# Confusions sharp enough to name directly. Keyed (correct, wrong); the text
# replaces the generic diagnosis and is appended after the wrong group's own
# description.
# --------------------------------------------------------------------------
PAIRS = {
 ('Primary alcohol', 'Quaternary alcohol'):
   'There is no such group to pick. Four carbons on a carbon leave no bond free for '
   'the oxygen, so the name can be eliminated on sight whenever it appears.',
 ('Secondary alcohol', 'Quaternary alcohol'):
   'There is no such group to pick. Four carbons on a carbon leave no bond free for '
   'the oxygen, so the name can be eliminated on sight whenever it appears.',
 ('Tertiary alcohol', 'Quaternary alcohol'):
   'There is no such group to pick. Four carbons on a carbon leave no bond free for '
   'the oxygen, so the name can be eliminated on sight whenever it appears.',

 ('Tertiary amine', 'Quaternary amine'):
   'The fourth carbon is what makes an amine quaternary, and with it comes a positive '
   'charge drawn on the nitrogen. No charge on the nitrogen means the fourth carbon '
   'is not there.',
 ('Tertiary amine', 'Aromatic (aryl) amine'):
   'An aryl amine is named for the nitrogen being bonded straight to a ring, not for '
   'how many carbons it carries. A tertiary amine may well sit on a molecule '
   'containing rings; what matters is whether a ring carbon is bonded to the nitrogen '
   'itself.',

 ('Phenol', 'Alcohol hydroxy'):
   'Both are an O–H on a carbon, and the carbon is the difference: aromatic makes it '
   'a phenol and weakly acidic, non-aromatic makes it an alcohol and neutral.',
 ('Alcohol hydroxy', 'Phenol'):
   'Both are an O–H on a carbon, and the carbon is the difference: aromatic makes it '
   'a phenol and weakly acidic, non-aromatic makes it an alcohol and neutral.',
 ('Ketone', 'Aldehyde'):
   'Both are a carbonyl, and what sits beside it decides: a hydrogen on the carbonyl '
   'carbon makes it an aldehyde, a carbon on both sides makes it a ketone.',
 ('Aldehyde', 'Ketone'):
   'Both are a carbonyl, and what sits beside it decides: a hydrogen on the carbonyl '
   'carbon makes it an aldehyde, a carbon on both sides makes it a ketone.',

 ('Catechol ortho', 'Resorcinol meta'):
   'These two differ by one ring position, and that position is what '
   'catechol-O-methyltransferase (COMT) recognises. Adjacent hydroxy groups are a '
   'substrate; one carbon apart is not.',
 ('Resorcinol meta', 'Catechol ortho'):
   'These two differ by one ring position, and that position is what '
   'catechol-O-methyltransferase (COMT) recognises. Adjacent hydroxy groups are a '
   'substrate; one carbon apart is not.',

 ('Carbamate', 'Ester'):
   'An ester is what the left-hand side of a carbamate looks like on its own. Reading '
   'past the carbonyl to the nitrogen on the other side is what separates them.',
 ('Carbamate', 'Amide'):
   'An amide is what the right-hand side of a carbamate looks like on its own. '
   'Reading back past the carbonyl to the oxygen on the other side is what separates '
   'them.',
 ('Carbonate', 'Carboxylic acid'):
   'Both put a doubly bonded oxygen on the same carbon. Counting settles it: the acid '
   'has two oxygens on that carbon, the carbonate has three.',
 ('Carboxylic acid', 'Carbonate'):
   'Both put a doubly bonded oxygen on the same carbon. Counting settles it: the acid '
   'has two oxygens on that carbon, the carbonate has three.',

 ('Urea', 'Imide'):
   'These hold the same three pieces in opposite order. Urea is a carbonyl between '
   'two nitrogens; an imide is a nitrogen between two carbonyls. Counting carbonyls '
   'separates them: one means urea, two means imide.',
 ('Imide', 'Urea'):
   'These hold the same three pieces in opposite order. An imide is a nitrogen '
   'between two carbonyls; urea is a carbonyl between two nitrogens. Counting '
   'carbonyls separates them: two means imide, one means urea.',
 ('Guanidine', 'Urea'):
   'Guanidine is urea with the carbonyl oxygen replaced by a nitrogen, so the check '
   'is what is doubly bonded to the central carbon: an oxygen makes it urea, a '
   'nitrogen makes it guanidine. That swap also turns a neutral group into a strongly '
   'basic one.',
 ('Urea', 'Guanidine'):
   'Guanidine is urea with the carbonyl oxygen replaced by a nitrogen, so the check '
   'is what is doubly bonded to the central carbon: a nitrogen makes it guanidine, an '
   'oxygen makes it urea.',

 ('β-lactam', 'Azetidine'):
   'Both are four-membered nitrogen rings and the carbonyl inside the ring is the '
   'whole difference. Without it there is no bond for β-lactamase to attack and no '
   'antibacterial activity.',
 ('Azetidine', 'β-lactam'):
   'No carbonyl inside the ring means no β-lactam, whatever the ring size suggests.',
 ('Lactone cyclic ester', 'Lactam cyclic amide'):
   'The atom bonded to the carbonyl decides: an oxygen there makes it a lactone, a '
   'nitrogen makes it a lactam.',

 ('Nitro', 'Nitrile cyano'):
   'The names are close and the groups are not. Nitro carries two oxygens on a '
   'nitrogen; a nitrile is a carbon triple bonded to a nitrogen with no oxygen at all.',
 ('Nitrile cyano', 'Nitro'):
   'The names are close and the groups are not. A nitrile is a carbon triple bonded '
   'to a nitrogen with no oxygen; nitro carries two oxygens on a nitrogen.',

 ('Sulfone', 'Sulfoxide'):
   'One oxygen apart. A sulfoxide has one, a sulfone has two, and both are neutral, '
   'so the count is the only way to tell them apart.',
 ('Sulfoxide', 'Sulfone'):
   'One oxygen apart. A sulfone has two, a sulfoxide has one, and both are neutral, '
   'so the count is the only way to tell them apart.',
 ('Sulfonic acid', 'Sulfone'):
   'A third oxygen with its hydrogen is what separates them, and it changes the '
   'behaviour rather than just the name: the sulfone is neutral, the sulfonic acid is '
   'a strong acid.',
 ('Sulfonamide', 'Sulfone'):
   'Naming the sulfone alone stops one atom short. The nitrogen bonded to it is what '
   'makes the group a sulfonamide, and it is also what makes the group acidic.',
 ('Sulfonylurea', 'Sulfonamide'):
   'A sulfonylurea contains a sulfonamide, so the answer is not wrong so much as '
   'incomplete: reading on past the nitrogen to the carbonyl and the second nitrogen '
   'gives the full group.',

 ('Aziridine', 'Epoxide oxirane'):
   'Same three-membered ring, different heteroatom: nitrogen makes it an aziridine, '
   'oxygen an epoxide.',
 ('Epoxide oxirane', 'Aziridine'):
   'Same three-membered ring, different heteroatom: oxygen makes it an epoxide, '
   'nitrogen an aziridine.',

 ('Pyrrole', 'Pyrrolidine'):
   'Two double bonds apart. Pyrrole is aromatic and its nitrogen is barely basic; '
   'pyrrolidine is saturated and behaves as an ordinary basic amine.',
 ('Pyrrolidine', 'Pyrrole'):
   'Two double bonds apart. Pyrrolidine is saturated and behaves as an ordinary basic '
   'amine; pyrrole is aromatic and its nitrogen is barely basic.',
 ('Furan', 'Tetrahydrofuran THF'):
   'Both hold one oxygen in a five-membered ring, and the double bonds are the '
   'difference: two of them make furan, none makes tetrahydrofuran.',

 ('Imidazole', 'Pyrazole'):
   'Identical atoms, different spacing. Imidazole has a carbon between the two '
   'nitrogens; pyrazole has them bonded to each other.',
 ('Pyrazole', 'Imidazole'):
   'Identical atoms, different spacing. Pyrazole has the two nitrogens bonded to each '
   'other; imidazole has a carbon between them.',
 ('Oxazole', 'Isoxazole'):
   'Identical atoms, different spacing. In oxazole a carbon sits between the oxygen '
   'and the nitrogen; in isoxazole they are bonded to each other, which is what the '
   'iso prefix marks.',
 ('Isoxazole', 'Oxazole'):
   'Identical atoms, different spacing. In isoxazole the oxygen and nitrogen are '
   'bonded to each other; in oxazole a carbon sits between them.',
 ('Thiazole', 'Oxazole'):
   'Same arrangement, different heteroatom: sulfur makes it a thiazole, oxygen an '
   'oxazole.',

 ('Tetrazole', 'Triazole'):
   'One nitrogen apart, and the count is the answer: four nitrogens is a tetrazole, '
   'three is a triazole.',
 ('Triazole', 'Tetrazole'):
   'One nitrogen apart, and the count is the answer: three nitrogens is a triazole, '
   'four is a tetrazole.',

 ('Piperidine', 'Pyridine'):
   'Three double bonds apart. Pyridine is flat and aromatic; piperidine is fully '
   'saturated and puckered, and its nitrogen is a normal basic amine.',
 ('Pyridine', 'Piperidine'):
   'Three double bonds apart. Piperidine is fully saturated; pyridine keeps all three '
   'double bonds and is aromatic.',
 ('Pyrimidine', 'Pyrazine'):
   'Both hold two nitrogens in a six-membered aromatic ring, and the spacing decides: '
   'one carbon between them is pyrimidine, straight across the ring is pyrazine.',
 ('Pyrazine', 'Pyrimidine'):
   'Both hold two nitrogens in a six-membered aromatic ring, and the spacing decides: '
   'straight across the ring is pyrazine, one carbon between them is pyrimidine.',
 ('Morpholine', 'Piperazine'):
   'Both are saturated six-membered rings with two heteroatoms straight across from '
   'each other. Piperazine has nitrogen at both positions; morpholine has an oxygen '
   'at one of them.',
 ('Piperazine', 'Morpholine'):
   'Both are saturated six-membered rings with two heteroatoms straight across from '
   'each other. Morpholine has an oxygen at one position; piperazine has nitrogen at '
   'both.',

 ('Purine', 'Benzimidazole'):
   'Both fuse an imidazole to a six-membered ring, and that second ring is the '
   'difference: a benzene makes it benzimidazole, a pyrimidine with two nitrogens '
   'makes it purine.',
 ('Benzimidazole', 'Indole'):
   'Both fuse benzene to a five-membered nitrogen ring. The second nitrogen is the '
   'difference: one nitrogen makes it indole, two make it benzimidazole.',
 ('Indole', 'Benzimidazole'):
   'Both fuse benzene to a five-membered nitrogen ring. Count the nitrogens in the '
   'five-membered half: one is indole, two is benzimidazole.',

 ('Quinoline', 'Naphthalene'):
   'Naphthalene is two fused benzenes and holds no heteroatom. One nitrogen in either '
   'ring makes it a quinoline.',
 ('Quinazoline', 'Quinoline'):
   'Both put nitrogen into a fused six-six system, and the count decides: one nitrogen '
   'is quinoline, two one carbon apart is quinazoline.',
}

# Groups that cannot be a correct answer, but are worth keeping as distractors.
NEVER_CORRECT = {'Quaternary alcohol'}


def atlas():
    """Run atlas.js and hand back its boards as plain data."""
    js = r"""
      const vm = require('vm');
      const sb = {console, Math, JSON, Object, Array, String, Number, Boolean,
                  RegExp, Error, isNaN, parseInt, parseFloat, Infinity};
      sb.globalThis = sb; vm.createContext(sb);
      vm.runInContext(require('fs').readFileSync('atlas.js','utf8') + '\n;globalThis.__A=ATLAS;', sb);
      process.stdout.write(JSON.stringify(sb.__A.boards.map(b => ({
        id: b.id,
        sections: b.sections.map(s => ({
          label: s.label,
          items: s.items.map(i => ({plain: i.plain, t: i.t, e: i.e || ''}))
        }))
      }))));
    """
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit("ERROR: could not read atlas.js\n" + r.stderr.strip())
    return json.loads(r.stdout)


ENT = [("&mdash;", "—"), ("&ndash;", "–"), ("&beta;", "β"),
       ("&alpha;", "α"), ("&ldquo;", "“"), ("&rdquo;", "”"),
       ("&rsquo;", "’"), ("&nbsp;", " "), ("&equiv;", "≡"),
       ("&#8801;", "≡"), ("&amp;", "&")]


def strip(html):
    """Atlas prose carries markup; question text is plain."""
    t = re.sub(r"<[^>]+>", "", html or "")
    for a, b in ENT:
        t = t.replace(a, b)
    return re.sub(r"\s+", " ", t).strip()


def first_sentence(t):
    """The distinguishing feature at the head of an atlas tell, cut back to its
    first clause. This phrase is quoted under all three wrong options, so any
    trailing consequence carried along with it would be read three times over
    in one question."""
    m = re.match(r"(.+?[.!?])(\s|$)", t)
    s = (m.group(1) if m else t).rstrip(".")
    return re.split(r"\s+—\s+|,\s+(?:so|which|and)\b|\.\s", s)[0].rstrip(" ,.;:—")


def lower_first(t):
    """Drop a leading capital so a sentence can be continued into, except where
    the word is a name or an element symbol that must keep its case."""
    if not t:
        return t
    head = t.split(" ", 1)[0].rstrip(",.;:")
    if head.isupper() or (len(head) > 1 and head[1:].lower() != head[1:]):
        return t                       # O-H, COOH, NO2, THF, COMT
    return t[:1].lower() + t[1:]


# Example fields that name drugs, as opposed to standing in for a category.
def drug_examples(e):
    if not e:
        return ""
    if re.search(r"many |trap only|degradation|boxed region|already know", e, re.I):
        return ""
    return e


def js_str(t):
    return t.replace("\\", "\\\\").replace("'", "\\'")


def section_key(board_id, label):
    """Match an atlas section to its entry in SECTIONS by its opening words."""
    plain = strip(label)
    for (b, prefix), cfg in SECTIONS.items():
        if b == board_id and plain.startswith(prefix):
            return cfg
    return None


def main():
    boards = atlas()
    out, n, used = [], 0, set()
    skipped = []

    for b in boards:
        for s in b["sections"]:
            cfg = section_key(b["id"], s["label"])
            if not cfg:
                skipped.append(b["id"] + " / " + strip(s["label"]))
                continue

            items = s["items"]
            askable = [i for i in items if i["plain"] not in NEVER_CORRECT
                       and i["plain"] not in used]
            if len(items) < 4:
                continue

            # Ask the members of the section that carry the most weight first:
            # the ones this course names drugs for.
            askable.sort(key=lambda i: (0 if i["e"] else 1, items.index(i)))
            chosen = askable[:cfg["cap"]]

            for it in chosen:
                used.add(it["plain"])
                n += 1
                correct_tell = strip(it["t"])
                eg = strip(it["e"])

                pool = [x for x in items if x["plain"] != it["plain"]]
                wrong = random.sample(pool, 3)

                # The operation that settles the section is stated once, on the
                # right answer. Repeating it under every wrong option is what
                # makes a set of four explanations tiring to read.
                why_ok = correct_tell
                drugs = drug_examples(eg)
                if drugs:
                    why_ok += (" The drugs named for it in this course are "
                               if "," in drugs else
                               " The drug named for it in this course is ") \
                              + drugs + "."
                why_ok += " To settle any member of this group, " + cfg["op"] + "."

                opts = ["  {t:'%s', correct:true,\n   why:'%s'}"
                        % (js_str(it["plain"]), js_str(why_ok))]

                for w in wrong:
                    diag = PAIRS.get((it["plain"], w["plain"]))
                    if not diag:
                        diag = "Picking it here means " + cfg["mis"] + "."
                    if w["plain"] in NEVER_CORRECT:
                        # No point contrasting the drawing against a group that
                        # cannot be drawn at all.
                        body = "%s %s" % (strip(w["t"]), diag)
                    else:
                        body = "%s That is not what is drawn: %s. %s" % (
                            strip(w["t"]),
                            lower_first(first_sentence(correct_tell)), diag)
                    opts.append("  {t:'%s', correct:false,\n   why:'%s'}"
                                % (js_str(w["plain"]), js_str(body)))

                random.shuffle(opts)

                teach = "[\n" + ",\n".join(
                    "  {h:'%s',\n   t:'%s'}" % (js_str(h), js_str(t))
                    for h, t in cfg["teach"]) + "]"

                slug = re.sub(r"[^a-z0-9]+", "-", it["plain"].lower()).strip("-")
                # A section may carry a note: something the course states one way
                # and the measured chemistry another. It is printed rather than
                # quietly decided, so the reader answers the course and still
                # knows where the two part company.
                note = ("\n note:'%s'," % js_str(cfg["note"])) if cfg.get("note") else ""

                out.append(
                    "{id:'fga-%d', prof:'Sikazwe', tier:'old', topic:'fgs', "
                    "sub:'%s', concept:'fgname-%s',\n"
                    " tags:['structure','recall'], source:'slide',\n"
                    " stem:'Name the functional group shown below.',\n"
                    " fg:'%s',\n"
                    " options:[\n%s],\n"
                    " teach:%s,%s\n"
                    " cite:'Functional group deck (MCFGs8_1718_26.pdf) %s'}"
                    % (n, cfg["sub"], slug, js_str(it["plain"]),
                       ",\n".join(opts), teach, note, cfg["slides"]))

    print("/* ==========================================================================")
    print("   NAME THE STRUCTURE — generated from the functional group atlas")
    print("   ==========================================================================")
    print("   Each question shows one drawn structure and asks for its name. The three")
    print("   wrong options come from the same atlas section, so every one of them is")
    print("   a group that is actually confused with the answer rather than an")
    print("   unrelated group from elsewhere in the course.")
    print("")
    print("   Written by gen_atlas_q.py. Regenerate rather than editing by hand:")
    print("")
    print("       python3 gen_atlas_q.py > q8_atlas.js")
    print("   ========================================================================== */")
    print("QUESTIONS.push(")
    print(",\n\n".join(out))
    print(");")

    print("generated %d questions across %d sections" % (n, len(SECTIONS)),
          file=sys.stderr)
    if skipped:
        print("sections with no entry in SECTIONS (left out on purpose):",
              file=sys.stderr)
        for s in skipped:
            print("   " + s, file=sys.stderr)


if __name__ == "__main__":
    main()
