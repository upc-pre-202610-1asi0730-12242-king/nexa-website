/*
 * Nexa i18n — single-file lang toggle (es_419 default + en_US parity).
 * Pattern: paired <span data-lang="es|en"> nodes; non-active lang gets `hidden`.
 * Persisted in localStorage. Updates <html lang> + nav button aria-pressed.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'nexa.lang';
  const SUPPORTED = ['es', 'en'];

  function readPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : 'es';
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'es';
    document.documentElement.lang = lang === 'es' ? 'es-419' : 'en-US';

    document.querySelectorAll('[data-lang]').forEach((el) => {
      const matches = el.dataset.lang === lang;
      el.hidden = !matches;
    });

    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      const isActive = btn.dataset.setLang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  function bind() {
    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLang(btn.dataset.setLang));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    applyLang(readPreferred());
  });
})();
