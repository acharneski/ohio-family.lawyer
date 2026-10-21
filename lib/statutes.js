import { slugify } from "./text.js";

// Map a citation string ("ORC 3109.042", "ORC 3119", "Sup.R. 48") to an official URL.
// The weekly link check will flag any of these that move.
export function statuteUrl(cite) {
  const s = String(cite).trim();
  let m = s.match(/^ORC\s*§*\s*(\d+)\.(\d+)/i);
  if (m) return `https://codes.ohio.gov/ohio-revised-code/section-${m[1]}.${m[2]}`;
  m = s.match(/^ORC\s*(?:Ch\.?|Chapter)?\s*(\d+)$/i);
  if (m) return `https://codes.ohio.gov/ohio-revised-code/chapter-${m[1]}`;
  if (/^Sup\.?\s*R\.?/i.test(s)) return "https://www.supremecourt.ohio.gov/laws-rules/";
  return null;
}

// Normalize a citation to a stable slug and display label for the /law/ hubs.
// "ORC 3119" and "ORC Ch. 3119" resolve to the same hub.
export function statuteKey(cite) {
  const s = String(cite).trim();
  let m = s.match(/^ORC\s*§*\s*(\d+)\.(\d+)/i);
  if (m) return { slug: `orc-${m[1]}-${m[2]}`, label: `ORC § ${m[1]}.${m[2]}` };
  m = s.match(/^ORC\s*(?:Ch\.?|Chapter)?\s*(\d+)$/i);
  if (m) return { slug: `orc-chapter-${m[1]}`, label: `ORC Chapter ${m[1]}` };
  m = s.match(/^Sup\.?\s*R\.?\s*(\d+)/i);
  if (m) return { slug: `sup-r-${m[1]}`, label: `Sup.R. ${m[1]}` };
  return { slug: slugify(s), label: s };
}