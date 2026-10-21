// Copy-link buttons replace the old Twitter/Facebook share buttons (no third-party calls).
export function initCopyLink(selector = '[data-copy-link]') {
  if (!navigator.clipboard) return; // buttons stay hidden without clipboard support
  document.querySelectorAll(selector).forEach((btn) => {
    btn.hidden = false;
    const label = btn.textContent;
    btn.addEventListener('click', async () => {
      const url = new URL(window.location.href);
      url.hash = btn.dataset.copyHash || '';
      try {
        await navigator.clipboard.writeText(url.href);
        btn.textContent = 'Link copied';
      } catch {
        btn.textContent = 'Copy failed';
      }
      setTimeout(() => {
        btn.textContent = label;
      }, 2000);
    });
  });
}