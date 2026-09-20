#!/usr/bin/env python3
"""Drive the built app in a real browser and fail on anything a user would hit.

The node checks parse the bank and exercise the engine, but they stub out the
DOM. This opens the actual file in Chromium, answers a question, reveals the
explanation and visits every view, so a fault that only appears once the page
runs — a boot error, a view that throws on click, an image that does not decode
— is caught before the file is delivered.

    python3 browser_test.py [path-to-html]
"""
import glob, json, pathlib, re, sys
from playwright.sync_api import sync_playwright

HTML = sys.argv[1] if len(sys.argv) > 1 else '/mnt/user-data/outputs/PHAR4342_Final_Drill.html'

# Every question file, found rather than listed, so a new one is picked up here
# the moment it is built into the page instead of quietly going uncounted.
QSRC = sorted(glob.glob('q[0-9]*.js'))


# A question object opens at column 0 and carries a prof field; the TOPICS
# entries in q1_cyp.js are indented and have no prof, so they are not counted.
QRE = re.compile(r"(?m)^\{id:'[^']+', *prof:'")


def source_counts():
    """How many questions and images the sources hold, so the page can be
    compared against them instead of against a number written here."""
    n = sum(len(QRE.findall(open(f, encoding='utf-8').read())) for f in QSRC)
    if n == 0:
        sys.exit('ERROR: counted no questions in the sources — the count pattern is wrong')
    return n, len(json.load(open('images.json')))


fails = []
def check(ok, label, detail=''):
    print(('  ok    ' if ok else '  FAIL  ') + label + (f'  — {detail}' if detail and not ok else ''))
    if not ok:
        fails.append(label)


