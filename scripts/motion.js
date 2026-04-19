/*
 * Nexa motion — GSAP + ScrollTrigger contracts.
 * Spec: docs/style-guidelines/motion-spec.md §3, §7.
 * - Band entrance: opacity 0→1 + y 12→0, 300ms, power2.out, once
 * - Band 1 flow diagram: 4 steps, x +8→0, 280ms each, 80ms stagger, ≤1.2s ceiling
 * - Reduced motion: gsap.set to final values, no timeline
 */
(function () {
  'use strict';

  if (typeof window.gsap === 'undefined') return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  function bandEntrances() {
    const bands = window.gsap.utils.toArray('section[data-band]');
    bands.forEach((band) => {
      const targets = band.querySelectorAll('[data-enter]');
      if (!targets.length) return;
      if (reduceMotion || !window.ScrollTrigger) {
        window.gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      window.gsap.from(targets, {
        opacity: 0,
        y: 12,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: band,
          start: 'top 85%',
          once: true,
        },
      });
    });
  }

  function flowDiagram() {
    const diagram = document.querySelector('[data-flow-diagram]');
    if (!diagram) return;
    const steps = diagram.querySelectorAll('[data-flow-step]');
    const connectors = diagram.querySelectorAll('[data-flow-connector]');
    if (!steps.length) return;

    if (reduceMotion || !window.ScrollTrigger) {
      window.gsap.set(steps, { opacity: 1, x: 0 });
      window.gsap.set(connectors, { opacity: 1, scaleX: 1 });
      return;
    }

    const tl = window.gsap.timeline({
      scrollTrigger: { trigger: diagram, start: 'top 70%', once: true },
    });

    tl.from(steps, {
      opacity: 0,
      x: 8,
      duration: 0.28,
      stagger: 0.08,
      ease: 'power2.out',
    });

    if (connectors.length) {
      tl.from(connectors, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.28,
        stagger: 0.08,
        ease: 'power2.out',
      }, 0.14);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    bandEntrances();
    flowDiagram();
  });
})();
