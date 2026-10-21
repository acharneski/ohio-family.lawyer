# Contributing to ohio-family.lawyer

Thank you for helping. This is a community project: there is no mailbox and no back office. Everything happens through issues and pull requests in this repository.

## First, a privacy rule

GitHub is public. **Never post case numbers, names of private individuals, children's information, or details of a pending case** in issues, pull requests, comments, or commit messages. Contribute knowledge about the system, not your case.

## Ways to help

- **Corrections**: open an issue with the "Correction" template. Include the page, the claim, and a source.
- **Bills**: open an issue with the "Bill suggestion" template.
- **Counties**: verify links in `src/_data/counties.json`. Only set `"ready": true` after checking every URL (see the README "SEO" section).
- **Statute summaries**: add plain-language entries to `src/_data/statuteInfo.json`.
- **Citations**: search for `CITE:` and `VERIFY:` markers in `src/content/` and supply primary sources.
- **Guides and briefs**: follow Appendix A and B in `idea.md` and `docs/editorial-checklist.md`. New content starts with `status: draft`.
- **Code and design**: accessibility, performance, print styles, data tooling.

## Running locally

```sh
pnpm install
pnpm dev        # local server; drafts visible
pnpm test       # validate + lint + build (run before opening a PR)
```

## Pull requests

1. Fork the repo and create a branch.
2. Keep each PR focused: one piece of content or one fix.
3. Run `pnpm test`.
4. Describe what you changed and, for factual content, list your sources.
5. A reviewer checks factual content against `docs/editorial-checklist.md` before merging.

## Editorial standards (short version)

- Cite everything checkable, and set `law_as_of` on anything citing law.
- News and briefs report. Essays argue. Label accordingly.
- Steelman the opposition.
- Every reform preserves fast, low-barrier protection from genuine abuse and domestic violence.
- No legal advice. Educate and refer.
- Criticize systems and public acts, never private individuals.

## License

Text you contribute is published under CC BY 4.0, matching the rest of the site.