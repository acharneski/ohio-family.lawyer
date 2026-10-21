// Minimal internal link checker for _site. External link checking runs weekly in CI (TODO).
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const SITE = '_site';
const broken = [];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.html')) yield p;
  }
}

const exists = (p) => access(p).then(() => true, () => false);

for await (const file of walk(SITE)) {
  const html = await readFile(file, 'utf8');
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith('/pagefind/')) continue;
    const target = href.endsWith('/') ? join(SITE, href, 'index.html') : join(SITE, href);
    if (!(await exists(target))) broken.push(`${file} → ${href}`);
  }
}

broken.forEach((b) => console.error(`broken ${b}`));
console.log(`${broken.length} broken internal link(s).`);
process.exit(broken.length ? 1 : 0);