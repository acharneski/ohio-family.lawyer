// Validates content front matter against the schema in idea.md §7.5.
// Fails the build (exit 1) on any error.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import matter from 'gray-matter';

const ROOT = 'src/content';
const TYPES = new Set(['essay', 'news', 'brief', 'guide', 'foundation', 'page']);
const STATUSES = new Set(['draft', 'review', 'published', 'archived']);
const KINDS = new Set(['brief', 'explainer', 'recap']);
const DISCLAIMERS = new Set(['standard', 'clinical', 'none']);

const REQUIRED = {
  common: ['title', 'type', 'date', 'status', 'summary'],
  essay: ['author'],
  news: ['kind'],
  brief: ['law_as_of'],
  guide: ['law_as_of'],
};

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) yield p;
  }
}

const errors = [];
const warnings = [];
let count = 0;

for await (const file of walk(ROOT)) {
  count++;
  const rel = relative(process.cwd(), file);
  const { data } = matter(await readFile(file, 'utf8'));
  const err = (msg) => errors.push(`${rel}: ${msg}`);

  // Directory data may supply `type`; infer from folder if missing.
  const type = data.type ?? inferType(file);
  if (!TYPES.has(type)) err(`invalid type "${type}"`);

  const required = [...REQUIRED.common, ...(REQUIRED[type] ?? [])];
  for (const field of required) {
    if (field === 'type') continue;
    if (data[field] === undefined || data[field] === '') err(`missing required field "${field}"`);
  }

  if (data.status && !STATUSES.has(data.status)) err(`invalid status "${data.status}"`);
  if (data.kind && !KINDS.has(data.kind)) err(`invalid kind "${data.kind}"`);
  if (data.disclaimer && !DISCLAIMERS.has(data.disclaimer)) err(`invalid disclaimer "${data.disclaimer}"`);

  if (Array.isArray(data.statutes) && data.statutes.length && !data.law_as_of) {
    err('"law_as_of" is required when "statutes" is non-empty');
  }

  if (data.reform_priorities) {
    const bad = [].concat(data.reform_priorities).filter((n) => !Number.isInteger(n) || n < 1 || n > 12);
    if (bad.length) err(`reform_priorities out of range: ${bad.join(', ')}`);
  }

  if (data.status === 'published' && type !== 'page' && type !== 'news' && !data.reviewed_by) {
    warnings.push(`${rel}: published without "reviewed_by"`);
  }
  if (type === 'news' && data.status === 'published' && data.kind !== 'brief' && !data.source_url) {
    warnings.push(`${rel}: news item has no source_url`);
  }
   // SEO hygiene (warnings only). Search results truncate titles near 60–70 chars
   // and descriptions near 155–160.
   const seoTitle = String(data.seoTitle ?? data.title ?? '');
   if (seoTitle.length > 70) {
     warnings.push(`${rel}: title is ${seoTitle.length} chars; set a shorter "seoTitle" (≤ 65)`);
   }
   const seoDescription = String(data.seoDescription ?? data.summary ?? '');
   if (seoDescription && (seoDescription.length < 70 || seoDescription.length > 165)) {
     warnings.push(`${rel}: description is ${seoDescription.length} chars; aim for 70–160 (set "seoDescription")`);
   }
}

function inferType(file) {
  if (file.includes('/news/')) return 'news';
  if (file.includes('/essays/')) return 'essay';
  if (file.includes('/briefs/')) return 'brief';
  if (file.includes('/guides/')) return 'guide';
  if (file.includes('/foundations/')) return 'foundation';
  return 'page';
}

warnings.forEach((w) => console.warn(`warn  ${w}`));
errors.forEach((e) => console.error(`error ${e}`));
console.log(`Checked ${count} files: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);