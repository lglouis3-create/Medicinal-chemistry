/* Inline diagrams used inside concept blocks. Plain SVG, no external assets. */
const DIA = {};

DIA.cypCycle = `<svg viewBox="0 0 880 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four steps of the CYP oxidation cycle">
<defs><marker id="ar" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
<polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12" fill="#16202E">
<rect x="4" y="46" width="176" height="56" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="92" y="68" text-anchor="middle" font-weight="600">1. Drug binds</text>
<text x="92" y="86" text-anchor="middle" font-size="11" fill="#5A6878">Fe³⁺ enzyme holds drug</text>
<line x1="184" y1="74" x2="218" y2="74" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar)"/>
<text x="201" y="40" text-anchor="middle" font-size="10.5" fill="#2F5FA8">1st e⁻</text>
<rect x="222" y="46" width="176" height="56" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="310" y="68" text-anchor="middle" font-weight="600">2. Enzyme reduced</text>
<text x="310" y="86" text-anchor="middle" font-size="11" fill="#5A6878">Fe³⁺ becomes Fe²⁺</text>
<line x1="402" y1="74" x2="436" y2="74" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar)"/>
<text x="419" y="40" text-anchor="middle" font-size="10.5" fill="#2F5FA8">O₂ + 2nd e⁻</text>
<rect x="440" y="46" width="176" height="56" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="528" y="68" text-anchor="middle" font-weight="600">3. Oxygen activated</text>
<text x="528" y="86" text-anchor="middle" font-size="11" fill="#5A6878">reactive O on the iron</text>
<line x1="620" y1="74" x2="654" y2="74" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar)"/>
<rect x="658" y="46" width="176" height="56" rx="7" fill="#E8F5ED" stroke="#1B7F4B"/>
<text x="746" y="68" text-anchor="middle" font-weight="600" fill="#1B7F4B">4. Drug oxidized</text>
<text x="746" y="86" text-anchor="middle" font-size="11" fill="#5A6878">O inserted, product leaves</text>
<text x="4" y="136" font-size="11.5" fill="#5A6878">Both electrons come from NADPH and reach the iron through CYP450 reductase.</text>
<text x="4" y="154" font-size="11.5" fill="#5A6878">Needed throughout: CYP450 · CYP450 reductase · NADPH · molecular O₂</text>
</g></svg>`;

DIA.directionGrid = `<svg viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid showing how enzyme activity changes drug effect">
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<rect x="238" y="8" width="252" height="34" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="364" y="30" text-anchor="middle" font-weight="600">Parent drug is the active one</text>
<rect x="490" y="8" width="252" height="34" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="616" y="30" text-anchor="middle" font-weight="600">Metabolite is the active one</text>
<rect x="8" y="42" width="230" height="62" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="20" y="66" font-weight="600">Less enzyme activity</text>
<text x="20" y="86" font-size="11.5" fill="#5A6878">inhibitor, or poor metabolizer</text>
<rect x="238" y="42" width="252" height="62" fill="#FCEBEA" stroke="#D3DAE3"/>
<text x="364" y="70" text-anchor="middle" font-weight="600" fill="#B3261E">MORE effect</text>
<text x="364" y="89" text-anchor="middle" font-size="11.5" fill="#5A6878">warfarin, glyburide</text>
<rect x="490" y="42" width="252" height="62" fill="#EAF0F9" stroke="#D3DAE3"/>
<text x="616" y="70" text-anchor="middle" font-weight="600" fill="#2F5FA8">LESS effect</text>
<text x="616" y="89" text-anchor="middle" font-size="11.5" fill="#5A6878">tramadol, clopidogrel</text>
<rect x="8" y="104" width="230" height="62" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="20" y="128" font-weight="600">More enzyme activity</text>
<text x="20" y="148" font-size="11.5" fill="#5A6878">inducer, or ultrarapid</text>
<rect x="238" y="104" width="252" height="62" fill="#EAF0F9" stroke="#D3DAE3"/>
<text x="364" y="132" text-anchor="middle" font-weight="600" fill="#2F5FA8">LESS effect</text>
<text x="364" y="151" text-anchor="middle" font-size="11.5" fill="#5A6878">drug cleared faster</text>
<rect x="490" y="104" width="252" height="62" fill="#FCEBEA" stroke="#D3DAE3"/>
<text x="616" y="132" text-anchor="middle" font-weight="600" fill="#B3261E">MORE effect</text>
<text x="616" y="151" text-anchor="middle" font-size="11.5" fill="#5A6878">more active metabolite made</text>
<text x="8" y="192" font-size="11.5" fill="#5A6878">Read the row for what happened to the enzyme, then the column for which species carries the activity.</text>
</g></svg>`;

