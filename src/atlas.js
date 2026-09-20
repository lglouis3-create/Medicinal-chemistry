/* ==========================================================================
   FUNCTIONAL GROUP ATLAS
   ==========================================================================
   Ported from Louis's Functional Group Atlas artifact
   (claude.ai/artifact/Qx3Zq6gMVACWS17UBnJiTi). The skeletal-structure renderer
   and the board data are carried over unchanged; only the page-building code
   is left behind, because this file supplies data to the drill's own views
   rather than writing a page of its own.

   Exposes two globals:
     ATLAS       the boards, sections and items, each item carrying m() which
                 builds its molecule
     FG          plain-name -> rendered SVG string, built once at load

   The renderer needs the heteroatom colour variables and --wash, which
   shell.html defines alongside the drill's own palette.
   ========================================================================== */
const ATLAS = (() => {
/* ══════════════════════════════════════════════════════════
   Skeletal structure renderer.
   Atoms carry a label or nothing (a plain carbon vertex).
   Bonds trim back from labelled atoms so text never collides.
   ══════════════════════════════════════════════════════════ */
const S = 24;         // px per bond
const PAD = 15;       // px padding around the drawing
const HET = { O:"o", N:"n", S:"s", P:"p", F:"x", Cl:"x", Br:"x", I:"x", X:"x" };

function Mol() {
  return {
    atoms: [],   // {x,y,l,el}
    bonds: [],   // {a,b,o,style,toward}
    washes: [],  // {x,y,r} in bond units
    atom(x, y, l) {
      this.atoms.push({ x, y, l: l || "" });
      return this.atoms.length - 1;
    },
    bond(a, b, o, opts) {
      this.bonds.push(Object.assign({ a, b, o: o || 1 }, opts || {}));
      return this;
    },
    wash(idx, r) {
      const list = Array.isArray(idx) ? idx : [idx];
      list.forEach(i => this.washes.push({ i, r: r || 0.52 }));
      return this;
    }
  };
}

/* element colour class from a label like "OH", "NH2", "Cl" */
function elementOf(l) {
  if (!l) return "";
  if (l[0] === "R" || l[0] === "A") return "";
  const two = l.slice(0, 2);
  if (HET[two]) return HET[two];
  if (HET[l[0]]) return HET[l[0]];
  return "";
}

/* ── zigzag spine ─────────────────────────────────────────
   seq: [{l, up:{l,o}, dn:{l,o}, o}]  o = bond order to next
   ──────────────────────────────────────────────────────── */
function spine(seq, opts) {
  opts = opts || {};
  const m = Mol();
  const dx = 0.87, dy = 0.5;
  const idx = [], ups = {}, dns = {};
  seq.forEach((s, i) => {
    idx.push(m.atom(i * dx, (i % 2) * dy, s.l));
  });
  seq.forEach((s, i) => {
    if (i < seq.length - 1) m.bond(idx[i], idx[i + 1], s.o || 1, s.bs ? { style: s.bs } : null);
    if (s.up) { const j = m.atom(i * dx, (i % 2) * dy - 1, s.up.l); m.bond(idx[i], j, s.up.o || 1); ups[i] = j; }
    if (s.dn) { const j = m.atom(i * dx, (i % 2) * dy + 1, s.dn.l); m.bond(idx[i], j, s.dn.o || 1); dns[i] = j; }
  });
  if (opts.wash) {
    const resolved = opts.wash.map(k => {
      if (typeof k === "number") return idx[k];
      const n = parseInt(k, 10);
      return k.slice(-1) === "u" ? ups[n] : dns[n];
    }).filter(v => v !== undefined);
    m.wash(resolved, opts.washR);
  }
  m.spine = idx;
  return m;
}

/* ── rings ────────────────────────────────────────────────
   ring(m, n, cx, cy, rot) appends a regular n-gon, edge = 1
   ──────────────────────────────────────────────────────── */
function ringPts(n, cx, cy, rot) {
  const R = 1 / (2 * Math.sin(Math.PI / n));
  const pts = [];
  for (let k = 0; k < n; k++) {
    const a = rot + (2 * Math.PI * k) / n;
    pts.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) });
  }
  return pts;
}

function addRing(m, pts, labels, doubles, centroid) {
  const idx = pts.map(p => m.atom(p.x, p.y, (labels && labels[pts.indexOf(p)]) || ""));
  return idx;
}

/* build a ring molecule: spec {n, rot, labels:{}, doubles:[[i,j]], subs:{i:{l,o,dir}} } */
function ring(spec) {
  const m = Mol();
  const defRot = spec.n === 4 ? -Math.PI * 0.75 : -Math.PI / 2;
  const pts = ringPts(spec.n, 0, 0, spec.rot === undefined ? defRot : spec.rot);
  const idx = pts.map((p, k) => m.atom(p.x, p.y, (spec.labels && spec.labels[k]) || ""));
  const C = { x: 0, y: 0 };
  for (let k = 0; k < spec.n; k++) {
    const j = (k + 1) % spec.n;
    const dbl = (spec.doubles || []).some(d => (d[0] === k && d[1] === j) || (d[0] === j && d[1] === k));
    m.bond(idx[k], idx[j], dbl ? 2 : 1, dbl ? { toward: C } : null);
  }
  attachSubs(m, spec.subs, idx, C);
  if (spec.wash) m.wash(spec.wash.map(i => idx[i]), spec.washR);
  m.rings = [{ idx, C, pts }];
  return m;
}

function attachSubs(m, subs, idx, C) {
  if (!subs) return;
  Object.keys(subs).forEach(k => {
    const s = subs[k], i = idx[k], p = m.atoms[i];
    let vx = p.x - C.x, vy = p.y - C.y;
    const len = Math.hypot(vx, vy) || 1;
    vx /= len; vy /= len;
    const j = m.atom(p.x + vx * (s.len || 1), p.y + vy * (s.len || 1), s.l);
    m.bond(i, j, s.o || 1, s.o === 2 ? { toward: C } : null);
  });
}

