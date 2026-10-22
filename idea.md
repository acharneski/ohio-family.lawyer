# ohio-family.lawyer — Site Plan

> A reform-minded, static, evidence-first publication and advocacy hub on Ohio family law:
> news, essays, practical resources, policy research, and organized political reform.

Status: planning draft v1
Stack: static site, `pnpm`, ES6 modules (no client framework)
Authorship: AI. Written by AI, not reviewed by humans, and disclosed on every page (see §1.5).

---

## 1. Purpose and Positioning

### 1.1 One-line mission

Make Ohio's family courts accountable, measurable, and fair to every person they affect (parents, children, and extended family) by informing the public, equipping litigants, and organizing legislative reform.

### 1.2 What the site is

1. **A newsroom-lite.** It tracks bills, rule changes, appellate decisions, and agency data affecting Ohio domestic relations and juvenile courts.
2. **An essay platform.** It publishes long-form arguments for structural reform.
3. **A resource library.** It offers plain-language guides, forms pointers, and a directory of free and low-cost help.
4. **A lobbying and organizing hub.** It covers bill tracking, action alerts, testimony templates, a coalition directory, and legislator scorecards.
5. **A data project.** It aims to produce what the courts don't: outcome, cost, and process data.

### 1.3 What the site is not

- **Not a law firm and not legal advice.** The `.lawyer` TLD invites that assumption, so every page carries a standing disclaimer, and nothing on the site may imply an attorney-client relationship unless a licensed Ohio attorney actually operates a separate, clearly labeled practice page (see §11).
- **Not a venting forum.** The goal is persuasion and reform, not catharsis.
- **Not anti-mother, anti-woman, or anti-victim.** The reform thesis is that *every* interest is counted. Real abuse protection stays non-negotiable (see §3).

### 1.4 Core thesis (drawn from the existing essays)

The site's intellectual spine, which every section should be able to point back to:

1. **Membership before weighting.** The key question is whose interests get entered on the ledger at all. "Best interests of the child" language must not erase parents, siblings, and grandparents as stakeholders (`genocide_of_fathers.md`, Sections II–III).
2. **Recognize parenthood, don't grant it.** ORC § 3109.042 makes an unmarried mother the sole residential parent and legal custodian by default, and a father must petition for standing.
3. **Obligation without standing.** Support (ORC Ch. 3119) is enforced administratively and coercively. Parenting-time enforcement is slow, private, and expensive.
4. **Incentive gradients, not villains.** Fee structures, GAL/evaluator appointments, and Title IV-D funding reward conflict and continued involvement (`least_entropy_morality.md`, the alignment test).
5. **Evidence over identity.** Credibility should be proportional to evidence, never assigned by class (`The Hypocrisy of "Always Believe Women"`).
6. **Measure outcomes.** Courts track throughput and collections, not whether children and families fare better five or ten years later.
7. **Legitimacy is the real infrastructure.** Coercion works only while people experience it as theirs (`Law and Violence: The Mortar and the Monopoly`). Reform is therefore a legitimacy project, not just a statute-tweaking one.
### 1.5 Authorship: this is AI
Every word on this site is written by AI. It is not "AI-assisted," and it is not "reviewed by our editorial team." The site does not promise that a fact-checker, clinician, or attorney read a page before it shipped, because none did. If a reader wants to dismiss it as slop, that is their call.
What the site promises instead is what anyone can check:
- Every legal claim links to a primary source (ORC, court rules, case law, agency data).
- Every page carries a `law_as_of` date and a `generated_by` disclosure.
- Every error can be filed as a public issue and fixed in the open, with a dated change-log.
Judge it by its citations, not its author.
This is scalable cognition pointed at a system that counts on nobody having the time, money, or stamina to read everything it does. Now something does. It gives voice to the voiceless, illuminates the darkness, and challenges injustice with the intent to win.

---

## 2. Audiences

| Audience | Needs | Primary entry points |
| :-- | :-- | :-- |
| Parents newly in the system (esp. fathers facing § 3109.042 defaults) | Orientation, first steps, what *not* to do, free help | `/start/`, `/resources/` |
| Parents deep in litigation | Process literacy, documentation practices, support, hearing prep | `/resources/`, `/support/` |
| Mothers, grandparents, and other family members | Same, plus safety planning and DV resources | `/resources/safety/` |
| Legislators and staff | Short policy briefs, data, model bill language, constituent stories (with consent) | `/reform/`, `/briefs/` |
| Attorneys, mediators, GALs, judges who want reform | Credible research, a venue for dissent, CLE-style writing | `/essays/`, `/research/` |
| Journalists | Quotable, sourced facts, a press page, contact | `/news/`, `/press/` |
| Volunteers and coalition partners | Campaigns, toolkits, events | `/act/`, `/coalition/` |

Design implication: **plain-language by default, with depth one click away.** Anyone in crisis must be able to find the first step in under 30 seconds.

---

## 3. Editorial Principles and Guardrails

These keep the site credible with legislators and the press. Credibility here comes from what a reader can check, not from who (or what) wrote it.