DIA.d6Share = `<svg viewBox="0 0 680 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CYP2D6 share of liver enzyme compared with share of drugs metabolized">
<g font-family="system-ui,sans-serif" font-size="12" fill="#16202E">
<text x="4" y="22" font-weight="600">CYP2D6</text>
<text x="4" y="52" font-size="11.5">Share of liver CYP protein</text>
<rect x="210" y="38" width="420" height="18" fill="#F2F4F7" stroke="#D3DAE3"/>
<rect x="210" y="38" width="12.6" height="18" fill="#2F5FA8"/>
<text x="640" y="52" font-size="11.5" fill="#2F5FA8">3%</text>
<text x="4" y="86" font-size="11.5">Share of clinical drugs it clears</text>
<rect x="210" y="72" width="420" height="18" fill="#F2F4F7" stroke="#D3DAE3"/>
<rect x="210" y="72" width="88.2" height="18" fill="#B3261E"/>
<text x="640" y="86" font-size="11.5" fill="#B3261E">21%</text>
<text x="4" y="122" font-size="11.5" fill="#5A6878">A small amount of enzyme does a large share of the work, so it saturates easily</text>
<text x="4" y="139" font-size="11.5" fill="#5A6878">and a competing drug or an inhibitor changes clearance sharply.</text>
</g></svg>`;

DIA.cisTransEpox = `<svg viewBox="0 0 820 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cis and trans alkene geometry, and epoxidation of the double bond">
<defs><marker id="ar2" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E" stroke="#16202E" stroke-width="2" stroke-linecap="round">
<text x="8" y="18" stroke="none" font-weight="600">The C=C cannot rotate, so substituents are locked</text>
<line x1="60" y1="70" x2="130" y2="70"/><line x1="60" y1="76" x2="130" y2="76"/>
<line x1="60" y1="70" x2="30" y2="48"/><line x1="130" y1="70" x2="160" y2="48"/>
<line x1="60" y1="76" x2="30" y2="98"/><line x1="130" y1="76" x2="160" y2="98"/>
<text x="20" y="44" stroke="none" font-size="12" fill="#B3261E">R</text>
<text x="166" y="44" stroke="none" font-size="12" fill="#B3261E">R</text>
<text x="20" y="108" stroke="none" font-size="12">H</text><text x="166" y="108" stroke="none" font-size="12">H</text>
<text x="66" y="128" stroke="none" font-weight="600">cis (Z)</text>
<text x="46" y="146" stroke="none" font-size="11" fill="#5A6878">both R on one side</text>
<line x1="300" y1="70" x2="370" y2="70"/><line x1="300" y1="76" x2="370" y2="76"/>
<line x1="300" y1="70" x2="270" y2="48"/><line x1="370" y1="76" x2="400" y2="98"/>
<line x1="300" y1="76" x2="270" y2="98"/><line x1="370" y1="70" x2="400" y2="48"/>
<text x="260" y="44" stroke="none" font-size="12" fill="#B3261E">R</text>
<text x="406" y="108" stroke="none" font-size="12" fill="#B3261E">R</text>
<text x="260" y="108" stroke="none" font-size="12">H</text><text x="406" y="44" stroke="none" font-size="12">H</text>
<text x="302" y="128" stroke="none" font-weight="600">trans (E)</text>
<text x="284" y="146" stroke="none" font-size="11" fill="#5A6878">R on opposite sides</text>
<line x1="470" y1="74" x2="530" y2="74" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar2)"/>
<text x="500" y="62" stroke="none" text-anchor="middle" font-size="11" fill="#2F5FA8">CYP</text>
<text x="500" y="94" stroke="none" text-anchor="middle" font-size="11" fill="#5A6878">+ [O]</text>
<line x1="590" y1="86" x2="660" y2="86"/>
<line x1="590" y1="86" x2="625" y2="40"/><line x1="660" y1="86" x2="625" y2="40"/>
<text x="618" y="34" stroke="none" font-size="13" font-weight="600" fill="#B3261E">O</text>
<line x1="590" y1="86" x2="562" y2="108"/><line x1="660" y1="86" x2="688" y2="108"/>
<text x="600" y="128" stroke="none" font-weight="600">epoxide</text>
<text x="566" y="146" stroke="none" font-size="11" fill="#5A6878">strained, electron-poor carbons</text>
<text x="8" y="188" stroke="none" font-size="11.5" fill="#5A6878">The same double bond that fixes the geometry is the site CYP oxidizes.</text>
<text x="8" y="208" stroke="none" font-size="11.5" fill="#5A6878">Epoxide hydrolase (EH) then opens the ring to a diol, or GST attaches glutathione.</text>
</g></svg>`;

