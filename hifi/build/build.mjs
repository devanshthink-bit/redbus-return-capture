// Builds hifi/index.html: every Figma frame in "Screens · redBus return capture (iPhone 14)"
// rendered to static HTML, wrapped in an iPhone 14 viewport with the flow wired.
import { build } from 'esbuild';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const require = createRequire(import.meta.url);

// 1 · bundle the screens (TSX -> CJS) so we can render them under node
const out = path.join(root, 'build', 'screens.cjs');
await build({
  entryPoints: [path.join(root, 'src', 'render.tsx')],
  bundle: true,
  format: 'cjs',
  platform: 'node',
  jsx: 'automatic',
  outfile: out,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  logLevel: 'warning',
});

const { SCREENS } = require(out);
if (SCREENS.length !== 23) throw new Error(`expected 23 screens, got ${SCREENS.length}`);

// 2 · render each frame to static markup
const rendered = SCREENS.map(({ id, name, C }) => {
  // React 19 hoists <link rel="preload" as="image"> for every <img>; drop them,
  // the assets are local and the tags would sit inside the scroller.
  const html = renderToStaticMarkup(C({})).replace(/<link rel="preload"[^>]*\/?>/g, '');
  if (!html.startsWith('<div')) throw new Error(`${id}: unexpected root ${html.slice(0, 60)}`);
  if (html.includes('rel="preload"')) throw new Error(`${id}: preload link survived`);
  return { id, name, html };
});

// 3 · the flow: forward hotspots per screen, walked in the order the frames are
//     arranged in the Figma section. Back is the chevron / close on the screen.
const FORWARD = {
  '01':  ['[data-name="Button / Primary"]'],
  '02':  ['[data-name="Card / Bus"]'],
  '03':  ['[data-name="Button / Primary"]'],
  '03a': ['[data-name="Bottom sheet · collapsed"]'],
  '03b': ['[data-name="Collapse"]'],
  '04':  ['[data-name="Button / Primary"]'],
  '05':  ['[data-name="Button / Primary"]'],
  '05a': ['[data-name="Button / Primary"]'],
  '05b': ['[data-name="Button / Primary"]'],
  '06':  ['[data-name^="Day · "]', '[data-name="Button / Primary"]'],
  '06a': ['[data-name="Button / Primary"]'],
  '07':  ['[data-name="Button / Primary"]'],
  '08':  ['[data-name="Button / Primary"]'],
  '08a': ['[data-name="Button / Primary"]'],
  '08b': ['[data-name="Button / Primary"]'],
  '09':  ['[data-name="Row / Payment method"]'],
  '10':  ['[data-name="Button / Primary"]'],
  '11':  ['[data-name="Change day"]'],
  '12':  ['[data-name="Booking"]'],
  '13':  ['[data-name="Calendar"]'],
  '14':  ['[data-name="Card / Bus"]'],
  '15':  ['[data-name="Button / Primary"]'],
  '16':  [],
};
for (const s of rendered) if (!(s.id in FORWARD)) throw new Error(`no forward map for ${s.id}`);

const shell = readFileSync(path.join(root, 'build', 'shell.html'), 'utf8');
const screensHtml = rendered
  .map((s, i) => `<section class="screen" data-screen="${s.id}"${i === 0 ? '' : ' hidden'}>
<div class="scroll">${s.html}</div><div class="overlay"></div></section>`)
  .join('\n');

const rail = rendered
  .map((s, i) => `<button class="railrow" data-go="${i}"><span class="railn">${s.id}</span>${
    s.name.replace(/^[0-9a-b]+ · /, '')}</button>`)
  .join('\n');

const page = shell
  .replace('<!--SCREENS-->', screensHtml)
  .replace('<!--RAIL-->', rail)
  .replace('/*FLOW*/', `const FORWARD=${JSON.stringify(FORWARD)};` +
    `const ORDER=${JSON.stringify(rendered.map(s => s.id))};` +
    `const NAMES=${JSON.stringify(rendered.map(s => s.name))};`);

if (page.includes('<!--SCREENS-->') || page.includes('<!--RAIL-->') || page.includes('/*FLOW*/'))
  throw new Error('shell placeholder not replaced');

mkdirSync(path.join(root), { recursive: true });
writeFileSync(path.join(root, 'index.html'), page);
console.log(`index.html written · ${rendered.length} screens · ${(page.length / 1024).toFixed(0)} KB`);
