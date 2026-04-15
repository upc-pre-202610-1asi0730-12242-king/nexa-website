/**
 * animations.js — Nexa V3
 * Smooth scroll reveal without first-load flicker.
 */

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = Array.from(document.querySelectorAll('.reveal'));

  if (revealElements.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealImmediately = (element) => {
    element.classList.add('visible');
    element.classList.remove('reveal-pending');
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(revealImmediately);
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        element.classList.add('visible');
        revealObserver.unobserve(element);

        element.addEventListener(
          'transitionend',
          () => {
            element.classList.remove('reveal-pending');
          },
          { once: true }
        );
      });
    },
    {
      threshold: 0.04,
      rootMargin: '0px 0px 45% 0px'
    }
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isNearInitialViewport = rect.top <= window.innerHeight * 1.65;

    if (isNearInitialViewport) {
      revealImmediately(element);
      return;
    }

    element.classList.add('reveal-pending');
    revealObserver.observe(element);
  });
});
