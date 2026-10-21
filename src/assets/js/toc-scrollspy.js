// Highlights the TOC link for the section in the middle band of the viewport.
// Standard state classes: `is-active` (CSS and JS agree; fixes the old essay bugs).
export const ROOT_MARGIN = '-40% 0px -50% 0px';

export function initTocScrollspy({
  tocSelector = '[data-toc]',
  linkSelector = 'a[href^="#"]',
  rootMargin = ROOT_MARGIN,
} = {}) {
  const toc = document.querySelector(tocSelector);
  if (!toc || !('IntersectionObserver' in window)) return;

  const links = Array.from(toc.querySelectorAll(linkSelector));
  const targets = links
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter(Boolean);
  if (!targets.length) return;

  let activeId = null;
  const setActive = (id) => {
    if (id === activeId) return;
    activeId = id;
    links.forEach((link) => {
      const isActive = link.hash === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin, threshold: 0 },
  );

  targets.forEach((el) => observer.observe(el));
}