DIA.acylFamily = `<svg viewBox="0 0 800 268" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Carboxylic acid derivatives sorted by the two atoms on the carbonyl carbon">
<g font-family="system-ui,sans-serif" font-size="13" fill="#16202E">
<text x="6" y="17" font-weight="600" font-size="13">Name the two atoms attached to the C=O carbon</text>
<rect x="6" y="28" width="150" height="30" fill="#F2F4F7" stroke="#D3DAE3"/><text x="16" y="48" font-size="12" font-weight="600">Group</text>
<rect x="156" y="28" width="220" height="30" fill="#F2F4F7" stroke="#D3DAE3"/><text x="166" y="48" font-size="12" font-weight="600">On the carbonyl carbon</text>
<rect x="376" y="28" width="418" height="30" fill="#F2F4F7" stroke="#D3DAE3"/><text x="386" y="48" font-size="12" font-weight="600">Hydrolysis by CE gives</text>
<g font-size="12.5">
<rect x="6" y="58" width="150" height="34" fill="#fff" stroke="#E7ECF1"/><text x="16" y="80" font-weight="600">Ester</text>
<rect x="156" y="58" width="220" height="34" fill="#fff" stroke="#E7ECF1"/><text x="166" y="80">one O + one C</text>
<rect x="376" y="58" width="418" height="34" fill="#fff" stroke="#E7ECF1"/><text x="386" y="80">carboxylic acid + alcohol</text>
<rect x="6" y="92" width="150" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="16" y="114" font-weight="600">Amide</text>
<rect x="156" y="92" width="220" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="166" y="114">one N + one C</text>
<rect x="376" y="92" width="418" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="386" y="114">carboxylic acid + amine</text>
<rect x="6" y="126" width="150" height="34" fill="#fff" stroke="#E7ECF1"/><text x="16" y="148" font-weight="600">Carbamate</text>
<rect x="156" y="126" width="220" height="34" fill="#fff" stroke="#E7ECF1"/><text x="166" y="148" fill="#B3261E">one O + one N</text>
<rect x="376" y="126" width="418" height="34" fill="#fff" stroke="#E7ECF1"/><text x="386" y="148">alcohol + amine (+ CO&#8322;)</text>
<rect x="6" y="160" width="150" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="16" y="182" font-weight="600">Carbonate</text>
<rect x="156" y="160" width="220" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="166" y="182" fill="#B3261E">two O</text>
<rect x="376" y="160" width="418" height="34" fill="#F8FAFC" stroke="#E7ECF1"/><text x="386" y="182">two alcohols (+ CO&#8322;)</text>
<rect x="6" y="194" width="150" height="34" fill="#fff" stroke="#E7ECF1"/><text x="16" y="216" font-weight="600">Urea</text>
<rect x="156" y="194" width="220" height="34" fill="#fff" stroke="#E7ECF1"/><text x="166" y="216" fill="#B3261E">two N</text>
<rect x="376" y="194" width="418" height="34" fill="#fff" stroke="#E7ECF1"/><text x="386" y="216">not a CE substrate</text>
</g>
<text x="6" y="252" font-size="11.5" fill="#5A6878">An imide reverses the pattern: one N carrying two C=O groups, which makes its N-H acidic.</text>
</g></svg>`;

