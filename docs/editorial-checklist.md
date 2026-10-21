# Editorial checklist

Run before any piece moves from `review` to `published`.

1. **Claims inventory.** List every factual, statutory, and empirical claim.
2. **Sources.** Each claim links to the ORC, court rules, case law, or a primary data source.
3. **Law as of.** Set `law_as_of`. Flag anything legislative with a `verify` callout.
4. **Label.** `type` matches the content: news and briefs do not editorialize.
5. **Steelman.** Essays and briefs include "Strongest objections" and "What this does not claim."
6. **Protections.** Reform content states how genuine abuse and DV protection is preserved.
7. **People.** No named private individuals. Stories anonymized, with written consent. No minors identified.
8. **No advice.** Nothing tells a reader what to file in their own case.
9. **Sign-off.** Set `reviewed_by` (initials and date), add a change-log entry, and set `status: published`.
10. **Checks.** `pnpm test` passes.