document.addEventListener('DOMContentLoaded', () => {
  const revealElements = Array.from(document.querySelectorAll('.reveal'));

  if (revealElements.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  const getRevealDelay = (element) => {
    if (element.classList.contains('reveal-delay-4')) return 240;
    if (element.classList.contains('reveal-delay-3')) return 180;
    if (element.classList.contains('reveal-delay-2')) return 120;
    if (element.classList.contains('reveal-delay-1')) return 60;
    return 0;
  };

  const animateReveal = (element) => {
    if (element.dataset.revealDone === 'true') return;

    element.dataset.revealDone = 'true';
    element.classList.add('visible');

    if (prefersReducedMotion || typeof element.animate !== 'function') return;

    element.animate(
      [
        {
          opacity: 0,
          transform: 'translateY(24px)'
        },
        {
          opacity: 1,
          transform: 'translateY(0)'
        }
      ],
      {
        duration: 720,
        delay: getRevealDelay(element),
        easing,
        fill: 'both'
      }
    );
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(animateReveal);
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        animateReveal(element);
        revealObserver.unobserve(element);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isNearInitialViewport = rect.top <= window.innerHeight * 1.1;

    if (isNearInitialViewport) {
      animateReveal(element);
      return;
    }

    revealObserver.observe(element);
  });
});