DIA.amineClasses = `<svg viewBox="0 0 820 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amine classes by number of carbons on nitrogen">
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="6" y="17" font-weight="600">Count the carbons on the nitrogen</text>
<g font-size="12">
<rect x="6" y="28" width="196" height="96" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="104" y="50" text-anchor="middle" font-weight="600">1&#176; &#8212; one C</text>
<text x="104" y="70" text-anchor="middle" font-size="13">R&#8212;NH&#8322;</text>
<text x="104" y="92" text-anchor="middle" font-size="11.5" fill="#5A6878">oxidative deamination</text>
<text x="104" y="110" text-anchor="middle" font-size="11.5" fill="#5A6878">basic &#183; NAT substrate</text>
<rect x="208" y="28" width="196" height="96" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="306" y="50" text-anchor="middle" font-weight="600">2&#176; &#8212; two C</text>
<text x="306" y="70" text-anchor="middle" font-size="13">R&#8322;NH</text>
<text x="306" y="92" text-anchor="middle" font-size="11.5" fill="#5A6878">N-dealkylation</text>
<text x="306" y="110" text-anchor="middle" font-size="11.5" fill="#5A6878">basic</text>
<rect x="410" y="28" width="196" height="96" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="508" y="50" text-anchor="middle" font-weight="600">3&#176; &#8212; three C</text>
<text x="508" y="70" text-anchor="middle" font-size="13">R&#8323;N</text>
<text x="508" y="92" text-anchor="middle" font-size="11.5" fill="#5A6878">N-dealkylation</text>
<text x="508" y="110" text-anchor="middle" font-size="11.5" fill="#5A6878">basic</text>
<rect x="612" y="28" width="202" height="96" rx="7" fill="#FCEBEA" stroke="#B3261E"/>
<text x="713" y="50" text-anchor="middle" font-weight="600" fill="#B3261E">4&#176; &#8212; four C</text>
<text x="713" y="70" text-anchor="middle" font-size="13">R&#8324;N&#8314;</text>
<text x="713" y="92" text-anchor="middle" font-size="11.5" fill="#5A6878">permanent + charge</text>
<text x="713" y="110" text-anchor="middle" font-size="11.5" fill="#5A6878">neutral acid/base &#183; no CNS entry</text>
</g>
<text x="6" y="150" font-size="11.5" fill="#5A6878">1&#176;, 2&#176; and 3&#176; all have a lone pair, so they accept a proton and their charge changes with pH.</text>
<text x="6" y="170" font-size="11.5" fill="#5A6878">4&#176; has no lone pair and no N-H, so it is charged at every pH and cannot cross into the CNS passively.</text>
</g></svg>`;

DIA.sulfurSeries = `<svg viewBox="0 0 740 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxidation series from sulfide to sulfoxide to sulfone">
<defs><marker id="ar3" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="6" y="17" font-weight="600">Count the oxygens on the sulfur</text>
<rect x="6" y="30" width="200" height="74" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="106" y="56" text-anchor="middle" font-size="14">R&#8212;S&#8212;R</text>
<text x="106" y="78" text-anchor="middle" font-weight="600">sulfide (thioether)</text>
<text x="106" y="95" text-anchor="middle" font-size="11.5" fill="#5A6878">no O</text>
<line x1="212" y1="66" x2="248" y2="66" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar3)"/>
<text x="230" y="56" text-anchor="middle" font-size="11" fill="#2F5FA8">[O]</text>
<rect x="254" y="30" width="200" height="74" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="354" y="52" text-anchor="middle" font-size="12">O</text>
<text x="354" y="62" text-anchor="middle" font-size="11">&#8214;</text>
<text x="354" y="78" text-anchor="middle" font-size="14">R&#8212;S&#8212;R</text>
<text x="354" y="95" text-anchor="middle" font-weight="600">sulfoxide &#183; one O</text>
<line x1="460" y1="66" x2="496" y2="66" stroke="#5A6878" stroke-width="1.5" marker-end="url(#ar3)"/>
<text x="478" y="56" text-anchor="middle" font-size="11" fill="#2F5FA8">[O]</text>
<rect x="502" y="30" width="230" height="74" rx="7" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="617" y="50" text-anchor="middle" font-size="12">O</text>
<text x="617" y="60" text-anchor="middle" font-size="11">&#8214;</text>
<text x="617" y="76" text-anchor="middle" font-size="14">R&#8212;S&#8212;R</text>
<text x="617" y="86" text-anchor="middle" font-size="11">&#8214;</text>
<text x="617" y="99" text-anchor="middle" font-size="12">O</text>
<text x="617" y="116" text-anchor="middle" font-weight="600" font-size="12">sulfone &#183; two O</text>
<text x="6" y="146" font-size="11.5" fill="#5A6878">Two O plus an N on the sulfur is a sulfonamide (SO&#8322;NH&#8322;), the NAT substrate.</text>
<text x="6" y="166" font-size="11.5" fill="#5A6878">Two O plus an OH is a sulfonic acid, which is strongly acidic.</text>
</g></svg>`;

