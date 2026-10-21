// SEO helpers: indexability rules, share-image paths, breadcrumbs, and JSON-LD.
import site from "../src/_data/site.js";
import { statuteKey, statuteUrl } from "./statutes.js";
import { slugify } from "./text.js";

export const absUrl = (path = "/") => new URL(path, site.url).href;

const ORG_ID = absUrl("/#organization");
const SITE_ID = absUrl("/#website");
const OHIO = { "@type": "State", name: "Ohio", sameAs: "https://en.wikipedia.org/wiki/Ohio" };

const SECTION_LABELS = {
  start: "Start here",
  news: "News",
  essays: "Essays",
  briefs: "Policy briefs",
  resources: "Resources",
  guides: "Guides",
  glossary: "Glossary",
  counties: "Counties",
  reform: "Reform",
  agenda: "Reform agenda",
  "bill-tracker": "Bill tracker",
  act: "Take action",
  foundations: "Foundations",
  law: "Ohio law index",
  research: "Research",
  search: "Search",
   contribute: "Contribute",
};

const COLLECTION_PAGES = new Set([
  "/news/",
  "/essays/",
  "/briefs/",
  "/foundations/",
  "/law/",
  "/resources/",
  "/resources/counties/",
  "/reform/",
  "/reform/agenda/",
  "/reform/bill-tracker/",
  "/start/",
]);

const ARTICLE_TYPES = {
  essay: "Article",
  foundation: "Article",
  news: "NewsArticle",
  brief: "Report",
  guide: "Article",
};

