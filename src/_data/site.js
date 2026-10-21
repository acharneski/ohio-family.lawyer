// Global site data. Brand name is provisional (see idea.md §12, open question 3).
export default {
  name: "ohio-family.lawyer",
  publisher: "ohio-family.lawyer editorial board",
  url: process.env.SITE_URL || "https://ohio-family.lawyer",
   lang: "en-US",
   locale: "en_US",
   // Preview and branch deploys must never be indexed (duplicate content).
   indexable: !(
     process.env.SITE_INDEXABLE === "false" ||
     (process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== "main")
   ),
   seo: {
     defaultImage: "/og/default.png",
     logo: "/og/logo.png",
     themeColor: "#1f4e5f",
   },
   // Search console ownership tokens (meta-tag method). Set in the deploy environment.
   verification: {
     google: process.env.GOOGLE_SITE_VERIFICATION || "",
     bing: process.env.BING_SITE_VERIFICATION || "",
   },
  tagline: "Evidence and due process for every parent. Real protection for every child.",
  mission:
    "Make Ohio's family courts accountable, measurable, and fair to every person they affect by informing the public, equipping litigants, and organizing legislative reform.",
  year: new Date().getFullYear(),
  contactEmail: "editor@ohio-family.lawyer",
  pressEmail: "press@ohio-family.lawyer",

  nav: {
    primary: [
      { label: "Start Here", url: "/start/" },
      { label: "News", url: "/news/" },
      { label: "Essays", url: "/essays/" },
      { label: "Resources", url: "/resources/" },
      { label: "Reform", url: "/reform/" },
      { label: "Act", url: "/act/" },
    ],
    footer: [
      { label: "Research", url: "/research/" },
      { label: "Briefs", url: "/briefs/" },
       { label: "Ohio law index", url: "/law/" },
       { label: "Glossary", url: "/resources/glossary/" },
       { label: "Resources by county", url: "/resources/counties/" },
      { label: "Foundations", url: "/foundations/" },
      { label: "Coalition", url: "/coalition/" },
      { label: "About", url: "/about/" },
      { label: "Press", url: "/press/" },
      { label: "Corrections", url: "/corrections/" },
      { label: "Privacy", url: "/privacy/" },
      { label: "Disclaimer", url: "/disclaimer/" },
    ],
  },

  crisis: {
    emergency: { label: "Emergency", tel: "911", display: "911" },
    lifeline: { label: "988 Suicide & Crisis Lifeline", tel: "988", display: "988" },
    dv: {
      label: "National Domestic Violence Hotline",
      tel: "18007997233",
      display: "1-800-799-7233",
      text: "Text START to 88788",
    },
  },

  // Plain HTML form, no tracking scripts. Leave action empty until the provider is set up.
  newsletter: { provider: "Buttondown", action: "" },

  disclaimer: {
    short:
      "Educational information, not legal advice. This site is not a law firm, and reading it does not create an attorney-client relationship.",
  },

  types: {
    essay: "Essay",
    news: "News",
    brief: "Brief",
    guide: "Guide",
    foundation: "Foundations",
    page: "Page",
  },

  // Evaluation rubric (idea.md §6.4), condensed from the Alignment Manifesto, Articles 1–7.
  rubric: [
    { key: "art1", article: 1, question: "Does it avoid making anyone's success depend on suppressing another person's interests?" },
    { key: "art2", article: 2, question: "Do those who impose costs bear them?" },
    { key: "art3", article: 3, question: "Can the institution be corrected from outside? Is the data public?" },
    { key: "art4", article: 4, question: "Is the rule predictable?" },
    { key: "art5", article: 5, question: "Does income flow from contribution rather than position or conflict?" },
    { key: "art6", article: 6, question: "Is exit or appeal real, not merely formal?" },
    { key: "art7", article: 7, question: "Is it testable and revisable, with a sunset or review clause?" },
  ],
  rubricTest:
    "Does the arrangement make each person's success depend on others' success, or on others' frustration?",

  defaultProtections:
    "Every proposal on this site must state how genuine abuse, neglect, and domestic violence will still be caught and handled. Fast, low-barrier protective orders for real danger are preserved in every reform we support.",
};