DIA.apapNapqi = `<svg viewBox="0 0 880 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acetaminophen metabolism at normal dose and in overdose">
<defs><marker id="aq" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker>
<marker id="aqr" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#B3261E"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<rect x="10" y="118" width="150" height="58" rx="8" fill="#EAF0F9" stroke="#2F5FA8" stroke-width="1.6"/>
<text x="85" y="142" text-anchor="middle" font-weight="600" font-size="13">APAP</text>
<text x="85" y="162" text-anchor="middle" font-size="11" fill="#5A6878">phenol + amide</text>

<path d="M160 136 L250 76" stroke="#2F5FA8" stroke-width="1.6" fill="none" marker-end="url(#aq)"/>
<path d="M160 158 L250 218" stroke="#B3261E" stroke-width="1.8" fill="none" marker-end="url(#aqr)"/>

<text x="168" y="86" font-size="11.5" fill="#2F5FA8" font-weight="600">normal dose &#183; ~90%</text>
<text x="14" y="250" font-size="11.5" fill="#B3261E" font-weight="600">overdose &#183; UGTs and STs saturated</text>

<rect x="252" y="42" width="230" height="62" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="367" y="64" text-anchor="middle" font-weight="600">Glucuronide + Sulfate</text>
<text x="367" y="84" text-anchor="middle" font-size="11" fill="#5A6878">UGT &#183; UDPGA &#8195; ST &#183; PAPS</text>
<path d="M482 73 L556 73" stroke="#1E7A46" stroke-width="1.6" marker-end="url(#aq)"/>
<rect x="558" y="48" width="180" height="50" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="648" y="70" text-anchor="middle" font-weight="600">Renal excretion</text>
<text x="648" y="88" text-anchor="middle" font-size="11" fill="#5A6878">no harm</text>

<rect x="252" y="190" width="200" height="62" rx="8" fill="#FCEBEA" stroke="#B3261E" stroke-width="1.6"/>
<text x="352" y="212" text-anchor="middle" font-weight="600" fill="#B3261E">NAPQI</text>
<text x="352" y="232" text-anchor="middle" font-size="11" fill="#5A6878">CYP2E1 / 1A2 / 3A4</text>
<text x="256" y="182" font-size="11" fill="#5A6878">phase I bioactivation &#183; electrophilic quinone imine</text>

<path d="M452 206 L536 166" stroke="#1E7A46" stroke-width="1.6" fill="none" marker-end="url(#aq)"/>
<path d="M452 236 L536 276" stroke="#B3261E" stroke-width="1.8" fill="none" marker-end="url(#aqr)"/>

<rect x="538" y="134" width="230" height="56" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="653" y="156" text-anchor="middle" font-weight="600">GSH conjugate</text>
<text x="653" y="174" text-anchor="middle" font-size="11" fill="#5A6878">GST conjugates it &#183; excreted</text>

<rect x="538" y="252" width="230" height="58" rx="8" fill="#FCEBEA" stroke="#B3261E" stroke-width="1.6"/>
<text x="653" y="274" text-anchor="middle" font-weight="600" fill="#B3261E">Covalent protein adducts</text>
<text x="653" y="292" text-anchor="middle" font-size="11" fill="#5A6878">once GSH is depleted &#8594; hepatic necrosis</text>

<rect x="788" y="134" width="80" height="56" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="828" y="158" text-anchor="middle" font-weight="600" font-size="12" fill="#B26B00">NAC</text>
<text x="828" y="176" text-anchor="middle" font-size="10" fill="#5A6878">refills GSH</text>
<path d="M788 162 L772 162" stroke="#B26B00" stroke-width="1.6" marker-end="url(#aq)"/>
<text x="10" y="326" font-size="11.5" fill="#5A6878">Toxicity is a capacity problem: the safe phase II routes saturate first, so the phase I route that makes NAPQI carries more of the dose.</text>
</g></svg>`;