const asArray = (v) => (Array.isArray(v) ? v : v == null || v === "" ? [] : [v]);
const iso = (d) => {
  if (!d) return undefined;
  const date = d instanceof Date ? d : new Date(d);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString();
};
const titleCase = (s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// One rule for robots meta, the sitemap, and related-content links.
export function isIndexable(data = {}) {
  if (!site.indexable) return false;
  if (data.noindex === true) return false;
  if (data.status === "draft") return false;
  if (data.placeholder) return false;
  if (data.county && !data.county.ready) return false; // county pages index only once verified
  return true;
}

export const robotsContent = (data) =>
  isIndexable(data)
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, follow";

// Every HTML page gets a generated share card at this path (see scripts/og-images.js).
export function ogImagePath(url) {
  if (!url || !String(url).endsWith("/")) return site.seo.defaultImage;
  const slug = url === "/" ? "home" : url.replace(/^\/|\/$/g, "").replace(/\//g, "--");
  return `/og/${slug}.png`;
}

export function breadcrumbTrail(url, title) {
  if (!url || url === "/" || !String(url).endsWith("/")) return [];
  const parts = url.replace(/^\/|\/$/g, "").split("/");
  const crumbs = [{ name: "Home", url: "/" }];
  let acc = "/";
  parts.forEach((part, i) => {
    acc += `${part}/`;
    const last = i === parts.length - 1;
    crumbs.push({ name: last && title ? title : SECTION_LABELS[part] || titleCase(part), url: acc });
  });
  return crumbs;
}

export function legislation(cite) {
  const { label } = statuteKey(cite);
  const url = statuteUrl(cite);
  return {
    "@type": "Legislation",
    name: label,
    legislationIdentifier: label,
    legislationJurisdiction: "US-OH",
    ...(url && { url }),
  };
}

export const safeJson = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

function organization() {
  return {
    "@type": "NewsMediaOrganization",
    "@id": ORG_ID,
    name: site.name,
    url: absUrl("/"),
    description: site.mission,
    slogan: site.tagline,
     sameAs: [site.repo.url],
    logo: { "@type": "ImageObject", url: absUrl(site.seo.logo), width: 512, height: 512 },
    areaServed: OHIO,
    knowsAbout: [
      "Ohio family law",
      "Child custody in Ohio",
      "Shared parenting",
      "Parenting time",
      "Child support in Ohio",
      "Guardians ad litem",
      "Civil protection orders",
      "Family court reform",
    ],
    publishingPrinciples: absUrl("/about/#editorial-standards"),
    ethicsPolicy: absUrl("/about/#editorial-standards"),
    verificationFactCheckingPolicy: absUrl("/about/#editorial-standards"),
    correctionsPolicy: absUrl("/corrections/"),
    actionableFeedbackPolicy: absUrl("/corrections/"),
    ownershipFundingInfo: absUrl("/about/#funding-and-conflicts-of-interest"),
    contactPoint: [
       { "@type": "ContactPoint", contactType: "editorial", url: site.repo.issues },
       { "@type": "ContactPoint", contactType: "press", url: site.repo.issues },
    ],
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: absUrl("/"),
    name: site.name,
    description: site.tagline,
    inLanguage: site.lang,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${absUrl("/search/")}?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

function author(name) {
  if (!name || /editorial (board|staff)/i.test(name)) return { "@id": ORG_ID };
  return { "@type": "Person", name };
}

export function buildJsonLd(data = {}, page = {}) {
  const graph = [organization(), website()];
  if (!page.url || !String(page.url).endsWith("/")) {
    return { "@context": "https://schema.org", "@graph": graph };
  }

  const url = absUrl(page.url);
  const image = absUrl(data.ogImage || ogImagePath(page.url));
  const description = data.seoDescription || data.summary || site.mission;
  const name = data.title || site.name;
  const crumbs = breadcrumbTrail(page.url, data.title);

  const webPage = {
    "@type":
      page.url === "/about/"
        ? "AboutPage"
        : page.url === "/search/"
          ? "SearchResultsPage"
          : COLLECTION_PAGES.has(page.url)
            ? "CollectionPage"
            : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: data.seoTitle || name,
    description,
    inLanguage: site.lang,
    isPartOf: { "@id": SITE_ID },
    publisher: { "@id": ORG_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
    spatialCoverage: OHIO,
    ...(crumbs.length > 1 && { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };
  graph.push(webPage);

  if (crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absUrl(c.url),
      })),
    });
  }

  const statutes = asArray(data.statutes).map(legislation);

  const articleType = ARTICLE_TYPES[data.type];
  if (articleType) {
    graph.push({
      "@type": articleType,
      "@id": `${url}#article`,
      headline: name.slice(0, 110),
      alternativeHeadline: data.subtitle,
      description,
      image: [image],
      datePublished: iso(page.date),
      dateModified: iso(data.updated || page.date),
      author: author(data.author),
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      articleSection: data.series || site.types[data.type],
      genre: data.type === "essay" ? "Opinion" : undefined,
      keywords: asArray(data.tags).join(", ") || undefined,
      about: statutes.length ? statutes : undefined,
      citation: statutes.length ? statutes : undefined,
      spatialCoverage: OHIO,
      inLanguage: site.lang,
      isAccessibleForFree: true,
    });
  } else if (statutes.length) {
    webPage.about = statutes;
  }

  if (data.priority) {
    webPage.about = asArray(data.priority.statutes).map(legislation);
  }

  if (data.hub) {
    const law = legislation(data.hub.cite);
    webPage.about = law;
    webPage.mainEntity = law;
  }

  if (data.county) {
    webPage.about = {
      "@type": "AdministrativeArea",
      name: `${data.county.name} County, Ohio`,
      containedInPlace: OHIO,
    };
  }

  switch (data.schema) {
    case "bills": {
      const bills = asArray(data.bills).filter((b) => !b.placeholder);
      if (bills.length) {
        graph.push({
          "@type": "ItemList",
          "@id": `${url}#bills`,
          name: "Ohio family-court bills tracked by " + site.name,
          numberOfItems: bills.length,
          itemListElement: bills.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Legislation",
              name: `${b.id}: ${b.title}`,
              legislationIdentifier: b.id,
              legislationJurisdiction: "US-OH",
              description: b.summary,
              url: b.text_url || undefined,
            },
          })),
        });
      }
      break;
    }
    case "agenda": {
      const agenda = asArray(data.reformAgenda);
      graph.push({
        "@type": "ItemList",
        "@id": `${url}#agenda`,
        name: "Ohio family court reform agenda",
        numberOfItems: agenda.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: agenda.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: absUrl(`/reform/agenda/${p.slug}/`),
        })),
      });
      break;
    }
    case "glossary": {
      const setId = `${url}#terms`;
      graph.push({
        "@type": "DefinedTermSet",
        "@id": setId,
        name: "Glossary of Ohio family law terms",
        hasDefinedTerm: asArray(data.glossary).map((g) => ({
          "@type": "DefinedTerm",
          name: g.term,
          description: g.definition,
          url: `${url}#${slugify(g.term)}`,
          inDefinedTermSet: setId,
        })),
      });
      webPage.mainEntity = { "@id": setId };
      break;
    }
    default:
      break;
  }

  return { "@context": "https://schema.org", "@graph": graph };
}