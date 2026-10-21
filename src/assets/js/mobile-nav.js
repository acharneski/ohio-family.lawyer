export function initMobileNav({
  toggleSelector = '[data-nav-toggle]',
  breakpoint = '(width > 48rem)',
} = {}) {
  const toggle = document.querySelector(toggleSelector);
  if (!toggle) return;
  const nav = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!nav) return;

  toggle.hidden = false;

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));

  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.matchMedia(breakpoint).addEventListener('change', (mq) => {
    if (mq.matches) setOpen(false);
  });
}