DIA.toxicophores = `<svg viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Toxicophoric functional groups grouped by the reactive species they generate">
<g font-family="system-ui,sans-serif" font-size="12" fill="#16202E">
<text x="8" y="17" font-weight="600" font-size="13">Toxicophores sorted by the reactive species they produce</text>
<rect x="8" y="28" width="282" height="150" rx="8" fill="#FCEBEA" stroke="#B3261E"/>
<text x="149" y="50" text-anchor="middle" font-weight="600" fill="#B3261E">Electrophilic carbon</text>
<text x="20" y="72">&#183; halogenated carbons (C&#8212;X)</text>
<text x="20" y="92">&#183; allylic and benzylic carbons</text>
<text x="20" y="112">&#183; epoxides</text>
<text x="20" y="132">&#183; aldehydes and other carbonyls</text>
<text x="20" y="152">&#183; &#945;,&#946;-unsaturated carbonyls</text>
<text x="20" y="170" font-size="11" fill="#5A6878">attacks DNA and protein nucleophiles</text>

<rect x="298" y="28" width="282" height="150" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="439" y="50" text-anchor="middle" font-weight="600" fill="#B26B00">Free radical / ROS</text>
<text x="310" y="72">&#183; hydrazines (isoniazid)</text>
<text x="310" y="92">&#183; nitroaromatics (nitrofurantoin)</text>
<text x="310" y="112">&#183; quinones and quinone imines</text>
<text x="310" y="132">&#183; anthracyclines (doxorubicin)</text>
<text x="310" y="152">&#183; redox cycling systems</text>
<text x="310" y="170" font-size="11" fill="#5A6878">causes lipid peroxidation and oxidative damage</text>

<rect x="588" y="28" width="284" height="150" rx="8" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="730" y="50" text-anchor="middle" font-weight="600" fill="#2F5FA8">Immune / hapten</text>
<text x="600" y="72">&#183; acetaldehyde from ethanol</text>
<text x="600" y="92">&#183; urushiol (poison ivy)</text>
<text x="600" y="112">&#183; imine intermediates</text>
<text x="600" y="132">&#183; reactive metabolite&#8211;protein adducts</text>
<text x="600" y="152">&#183; nitroso and hydroxylamine species</text>
<text x="600" y="170" font-size="11" fill="#5A6878">the adduct looks foreign &#8594; antibody response</text>

<text x="8" y="206" font-weight="600" font-size="12.5">Two further routes that do not fit those three</text>
<rect x="8" y="216" width="430" height="50" rx="8" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="20" y="238" font-weight="600">Azo reduction to carcinogens</text>
<text x="20" y="256" font-size="11" fill="#5A6878">Solvent Red 1 &#8594; carcinogenic aromatic amines</text>
<rect x="446" y="216" width="426" height="50" rx="8" fill="#F2F4F7" stroke="#D3DAE3"/>
<text x="458" y="238" font-weight="600">N-hydroxylation then sulfation</text>
<text x="458" y="256" font-size="11" fill="#5A6878">acetylaminofluorene &#8594; N-OH-AAF &#8594; sulfate ester, a carcinogen</text>
<text x="8" y="290" font-size="11.5" fill="#5A6878">A phase II reaction usually detoxifies, but sulfation of N-OH-AAF creates a leaving group and makes the carcinogen.</text>
</g></svg>`;

DIA.renalHandling = `<svg viewBox="0 0 880 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The three renal processes and how urinary pH traps ionized drug">
<defs><marker id="ak" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="8" y="17" font-weight="600" font-size="13">Three processes decide how much drug leaves in urine</text>
<rect x="8" y="30" width="266" height="98" rx="8" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="141" y="52" text-anchor="middle" font-weight="600">1. Glomerular filtration</text>
<text x="20" y="74" font-size="11.5">free drug only &#183; protein-bound stays behind</text>
<text x="20" y="94" font-size="11.5">falls with reduced GFR and kidney disease</text>
<text x="20" y="114" font-size="11.5" fill="#1E7A46">moves drug OUT of blood</text>

<rect x="282" y="30" width="266" height="98" rx="8" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="415" y="52" text-anchor="middle" font-weight="600">2. Tubular secretion</text>
<text x="294" y="74" font-size="11.5">active, carrier-mediated, saturable</text>
<text x="294" y="94" font-size="11.5">drugs compete (probenecid and penicillin)</text>
<text x="294" y="114" font-size="11.5" fill="#1E7A46">moves drug OUT of blood</text>

<rect x="556" y="30" width="316" height="98" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="714" y="52" text-anchor="middle" font-weight="600">3. Tubular reabsorption</text>
<text x="568" y="74" font-size="11.5">passive &#183; needs un-ionized, lipophilic drug</text>
<text x="568" y="94" font-size="11.5">this is the step urinary pH controls</text>
<text x="568" y="114" font-size="11.5" fill="#B3261E">brings drug BACK into blood</text>

<text x="8" y="158" font-weight="600" font-size="13">pH trapping: charge the drug and it cannot be reabsorbed</text>
<rect x="8" y="170" width="430" height="82" rx="8" fill="#F8FAFC" stroke="#D3DAE3"/>
<text x="20" y="192" font-weight="600" font-size="12.5">Weak acid overdose &#8594; alkalinize urine</text>
<text x="20" y="212" font-size="11.5">aspirin, phenobarbital &#183; give NaHCO&#8323;</text>
<text x="20" y="232" font-size="11.5" fill="#5A6878">high pH keeps the acid deprotonated (A&#8315;), so it stays in the tubule</text>

<rect x="446" y="170" width="426" height="82" rx="8" fill="#F8FAFC" stroke="#D3DAE3"/>
<text x="458" y="192" font-weight="600" font-size="12.5">Weak base overdose &#8594; acidify urine</text>
<text x="458" y="212" font-size="11.5">amphetamine &#183; give NH&#8324;Cl or ascorbic acid</text>
<text x="458" y="232" font-size="11.5" fill="#5A6878">low pH keeps the base protonated (BH&#8314;), so it stays in the tubule</text>
<text x="8" y="278" font-size="11.5" fill="#5A6878">Opposites: acid needs a basic urine, base needs an acidic urine. Charged drug cannot cross the tubule membrane, so it is carried out.</text>
<text x="8" y="294" font-size="11.5" fill="#5A6878">This is also why phase II conjugates, which are charged, are not reabsorbed.</text>
</g></svg>`;