1. **Cite everything checkable.** Every statutory claim links to the Ohio Revised Code (codes.ohio.gov), Ohio Supreme Court Rules (Superintendence Rules, Rules of Civil/Juvenile Procedure), or primary case law.
2. **Automated checks before publishing.** Every piece runs through `docs/editorial-checklist.md` as an AI and scripted pass: claims inventory, source links, date-stamping of law ("as of YYYY-MM-DD"), and a **"verify current status"** flag on anything legislative. No human fact-check is promised, and none is implied.
3. **Separate argument from reporting.** News items are labeled `news`, essays `essay`, briefs `brief`, and guides `guide`, each with a visible badge. Essays may argue. News and briefs may not editorialize.
4. **Steelman the opposition.** Each policy brief includes "Strongest objections" and a response. This mirrors the "Strongest Objections" section of the existing Ohio family court essay and should become a house style.
5. **Protective-order and abuse safeguards are explicit and permanent.** Every reform proposal states how real abuse, neglect, and DV will still be caught and handled. Proposals that weaken protection are out of scope.
6. **Count all stakeholders.** Content should speak about *parents*, with fathers as a documented, specific case. It should not cast one sex as the villain.
7. **No doxxing and no case-specific accusations about named private individuals.** Litigant stories are anonymized and published only with written consent. Judges and officials are criticized for public acts, rules, and statistics, not private characteristics.
8. **No legal advice.** Resources educate and refer. They do not tell a reader what to file in their own case.
9. **Corrections policy.** A visible `/corrections/` page and a dated change-log on every essay. Because no human reviews a page before it is published, public corrections afterward are the review: anyone can file one as an issue.
10. **Tone.** Firm, precise, unsentimental. Rhetorical heat is allowed in essays but not in briefs or news.

### 3.1 Editorial notes on existing essays

- `genocide_of_fathers.md` is a strong draft. Retitle for credibility and reach (candidate: *"Who Decides Who Counts: Ohio's Family Courts and the Architecture of Managed Persons"*, which is already the in-document H1). Keep the slavery-structure argument, but front-load the "word must be earned" framing, which already does this well. Add footnotes for: ORC §§ 2919.23, 3109.04(F)(1), 3109.042, 3119, 2919.21, Sup.R. 48, and Title IV-D incentive funding.
- `Hypocrisy of "Always Believe Women"` has statements that need sources (documented pattern in custody/Title IX/HR; "well-documented" political-science claims). Add citations or soften. Its header metadata (author "Editorial Staff", date "January 2024", fake "Further Reading" cards, "© 2024 Longform Essays") are template placeholders and must be removed or replaced.
- `The Ego Manifesto`, `The Mortar Problem`, and `Law and Violence` are philosophy and political theory. They are on-theme only loosely (Law and Violence is closest). Publish them under a clearly separate **"Foundations"** or **"Philosophy"** shelf so they don't dilute the practical credibility of the policy work, and keep them off the home page's primary nav.
- `least_entropy_morality.md` (*The Alignment Manifesto*) becomes the **framework page**: "How we evaluate institutions." Reuse its Article 1–7 as the site's evaluation rubric (see §6.4).

---

## 4. Information Architecture (Site Map)

```
/
├── start/                     "I just got served / I just became a parent in the system"
│   ├── if-youre-a-father/     Default-custody rule (ORC 3109.042), how to establish standing
│   ├── if-youre-a-mother/
│   ├── if-youre-a-grandparent/
│   └── safety-first/          DV / abuse resources, kept prominent and never buried
├── news/                      Dated items, tags, RSS
│   ├── legislation/
│   ├── courts-and-rules/
│   ├── data-and-studies/
│   └── local/                 County-by-county notes
├── essays/                    Long-form, numbered sections, citations
├── briefs/                    1–3 page policy briefs (printable PDF + HTML)
├── research/                  Data projects, methodology notes, datasets
├── resources/
│   ├── guides/                Plain-language process guides
│   ├── forms/                 Links to official Ohio forms by court (no hosting of stale copies)
│   ├── directory/             Legal aid, mediation, parenting-time/GAL complaint paths, county courts
│   ├── glossary/              A–Z terms
│   └── safety/
├── reform/                    The platform (see §6)
│   ├── agenda/                Numbered reform priorities
│   ├── bill-tracker/          Current bills, status, positions
│   ├── model-language/        Model bill and rule text
│   └── scorecard/             Legislator / committee positions and votes
├── act/                       Action alerts, call scripts, testimony templates, who-to-contact
├── coalition/                 Partner orgs, endorsements, join form
├── foundations/               Framework essay + philosophy shelf
├── about/                     Mission, AI authorship, funding, editorial standards
├── press/
├── corrections/
├── support/                   Peer support listings, crisis resources, "this is not therapy"
├── disclaimer/                Not legal advice; not an attorney; privacy
└── search/                    Static client-side search
```

### 4.1 Navigation

- **Primary:** Start Here · News · Essays · Resources · Reform · Act
- **Secondary (footer):** Research · Briefs · Foundations · Coalition · About · Press · Corrections · Disclaimer
- **Persistent top banner link:** "In crisis or unsafe? Resources →" (links to `/support/` and `/start/safety-first/`)

---

## 5. Content Pillars in Detail

### 5.1 News

**Scope:** Ohio General Assembly bills (House Civil Justice, Senate Judiciary, relevant subcommittees), Ohio Supreme Court rule amendments (Superintendence, Civil, Juvenile), appellate rulings on custody, parenting time, support, contempt, and GAL conduct, Ohio Department of Job and Family Services (ODJFS) child-support data, federal Title IV-D policy, and notable national developments relevant to Ohio.

