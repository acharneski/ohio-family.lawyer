// Pagefind UI is a classic script loaded just before this module (see search.njk).
const el = document.querySelector('[data-search]');

if (el) {
  if ('PagefindUI' in window) {
     const ui = new window.PagefindUI({ element: el, showSubResults: true, showImages: false });
     // Supports /search/?q=term (the WebSite SearchAction target, and shareable result links).
     const q = new URLSearchParams(window.location.search).get('q');
     if (q) ui.triggerSearch(q);
  } else {
    const p = document.createElement('p');
    p.className = 'notice';
    p.textContent = 'The search index is built at deploy time. Run `pnpm build` to generate it locally.';
    el.append(p);
  }
}