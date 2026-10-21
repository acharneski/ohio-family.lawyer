// Quick exit for safety pages: replaces this page in history and leaves immediately.
export function initQuickExit(selector = '[data-quick-exit]') {
  const links = document.querySelectorAll(selector);
  if (!links.length) return;

  const leave = (href) => window.location.replace(href);

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      leave(link.href);
    });
  });

  // Escape pressed twice quickly also exits.
  let last = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const now = Date.now();
    if (now - last < 600) leave(links[0].href);
    last = now;
  });
}