/* fuse a ring of size n onto the edge (ia,ib) of an existing molecule */
function fuse(m, ia, ib, n, labels, doubles, fromC) {
  const A = m.atoms[ia], B = m.atoms[ib];
  const Mx = (A.x + B.x) / 2, My = (A.y + B.y) / 2;
  let nx = Mx - fromC.x, ny = My - fromC.y;
  const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl;
  const R = 1 / (2 * Math.sin(Math.PI / n));
  const ap = R * Math.cos(Math.PI / n);
  const C = { x: Mx + nx * ap, y: My + ny * ap };
  const a0 = Math.atan2(A.y - C.y, A.x - C.x);
  const step = (2 * Math.PI) / n;

  function chain(dir) {
    const out = [];
    for (let k = 0; k < n; k++) {
      out.push({ x: C.x + R * Math.cos(a0 + dir * step * k), y: C.y + R * Math.sin(a0 + dir * step * k) });
    }
    return out;
  }
  let pts = chain(1);
  if (Math.hypot(pts[n - 1].x - B.x, pts[n - 1].y - B.y) > 0.05) pts = chain(-1);

  const idx = new Array(n);
  idx[0] = ia; idx[n - 1] = ib;
  for (let k = 1; k < n - 1; k++) idx[k] = m.atom(pts[k].x, pts[k].y, (labels && labels[k]) || "");
  if (labels && labels[0]) m.atoms[ia].l = labels[0];
  if (labels && labels[n - 1]) m.atoms[ib].l = labels[n - 1];

  for (let k = 0; k < n; k++) {
    const j = (k + 1) % n;
    if (k === 0 && j === n - 1) continue;
    if (k === n - 1 && j === 0) continue;
    const dbl = (doubles || []).some(d => (d[0] === k && d[1] === j) || (d[0] === j && d[1] === k));
    m.bond(idx[k], idx[j], dbl ? 2 : 1, dbl ? { toward: C } : null);
  }
  m.rings = m.rings || [];
  m.rings.push({ idx, C, pts });
  return { idx, C };
}

/* benzene helper */
function benzene(rot) {
  return ring({ n: 6, rot: rot === undefined ? -Math.PI / 2 : rot, doubles: [[0, 1], [2, 3], [4, 5]] });
}

/* ── render ───────────────────────────────────────────── */
function render(m, label) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  m.atoms.forEach(a => {
    const pad = a.l ? 0.42 : 0.1;
    minX = Math.min(minX, a.x - pad); maxX = Math.max(maxX, a.x + pad);
    minY = Math.min(minY, a.y - pad); maxY = Math.max(maxY, a.y + pad);
  });
  const W = (maxX - minX) * S + PAD * 2;
  const H = (maxY - minY) * S + PAD * 2;
  const X = v => (v - minX) * S + PAD;
  const Y = v => (v - minY) * S + PAD;

  let out = "";

  /* highlighter wash: a band traced over the group's own bonds */
  const marked = new Set(m.washes.map(w => w.i).filter(i => m.atoms[i]));
  if (marked.size) {
    const band = S * 0.62;
    let joined = new Set();
    m.bonds.forEach(b => {
      if (!marked.has(b.a) || !marked.has(b.b)) return;
      joined.add(b.a); joined.add(b.b);
      const A = m.atoms[b.a], B = m.atoms[b.b];
      const ux = B.x - A.x, uy = B.y - A.y, L = Math.hypot(ux, uy) || 1;
      const tA = A.l ? 0.26 : 0, tB = B.l ? 0.26 : 0;
      out += `<line x1="${X(A.x + (ux / L) * tA).toFixed(1)}" y1="${Y(A.y + (uy / L) * tA).toFixed(1)}" x2="${X(B.x - (ux / L) * tB).toFixed(1)}" y2="${Y(B.y - (uy / L) * tB).toFixed(1)}" stroke="var(--wash)" stroke-width="${band.toFixed(1)}" stroke-linecap="round"/>`;
    });
    marked.forEach(i => {
      const a = m.atoms[i];
      const r = a.l ? (a.l.length > 2 ? 0.46 : 0.38) : (joined.has(i) ? 0.31 : 0.34);
      out += `<circle cx="${X(a.x).toFixed(1)}" cy="${Y(a.y).toFixed(1)}" r="${(r * S).toFixed(1)}" fill="var(--wash)" stroke="none"/>`;
    });
  }

  /* bonds */
  m.bonds.forEach(b => {
    const A = m.atoms[b.a], B = m.atoms[b.b];
    let x1 = A.x, y1 = A.y, x2 = B.x, y2 = B.y;
    const ux = x2 - x1, uy = y2 - y1;
    const L = Math.hypot(ux, uy) || 1;
    const tA = A.l ? (A.l.length > 2 ? 0.44 : 0.34) : 0;
    const tB = B.l ? (B.l.length > 2 ? 0.44 : 0.34) : 0;
    x1 += (ux / L) * tA; y1 += (uy / L) * tA;
    x2 -= (ux / L) * tB; y2 -= (uy / L) * tB;

    const px = -(y2 - y1) / Math.hypot(x2 - x1, y2 - y1);
    const py = (x2 - x1) / Math.hypot(x2 - x1, y2 - y1);

    const line = (ax, ay, bx, by, extra) =>
      `<line x1="${X(ax).toFixed(1)}" y1="${Y(ay).toFixed(1)}" x2="${X(bx).toFixed(1)}" y2="${Y(by).toFixed(1)}" ${extra || ""}/>`;

    if (b.style === "wedge") {
      const w = 0.17;
      out += `<polygon points="${X(x1).toFixed(1)},${Y(y1).toFixed(1)} ${X(x2 + px * w).toFixed(1)},${Y(y2 + py * w).toFixed(1)} ${X(x2 - px * w).toFixed(1)},${Y(y2 - py * w).toFixed(1)}" fill="currentColor" stroke="none"/>`;
      return;
    }
    if (b.style === "dash") {
      const n = 5;
      for (let k = 0; k < n; k++) {
        const t = 0.10 + (k / (n - 1)) * 0.86, w = 0.05 + 0.135 * t;
        const cx = x1 + (x2 - x1) * t, cy = y1 + (y2 - y1) * t;
        out += line(cx + px * w, cy + py * w, cx - px * w, cy - py * w, 'stroke-width="1.35"');
      }
      return;
    }

    if (b.o === 1) { out += line(x1, y1, x2, y2); return; }

    if (b.o === 3) {
      const d = 0.115;
      out += line(x1, y1, x2, y2);
      out += line(x1 + px * d, y1 + py * d, x2 + px * d, y2 + py * d);
      out += line(x1 - px * d, y1 - py * d, x2 - px * d, y2 - py * d);
      return;
    }

    /* double */
    if (b.toward) {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      let sgn = ((b.toward.x - mx) * px + (b.toward.y - my) * py) >= 0 ? 1 : -1;
      const d = 0.19, sh = 0.16;
      out += line(x1, y1, x2, y2);
      out += line(
        x1 + px * d * sgn + (x2 - x1) * sh, y1 + py * d * sgn + (y2 - y1) * sh,
        x2 + px * d * sgn - (x2 - x1) * sh, y2 + py * d * sgn - (y2 - y1) * sh
      );
    } else {
      const d = 0.105;
      out += line(x1 + px * d, y1 + py * d, x2 + px * d, y2 + py * d);
      out += line(x1 - px * d, y1 - py * d, x2 - px * d, y2 - py * d);
    }
  });

  /* atom labels */
  let text = "";
  m.atoms.forEach(a => {
    if (!a.l) return;
    const el = elementOf(a.l);
    const fill = el ? `var(--at-${el})` : "currentColor";
    const main = a.l.replace(/([0-9+−-]+)$/, "");
    const tail = a.l.slice(main.length);
    const charge = /^[+−-]+$/.test(tail);
    text += `<text x="${X(a.x).toFixed(1)}" y="${Y(a.y).toFixed(1)}" fill="${fill}" stroke="none" text-anchor="middle" dominant-baseline="central" font-family="var(--f-mono)" font-size="12.5" font-weight="700">${main}` +
      (tail ? `<tspan font-size="${charge ? 10 : 9.5}" dy="${charge ? -4.5 : 2.5}">${tail}</tspan>` : "") + `</text>`;
  });

  return `<svg viewBox="0 0 ${W.toFixed(0)} ${H.toFixed(0)}" width="${W.toFixed(0)}" height="${H.toFixed(0)}" role="img" aria-label="${label}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round">${out}${text}</svg>`;
}

