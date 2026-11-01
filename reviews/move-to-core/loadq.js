// node loadq.js <src dir> <file1> <file2> ...  -> prints JSON {id: question} of QUESTIONS
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = process.argv[2], files = process.argv.slice(3);
let src = '';
for (const f of files) src += fs.readFileSync(path.join(dir, f), 'utf8') + '\n';
src += '\n;__out = {QUESTIONS: (typeof QUESTIONS!=="undefined"?QUESTIONS:[]), TOPICS: (typeof TOPICS!=="undefined"?TOPICS:[])};';
const ctx = {console, __out: null};
ctx.window = ctx; ctx.self = ctx; ctx.document = {createElement(){return {}}, querySelector(){return null}};
vm.createContext(ctx);
vm.runInContext(src, ctx, {filename: 'bank.js'});
const qs = ctx.__out.QUESTIONS;
const out = {};
const dups = [];
for (const q of qs) { if (out[q.id]) dups.push(q.id); out[q.id] = q; }
process.stdout.write(JSON.stringify({n: qs.length, dups, topics: ctx.__out.TOPICS.length, q: out}));
