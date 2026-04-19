/*
 * Nexa tabs — ARIA tablist with manual activation.
 * Spec: docs/style-guidelines/motion-spec.md §11.
 * - ArrowLeft/Right move focus only (roving tabindex)
 * - Enter/Space activates the focused tab
 * - Home/End jump focus to first/last
 * - Indicator translates X to selected tab via CSS transform
 * - Panel cross-fade (out 80ms, in 120ms) — opacity only, no translate
 * - Reduced motion: instant indicator + display swap, no fade
 */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(tabsRoot) {
    const list = tabsRoot.querySelector('[role="tablist"]');
    if (!list) return;
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((t) => document.getElementById(t.getAttribute('aria-controls')));
    const indicator = list.querySelector('.tabs__indicator');

    function moveIndicator(tab) {
      if (!indicator) return;
      const listRect = list.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      const x = tabRect.left - listRect.left + list.scrollLeft;
      indicator.style.width = `${tabRect.width}px`;
      indicator.style.transform = `translateX(${x}px)`;
    }

    function activate(nextTab, { focus = true } = {}) {
      const nextIndex = tabs.indexOf(nextTab);
      if (nextIndex === -1) return;
      const currentTab = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
      const currentPanel = currentTab && document.getElementById(currentTab.getAttribute('aria-controls'));
      const nextPanel = panels[nextIndex];

      tabs.forEach((t, i) => {
        const selected = t === nextTab;
        t.setAttribute('aria-selected', selected ? 'true' : 'false');
        t.setAttribute('tabindex', selected ? '0' : '-1');
      });

      moveIndicator(nextTab);

      if (currentPanel === nextPanel) return;

      if (reduceMotion) {
        panels.forEach((p) => { if (p) p.hidden = p !== nextPanel; });
      } else {
        if (currentPanel) {
          currentPanel.classList.add('is-leaving');
          setTimeout(() => {
            currentPanel.hidden = true;
            currentPanel.classList.remove('is-leaving');
            nextPanel.hidden = false;
            requestAnimationFrame(() => nextPanel.classList.add('is-entering'));
            setTimeout(() => nextPanel.classList.remove('is-entering'), 140);
          }, 80);
        } else {
          nextPanel.hidden = false;
        }
      }

      if (focus) {
        nextTab.focus();
        nextTab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }

    function focusTab(index) {
      const wrapped = (index + tabs.length) % tabs.length;
      tabs[wrapped].focus();
      tabs[wrapped].scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduceMotion ? 'auto' : 'smooth' });
    }

    list.addEventListener('keydown', (e) => {
      const currentIndex = tabs.indexOf(document.activeElement);
      if (currentIndex === -1) return;
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          focusTab(currentIndex + 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          focusTab(currentIndex - 1);
          break;
        case 'Home':
          e.preventDefault();
          focusTab(0);
          break;
        case 'End':
          e.preventDefault();
          focusTab(tabs.length - 1);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          activate(tabs[currentIndex], { focus: false });
          break;
      }
    });

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activate(tab, { focus: false }));
    });

    const initial = tabs.find((t) => t.getAttribute('aria-selected') === 'true') || tabs[0];
    if (initial) {
      requestAnimationFrame(() => moveIndicator(initial));
    }

    let resizeFrame;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        const active = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
        if (active) moveIndicator(active);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-tabs]').forEach(init);
  });
})();