**Formats:**

- **Brief** (150–300 words): what happened, source link, why it matters, next step.
- **Explainer** (600–1,200 words): how a bill or ruling works.
- **Weekly digest** (the newsletter, also posted to the site).
- **Hearing recap:** who testified, what was said, vote counts.

**Cadence at launch:** 1–2 items per week, with a legislative-session surge. Content is date-stamped and sourced.

**Data sources (primary, linkable):**

- `legislature.ohio.gov`: bill text, status, committee schedules.
- `codes.ohio.gov`: ORC.
- `supremecourt.ohio.gov`: rules, court statistics (Ohio Courts Statistical Reports).
- `jfs.ohio.gov`: child support program data.
- Federal OCSE reports for Title IV-D.

### 5.2 Essays

- Long-form, numbered sections (the existing essays already use roman-numeral structure), pull quotes, table of contents, reading time, and reading-progress UI.
- **Required elements:** thesis statement, "what this does not claim" note, sources, "strongest objections," and "what to do about it" (reform hooks linking to `/reform/`).
- **Series:**
  1. *Institutional Architecture* (membership, standing, incentives)
  2. *Evidence and Due Process*
  3. *Human Cost* (mental health as predictable injury, support structure)
  4. *Foundations* (alignment framework, legitimacy)
- Guest essays are accepted via a submission page (static form to a mailbox or form service) with the same editorial checklist.

### 5.3 Resources

Plain-language, with automated readability scoring (target: 8th-grade reading level) and every legal statement linked to its source.

Initial guide list:

1. "Establishing parentage and standing in Ohio" (acknowledgment, genetic testing, juvenile court filing, what § 3109.042 means in practice).
2. "Parenting time basics: standard orders, local rules by county."
3. "Shared parenting plan vs. sole custody: terms, tradeoffs."
4. "How child support is calculated (ORC 3119), imputed income, and how to request modification."
5. "Arrears, license suspension, contempt: what is coming and what options exist."
6. "Guardians ad litem and evaluators: what they do, Sup.R. 48, how to file a complaint."
7. "Documentation without drama: keeping a clean parenting log."
8. "Mediation and early-resolution options."
9. "Representing yourself (pro se) in domestic relations court: realities and limits."
10. "Protective orders: if you need one, if one is filed against you."
11. "Grandparent and relative standing."
12. "Your mental health during litigation" (not clinical advice, with crisis links).

**Directory** (JSON data files, rendered statically):

- Legal aid organizations by region.
- Low-bono/limited-scope attorneys (opt-in listing with eligibility rules, **no paid placement**).
- Mediation programs.
- Court-connected family resource centers.
- County domestic relations and juvenile court contact and local rules pages.
- Child support enforcement agency (CSEA) by county.
- Complaint channels: Ohio Supreme Court Office of Disciplinary Counsel, Board of Professional Conduct, Judicial Conduct, county GAL panel contacts.

### 5.4 Reform and Lobbying

See §6 in full.

### 5.5 Research and Data

**Projects (aspirational, staged):**

1. **Ohio Family Court Transparency Index.** For each county, collect from public sources the number of domestic relations and juvenile cases, median time to disposition, shared parenting orders vs. sole, GAL appointment rates, support collections, and contempt filings. This is built from Ohio Supreme Court statistical reports and public records requests (ORC § 149.43).
2. **Public records request toolkit.** Templates and a log of results, so findings are reproducible.
3. **Cost-of-conflict estimates.** Model the typical cost of a contested case, with assumptions published.
4. **Outcomes gap analysis.** Document what Ohio does not measure (child outcomes at 5, 10, and 20 years) and the literature that *has* measured it elsewhere.

All datasets are published as CSV/JSON in the repo with a methodology note and license (CC BY 4.0).

### 5.6 Support (careful scope)

- Links to crisis lines (988, local), peer groups, and father-inclusive and mother-inclusive services.
- Static content only. **No user accounts, no forums, no DMs** at launch (moderation, liability, and privacy risk).
- Standing note: this site is not therapy, and discussing your case online can be used against you.

---

## 6. Reform Platform and Political Lobbying

### 6.1 Reform agenda (draft numbered priorities)

Each priority becomes a page with: problem statement, current Ohio law citation, proposed change, model language, who's affected, strongest objections and responses, cost/fiscal note, and evidence base.

