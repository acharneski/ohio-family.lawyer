export function initBackToTop({ threshold = 600, selector = '[data-back-to-top]' } = {}) {
  const btn = document.querySelector(selector);
  if (!btn) return;
  btn.hidden = false;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  const update = () => {
    btn.classList.toggle('is-visible', window.scrollY > threshold);
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    document.getElementById('main')?.focus({ preventScroll: true });
  });

  update();
}