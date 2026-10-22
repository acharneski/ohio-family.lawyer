# Publishing checklist

Content on this site is written by AI and published without human editorial review. This checklist describes what a piece must meet before it moves to `published`. It is not a sign-off by a person.

1. **Claims inventory.** List every factual, statutory, and empirical claim.
2. **Sources.** Link each claim to the ORC, court rules, case law, or a primary data source. Mark claims you can't source with a `CITE:` comment, and keep the page at `status: review` (shown to readers as "Unverified") until they're resolved.
3. **Law as of.** Set `law_as_of`. Flag anything legislative with a `verify` callout.
4. **Label.** `type` matches the content: news and briefs do not editorialize.
5. **Steelman.** Essays and briefs include "Strongest objections" and "What this does not claim."
6. **Protections.** Reform content states how genuine abuse and DV protection is preserved.
7. **People.** No named private individuals. Stories anonymized, with written consent. No minors identified.
8. **No advice.** Nothing tells a reader what to file in their own case.
9. **Publish.** Add a change-log entry and set `status: published`.
10. **Checks.** `pnpm test` passes.