1. **Presumption of standing.** A legally established parent (acknowledgment or adjudication) has presumptive standing to a real relationship, shifting the burden to justify removal. This amends the default in ORC § 3109.042.
2. **Rebuttable presumption of shared parenting.** Equal or substantially equal time, rebuttable on evidence of danger or unfitness, with written findings required to rebut. *(Verify current Ohio status of shared-parenting presumption legislation before publication; maintain a live tracker entry.)*
3. **Tie obligations to standing.** Parenting-time enforcement that is as fast and low-cost as support enforcement (administrative enforcement option, make-up time, fee-shifting for unjustified interference). Revisit the legal independence of support and parenting time.
4. **Outcome measurement mandate.** The Supreme Court or ODJFS publishes anonymized longitudinal outcome data on contested custody orders.
5. **GAL and evaluator reform** (Sup.R. 48 and related): caps and rate transparency, appointment rotation, written reports with the evidentiary basis, complaint process with real teeth, and conflict-of-interest disclosure (referral relationships).
6. **Weaken the conflict gradient.** Early mediation defaults, limits on repetitive motions, default parenting schedules, and review of fee structures that reward prolonged dispute.
7. **Imputed income limits.** Evidence thresholds, time limits, and mandatory review before imputing potential income (ORC Ch. 3119).
8. **Arrears and enforcement proportionality.** Retroactive-modification windows, forgiveness pathways, and caps on punitive license and passport suspensions where non-payment follows involuntary income loss.
9. **Evidence standards for allegations.** Findings required before restricting contact on unadjudicated allegations, expedited hearing for emergency restrictions, and consequences for knowingly false allegations. Written to **preserve fast, low-barrier protective orders for genuine danger.**
10. **Dissent is information.** A formal, protected process for litigants to lodge procedural objections, with required response, and a rule that complaints about process may not be treated as evidence of "high conflict" without independent findings.
11. **Extended family standing.** Siblings and grandparents.
12. **Data and public-records transparency** for court operations.

### 6.2 Bill tracker

A static, build-time-generated page from `data/bills.json`, updated manually or by a scheduled script.

Fields: bill number, GA, title, sponsor(s), committee, status, last action date, our position (Support / Oppose / Amend / Watching), one-paragraph summary, link to text, link to our brief, and action link.

Positions are decided by a **published decision rule**: each bill is scored against the rubric in §6.4. This keeps the tracker from becoming partisan and makes it citable.

### 6.3 Action toolkit (`/act/`)

- **Testimony templates:** proponent, opponent, and interested-party, with structure guidance (3-minute and 5-minute versions) and Ohio committee procedures.
- **Call and email scripts** tailored by bill.
- **"Find your legislators"** link to the official Ohio lookup (no embedded geolocation or tracking).
- **Mailto and tel links.** No server-side handling; nothing stored.
- **Meeting-a-legislator guide:** how to ask for a meeting, one-page leave-behind (links to briefs PDF).
- **Constituent story intake:** a consent-first form (see §10 for privacy), stories used only anonymized or with written permission.
- **Public-comment calendar:** Ohio Supreme Court rule-comment periods, ODJFS rulemaking, and JCARR dates.

### 6.4 Evaluation rubric (from the Alignment Manifesto)

Used both for scoring bills and for evaluating court practices. Condensed from Articles 1–7 and the test question:

1. Does it make anyone's success depend on suppressing another person's interests? (Art. 1)
2. Do those who impose costs bear them? (Art. 2)
3. Can the institution be corrected by outsiders? Is data public? Is there exit or appeal? (Art. 3, 6)
4. Is the rule predictable? (Art. 4)
5. Does income flow from position or conflict rather than contribution? (Art. 5)
6. Is it testable and revisable, with a sunset or review clause? (Art. 7)
7. **Test question:** does the arrangement make each person's success depend on others' success, or on others' frustration?

Each brief and bill page includes a short "rubric score" with reasoning, which gives readers and legislators a transparent standard.

### 6.5 Legislator scorecard

- Based **only on votes, sponsorships, and public statements** with citations. No ratings from rumor or from private conduct.
- Committee-level pages (House Civil Justice, Senate Judiciary, plus the relevant juvenile and family subcommittees where they exist) show membership, chairs, and upcoming hearing dates.
- Updated per session, with a methodology note.

### 6.6 Coalition strategy

