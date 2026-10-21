// Entry point. All content works without JS; these modules only enhance.
import { initReadingProgress } from './reading-progress.js';
import { initTocScrollspy } from './toc-scrollspy.js';
import { initBackToTop } from './back-to-top.js';
import { initMobileNav } from './mobile-nav.js';
import { initCopyLink } from './copy-link.js';
import { initQuickExit } from './quick-exit.js';

document.documentElement.classList.add('has-js');

const ready = (fn) =>
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn();

ready(() => {
  initMobileNav();
  initBackToTop({ threshold: 600 });
  initCopyLink();
  initQuickExit();
  if (document.querySelector('[data-reading-progress]')) initReadingProgress();
  if (document.querySelector('[data-toc]')) initTocScrollspy();
});