def main():
    path = pathlib.Path(HTML).resolve()
    if not path.exists():
        sys.exit(f'ERROR: {path} does not exist — run build.py first')

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 900})

        errors, console_errors = [], []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: console_errors.append(m.text) if m.type == 'error' else None)

        print('\n=== Browser smoke test ===')
        page.goto(path.as_uri())
        page.wait_for_timeout(1200)

        # the app asks for a name on first run; answer the prompt if it appears
        page.evaluate("window.prompt = () => 'TestUser'")

        check(not errors, 'page loads with no uncaught JavaScript error',
              '; '.join(errors[:2]))
        check(not console_errors, 'no console errors on load', '; '.join(console_errors[:2]))

        body = page.inner_text('body')
        check(len(body) > 200, 'page renders visible text', f'only {len(body)} chars')

        # the question bank reached the page, counted from the sources rather
        # than from a literal, so adding questions does not require editing this
        want_q, want_i = source_counts()
        n = page.evaluate('typeof QUESTIONS !== "undefined" ? QUESTIONS.length : -1')
        check(n == want_q, f'question bank present in the page ({n} of {want_q} in the sources)')
        imgs = page.evaluate('typeof IMAGES !== "undefined" ? Object.keys(IMAGES).length : -1')
        check(imgs == want_i, f'image bank present in the page ({imgs} of {want_i} in images.json)')

        # every image decodes: a truncated base64 URL would fail here and nowhere else
        bad = page.evaluate("""async () => {
            const bad = [];
            for (const [k, v] of Object.entries(IMAGES)) {
                const ok = await new Promise(res => {
                    const im = new Image();
                    im.onload = () => res(im.naturalWidth > 0);
                    im.onerror = () => res(false);
                    im.src = v;
                });
                if (!ok) bad.push(k);
            }
            return bad;
        }""")
        check(not bad, f'all {imgs} embedded images decode', ', '.join(bad[:5]))

        # answer a question end to end through the real UI
        started = page.evaluate("""() => {
            if (typeof startQuiz !== 'function') return 'no startQuiz';
            try { startQuiz('cyp'); return 'ok'; } catch (e) { return String(e); }
        }""")
        check(started == 'ok', 'a quiz starts', started)
        page.wait_for_timeout(400)

        opts = page.query_selector_all('#v-quiz button[data-o]')
        check(len(opts) >= 2, f'question options render ({len(opts)} found)')
        if opts:
            opts[0].click()
            page.wait_for_timeout(500)
            after = page.inner_text('body')
            check('concept behind this' in after.lower() or len(after) > len(body),
                  'answering reveals the explanation')
        # A teachImg renders only inside the concept block, so answering a
        # question that carries one is the only way to see whether it displays.
        # Driving a specific question makes this assert something; counting
        # whatever happened to be on screen would pass with zero figures.
        shown = page.evaluate("""() => {
            const want = QUESTIONS.filter(q => q.teachImg);
            if (!want.length) return {err: 'no question in the bank carries a teachImg'};
            const noTeach = want.filter(q => !q.teach).map(q => q.id);
            const missing = [], notEmbedded = [];
            for (const q of want) {
                startQuiz(q.topic);
                if (!Q) return {err: 'startQuiz left no quiz state'};
                Q.current = q; Q.picked = null; Q.revealed = false;
                renderQuiz();
                const b = document.querySelector('#v-quiz button[data-o]');
                if (!b) { missing.push(q.id + ' (no options)'); continue; }
                b.click();
                const img = document.querySelector('#v-quiz img.qimg');
                if (!img) { missing.push(q.id + ' -> ' + q.teachImg); continue; }
                if (!img.getAttribute('src').startsWith('data:image/'))
                    notEmbedded.push(q.id);
            }
            return {n: want.length, noTeach, missing, notEmbedded};
        }""")
        check(not shown.get('err'), 'questions carrying a figure can be reached', shown.get('err', ''))
        check(not shown.get('noTeach'),
              'every teachImg sits on a question that has a concept block',
              'these would never display: ' + ', '.join(shown.get('noTeach', [])))
        check(not shown.get('missing'),
              f"all {shown.get('n')} concept-block figures render after answering",
              'did not render: ' + ', '.join(shown.get('missing', [])[:6]))
        check(not shown.get('notEmbedded'),
              'every rendered figure is an embedded data URL',
              ', '.join(shown.get('notEmbedded', [])[:6]))

        # Every question, answered through the real renderer. The checks above
        # drive a handful; a fault in one question's data — an option list that
        # renders short, an explanation that throws, a citation that vanishes —
        # only shows up when that question is the one on screen.
        every = page.evaluate("""() => {
            const bad = {options: [], verdict: [], whys: [], cite: [], threw: []};
            for (const q of QUESTIONS) {
                try {
                    startQuiz(q.topic);
                    Q.current = q; Q.picked = null; Q.revealed = false;
                    renderQuiz();
                    const btns = document.querySelectorAll('#v-quiz button[data-o]');
                    if (btns.length !== q.options.length) {
                        bad.options.push(`${q.id} (${btns.length}/${q.options.length})`);
                        continue;
                    }
                    btns[0].click();
                    const panel = document.querySelector('#v-quiz .why');
                    if (!panel) { bad.verdict.push(q.id); continue; }
                    const rows = panel.querySelectorAll('.wrow');
                    if (rows.length !== q.options.length)
                        bad.whys.push(`${q.id} (${rows.length}/${q.options.length})`);
                    const cite = panel.querySelector('.cite');
                    if (!cite || cite.textContent.trim().length < 5) bad.cite.push(q.id);
                } catch (e) {
                    bad.threw.push(`${q.id}: ${e.message}`);
                }
            }
            return bad;
        }""")
        n_q = len(page.evaluate('QUESTIONS.map(q=>q.id)'))
        check(not every['threw'], f'all {n_q} questions answer without throwing',
              ' | '.join(every['threw'][:3]))
        check(not every['options'], 'every question renders all of its options',
              ', '.join(every['options'][:5]))
        check(not every['verdict'], 'every answer produces an explanation panel',
              ', '.join(every['verdict'][:5]))
        check(not every['whys'], 'every option gets its own explanation row',
              ', '.join(every['whys'][:5]))
        check(not every['cite'], 'every question shows a citation',
              ', '.join(every['cite'][:5]))

        # The full sweep: every question once, in order, no repeats, ending on
        # its own panel. A queue that loops or stops short is invisible until
        # someone actually walks it.
        sweep = page.evaluate("""() => {
            show('topics');
            const btn = document.getElementById('sweepAll');
            if (!btn) return {err: 'no "All questions" button on the topics view'};
            btn.click();
            if (!Q || !Q.sweep) return {err: 'sweep did not start'};
            const want = Q.sweep.length;
            const seen = new Set(); let dup = 0, n = 0;
            while (Q && Q.current && n < want + 20) {
                if (seen.has(Q.current.id)) dup++;
                seen.add(Q.current.id);
                const o = document.querySelector('#v-quiz button[data-o]');
                if (!o) return {err: 'no options at question ' + (n + 1)};
                o.click();
                const nx = document.getElementById('btnNext');
                if (!nx) return {err: 'no Next button at question ' + (n + 1)};
                nx.click(); n++;
            }
            return {want, answered: n, distinct: seen.size, dup,
                    ended: !!document.querySelector('#v-quiz .empty')};
        }""")
        check(not sweep.get('err'), 'the full sweep starts from the topics view', sweep.get('err', ''))
        if not sweep.get('err'):
            check(sweep['answered'] == sweep['want'],
                  f"the sweep serves all {sweep.get('want')} questions",
                  f"served {sweep.get('answered')}")
            check(sweep['dup'] == 0, 'the sweep repeats nothing',
                  f"{sweep.get('dup')} repeats")
            check(sweep['distinct'] == sweep['want'], 'the sweep covers every question',
                  f"{sweep.get('distinct')} of {sweep.get('want')} distinct")
            check(sweep['ended'], 'the sweep ends on its completion panel')

        # The app is opened from disk, where a browser can give the page an
        # opaque origin and make localStorage throw on the first read. That used
        # to happen while the script was still evaluating, which left a blank
        # page. Loading with storage denied proves the drill still runs.
        denied = browser.new_page(viewport={'width': 1280, 'height': 900})
        denied_errors = []
        denied.on('pageerror', lambda e: denied_errors.append(str(e)))
        denied.add_init_script("""
            const boom = () => { throw new DOMException('denied', 'SecurityError'); };
            Object.defineProperty(window, 'localStorage', {
                configurable: true,
                get: boom,
            });
        """)
        denied.goto(path.as_uri())
        denied.wait_for_timeout(1000)
        denied.evaluate("window.prompt = () => 'TestUser'")
        survived = denied.evaluate("""() => {
            try {
                if (typeof QUESTIONS === 'undefined') return {err: 'script did not finish'};
                startQuiz('cyp');
                const btns = document.querySelectorAll('#v-quiz button[data-o]');
                if (!btns.length) return {err: 'no options rendered'};
                btns[0].click();
                return {ok: !!document.querySelector('#v-quiz .why')};
            } catch (e) { return {err: e.message}; }
        }""")
        check(not survived.get('err') and survived.get('ok'),
              'the drill still runs when the browser denies localStorage',
              survived.get('err', 'no explanation panel'))
        check(not denied_errors, 'no uncaught error with storage denied',
              '; '.join(denied_errors[:2]))
        denied.close()

        # The reference text is authored as HTML, so any label re-escaped for an
        # attribute or a caption can reach the reader as a literal "&mdash;".
        ref = page.evaluate("""() => {
            show('ref');
            const el = document.querySelector('#v-ref');
            const raw = t => /&[a-z]+;/i.test(t);
            return {
                figs: el.querySelectorAll('.reffig img').length,
                secs: el.querySelectorAll('h3').length,
                navs: el.querySelectorAll('.refnav a').length,
                entities: [...el.querySelectorAll('figcaption, .refnav a, h3')]
                    .map(e => e.textContent).filter(raw).slice(0, 4),
                tokens: /\\{\\{fig:/.test(el.innerHTML),
                broken: [...el.querySelectorAll('.reffig img')]
                    .filter(i => !i.getAttribute('src').startsWith('data:image/'))
                    .map(i => i.getAttribute('alt')).slice(0, 4),
            };
        }""")
        check(ref['secs'] > 0 and ref['navs'] == ref['secs'],
              f"reference has {ref['secs']} sections, each with a jump link",
              f"{ref['navs']} links for {ref['secs']} sections")
        check(ref['figs'] > 0, f"reference figures render ({ref['figs']})")
        check(not ref['broken'], 'every reference figure is an embedded data URL',
              ', '.join(ref['broken']))
        check(not ref['tokens'], 'no unexpanded figure token reached the reference')
        check(not ref['entities'], 'no raw HTML entity reaches the reader',
              ' | '.join(ref['entities']))

        # The atlas is a recall surface as well as a reference one, so the
        # names have to be hideable and the structures have to survive hiding.
        atlas = page.evaluate("""() => {
            show('atlas');
            const el = document.getElementById('v-atlas');
            const tiles = () => [...el.querySelectorAll('.attile')].filter(t => !t.hidden);
            const before = tiles().length;

            const hide = el.querySelector('#atHide');
            if (hide) hide.click();
            const hidden = el.classList.contains('namesoff');

            const reveal = el.querySelector('#atShow');
            const revealOffered = !!reveal && !reveal.classList.contains('hide');
            if (hide) hide.click();          // back to names shown

            const box = el.querySelector('#atq');
            let filtered = before;
            if (box) {
                box.value = 'tetrazole';
                box.oninput();
                filtered = tiles().length;
                box.value = '';
                box.oninput();
            }
            return {
                tiles: before,
                svgs: el.querySelectorAll('.attile .atfig svg').length,
                boards: el.querySelectorAll('.atboard').length,
                hidden, filtered, restored: tiles().length, revealOffered,
                hasSearch: !!box, hasHide: !!hide,
            };
        }""")
        check(atlas['tiles'] > 50, f"atlas renders its tiles ({atlas['tiles']})")
        check(atlas['svgs'] == atlas['tiles'],
              'every atlas tile draws a structure',
              f"{atlas['svgs']} drawings for {atlas['tiles']} tiles")
        check(atlas['boards'] > 5, f"atlas boards render ({atlas['boards']})")
        check(atlas['hasHide'] and atlas['hidden'],
              'hiding the names puts the atlas into recall mode')
        check(atlas['revealOffered'],
              'recall mode offers a way to reveal every name again')
        check(atlas['hasSearch'] and 0 < atlas['filtered'] < atlas['tiles'],
              'atlas search narrows the tiles',
              f"{atlas['filtered']} of {atlas['tiles']} left after searching")
        check(atlas['restored'] == atlas['tiles'],
              'clearing the search brings every tile back',
              f"{atlas['restored']} of {atlas['tiles']}")

        # A question that asks for the name of a drawn group must not carry
        # that name anywhere a reader can reach before answering.
        drawn = page.evaluate("""() => {
            const q = QUESTIONS.filter(x => x.fg);
            const missing = q.filter(x => !FGQ[x.fg]).map(x => x.id);
            const leaks = q.filter(x => {
                const svg = FGQ[x.fg] || '';
                return svg.includes(x.fg) || /aria-label="(?!Chemical structure)/.test(svg);
            }).map(x => x.id);
            return {n: q.length, missing: missing.slice(0, 4), leaks: leaks.slice(0, 4)};
        }""")
        check(drawn['n'] > 0, f"questions carry a drawn structure ({drawn['n']})")
        check(not drawn['missing'], 'every drawn structure resolves to a group',
              ', '.join(drawn['missing']))
        check(not drawn['leaks'], 'no drawing names the group it is asking about',
              ', '.join(drawn['leaks']))

        shown = page.evaluate("""() => {
            const drawn = QUESTIONS.filter(q => q.fg);
            if (!drawn.length) return 'no question carries a drawn structure';
            const missing = [];
            for (const q of drawn) {
                startQuiz(q.topic);
                Q.current = q; Q.picked = null; Q.revealed = false;
                renderQuiz();
                const el = document.getElementById('v-quiz');
                if (!el.querySelector('.fgshow svg')) missing.push(q.id);
            }
            return missing.length
                ? `${missing.length} show no drawing: ` + missing.slice(0, 4).join(', ')
                : 'ok';
        }""")
        check(shown == 'ok',
              'every structure question shows its drawing before the answer', shown)

        # every view renders without throwing
        for view in ['topics', 'quiz', 'gaps', 'exam', 'atlas', 'ref', 'settings']:
            r = page.evaluate(f"""() => {{
                try {{ if (typeof show === 'function') {{ show('{view}'); return 'ok'; }}
                      return 'no show()'; }} catch (e) {{ return String(e); }} }}""")
            page.wait_for_timeout(150)
            check(r == 'ok', f"view '{view}' renders", r)

        check(not errors, 'no uncaught error after interaction', '; '.join(errors[:2]))

        page.screenshot(path='/tmp/drill_screenshot.png', full_page=False)
        browser.close()

    print()
    if fails:
        print(f'{len(fails)} browser check(s) failed')
        sys.exit(1)
    print('Browser smoke test passed')


if __name__ == '__main__':
    main()