- Target allies: parenting-rights organizations (fathers', mothers', grandparents'), shared-parenting advocacy groups, children's advocates who oppose conflict-driven systems, civil-liberties and due-process organizations, bar-association family-law reformers, and mediator associations.
- Framing for broad coalition: **"evidence and due process for every parent; real protection for every child."**
- Domestic-violence advocates are engaged *early* as stakeholders, not opponents. Reform text that carves out and strengthens genuine protection is the credibility asset.
- Coalition page lists partners, shared principles (a short charter), and a signup (static form).

### 6.7 Legal and organizational structure for lobbying

> This section is AI-written and has not been reviewed by counsel. It is not legal advice. The statutes below apply whether or not anyone reviews them, so read them directly.

- **Tax status options:**
- **Ohio lobbying registration:** Ohio law (ORC 101.70–101.79; Joint Legislative Ethics Committee) requires registration and reporting for legislative agents above thresholds, and employers of lobbyists must register. Volunteer grassroots activity differs from paid lobbying. Check the current JLEC thresholds against the statute before sending any organized lobbying campaign.
  - 501(c)(3): limited lobbying (substantial-part test or 501(h) election), no candidate endorsement.
  - 501(c)(4): unlimited issue lobbying, no tax-deductible donations.
  - Common pairing: a (c)(3) for education and research and a (c)(4) for lobbying, with separate books.
- **Scorecards and candidate content:** careful separation of issue education from candidate endorsement.
- **Donations:** no payment-processing at launch beyond links to an external processor, to be set up after entity formation.

---

## 7. Technical Plan (static, pnpm, ES6)

### 7.1 Principles

- **Static first.** HTML, CSS, and small ES modules only. No client framework.
- **Progressive enhancement.** All content is readable with JS disabled. JS adds the reading progress bar, TOC scroll-spy, back-to-top button, and search.
- **Privacy by default.** No third-party trackers, fonts, or embedded widgets. Anyone litigating has legitimate reason to fear being tracked.
- **Accessibility target:** WCAG 2.2 AA (skip link, landmarks, focus states, contrast, `prefers-reduced-motion`).
- **Performance:** Lighthouse 95+ across the board, system font stacks, no images required above the fold.

### 7.2 Tooling choice

**Recommended:** [Eleventy 3](https://www.11ty.dev/) (native ESM) with Markdown + Nunjucks or WebC templates, plus Pagefind for static search.

Why: it needs the least ceremony for a content-heavy static site, runs entirely as ES modules, and has first-class collections, RSS, and data files. This fits the news, essays, bills, and directory model directly.

Alternatives considered:

- *Custom ES6 build script* (markdown-it + gray-matter + fs). Maximum control and fewer dependencies, but you rebuild collections, pagination, and feeds yourself. A reasonable fallback.
- *Astro.* Excellent, but pulls in a component/island model the site doesn't need yet.
- *Vite + hand-written pages.* Fine for a few pages, painful at scale.

### 7.3 Repository layout

```
ohio-family.lawyer/
├── package.json
├── pnpm-lock.yaml
├── .nvmrc
├── eleventy.config.js
├── README.md
├── idea.md
├── docs/
│   ├── editorial-checklist.md
│   ├── style-guide.md
│   ├── legal-review-notes.md
│   └── data-methodology.md
├── src/
│   ├── _data/
│   │   ├── site.js              site name, url, nav, social, disclaimers
│   │   ├── bills.json           bill tracker
│   │   ├── legislators.json
│   │   ├── directory.json       legal aid, mediation, courts, CSEAs
│   │   ├── counties.json        88 Ohio counties + court/CSEA links
│   │   └── glossary.json
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk
│   │   │   ├── essay.njk
│   │   │   ├── news.njk
│   │   │   ├── guide.njk
│   │   │   ├── brief.njk
│   │   │   └── bill.njk
│   │   └── partials/
│   │       ├── header.njk
│   │       ├── footer.njk
│   │       ├── disclaimer-banner.njk
│   │       ├── crisis-banner.njk
│   │       ├── toc.njk
│   │       ├── cite.njk
│   │       └── objections.njk
│   ├── assets/
│   │   ├── css/
│   │   │   ├── tokens.css       design tokens (colors, type, spacing)
│   │   │   ├── base.css
│   │   │   ├── components.css
│   │   │   └── print.css        briefs print cleanly to PDF
│   │   └── js/
│   │       ├── main.js          entry; feature-detects and imports modules
│   │       ├── reading-progress.js
│   │       ├── toc-scrollspy.js
│   │       ├── back-to-top.js
│   │       ├── mobile-nav.js
│   │       ├── copy-link.js
│   │       └── directory-filter.js
│   ├── content/
│   │   ├── news/                YYYY-MM-DD-slug.md
│   │   ├── essays/
│   │   ├── briefs/
│   │   ├── guides/
│   │   ├── foundations/
│   │   └── pages/               about, press, disclaimer, corrections...
│   ├── reform/
│   ├── act/
│   └── index.njk
├── scripts/
│   ├── check-links.js
│   ├── validate-frontmatter.js
│   ├── bills-sync.js            optional: pull status updates into bills.json
│   └── og-images.js             optional: generate share cards at build
└── .github/
    └── workflows/
        ├── build.yml            lint, validate, build, link-check
        └── deploy.yml
```

### 7.4 `package.json` (starting point)

```json
{
  "name": "ohio-family-lawyer",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=20", "pnpm": ">=9" },
  "scripts": {
    "dev": "eleventy --serve --quiet",
    "build": "eleventy && pagefind --site _site",
    "preview": "pnpm dlx serve _site",
    "validate": "node scripts/validate-frontmatter.js",
    "links": "node scripts/check-links.js",
    "lint": "eslint src/assets/js scripts && stylelint \"src/assets/css/**/*.css\"",
    "format": "prettier --write .",
    "test": "pnpm validate && pnpm lint && pnpm build && pnpm links"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0",
    "@11ty/eleventy-plugin-rss": "^2.0.0",
    "@11ty/eleventy-plugin-syntaxhighlight": "^5.0.0",
    "eslint": "^9.0.0",
    "gray-matter": "^4.0.3",
    "markdown-it": "^14.0.0",
    "markdown-it-anchor": "^9.0.0",
    "markdown-it-footnote": "^4.0.0",
    "pagefind": "^1.0.0",
    "prettier": "^3.0.0",
    "stylelint": "^16.0.0"
  }
}
```

*(Pin exact versions at scaffold time.)*

### 7.5 Content front-matter schema

Validated by `scripts/validate-frontmatter.js` and failing the build on missing fields.

```yaml
---
title: "Who Decides Who Counts"
subtitle: "Ohio's Family Courts and the Architecture of Managed Persons"
type: essay            # essay | news | brief | guide | foundation | page
date: 2026-03-01
updated: 2026-03-01
author: "Name or 'Editorial board'"
summary: "One-to-two sentence description for cards, RSS, and OG tags."
tags: [custody, standing, incentives, ORC-3109]
series: "Institutional Architecture"
statutes: ["ORC 3109.04", "ORC 3109.042", "ORC 3119", "Sup.R. 48"]
law_as_of: 2026-03-01     # required on anything citing law
reform_priorities: [1, 2, 3]   # links to /reform/agenda items
status: published      # draft | review | published | archived
generated_by: "AI model and date"   # disclosed on the page
disclaimer: standard   # standard | clinical | none
toc: true
reading_time: auto
---
```

News items add: `source_url`, `source_name`, `bill: HB-000`, and `kind: brief | explainer | recap`.

Bill records (`bills.json`):

```json
{
  "id": "HB-000",
  "ga": 136,
  "title": "…",
  "sponsors": ["…"],
  "committee": "House Civil Justice",
  "status": "In committee",
  "last_action": "2026-02-10",
  "position": "support",
  "rubric_score": { "art1": 1, "art2": 0, "art3": 1, "art4": 1, "art5": 0, "art6": 1, "art7": 1 },
  "summary": "…",
  "text_url": "https://www.legislature.ohio.gov/…",
  "brief": "/briefs/shared-parenting-presumption/"
}
```

### 7.6 Shared UI modules (extract from existing essays)

The existing HTML essays each inline their own CSS and JS (reading progress, TOC scroll-spy, back-to-top, smooth scroll). Consolidate into shared ES modules and one stylesheet.

**Known bugs to fix during extraction** (class names in JS and CSS disagree in several saved pages, so the styling never applies):

| Essay | CSS selector | JS toggles | Fix |
| :-- | :-- | :-- | :-- |
| Always Believe Women | `.back-to-top-btn.visible`, `.toc-link.active` | `back-to-top-visible`, `toc-link-active` | Standardize on `is-visible` and `is-active` |
| Father's Mental Health | `.toc-sidebar.open`, `.back-to-top-btn.visible`, `.toc-link.active` | `toc-open`, `back-to-top-visible`, `toc-link-active` | Same |
| Ego, Mortar | `.is-visible`, `.is-active` | same | Already consistent. Use as the standard |

Other migration cleanup:

- Strip `<!-- saved from url=... -->` comments and the injected `chrome-extension://…/prompt.js` script tags.
- Remove the placeholder byline, dates, "Further Reading" cards, share buttons wired to Twitter/Facebook (privacy), and "© 2024 Longform Essays" footers.
- Replace the **per-page "estimated reading time" JS** with a build-time computation. This avoids layout flicker, and the figure appears in RSS too.
- The scroll-spy IntersectionObserver rootMargin works. Keep it as a configurable constant.
- Honor `prefers-reduced-motion` for smooth scrolling (the Ego essay already does; apply everywhere).
- Convert each essay's HTML into Markdown with front matter and let layouts supply the chrome.

Standardized module sketch:

```js
// src/assets/js/main.js
import { initReadingProgress } from './reading-progress.js';
import { initTocScrollspy } from './toc-scrollspy.js';
import { initBackToTop } from './back-to-top.js';
import { initMobileNav } from './mobile-nav.js';
import { initCopyLink } from './copy-link.js';

const ready = (fn) =>
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn();

ready(() => {
  initMobileNav();
  initBackToTop({ threshold: 600 });
  initCopyLink();
  if (document.querySelector('[data-reading-progress]')) initReadingProgress();
  if (document.querySelector('[data-toc]')) initTocScrollspy();
});
```

```js
// src/assets/js/reading-progress.js
export function initReadingProgress(selector = '[data-reading-progress]') {
  const bar = document.querySelector(selector);
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}
```

### 7.7 Design direction

- **Tone:** serious, civic, calm. Closer to a policy journal than a protest page.
- **Typography:** serif body (system stack: Iowan Old Style, Palatino, Georgia) with a sans UI (system UI stack). No web-font downloads.
- **Color tokens** (one set, light default with a dark mode via `prefers-color-scheme`): warm off-white background, near-black ink, a single muted accent (deep red or navy). Avoid partisan colors (no red/blue pairing).
- **Components:** content cards by type (badge: News / Essay / Brief / Guide), callout boxes (`Strongest objections`, `What this does not claim`, `Law as of`), statute citation chips linking to codes.ohio.gov, bill status pills, and a print stylesheet for briefs.
- **Home page:**
  1. Mission statement (2 sentences) plus a "Start here" and "Take action" button pair.
  2. Crisis and safety link strip.
  3. Latest news (3) and latest essay (1 featured).
  4. Reform priorities grid (12 tiles).
  5. Bill tracker snapshot (top 3 active).
  6. Newsletter signup.

### 7.8 Search, feeds, SEO

- **Search:** Pagefind index built at deploy. It is static, client-side, and tracking-free.
- **Feeds:** RSS and JSON Feed for news and essays separately, plus a combined feed.
- **SEO:** semantic HTML, descriptive titles, canonical URLs, `sitemap.xml`, `robots.txt`, structured data (`Article`, `NewsArticle`, `BreadcrumbList`), and OG/Twitter cards generated at build.
- **Permalinks:** stable and human-readable (`/essays/who-decides-who-counts/`). Redirects file for any renames.

### 7.9 Forms and email (without a backend)

- **Newsletter:** an external provider with a privacy-respecting posture (e.g., Buttondown), embedded as a plain HTML form with no tracking scripts.
- **Contact, story intake, coalition signup:** a form-to-email service (Formspree, Basin, or Netlify Forms) with an explicit consent checkbox and a clear statement of retention, or `mailto:` as a zero-dependency fallback.
- **No analytics at launch**, or privacy-first aggregate counts only (Plausible or Umami self-hosted). Publish a short privacy note on what is and isn't collected.

### 7.10 Hosting and deployment

- **Host:** Cloudflare Pages (or Netlify or GitHub Pages). Static, global CDN, free tier adequate.
- **Domain:** `ohio-family.lawyer`, with HTTPS forced, HSTS, and `www` redirect.
- **CI/CD (GitHub Actions):** on PR, run `pnpm test` (validate, lint, build, link-check) and publish a preview. On merge to `main`, deploy. Run a **weekly scheduled link check** because statute and bill URLs change.
- **Headers:** strict CSP (self only, since there are no third parties), `Referrer-Policy: no-referrer`, `X-Content-Type-Options`, `Permissions-Policy`.
- **Backups:** the repo is the source of truth. Mirror to a second remote.

### 7.11 Quality gates

- Link check (internal and external, with allowlist and retry).
- Spell check and style lint for prose (e.g., `cspell` with a legal-term dictionary).
- Accessibility check (`pa11y-ci` or axe in CI on key templates).
- Lighthouse CI budget.

---

## 8. Phased Roadmap

### Phase 0: Foundation (weeks 1–2)

- Initialize the repo (`pnpm init`, Eleventy, ESLint, Prettier, Stylelint).
- Design tokens, base layout, header/footer, disclaimer and crisis banners.
- Extract the shared JS modules from the existing essay pages and fix the class-name mismatches.
- Write `disclaimer`, `about`, `corrections`, and the editorial standards pages.
- Wire CI and deploy to a staging URL.

### Phase 1: Launch (weeks 3–6)

- Write **5 core guides** (standing and parentage, child support basics, parenting time, GALs and evaluators, pro se basics).
- Publish the **reform agenda** (12 priorities, each as a stub with citations), the first **3 policy briefs**, and the **bill tracker** (manual entry).
- News: 6–8 seeded items and the RSS feed.
- Newsletter signup, search, sitemap, OG images.
- Launch publicly. Readers are the review layer: corrections arrive as GitHub issues and are fixed in the open.

### Phase 2: Credibility build (months 2–4)

- Remaining guides (12 total), directory v1 (statewide legal aid, mediation, county pages for the 10 most populous counties).
- Public-records requests for the Transparency Index (first 10 counties) and a methodology page.
- Action toolkit (testimony templates, scripts, meeting guide).
- Press page and outreach to Ohio journalists.
- Weekly digest cadence established.

### Phase 3: Organizing (months 4–8)

- Coalition charter and partner pages.
- Legislator and committee pages, scorecard v1.
- Campaign pages tied to specific bills (landing page, one-pager, call script, share cards).
- Hearing-recap workflow during session. Testimony library.
- Directory to all 88 counties.
- Guest essay submissions open.

### Phase 4: Scale (months 8–12+)

- Transparency Index covering all counties, annual report.
- Optional dynamic additions (only if needed): a lightweight serverless function for form handling, a scheduled bill-sync script, an events calendar.
- Evaluate a (c)(3)/(c)(4) structure, fundraising, and a part-time editor.
- Annual "State of Ohio Family Courts" report that consolidates data, essays, and a scorecard.

---

## 9. Metrics

**Reach:** newsletter subscribers, RSS subscribers, organic search impressions (via Search Console only), and press mentions.

**Credibility:** citations of site briefs by legislators, committee testimony delivered or cited, number of primary sources per essay, corrections issued (and speed), and corrections contributed by readers.

**Action:** testimony submitted, legislator meetings held, coalition partners signed, public-records requests filed and answered.

**Outcomes (long-term):** bills introduced, advanced, or passed that match priorities. Rule changes adopted. Data published by courts or agencies that was not previously available.

Avoid vanity metrics. Never track individual visitors.

---

## 10. Privacy, Safety, and Ethics

- **Visitor privacy:** no third-party scripts, no fingerprinting, and no cookies beyond a possible theme preference in `localStorage`. The privacy page says plainly what happens when someone emails or submits a story.
- **Story intake:** explicit consent tiers (never publish / anonymized only / named), plain-language data retention, and a warning that statements made to third parties can be subpoenaed. Do not collect case numbers or children's names in the form.
- **Children:** never publish identifying information about minors.
- **Safety:** persistent link to DV and crisis resources on every page. No content that could be used to locate a protected party.
- **Moderation:** no comments at launch.
- **Harassment policy:** the site does not publish or amplify attacks on private individuals (exes, attorneys' families, court staff).
- **Conflict of interest disclosure:** about page lists funding sources and the maintainers' own litigation or professional involvement, if any.

---

## 11. Legal Risk Register

| Risk | Mitigation |
| :-- | :-- |
| Unauthorized practice of law (UPL) | No individualized advice. Prominent disclaimer. Educational framing. |
| `.lawyer` implying a legal practice; attorney advertising rules (Ohio Prof.Cond.R. 7.1 etc.) if any operator is a lawyer | Clear "this is not a law firm" statement. Separate any practice from the advocacy site. Check registry and bar guidance. |
| Defamation | No factual claims about named individuals without linked documentary support. Corrections policy. |
| AI error or fabricated citation | Every claim links to a primary source. Link check fails the build on dead sources. AI authorship disclosed on every page. Public corrections with a change-log. |
| Lobbying law compliance (JLEC) and tax-exempt limits | See §6.7. |
| Publishing litigants' case details | Consent, anonymization, no active-case specifics that could prejudice a pending matter. |
| Copyright (forms, statutes, quotes) | Link to official sources, quote with attribution, and store only public-domain statute text with source links. |
| Stale law | `law_as_of` dates, scheduled re-review of guides (every 6 months), and prominent "verify current law" notices. |

---

## 12. Open Questions

1. **Who is the publisher?** Individual, LLC, or nonprofit. Decide before fundraising or lobbying.
2. **Is a licensed attorney involved?** This affects credibility, UPL risk, and what the guides can say.
3. **Name and framing:** "ohio-family.lawyer" is the domain, but the public brand could differ (e.g., *Ohio Family Court Reform*). Consider a brand that signals inclusive stakes ("every parent, every child").
4. **Where do the philosophy essays live?** Same site under `/foundations/`, or a separate site. Recommended: same site, clearly separated, so the framework stays linkable without crowding the practical content.
5. **Scope of national content:** keep Ohio-first. Link outward for other states.
6. **Voice:** settled. The site is AI-authored and says so. Essays may argue in a distinct voice. Briefs stay institutional.
7. **Status of shared-parenting legislation in Ohio:** confirm the current state before writing reform copy that presumes it is pending or absent.
8. **Funding model:** donations, grants, memberships, or volunteer-only.
9. **Peer support:** whether to ever host community features, and what safeguards would be required.

---

## 13. Appendices

### A. Brief template (`src/content/briefs/_template.md`)

```md
---
title: ""
type: brief
date:
law_as_of:
statutes: []
reform_priorities: []
status: draft
---

## The problem (3–4 sentences)
## Current Ohio law
(cite ORC / Sup.R. / case law)
## What we propose
(plain language + link to model language)
## Who is affected, and how
## Evidence
(Ohio data first, then comparative)
## Strongest objections, and our response
## Protections preserved
(explain how abuse and DV safeguards remain intact)
## Fiscal and administrative impact
## Rubric score
(brief reasoning against Articles 1–7)
## Sources
```

### B. News item template

```md
---
title: "Committee hears testimony on parenting-time enforcement bill"
type: news
kind: recap
date: 2026-03-04
source_name: "Ohio Legislature"
source_url: ""
bill: HB-000
status: published
---

**What happened:** …
**Why it matters:** …
**What's next:** …
**Take action:** link to /act/…
```

### C. Essay conversion checklist

1. Convert HTML to Markdown, then remove inline `<style>` and `<script>`.
2. Strip saved-from comments, extension script tags, and template placeholder metadata.
3. Add front matter (§7.5).
4. Footnote every statutory and empirical claim.
5. Add a "What this essay does not claim" box and a "Strongest objections" section where missing.
6. Add a reform-hooks section linking to `/reform/agenda/` items.
7. Add `law_as_of`, `generated_by`, and a change-log.
8. Run spellcheck, link check, and accessibility check.

### D. Initial launch content checklist

- [ ] Home, About, Disclaimer, Corrections, Privacy
- [ ] Start Here hub plus 3 audience pages and Safety First
- [ ] 3–4 essays and the Foundations framework page
- [ ] 5 guides
- [ ] Reform agenda (12 stubs) and 3 full briefs
- [ ] Bill tracker (current session)
- [ ] 6–8 news items
- [ ] Directory v1 (statewide legal aid, mediation, crisis resources)
- [ ] Newsletter signup, RSS, search, sitemap
- [ ] CI and deploy pipeline
- [ ] AI-authorship disclosure in the footer and on `/about/`

### E. Statute and rule quick-reference (verify before publishing)

- **ORC § 3109.04**: allocation of parental rights and responsibilities; best-interest factors at (F)(1).
- **ORC § 3109.042**: unmarried mother as sole residential parent and legal custodian until court order.
- **ORC § 3109.051**: parenting time and companionship rights.
- **ORC Chapter 3119**: child support calculation, imputed income, and modification.
- **ORC § 2919.21**: criminal nonsupport.
- **ORC § 2919.23**: interference with custody.
- **ORC § 149.43**: Ohio Public Records Act.
- **ORC §§ 101.70–101.79**: legislative agent and lobbying provisions.
- **Ohio Superintendence Rule 48**: guardians ad litem.
- **Title IV-D, Social Security Act**: federal child support enforcement and incentive funding.
- **Not human-reviewed, and not pretending otherwise.** No editor, fact-checker, clinician, or attorney signs off before anything is published. The site is AI-authored and says so (see §1.5).
- `The Function, Not the Failure` makes clinical claims (symptom-as-function). Source each one to published clinical literature or label it plainly as argument, and add a "not clinical advice" box and crisis resources (988) in the page footer.
- Front-matter validation (required fields, valid `type`, `generated_by` present, `law_as_of` present when `statutes` is non-empty).
- Convert and publish the first essay set: *Who Decides Who Counts*, *Always Believe Women* (after automated sourcing pass), *The Function, Not the Failure* (with clinical claims sourced or labeled as argument), plus the framework essay as `/foundations/`.
- Decide the lobbying structure (§6.7), checked against the statutes, and form an entity if proceeding.