DIA.enterohepatic = `<svg viewBox="0 0 880 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enterohepatic recycling of a glucuronide conjugate">
<defs><marker id="ae" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="#5A6878"/></marker></defs>
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="8" y="17" font-weight="600" font-size="13">Enterohepatic recycling</text>
<rect x="20" y="36" width="170" height="60" rx="8" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="105" y="60" text-anchor="middle" font-weight="600">Liver</text>
<text x="105" y="80" text-anchor="middle" font-size="11" fill="#5A6878">UGT adds glucuronic acid</text>
<path d="M190 66 L262 66" stroke="#5A6878" stroke-width="1.6" marker-end="url(#ae)"/>
<text x="226" y="56" text-anchor="middle" font-size="11">bile</text>
<rect x="264" y="36" width="190" height="60" rx="8" fill="#EAF0F9" stroke="#2F5FA8"/>
<text x="359" y="60" text-anchor="middle" font-weight="600">Gut lumen</text>
<text x="359" y="80" text-anchor="middle" font-size="11" fill="#5A6878">conjugate arrives, MW &gt; ~500</text>
<path d="M454 66 L526 66" stroke="#5A6878" stroke-width="1.6" marker-end="url(#ae)"/>
<rect x="528" y="36" width="230" height="60" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="643" y="60" text-anchor="middle" font-weight="600" fill="#B26B00">Gut bacteria</text>
<text x="643" y="80" text-anchor="middle" font-size="11" fill="#5A6878">&#946;-glucuronidase cleaves the sugar off</text>
<path d="M643 96 L643 140" stroke="#5A6878" stroke-width="1.6" marker-end="url(#ae)"/>
<rect x="500" y="142" width="286" height="58" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="643" y="164" text-anchor="middle" font-weight="600">Free drug again &#8212; lipophilic</text>
<text x="643" y="184" text-anchor="middle" font-size="11" fill="#5A6878">reabsorbed across the gut wall</text>
<path d="M500 171 L110 171 L110 100" stroke="#1E7A46" stroke-width="1.8" fill="none" marker-end="url(#ae)"/>
<text x="300" y="164" text-anchor="middle" font-size="11.5" fill="#1E7A46" font-weight="600">portal vein back to the liver</text>
<text x="8" y="232" font-size="11.5" fill="#5A6878">Each pass through the loop returns drug to the circulation, so the plasma curve shows a second peak and the half-life lengthens.</text>
<text x="8" y="252" font-size="11.5" fill="#5A6878">Breaking the loop lowers exposure: an antibiotic that kills gut flora removes the &#946;-glucuronidase step, which is the interaction cited for oral contraceptives.</text>
<text x="8" y="272" font-size="11.5" fill="#5A6878">Biliary excretion favours larger, more polar conjugates; small polar molecules go renally instead.</text>
</g></svg>`;

