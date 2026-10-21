# ohio-family.lawyer

A static, evidence-first publication and advocacy hub on Ohio family law, built as an open-source community project. See `idea.md` for the full plan.

## Contributing

Everyone is welcome: corrections, bill suggestions, county verification, statute summaries, guides, reviews, and code. There is no mailbox. All contact happens through [issues](https://github.com/acharneski/ohio-family.lawyer/issues) and pull requests. Start with [`CONTRIBUTING.md`](CONTRIBUTING.md) and the site's `/contribute/` page.

GitHub is public: never post case numbers, names of private individuals, children's information, or pending-case details.

## Stack

- Eleventy 3 (native ESM), Markdown + Nunjucks
- Pagefind for static search (built after Eleventy)
- Plain CSS with design tokens, small ES modules, and no client framework
- No third-party requests (enforced by the CSP in `src/_headers`)

## Commands

```sh
pnpm install
pnpm dev        # local server; drafts visible
pnpm build      # production build + search index; drafts excluded
pnpm validate   # front-matter schema check
pnpm links      # internal link check (run after build)
pnpm test       # validate + lint + build
```

Search only works after `pnpm build`, because Pagefind indexes the built site.

## Content model

| Folder | Type | URL |
| :-- | :-- | :-- |
| `src/content/news/YYYY-MM-DD-slug.md` | news | `/news/slug/` |
| `src/content/essays/slug.md` | essay | `/essays/slug/` |
| `src/content/briefs/slug.md` | brief | `/briefs/slug/` |
| `src/content/guides/slug.md` | guide | `/resources/guides/slug/` (TODO: add data file) |
| `src/content/foundations/slug.md` | foundation | `/foundations/slug/` |
| `src/content/pages/slug.md` | page | `/slug/` |

Status workflow:

- `draft`: visible only in `pnpm dev`, never built.
- `review`: built, with a "pending editorial review" notice.
- `published`: built normally.
- `archived`: built, with an archived notice.

Use `{% callout "objections" %}…{% endcallout %}` for the house-style boxes. Available kinds: `objections`, `not-claim`, `law-as-of`, `protections`, `clinical`, `verify`, `note`.

Data lives in `src/_data/`: `site.js` (navigation, crisis lines, rubric), `reformAgenda.json` (12 priorities; one page is generated per priority), and `bills.json` (the tracker).
## SEO
- **Per-page overrides:** `seoTitle`, `seoDescription`, `ogTitle`, `ogImage`, `canonicalUrl`, `noindex`. Short `seoTitle`s get ` | ohio-family.lawyer` appended automatically.
- **Structured data:** every page emits a JSON-LD `@graph` built in `lib/seo.js`. It includes `NewsMediaOrganization` (with corrections, ethics, and funding policy URLs), `WebSite`, `WebPage`, `BreadcrumbList`, `Article`, `NewsArticle`, or `Report`, `Legislation` for cited statutes and tracked bills, and `DefinedTermSet` for the glossary. Pages opt into list schemas with `schema: bills | agenda | glossary`.
- **Share cards:** `scripts/og-images.js` renders a PNG for every page after the build. Cards are missing in `pnpm dev`.
- **Statute hubs:** `/law/<slug>/` is generated for every statute or rule cited anywhere. Add plain-language summaries in `src/_data/statuteInfo.json`.
- **Counties:** `/resources/counties/<county>/` exists for all 88 counties but stays `noindex` until the entry in `counties.json` has `"ready": true` plus verified `domestic_relations_url`, `juvenile_url`, `csea_url`, and `local_rules_url`. Do not mark a county ready without checking every link.
- **Indexing:** preview deploys (`CF_PAGES_BRANCH` ≠ `main`) and `SITE_INDEXABLE=false` builds emit `noindex` and a disallow-all `robots.txt`.
- **Search consoles:** set `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` in the deploy environment, then submit `/sitemap.xml`.


## Before launch

- [ ] Replace the placeholder bill in `bills.json` with verified records.
- [ ] Migrate essay text (see `who-decides-who-counts.md` and Appendix C of `idea.md`).
  - [ ] Strip saved-from comments, extension scripts, and placeholder metadata.
- [ ] Verify shared-parenting legislation status (priority 2).
- [ ] Attorney review of `/disclaimer/`, the start pages, and the lobbying structure.
- [ ] DV-advocate review of `/start/safety-first/` and priority 9.
- [ ] Set `site.newsletter.action` once the provider account exists.
- [ ] Complete funding and conflict-of-interest disclosure on `/about/`.