/* ══════════════════════════════════════════════════════════
   The groups
   ══════════════════════════════════════════════════════════ */
const R = "R", O2 = { l: "O", o: 2 };

/* a chiral centre: two plain bonds down, one varying bond up */
function centre(top, markCentre) {
  const m = Mol();
  const c = m.atom(0, 0);
  const l = m.atom(-1.17, 0.675, "R");
  const r = m.atom(1.17, 0.675, "R");
  const t = m.atom(0, -1.35, top.l);
  m.bond(c, l); m.bond(c, r);
  m.bond(c, t, 1, top.style ? { style: top.style } : null);
  if (markCentre) m.wash([c]);
  return m;
}

/* shorthand for a zigzag group */
const sp = (seq, wash) => spine(seq, wash ? { wash } : null);

const BOARDS = [

/* ────────────────────────────────────────────────────── */
{
  id: "rank",
  title: "Ranking: primary, secondary, tertiary, quaternary",
  intro: "Find the atom the group hangs on &mdash; the <b>mother carbon</b> for an alcohol, the nitrogen for an amine &mdash; then count the carbons attached to <em>it</em>. The shaded atom is the one you count around. Nothing else in the molecule matters.",
  sections: [
    { label: "Alcohols — count carbons on the mother carbon",
      items: [
        { n: "Primary alcohol", t: "<b>One</b> carbon on the mother carbon. Most water soluble of the three.", e: "many drug side chains",
          m: () => sp([{ l: R }, {}, { l: "OH" }], [1]) },
        { n: "Secondary alcohol", t: "<b>Two</b> carbons on the mother carbon.", e: "propranolol, nadolol, epoprostenol",
          m: () => sp([{ l: R }, { dn: { l: R } }, { l: "OH" }], [1]) },
        { n: "Tertiary alcohol", t: "<b>Three</b> carbons on the mother carbon. The oiliest &mdash; least water soluble.", e: "prednisone",
          m: () => sp([{ l: R }, { up: { l: R }, dn: { l: R } }, { l: "OH" }], [1]) },
        { n: "Quaternary alcohol", t: "<b>Does not exist.</b> Four carbons leaves no room for the OH. When it appears in an answer list it is a free elimination.", e: "trap only",
          m: () => sp([{ l: R }, { up: { l: R }, dn: { l: R } }, { l: "R" }], [1]) }
      ] },
    { label: "Amines — count carbons on the nitrogen",
      items: [
        { n: "Primary amine", t: "<b>One</b> carbon on the nitrogen.", e: "amphetamine",
          m: () => sp([{ l: R }, { l: "NH2" }], [1]) },
        { n: "Secondary amine", t: "<b>Two</b> carbons on the nitrogen.", e: "fluoxetine, sertraline",
          m: () => sp([{ l: R }, { l: "NH" }, { l: R }], [1]) },
        { n: "Tertiary amine", t: "<b>Three</b> carbons on the nitrogen.", e: "morphine, diphenhydramine",
          m: () => sp([{ l: R }, { l: "N" , up: { l: R } }, { l: R }], [1]) },
        { n: "Quaternary amine", t: "<b>Four</b> carbons and a permanent <code>+</code> charge &mdash; regardless of pH. Blocked from passive CNS entry, yet neutral in acid/base character.", e: "acetylcholine, bethanechol",
          m: () => sp([{ l: R }, { l: "N+", up: { l: R }, dn: { l: R } }, { l: R }], [1]) },
        { n: "Aromatic (aryl) amine", t: "Nitrogen bonded <b>directly to the ring</b>. Put any carbon in between and it is an ordinary alkyl amine. Less basic than alkyl amines.", e: "trifluoperazine",
          m: () => { const m = benzene(); attachSubs(m, { 0: { l: "NH2" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 6]); return m; } }
      ] }
  ]
},

/* ────────────────────────────────────────────────────── */
{
  id: "oxy",
  title: "The oxygen groups",
  intro: "All five are &ldquo;an oxygen somewhere&rdquo;. What separates them is <b>what the oxygen is bonded to</b> and whether it is doubled.",
  sections: [{ label: "One oxygen, five different answers", items: [
    { n: "Alcohol <span class='alt'>hydroxy</span>", t: "<code>O&ndash;H</code> on a carbon that is <b>not</b> aromatic. Adds water solubility, hydrogen bonds to receptors.", e: "propranolol",
      m: () => sp([{ l: R }, {}, { l: "OH" }], [2]) },
    { n: "Phenol", t: "The same <code>OH</code>, but <b>on a benzene ring</b>. That makes it weakly <b>acidic</b>, which is why it is not filed under alcohols.", e: "albuterol, propofol",
      m: () => { const m = benzene(); attachSubs(m, { 0: { l: "OH" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 6]); return m; } },
    { n: "Ether", t: "Oxygen <b>between two carbons</b>, no double bond. A methyl on it is a methoxy ether.", e: "metoprolol, diphenhydramine",
      m: () => sp([{ l: R }, { l: "O" }, { l: R }], [1]) },
    { n: "Aldehyde", t: "Carbonyl carrying <b>at least one hydrogen</b>. Rare in drugs &mdash; reactive, it can oxidise or polymerise.", e: "streptomycin, glutaraldehyde",
      m: () => sp([{ l: R }, { up: O2 }, { l: "H" }], [1, "1u"]) },
    { n: "Ketone", t: "Carbonyl <b>between two carbons</b>. &ldquo;Carbonyl&rdquo; is also a correct name &mdash; the answer list decides.", e: "hydrocortisone, naloxone",
      m: () => sp([{ l: R }, { up: O2 }, { l: R }], [1, "1u"]) }
  ] }]
},

/* ────────────────────────────────────────────────────── */
{
  id: "phenolics",
  title: "Phenol and the phenolics",
  intro: "One <code>OH</code> on a ring is a phenol. <b>Add a second and the name changes with its position</b>, and only the adjacent pair is a COMT substrate.",
  sections: [{ label: "Where the second hydroxy sits", items: [
    { n: "Phenol", t: "<b>One</b> hydroxy on the ring. Weakly acidic.", e: "albuterol",
      m: () => { const m = benzene(); attachSubs(m, { 0: { l: "OH" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 6]); return m; } },
    { n: "Catechol <span class='alt'>ortho</span>", t: "Second hydroxy <b>adjacent</b>. The <b>only one metabolised by COMT</b> &mdash; catechol-O-methyltransferase.", e: "dobutamine, isoetharine, epinephrine",
      m: () => { const m = benzene(); attachSubs(m, { 0: { l: "OH" }, 1: { l: "OH" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 1, 6, 7]); return m; } },
    { n: "Resorcinol <span class='alt'>meta</span>", t: "Second hydroxy <b>one carbon away</b>. Too far apart for COMT to bind, so it is not methylated.", e: "terbutaline",
      m: () => { const m = benzene(); attachSubs(m, { 0: { l: "OH" }, 2: { l: "OH" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 2, 6, 7]); return m; } },
    { n: "Hydroquinone <span class='alt'>para</span>", t: "Second hydroxy <b>straight across</b>. Not a COMT substrate.", e: "the boxed region of adriamycin",
      m: () => { const m = benzene(); attachSubs(m, { 0: { l: "OH" }, 3: { l: "OH" } }, m.rings[0].idx, m.rings[0].C); m.wash([0, 3, 6, 7]); return m; } },
    { n: "para-Quinone", t: "What a phenolic <b>oxidises to</b> in air and light. Coloured &mdash; a white tablet turns colour and the patient reports the drug is not working.", e: "degradation product",
      m: () => ring({ n: 6, doubles: [[1, 2], [4, 5]], subs: { 0: { l: "O", o: 2 }, 3: { l: "O", o: 2 } }, wash: [0, 3] }) }
  ] }],
  note: "<b>Read the circle, not the molecule.</b> Circling only one hydroxy of a hydroquinone asks for <b>phenol</b>. Circling the whole thing asks for <b>hydroquinone</b>."
},

/* ────────────────────────────────────────────────────── */
{
  id: "ca",
  title: "The carboxylic acid family",
  intro: "<b>Every group here is derived from carboxylic acid.</b> Each is the same <code>C=O</code> with something different attached on its right, and sometimes on its left as well. The parent shape plus one edit gives all seven.",
  flow: true,
  sections: [
    { label: "The parent, and the single-sided edits",
      items: [
        { n: "Carboxylic acid", t: "The parent. <code>C=O</code> plus <code>OH</code>. Written <code>COOH</code> or <code>CO2H</code>. Salts (carboxylates) are made to improve water solubility.", e: "captopril, cephalexin, valproic acid",
          m: () => sp([{ l: R }, { up: O2 }, { l: "OH" }], [1, 2, "1u"]) },
        { n: "Ester", t: "Swap the acid&rsquo;s <code>H</code> for a <b>carbon</b>. Cleaved fast by esterases &mdash; which is why amides and carbamates exist.", e: "procaine, aspirin, dipivefrin",
          m: () => sp([{ l: R }, { up: O2 }, { l: "O" }, { l: R }], [1, 2, "1u"]) },
        { n: "Amide", t: "Take the ester oxygen out, put a <b>nitrogen</b> in. More stable than an ester.", e: "acetaminophen, captopril",
          m: () => sp([{ l: R }, { up: O2 }, { l: "NH" }, { l: R }], [1, 2, "1u"]) },
        { n: "Carbonate", t: "<b>Two</b> oxygens flanking the carbonyl. Count them: acid is <code>CO2</code>, carbonate is <code>CO3</code>.", e: "tenofovir disoproxil, lithium carbonate",
          m: () => sp([{ l: R }, { l: "O" }, { up: O2 }, { l: "O" }, { l: R }], [1, 2, 3, "2u"]) },
        { n: "Carbamate", t: "The hybrid: <b>oxygen on one side, nitrogen on the other</b>. Recognise the whole <code>O&ndash;C(=O)&ndash;N</code>, not a piece of it.", e: "bethanechol, mebendazole, solifenacin",
          m: () => sp([{ l: R }, { l: "O" }, { up: O2 }, { l: "NH" }, { l: R }], [1, 2, 3, "2u"]) }
      ] },
    { label: "The three that get mixed up — say them as formulas",
      items: [
        { n: "Urea", t: "<code>N&ndash;C(=O)&ndash;N</code>. Carbonyl <b>between two nitrogens</b>.", e: "carbamazepine, glyburide",
          m: () => sp([{ l: R }, { l: "NH" }, { up: O2 }, { l: "NH" }, { l: R }], [1, 2, 3, "2u"]) },
        { n: "Imide", t: "<code>C(=O)&ndash;N&ndash;C(=O)</code>. Flip it: nitrogen <b>between two carbonyls</b>. That NH turns acidic, so salts get made there.", e: "phenytoin, thalidomide, ethosuximide",
          m: () => sp([{ l: R }, { up: O2 }, { l: "NH" }, { up: O2 }, { l: R }], [1, 2, 3, "1u", "3u"]) },
        { n: "Guanidine", t: "<code>N&ndash;C(=N)&ndash;N</code>. Take urea and swap the carbonyl <b>oxygen for a nitrogen</b>. Highly basic.", e: "clonidine, tizanidine",
          m: () => sp([{ l: R }, { l: "NH" }, { up: { l: "NH", o: 2 } }, { l: "NH" }, { l: R }], [1, 2, 3, "2u"]) },
        { n: "Biguanide", t: "<b>Two guanidines fused.</b> Metformin is the one to know.", e: "metformin",
          m: () => sp([{ l: "H2N" }, { up: { l: "NH", o: 2 } }, { l: "NH" }, { up: { l: "NH", o: 2 } }, { l: "N(CH3)2" }], [1, 2, 3, "1u", "3u"]) }
      ] },
    { label: "Same group, closed into a ring",
      items: [
        { n: "Lactone <span class='alt'>cyclic ester</span>", t: "An ester <b>inside a ring</b>, any size. Both names are correct. <b>Never a ketone</b> &mdash; the carbonyl carbon has an oxygen bonded to it, and a ketone carbonyl has a carbon on both sides.", e: "artemisinin, simvastatin",
          m: () => ring({ n: 6, labels: { 0: "O" }, subs: { 1: { l: "O", o: 2 } }, wash: [0] }) },
        { n: "Lactam <span class='alt'>cyclic amide</span>", t: "An amide <b>inside a ring</b>.", e: "many ring systems",
          m: () => ring({ n: 6, labels: { 0: "NH" }, subs: { 1: { l: "O", o: 2 } }, wash: [0] }) },
        { n: "&beta;-lactam", t: "The lactam in a <b>four-membered</b> ring. Test it: carbonyl <b>plus</b> nitrogen in a 4-ring. <b>No carbonyl, no &beta;-lactam.</b> Hydrolysed by &beta;-lactamase &mdash; the resistance story.", e: "penicillin, amoxicillin, ezetimibe",
          m: () => ring({ n: 4, labels: { 0: "NH" }, subs: { 1: { l: "O", o: 2 } }, wash: [0, 1] }) }
      ] }
  ],
  note: "<b>All four of ester, carbonate, amide and carbamate are hydrolysed by carboxylesterase (CE) enzymes</b> (MCFGs8_1718_26.pdf slide 52). The ester is cleaved fastest of the four, which is why ester drugs are short-lived and why the amide and carbamate versions exist."
},

/* ────────────────────────────────────────────────────── */
{
  id: "n",
  title: "Two small nitrogen groups people swap",
  intro: "One is a nitrogen carrying two oxygens. The other is a carbon triple-bonded to a nitrogen, with no oxygen at all. The names are one letter apart and the structures share nothing.",
  sections: [{ label: "Nitro is not nitrile", items: [
    { n: "Nitro", t: "Nitrogen carrying <b>two oxygens</b>, <code>NO2</code>. Electron withdrawing.", e: "metronidazole, nitrazepam",
      m: () => sp([{ l: R }, { l: "N+", up: { l: "O", o: 2 }, dn: { l: "O−" } }], [1, "1u", "1d"]) },
    { n: "Nitrile <span class='alt'>cyano</span>", t: "Carbon <b>triple-bonded</b> to nitrogen, <code>C&#8801;N</code>. Also electron withdrawing.", e: "verapamil, milrinone",
      m: () => sp([{ l: R }, { o: 3 }, { l: "N" }], [1, 2]) },
    { n: "Azo", t: "<code>N=N</code> joining two rings. Any molecule with one is <b>brightly coloured</b> &mdash; red, orange or yellow.", e: "prontosil rubrum",
      m: () => sp([{ l: "Ar" }, { l: "N", o: 2 }, { l: "N" }, { l: "Ar" }], [1, 2]) },
    { n: "Halogenated hydrocarbon", t: "Halogen on carbon &mdash; that is all. Halogens <b>change the electronic nature</b> and <b>raise lipophilicity</b>.", e: "halothane, amiodarone",
      m: () => sp([{ l: R }, { up: { l: "F" }, dn: { l: "F" } }, { l: "Cl" }], [1]) }
  ] }]
},

/* ────────────────────────────────────────────────────── */
{
  id: "s",
  title: "The sulfur ladder, and the phosphorus pair",
  intro: "One rule runs the whole family: <b>count the oxygens on the sulfur</b>. Each step is the previous one oxidised again, from no oxygen through to three.",
  sections: [
    { label: "Zero, one, two, three oxygens",
      items: [
        { n: "Thiol", t: "Terminal <code>S&ndash;H</code>. The volatile ones smell foul.", e: "captopril",
          m: () => sp([{ l: R }, { l: "SH" }], [1]) },
        { n: "Sulfide <span class='alt'>thioether</span>", t: "Sulfur <b>between two carbons</b>, no oxygens. An ether with sulfur in the slot.", e: "chlorpromazine, cimetidine",
          m: () => sp([{ l: R }, { l: "S" }, { l: R }], [1]) },
        { n: "Sulfoxide", t: "<b>One</b> oxygen, <code>SO</code>. Still hydrogen bonds through it.", e: "omeprazole, sulindac",
          m: () => sp([{ l: R }, { l: "S", up: O2 }, { l: R }], [1]) },
        { n: "Sulfone", t: "<b>Two</b> oxygens, <code>SO2</code>. Drawn at right angles or skewed &mdash; still a sulfone.", e: "dapsone, lapatinib",
          m: () => sp([{ l: R }, { l: "S", up: O2, dn: O2 }, { l: R }], [1]) },
        { n: "Sulfonic acid", t: "<b>Three</b> oxygens, <code>SO3</code>. Now <b>acidic</b> &mdash; you have crossed out of neutral. Not the same as sulfate, <code>SO4</code>.", e: "aztreonam, ensulizole",
          m: () => sp([{ l: R }, { l: "S", up: O2, dn: O2 }, { l: "OH" }], [1]) }
      ] },
    { label: "Sulfone plus something else",
      items: [
        { n: "Sulfonamide", t: "A <b>sulfonyl</b> <code>SO<sub>2</sub></code> with a <b>nitrogen</b> on one side. The N&ndash;H is acidic.", e: "furosemide, sulfamethoxazole",
          m: () => sp([{ l: R }, { l: "S", up: O2, dn: O2 }, { l: "NH2" }], [1, 2, "1u", "1d"]) },
        { n: "Sulfonylurea", t: "<b>Sulfonamide + urea:</b> <code>S(=O)2&ndash;N&ndash;C(=O)&ndash;N</code>. Name it by how much of that chain the question asks about.", e: "glipizide, glyburide",
          m: () => sp([{ l: "Ar" }, { l: "S", up: O2, dn: O2 }, { l: "NH" }, { up: O2 }, { l: "NH" }, { l: R }], [1, 2, 3, 4]) },
        { n: "Phosphonate", t: "<code>PO3</code> &mdash; three oxygens on phosphorus. The bisphosphonates for bone density live here.", e: "alendronate, risedronate",
          m: () => sp([{ l: R }, { l: "P", up: O2, dn: { l: "OH" } }, { l: "OH" }], [1]) },
        { n: "Phosphate", t: "<code>PO4</code> &mdash; <b>four</b> oxygens. Used to make prodrugs. With no phosphorus in the structure, neither this nor phosphonate can be the answer.", e: "fludarabine phosphate",
          m: () => sp([{ l: R }, { l: "O" }, { l: "P", up: O2, dn: { l: "OH" } }, { l: "OH" }], [2]) }
      ] }
  ]
},

/* ────────────────────────────────────────────────────── */
{
  id: "small-rings",
  title: "Small rings: three and four sided",
  intro: "Decode every ring name from its pieces: <code>oxa</code> = oxygen, <code>aza</code>/<code>azir</code> = nitrogen, <code>thia</code>/<code>thio</code> = sulfur, <code>benz</code> = a benzene fused on.",
  sections: [{ label: "Strained and reactive", items: [
    { n: "Epoxide <span class='alt'>oxirane</span>", t: "Three-membered ring with oxygen &mdash; also technically an ether. It is the <b>metabolite of an alkene</b>.", e: "fosfomycin, tiotropium",
      m: () => ring({ n: 3, labels: { 0: "O" }, wash: [0] }) },
    { n: "Aziridine", t: "Three-membered with nitrogen. Highly reactive, which is why it shows up in anticancer agents.", e: "mitomycin C",
      m: () => ring({ n: 3, labels: { 0: "NH" }, wash: [0] }) },
    { n: "Azetidine", t: "Four-membered with nitrogen and <b>no carbonyl</b> &mdash; so it is not a &beta;-lactam.", e: "azelnidipine",
      m: () => ring({ n: 4, labels: { 0: "NH" }, wash: [0] }) },
    { n: "&beta;-lactam", t: "Four-membered with nitrogen <b>and</b> the carbonyl. That <code>C=O</code> in the ring is what separates it from azetidine.", e: "penicillin, amoxicillin",
      m: () => ring({ n: 4, labels: { 0: "NH" }, subs: { 1: { l: "O", o: 2 } }, wash: [0, 1] }) }
  ] }]
},

/* ────────────────────────────────────────────────────── */
{
  id: "five",
  title: "Five-membered rings",
  intro: "Two things to read off each ring: <b>which heteroatoms</b>, and <b>where they sit relative to each other</b>. Each unsaturated ring has a saturated partner under a different name, and hydrogenation is the step between them.",
  sections: [
    { label: "One heteroatom, and its saturated partner",
      items: [
        { n: "Furan", t: "One oxygen, two double bonds. Also an ether.", e: "nitrofurantoin",
          m: () => ring({ n: 5, labels: { 0: "O" }, doubles: [[1, 2], [3, 4]] }) },
        { n: "Tetrahydrofuran <span class='alt'>THF</span>", t: "Furan <b>hydrogenated</b> &mdash; the double bonds are gone.", e: "morphine, cytarabine",
          m: () => ring({ n: 5, labels: { 0: "O" } }) },
        { n: "Pyrrole", t: "One nitrogen, two double bonds. Aromatic &mdash; but no longer phenyl.", e: "atorvastatin, ketorolac",
          m: () => ring({ n: 5, labels: { 0: "NH" }, doubles: [[1, 2], [3, 4]] }) },
        { n: "Pyrrolidine", t: "Pyrrole hydrogenated. The double bonds are gone, so the nitrogen lone pair is free and this ring is a normal basic amine.", e: "fosinopril",
          m: () => ring({ n: 5, labels: { 0: "NH" } }) },
        { n: "Thiophene", t: "One sulfur. A good <b>isostere</b> for benzene &mdash; electronically similar, so it can be swapped in.", e: "tiagabine, ticarcillin",
          m: () => ring({ n: 5, labels: { 0: "S" }, doubles: [[1, 2], [3, 4]] }) }
      ] },
    { label: "Two heteroatoms — position is the answer",
      items: [
        { n: "Imidazole", t: "Two nitrogens with <b>one carbon between them</b>.", e: "metronidazole, cimetidine",
          m: () => ring({ n: 5, labels: { 0: "NH", 2: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 2] }) },
        { n: "Pyrazole", t: "Two nitrogens <b>side by side</b>. Same atoms as imidazole, different position.", e: "celecoxib, sildenafil core",
          m: () => ring({ n: 5, labels: { 0: "NH", 1: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 1] }) },
        { n: "Imidazoline", t: "Imidazole with <b>one double bond removed</b>.", e: "oxymetazoline",
          m: () => ring({ n: 5, labels: { 0: "NH", 2: "N" }, doubles: [[1, 2]] }) },
        { n: "Oxazole", t: "Oxygen and nitrogen, <b>separated</b> by a carbon.", e: "aleglitazar",
          m: () => ring({ n: 5, labels: { 0: "O", 2: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 2] }) },
        { n: "Isoxazole", t: "Move the nitrogen <b>next to</b> the oxygen. Same atoms as oxazole, one position apart.", e: "sulfisoxazole, leflunomide",
          m: () => ring({ n: 5, labels: { 0: "O", 1: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 1] }) },
        { n: "Thiazole", t: "Sulfur and nitrogen, separated by a carbon.", e: "ceftizoxime, aztreonam",
          m: () => ring({ n: 5, labels: { 0: "S", 2: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 2] }) }
      ] },
    { label: "Keep adding nitrogens — count them",
      items: [
        { n: "Thiadiazole", t: "Sulfur <b>plus two</b> nitrogens.", e: "timolol",
          m: () => ring({ n: 5, labels: { 0: "S", 1: "N", 4: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 1, 4] }) },
        { n: "Triazole", t: "<b>Three</b> nitrogens.", e: "rizatriptan, fluconazole",
          m: () => ring({ n: 5, labels: { 0: "NH", 1: "N", 3: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 1, 3] }) },
        { n: "Tetrazole", t: "<b>Four</b> nitrogens. About as acidic as a <b>carboxylic acid</b>, so it replaces one without losing the charge.", e: "losartan",
          m: () => ring({ n: 5, labels: { 0: "NH", 1: "N", 2: "N", 3: "N" }, doubles: [[1, 2], [3, 4]], wash: [0, 1, 2, 3] }) }
      ] }
  ]
},

/* ────────────────────────────────────────────────────── */
{
  id: "six",
  title: "Six-membered rings",
  intro: "Pyridine is the anchor. From there: saturate it, or add a second nitrogen and note <b>how many carbons separate the two</b>.",
  sections: [
    { label: "One nitrogen: the three-step ladder",
      items: [
        { n: "Pyridine", t: "One nitrogen, fully aromatic. Aromatic, but <b>not phenyl</b> &mdash; it has a heteroatom.", e: "nifedipine ring, isoniazid",
          m: () => ring({ n: 6, labels: { 0: "N" }, doubles: [[1, 2], [3, 4], [5, 0]] }) },
        { n: "Dihydropyridine <span class='alt'>DHP</span>", t: "One double bond removed. Names a whole class of <b>calcium channel blockers</b>.", e: "amlodipine, nifedipine",
          m: () => ring({ n: 6, labels: { 0: "NH" }, doubles: [[1, 2], [4, 5]] }) },
        { n: "Piperidine", t: "Fully saturated. No double bonds left.", e: "meperidine, haloperidol",
          m: () => ring({ n: 6, labels: { 0: "NH" } }) }
      ] },
    { label: "Two nitrogens: count the carbons between them",
      items: [
        { n: "Pyrimidine", t: "Nitrogens <b>one carbon apart</b>. Runs through the anticancer agents and antiepileptics.", e: "5-fluorouracil, sulfadiazine, phenobarbital",
          m: () => ring({ n: 6, labels: { 0: "N", 2: "N" }, doubles: [[0, 1], [2, 3], [4, 5]], wash: [0, 2] }) },
        { n: "Pyrazine", t: "Nitrogens <b>straight across</b> from each other.", e: "pyrazinamide",
          m: () => ring({ n: 6, labels: { 0: "N", 3: "N" }, doubles: [[0, 1], [2, 3], [4, 5]], wash: [0, 3] }) },
        { n: "Piperazine", t: "Two nitrogens straight across, <b>saturated</b>.", e: "ziprasidone, sildenafil",
          m: () => ring({ n: 6, labels: { 0: "NH", 3: "NH" } }) },
        { n: "Morpholine", t: "Nitrogen and oxygen, straight across, saturated.", e: "timolol, gefitinib",
          m: () => ring({ n: 6, labels: { 0: "O", 3: "NH" }, wash: [0, 3] }) }
      ] }
  ]
},

/* ────────────────────────────────────────────────────── */
{
  id: "fused",
  title: "Fused rings",
  intro: "Every 5/6 bicyclic here is <b>a benzene fused to a five-membered ring</b>. Naming the five-membered partner gives the whole name, because the prefix <code>benz</code> supplies the rest.",
  wide: true,
  sections: [
    { label: "Benzene plus a five-membered ring",
      items: [
        { n: "Indole", t: "benzene + <b>pyrrole</b>. The triptans are indole drugs.", e: "zolmitriptan, serotonin",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 5, { 1: "NH" }, [[2, 3]], m.rings[0].C); return m; } },
        { n: "Benzimidazole", t: "benzene + <b>imidazole</b> &mdash; a second nitrogen.", e: "omeprazole, mebendazole",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 5, { 1: "NH", 3: "N" }, [[2, 3]], m.rings[0].C); return m; } },
        { n: "Benzofuran", t: "benzene + <b>furan</b>.", e: "amiodarone",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 5, { 1: "O" }, [[2, 3]], m.rings[0].C); return m; } },
        { n: "Benzothiophene", t: "benzene + <b>thiophene</b>.", e: "raloxifene",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 5, { 1: "S" }, [[2, 3]], m.rings[0].C); return m; } },
        { n: "Benzothiazole", t: "benzene + <b>thiazole</b> &mdash; sulfur and nitrogen.", e: "riluzole",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 5, { 1: "S", 3: "N" }, [[2, 3]], m.rings[0].C); return m; } },
        { n: "Purine", t: "The odd one out: <b>imidazole fused to pyrimidine</b>, no benzene at all. Purines interact with DNA.", e: "azathioprine, acyclovir, adenosine",
          m: () => { const m = ring({ n: 6, labels: { 1: "N", 3: "N" }, doubles: [[0, 1], [2, 3], [4, 5]] }); fuse(m, m.rings[0].idx[5], m.rings[0].idx[0], 5, { 1: "N", 3: "NH" }, [[1, 2]], m.rings[0].C); return m; } }
      ] },
    { label: "Six fused to six, and six fused to seven",
      items: [
        { n: "Naphthalene", t: "Two fused benzenes. Still aromatic. Three fused is anthracene.", e: "naproxen",
          m: () => { const m = benzene(); fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 6, {}, [[1, 2], [3, 4]], m.rings[0].C); return m; } },
        { n: "Quinoline", t: "<b>Naphthalene with a nitrogen next to a fusion carbon.</b> Move that nitrogen one position along and it is isoquinoline. Not the same as quinolone.", e: "quinine, camptothecin, chloroquine",
          m: () => { const m = benzene(); const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 6, { 4: "N" }, [[1, 2], [3, 4]], m.rings[0].C); m.wash([f.idx[4]], 0.44); return m; } },
        { n: "Quinazoline", t: "<b>Pyrimidine fused to benzene</b> &mdash; two nitrogens now.", e: "prazosin, gefitinib",
          m: () => { const m = benzene(); const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 6, { 2: "N", 4: "N" }, [[1, 2], [3, 4]], m.rings[0].C); m.wash([f.idx[2], f.idx[4]], 0.42); return m; } },
        { n: "Coumarin", t: "A benzene fused to a six-membered <b>lactone</b>. Find the ring oxygen next to the carbonyl.", e: "warfarin (Coumadin)",
          m: () => { const m = benzene(); const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 6, { 1: "O" }, [[3, 4]], m.rings[0].C); attachSubs(m, { 2: { l: "O", o: 2 } }, f.idx, f.C); m.wash([f.idx[1]], 0.44); return m; } },
        { n: "Benzodiazepine", t: "<b>Benzo</b> = benzene, <b>azepine</b> = seven-membered ring with nitrogen, <b>di</b> = two nitrogens.", e: "diazepam, chlordiazepoxide",
          m: () => { const m = benzene(); const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 7, { 1: "N", 4: "N" }, [[4, 5]], m.rings[0].C); m.wash([f.idx[1], f.idx[4]], 0.42); return m; } }
      ] },
    { label: "Tricyclics — three fused rings, and the class names they explain",
      items: [
        { n: "Phenothiazine", t: "<b>thia</b> = sulfur, <b>azine</b> = nitrogen, in the middle ring. The antipsychotic tricyclic.", e: "chlorpromazine (Thorazine)", span: true,
          m: () => {
            const m = benzene();
            const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 6, { 1: "S", 4: "NH" }, [], m.rings[0].C);
            fuse(m, f.idx[2], f.idx[3], 6, {}, [[1, 2], [3, 4]], f.C);
            m.wash([f.idx[1], f.idx[4]], 0.44);
            return m;
          } },
        { n: "Dibenzazepine", t: "<b>Two benzenes</b> plus an <b>azepine</b> (seven-membered, nitrogen). This is the chemistry behind &ldquo;tricyclic antidepressant&rdquo;.", e: "imipramine (Tofranil), carbamazepine", span: true,
          m: () => {
            const m = benzene();
            const f = fuse(m, m.rings[0].idx[1], m.rings[0].idx[2], 7, { 1: "N" }, [[4, 5]], m.rings[0].C);
            fuse(m, f.idx[2], f.idx[3], 6, {}, [[1, 2], [3, 4]], f.C);
            m.wash([f.idx[1]], 0.44);
            return m;
          } }
      ] }
  ],
  note: "<b>Quinoline is a ring system; quinolone is a different functional group.</b> One letter apart, and ciprofloxacin is the fluoro<em>quinolone</em>."
},

