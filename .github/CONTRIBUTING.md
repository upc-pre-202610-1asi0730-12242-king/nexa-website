# Contributing Guidelines

Thank you for your interest in contributing to `nexa-website`. This document describes how the team works with this repository.

## About This Repository

`nexa-website` is the public landing page for the Nexa platform. It is an academic project developed as part of **Course 1ASI0730 — Aplicaciones Web** at Universidad Peruana de Ciencias Aplicadas (UPC), cycle 2026-10.

Contributions are primarily made by the core **Team King** members. External contributions may be considered during active development phases.

---

## Getting Started

1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b fix/your-description
   ```

2. **Serve locally** to preview your changes:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve .
   ```

3. Make your changes following the code conventions below.

4. **Commit** with a clear, descriptive message (see commit conventions).

5. Open a **Pull Request** against `main` with a description of what changed and why.

---

## Code Conventions

### HTML
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, etc.).
- Every `<img>` must have a descriptive `alt` attribute.
- Every interactive element must have a unique `id`.
- Every page must include a `<title>`, `<meta name="description">`, and Open Graph tags.
- `lang` attribute on `<html>` must be `es-419` (default language).

### CSS
- All colors must reference design tokens from `assets/css/tokens.css`.
- Do not add inline styles that override token values without justification.
- Do not use `!important` except in documented utility overrides.
- Follow the existing CSS file structure (`tokens → typography → layout → buttons → patterns → components`).

### JavaScript
- Vanilla JS only — no external libraries or frameworks.
- No `console.log`, `debugger`, or `alert()` in production code.
- All user-visible strings should have a `data-i18n` attribute for the i18n engine.

### Commits
Use clear, lowercase commit messages:
```
fix: correct navbar mobile overflow
feat: add cold-storage solutions page
style: update team section background to white
docs: update README with new team roles
```

---

## Pull Request Checklist

Before submitting a PR, verify:

- [ ] All pages open correctly without browser console errors.
- [ ] No `console.log` or debug statements left in JS files.
- [ ] All `<img>` tags have `alt` attributes.
- [ ] No broken links (`href="#"`, empty `href`, or missing pages).
- [ ] Changes work on both desktop and mobile viewport.
- [ ] No hardcoded colors — use CSS tokens.
- [ ] `lang="es-419"` set on all `<html>` elements.

---

## Reporting Issues

For bugs, content corrections, or improvement suggestions, open a GitHub Issue with:
- A clear title describing the problem.
- Steps to reproduce (for bugs).
- The affected page(s) or file(s).

---

*Universidad Peruana de Ciencias Aplicadas · Team King · Course 1ASI0730 · 2026-10*
