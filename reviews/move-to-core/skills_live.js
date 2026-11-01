const {chromium} = require('playwright');
(async () => { const b = await chromium.launch(); const p = await b.newPage();
  await p.addInitScript(() => { window.prompt = () => 'TestUser'; });
  await p.goto('file://' + process.argv[2]); await p.waitForFunction(() => document.querySelectorAll('#nav button').length > 3);
  console.log(JSON.stringify(await p.evaluate(() => Object.fromEntries(QUESTIONS.map(q => [q.id, skillOf(q)])))));
  await b.close(); })();