/* ────────────────────────────────────────────────────── */
{
  id: "stereo",
  title: "Reading a wedge",
  intro: "The whole R/S flip rule turns on one thing: <b>where the lowest priority group points</b>. These are the three bond drawings and what each means.",
  sections: [{ label: "Three bond types, one decision", items: [
    { n: "Plain bond", t: "In the <b>plane of the page</b>. Most bonds in a structure are these.", e: "everything unmarked",
      m: () => centre({ l: "R" }) },
    { n: "Solid wedge", t: "Coming <b>toward you</b>. If the lowest priority sits on one of these, assign the rotation and then <b>flip it</b>.", e: "R becomes S",
      m: () => centre({ l: "OH", style: "wedge" }) },
    { n: "Dashed bond", t: "Going <b>away from you</b>. Lowest priority here means you assign the rotation <b>as drawn</b>.", e: "no flip",
      m: () => centre({ l: "H", style: "dash" }) },
    { n: "Hidden hydrogen", t: "Only two plain bonds and one wedge drawn? The hidden hydrogen points the <b>opposite way from the wedge</b>. Hydroxyl toward you means hydrogen away.", e: "the trap",
      m: () => centre({ l: "OH", style: "wedge" }, true) }
  ] }],
  note: "<b>Priorities by atomic number:</b> H 1, C 6, N 7, O 8. Tie at the first atom? Go to the next atoms out &mdash; ethyl beats methyl because that carbon carries another carbon."
}
];
  /* name -> svg, rendered once. A structure that throws is dropped rather than
     left as a broken tile, and atlasFailures records it for the render test. */
  /* Two renders of every group. FG carries the group's name in the SVG's
     aria-label, which is what a reader browsing the atlas wants read out to
     them. FGQ carries a neutral label instead, because a question that asks
     for the name of a drawn group would otherwise publish its own answer in
     the accessibility tree and in the page source. */
  const FG = {}, FGQ = {}, atlasFailures = [];
  BOARDS.forEach(b => b.sections.forEach(s => s.items.forEach(it => {
    const plain = it.n.replace(/<[^>]+>/g, '')
                      .replace(/&beta;/g, '\u03b2').replace(/&alpha;/g, '\u03b1')
                      .replace(/&mdash;/g, '\u2014').replace(/&amp;/g, '&')
                      .replace(/\s+/g, ' ').trim();
    it.plain = plain;
    it.board = b.id;
    try {
      FG[plain]  = render(it.m(), plain);
      FGQ[plain] = render(it.m(), 'Chemical structure to identify');
    }
    catch (e) { atlasFailures.push(plain + ': ' + e.message); }
  })));
  /* plain name -> the item itself, so a view can ask for a group's marked-up
     name and its distinguishing feature without walking the boards */
  const ITEM = {};
  BOARDS.forEach(b => b.sections.forEach(s => s.items.forEach(it => {
    if(!ITEM[it.plain]) ITEM[it.plain] = it;
  })));

  return {boards: BOARDS, FG, FGQ, item: k => ITEM[k] || null,
          failures: atlasFailures, render, Mol, spine, ring, fuse, benzene};
})();
const FG = ATLAS.FG;
const FGQ = ATLAS.FGQ;
