---
title: "Contribute"
seoTitle: "Contribute to Ohio Family Court Reform (Open Source)"
summary: "This site is an open-source community project. Anyone can correct a claim, track a bill, verify county links, draft a guide, or improve the code on GitHub."
date: 2026-03-15
status: published
---

**ohio-family.lawyer is built in the open.** Every essay, guide, data file, and line of code lives in a public repository: [github.com/acharneski/ohio-family.lawyer]({{ site.repo.url }}). There is no back office and no mailbox. The project moves when people like you pitch in.

{% callout "note", "Before you post anything" %}
GitHub is **public**. Never post case numbers, names of private individuals, children's information, or details of a pending case. Statements made to third parties can be used in litigation. Contribute knowledge about the *system*, not your case.
{% endcallout %}

## Ways to help

### No coding required

- **Report an error.** [Open a correction issue]({{ site.repo.newIssue }}?template=correction.md) with the page, the claim, and a source. Accuracy is this site's only real asset.
- **Suggest a bill to track.** [Open a bill issue]({{ site.repo.newIssue }}?template=bill.md) with the bill number and a link to legislature.ohio.gov.
- **Propose a topic or guide.** [Open a content issue]({{ site.repo.newIssue }}?template=content.md).
- **Fix a typo or unclear sentence.** Every page has an "Improve this page" link in the footer. It opens the source file on GitHub, where you can edit it in your browser and propose the change.

### Research and verification

- **Verify a county.** The [county pages](/resources/counties/) need checked links to each county's domestic relations court, juvenile court, local rules, and child support enforcement agency. [Edit `counties.json`]({{ "src/_data/counties.json" | editUrl }}) and cite where you checked.
- **Write a statute summary.** The [Ohio law index](/law/) needs short, plain-language summaries. [Edit `statuteInfo.json`]({{ "src/_data/statuteInfo.json" | editUrl }}).
- **Find sources.** Essays contain `CITE` markers where a claim still needs a primary source. Search the repo for `CITE:` and add one.
- **Public records.** Help with the [research projects](/research/) by filing records requests and publishing the results.

### Writing and review

- **Draft a guide or brief.** Follow the templates and the [editorial standards](/about/#editorial-standards). Drafts start with `status: draft` and go through review.
- **Practitioners, mediators, clinicians, and DV advocates:** review is the most valuable thing you can give. Open an issue on any page you can check, or comment on open pull requests.
- **Steelman us.** If you disagree with a position, write the strongest objection. Briefs are required to answer it.

### Code and design

The site is static: Eleventy, Nunjucks, plain CSS, and small ES modules. It has no trackers and no third-party scripts. Accessibility, performance, print styles, and data tooling are all open for help. See [`CONTRIBUTING.md`]({{ site.repo.url }}/blob/{{ site.repo.branch }}/CONTRIBUTING.md) to run it locally.

## How contributions are reviewed

1. You open an issue or a pull request.
2. A reviewer checks it against the [editorial checklist]({{ site.repo.url }}/blob/{{ site.repo.branch }}/docs/editorial-checklist.md): sources, "law as of" dates, labeling, and preserved abuse protections.
3. Once merged, the change ships on the next deploy, and the commit history records who changed what and when.

## House rules

- Cite everything checkable.
- Criticize systems, rules, and public acts. Never attack private individuals.
- Every reform keeps fast, low-barrier protection from genuine abuse.
- Be civil. Disagreement is information; harassment isn't.

Text you contribute is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), like the rest of the site.

[Start on GitHub →]({{ site.repo.url }})