// node overflow.js <page.html> : sideways overflow per tab at 375 px, and the widest element
const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({viewport: {width: 375, height: 820}});
  await p.addInitScript(() => { window.prompt = () => 'TestUser'; });
  await p.goto('file://' + process.argv[2]);
  await p.waitForFunction(() => document.querySelectorAll('#nav button').length > 3);
  const tabs = await p.evaluate(() => [...document.querySelectorAll('#nav button')].map(b => b.dataset.v));
  for (const v of tabs) {
    await p.evaluate(v => document.querySelector(`#nav button[data-v="${v}"]`).click(), v);
    await p.waitForTimeout(300);
    const r = await p.evaluate(() => {
      const over = document.documentElement.scrollWidth - window.innerWidth;
      let worst = null;
      document.querySelectorAll('.view:not(.hide) *, section:not(.hide) *').forEach(e => {
        const rr = e.getBoundingClientRect();
        if (rr.right > window.innerWidth + 1 && rr.width && (!worst || rr.right > worst.r)) worst = {r: Math.round(rr.right), tag: e.tagName, cls: e.className && String(e.className).slice(0, 30)};
      });
      return {over, worst};
    });
    console.log(v.padEnd(9), 'overflow', String(r.over).padStart(4), 'px', r.worst ? JSON.stringify(r.worst) : '');
  }
  await b.close();
})();
