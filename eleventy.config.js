// Eleventy 3 configuration (native ESM).
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import site from "./src/_data/site.js";
import { slugify } from "./lib/text.js";
import { statuteUrl, statuteKey } from "./lib/statutes.js";
import { buildJsonLd, isIndexable, ogImagePath, robotsContent, safeJson } from "./lib/seo.js";

export { statuteUrl };

const toDate = (d) => (d instanceof Date ? d : new Date(d));
const asArray = (v) => (Array.isArray(v) ? v : v == null || v === "" ? [] : [v]);

const INACTIVE_BILL_STATUSES = new Set(["Enacted", "Vetoed", "Died", "Withdrawn"]);

export default function (eleventyConfig) {
  const isBuild = process.env.ELEVENTY_RUN_MODE === "build";

  // ---------- Assets ----------
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/_headers": "_headers" });

  // ---------- Drafts never ship ----------
  eleventyConfig.addPreprocessor("drafts", "*", (data) => {
    if (isBuild && data.status === "draft") return false;
  });

  // ---------- Markdown ----------
  const md = markdownIt({ html: true, typographer: true, linkify: true })
    .use(markdownItAnchor, { level: [2, 3], slugify, tabIndex: false })
    .use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  // ---------- Collections ----------
  const byGlob = (api, glob) =>
    api
      .getFilteredByGlob(glob)
      .filter((item) => !item.data.eleventyExcludeFromCollections)
      .sort((a, b) => b.date - a.date);

  eleventyConfig.addCollection("news", (api) => byGlob(api, "src/content/news/*.md"));
  eleventyConfig.addCollection("essays", (api) => byGlob(api, "src/content/essays/*.md"));
  eleventyConfig.addCollection("briefs", (api) => byGlob(api, "src/content/briefs/*.md"));
  eleventyConfig.addCollection("guides", (api) => byGlob(api, "src/content/guides/*.md"));
  eleventyConfig.addCollection("foundations", (api) =>
    byGlob(api, "src/content/foundations/*.md"),
  );

  // One hub per cited statute or rule: every page and reform priority that cites it.
  eleventyConfig.addCollection("statutes", (api) => {
    const all = api.getAll().filter((item) => !item.data.eleventyExcludeFromCollections);
    const hubs = new Map();
    const hubFor = (cite) => {
      const key = statuteKey(cite);
      if (!hubs.has(key.slug)) {
        hubs.set(key.slug, { ...key, cite: String(cite), items: [], priorities: [] });
      }
      return hubs.get(key.slug);
    };
    for (const item of all) {
      for (const cite of asArray(item.data.statutes)) {
        const hub = hubFor(cite);
        if (!hub.items.includes(item)) hub.items.push(item);
      }
    }
    const agenda = all[0]?.data?.reformAgenda ?? [];
    for (const p of agenda) {
      for (const cite of asArray(p.statutes)) {
        const hub = hubFor(cite);
        if (!hub.priorities.includes(p)) hub.priorities.push(p);
      }
    }
    for (const hub of hubs.values()) hub.items.sort((a, b) => b.date - a.date);
    return [...hubs.values()].sort((a, b) =>
      a.label.localeCompare(b.label, "en", { numeric: true }),
    );
  });

  // ---------- Filters ----------
  eleventyConfig.addFilter("readableDate", (d) =>
    d
      ? toDate(d).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : "",
  );
  eleventyConfig.addFilter("isoDate", (d) => (d ? toDate(d).toISOString().slice(0, 10) : ""));
  eleventyConfig.addFilter("limit", (arr = [], n = 3) => arr.slice(0, n));
  eleventyConfig.addFilter("absUrl", (path = "/", base = site.url) => new URL(path, base).href);
  eleventyConfig.addFilter("statuteUrl", statuteUrl);
  eleventyConfig.addFilter("statuteSlug", (cite) => statuteKey(cite).slug);
  eleventyConfig.addFilter("toSlug", slugify);
  eleventyConfig.addFilter("ogImagePath", ogImagePath);
  eleventyConfig.addFilter("isIndexable", (data) => isIndexable(data));
  eleventyConfig.addFilter("activeBills", (bills = []) =>
    bills.filter((b) => !INACTIVE_BILL_STATUSES.has(b.status)),
  );
  eleventyConfig.addFilter("byId", (items = [], ids = []) =>
    items.filter((it) => ids.includes(it.id)),
  );

  // Related content, scored by shared statutes, tags, and reform priorities.
  eleventyConfig.addFilter("relatedTo", (items = [], url, ref = {}) => {
    const tags = new Set(asArray(ref.tags));
    const statutes = new Set(asArray(ref.statutes).map((s) => statuteKey(s).slug));
    const priorities = new Set(asArray(ref.reform_priorities));
    if (!tags.size && !statutes.size && !priorities.size) return [];
    return items
      .filter(
        (it) =>
          it.url &&
          it.url !== url &&
          it.url.endsWith("/") &&
          it.data.summary &&
          it.data.noindex !== true &&
          it.data.status !== "draft",
      )
      .map((it) => {
        let score = 0;
        asArray(it.data.tags).forEach((t) => tags.has(t) && (score += 2));
        asArray(it.data.statutes).forEach((s) => statutes.has(statuteKey(s).slug) && (score += 2));
        asArray(it.data.reform_priorities).forEach((p) => priorities.has(p) && (score += 1));
        return { it, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || b.it.date - a.it.date)
      .map((x) => x.it);
  });

  // Build-time reading time (replaces the per-page JS estimate in the old essays).
  eleventyConfig.addFilter("readingTime", (html = "") => {
    const words = String(html).replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.round(words / 230))} min read`;
  });

  // Extract h2 headings (with ids from markdown-it-anchor) for the table of contents.
  eleventyConfig.addFilter("toc", (html = "") => {
    const out = [];
    const re = /<h2[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g;
    let m;
    while ((m = re.exec(html))) {
      out.push({ id: m[1], text: m[2].replace(/<[^>]+>/g, "").trim() });
    }
    return out;
  });

  // ---------- SEO shortcodes ----------
  // JSON-LD is a data block, not executable script, so the strict CSP is unaffected.
  eleventyConfig.addShortcode("jsonLd", function () {
    const data = this.ctx ?? {};
    return `<script type="application/ld+json">${safeJson(buildJsonLd(data, this.page))}</script>`;
  });
  eleventyConfig.addShortcode("robotsMeta", function () {
    return robotsContent(this.ctx ?? {});
  });

  // ---------- Shortcodes ----------
  // {% callout "objections" %} ...markdown... {% endcallout %}
  const CALLOUT_TITLES = {
    objections: "Strongest objections",
    "not-claim": "What this does not claim",
    "law-as-of": "Law as of",
    protections: "Protections preserved",
    clinical: "Not clinical advice",
    verify: "Verify current status",
    note: "Note",
  };
  eleventyConfig.addPairedShortcode("callout", (content, kind = "note", title = "") => {
    const heading = title || CALLOUT_TITLES[kind] || "Note";
    const body = md.render(String(content).trim()).replace(/\n{2,}/g, "\n").trim();
    return `<aside class="callout callout--${kind}"><p class="callout__title">${heading}</p>${body}</aside>`;
  });

  // ---------- Feeds ----------
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/news/feed.xml",
    collection: { name: "news", limit: 30 },
    metadata: {
      language: "en",
      title: `${site.name} — News`,
      subtitle: site.tagline,
      base: site.url,
      author: { name: site.publisher },
    },
  });
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/essays/feed.xml",
    collection: { name: "essays", limit: 30 },
    metadata: {
      language: "en",
      title: `${site.name} — Essays`,
      subtitle: site.tagline,
      base: site.url,
      author: { name: site.publisher },
    },
  });
}

export const config = {
  dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  templateFormats: ["md", "njk", "html"],
};