DIA.toxDefense = `<svg viewBox="0 0 880 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enzymatic defenses against reactive metabolites and the matching antidotes">
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="8" y="17" font-weight="600" font-size="13">What the body uses against each reactive species</text>
<rect x="8" y="28" width="430" height="112" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="223" y="50" text-anchor="middle" font-weight="600">Against electrophiles</text>
<text x="20" y="72" font-size="11.5"><tspan font-weight="600">GST</tspan> attaches glutathione to the electrophilic carbon</text>
<text x="20" y="92" font-size="11.5"><tspan font-weight="600">EH</tspan> opens an epoxide to a harmless diol</text>
<text x="20" y="114" font-size="11.5" fill="#5A6878">these two are the front line; both are consumable</text>
<text x="20" y="132" font-size="11.5" fill="#B3261E">once GSH runs out the electrophile hits protein instead</text>

<rect x="446" y="28" width="426" height="112" rx="8" fill="#E8F3EC" stroke="#1E7A46"/>
<text x="659" y="50" text-anchor="middle" font-weight="600">Against free radicals and ROS</text>
<text x="458" y="72" font-size="11.5"><tspan font-weight="600">SOD</tspan> converts superoxide to hydrogen peroxide</text>
<text x="458" y="92" font-size="11.5"><tspan font-weight="600">Catalase</tspan> and <tspan font-weight="600">GPx</tspan> convert that peroxide to water</text>
<text x="458" y="114" font-size="11.5" fill="#5A6878">vitamins C and E donate electrons to stop the chain</text>
<text x="458" y="132" font-size="11.5" fill="#5A6878">the sequence matters: superoxide first, peroxide second</text>

<text x="8" y="170" font-weight="600" font-size="13">Antidotes, matched to the mechanism</text>
<rect x="8" y="180" width="282" height="56" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="20" y="202" font-weight="600">NAC for APAP</text>
<text x="20" y="222" font-size="11.5" fill="#5A6878">supplies cysteine so the liver rebuilds GSH</text>
<rect x="298" y="180" width="282" height="56" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="310" y="202" font-weight="600">2-PAM for organophosphates</text>
<text x="310" y="222" font-size="11.5" fill="#5A6878">pulls the phosphate off acetylcholinesterase</text>
<rect x="588" y="180" width="284" height="56" rx="8" fill="#FFF6E5" stroke="#B26B00"/>
<text x="600" y="202" font-weight="600">Enhanced elimination</text>
<text x="600" y="222" font-size="11.5" fill="#5A6878">urine pH change, dialysis, activated charcoal</text>
</g></svg>`;

DIA.routeRank = `<svg viewBox="0 0 880 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Routes of elimination ranked from major to minor">
<g font-family="system-ui,sans-serif" font-size="12.5" fill="#16202E">
<text x="8" y="17" font-weight="600" font-size="13">Routes of elimination, major to minor</text>
<g font-size="12">
<rect x="8" y="28" width="640" height="26" rx="4" fill="#2F5FA8"/><text x="18" y="46" fill="#fff" font-weight="600">1. Renal / urinary &#8212; the major route</text>
<rect x="8" y="58" width="500" height="26" rx="4" fill="#4A7BC4"/><text x="18" y="76" fill="#fff" font-weight="600">2. Hepatic / biliary / fecal</text>
<rect x="8" y="88" width="360" height="26" rx="4" fill="#7FA3D6"/><text x="18" y="106" fill="#16202E" font-weight="600">3. Intestinal</text>
<rect x="8" y="118" width="260" height="26" rx="4" fill="#A8C3E5"/><text x="18" y="136" fill="#16202E" font-weight="600">4. Lungs / exhalation</text>
<rect x="8" y="148" width="170" height="26" rx="4" fill="#C9DAF0"/><text x="18" y="166" fill="#16202E" font-weight="600">5. Minor routes</text>
</g>
<text x="676" y="46" font-size="11.5" fill="#5A6878">small, polar, un-bound drug</text>
<text x="536" y="76" font-size="11.5" fill="#5A6878">large conjugates, MW &gt; ~500</text>
<text x="396" y="106" font-size="11.5" fill="#5A6878">direct secretion into the gut</text>
<text x="296" y="136" font-size="11.5" fill="#5A6878">volatiles and gases</text>
<text x="196" y="166" font-size="11.5" fill="#5A6878">skin, sweat, saliva, hair, milk &#183; negligible for clearance</text>
<text x="8" y="200" font-size="11.5" fill="#5A6878">The minor routes still matter clinically: hair and saliva give a testing window for drugs of abuse, and milk matters for the nursing infant.</text>
<text x="8" y="220" font-size="11.5" fill="#5A6878">Which route a drug takes follows from its size and polarity, which is what phase II metabolism changes.</text>
</g></svg>`;
