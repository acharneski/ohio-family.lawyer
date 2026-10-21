// Renders a 1200×630 share card for every built page, at the path the page declares
// in its og:image meta tag (see lib/seo.js#ogImagePath). Runs after Eleventy, before Pagefind.
// No third-party services: SVG is rendered locally with resvg.
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const SITE = '_site';
const SERIF = "'Iowan Old Style', Palatino, Georgia, 'DejaVu Serif', serif";
const SANS = "system-ui, 'Segoe UI', Roboto, Arial, 'DejaVu Sans', sans-serif";
const C = { bg: '#faf8f4', tint: '#f2eee6', ink: '#1c1b19', soft: '#3d3b37', muted: '#6a665e', accent: '#1f4e5f' };
const BADGES = {
  essay: ['Essay', '#1f4e5f'],
  news: ['News', '#4a5560'],
  brief: ['Policy brief', '#5b6236'],
  guide: ['Guide', '#7a5a2b'],
  foundation: ['Foundations', '#5d4a63'],
  page: ['Ohio family law', '#1f4e5f'],
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

const decode = (s = '') =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const meta = (html, key) =>
  html.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"`))?.[1];

function wrap(text, max, maxLines) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > max && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = `${lines[maxLines - 1].replace(/[\s,.;:]*\S*$/, '')}…`;
  }
  return lines;
}

const tspans = (lines, x, y, step) =>
  lines.map((l, i) => `<tspan x="${x}" y="${Math.round(y + i * step)}">${esc(l)}</tspan>`).join('');

function card({ title, description, type }) {
  const [label, color] = BADGES[type] ?? BADGES.page;
  const titleLines = wrap(title, 30, 3);
  const titleSize = titleLines.length > 2 ? 56 : 64;
  const lh = titleSize * 1.15;
  const titleY = 220;
  const descY = titleY + titleLines.length * lh + 24;
  const descLines = wrap(description, 64, titleLines.length > 2 ? 1 : 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${C.bg}"/>
  <rect width="1200" height="14" fill="${color}"/>
  <rect x="80" y="80" width="${label.length * 17 + 44}" height="46" rx="6" fill="${color}"/>
  <text x="102" y="111" font-family="${SANS}" font-size="22" font-weight="700" letter-spacing="2" fill="#ffffff">${esc(label.toUpperCase())}</text>
  <text font-family="${SERIF}" font-size="${titleSize}" font-weight="700" fill="${C.ink}">${tspans(titleLines, 80, titleY, lh)}</text>
  <text font-family="${SANS}" font-size="28" fill="${C.soft}">${tspans(descLines, 80, descY, 40)}</text>
  <rect x="0" y="530" width="1200" height="100" fill="${C.tint}"/>
  <text x="80" y="592" font-family="${SANS}" font-size="30" font-weight="700" fill="${C.accent}">ohio-family.lawyer</text>
  <text x="1120" y="592" text-anchor="end" font-family="${SANS}" font-size="22" fill="${C.muted}">Evidence and due process for every parent</text>
</svg>`;
}

const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="${C.accent}"/>
  <text x="256" y="330" text-anchor="middle" font-family="${SERIF}" font-size="220" font-weight="700" fill="#ffffff">OF</text>
</svg>`;

async function render(svg, out, width) {
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true, defaultFontFamily: 'DejaVu Sans' },
  })
    .render()
    .asPng();
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, png);
}

const done = new Set(['/og/default.png', '/og/logo.png']);
let count = 0;

for await (const file of walk(SITE)) {
  const html = await readFile(file, 'utf8');
  const img = meta(html, 'og:image');
  if (!img) continue;
  const path = new URL(img).pathname;
  if (!path.startsWith('/og/') || done.has(path)) continue;
  done.add(path);
  const type = html.match(/<body class="type-([a-z]+)"/)?.[1] ?? 'page';
  await render(
    card({
      title: decode(meta(html, 'og:title') ?? ''),
      description: decode(meta(html, 'og:description') ?? ''),
      type,
    }),
    join(SITE, path),
    1200,
  );
  count++;
}

await render(
  card({
    title: 'Evidence and due process for every parent. Real protection for every child.',
    description: "News, research, and reform for Ohio's family courts.",
    type: 'page',
  }),
  join(SITE, 'og/default.png'),
  1200,
);
await render(logo, join(SITE, 'og/logo.png'), 512);

console.log(`Rendered ${count + 2} share image(s).`);