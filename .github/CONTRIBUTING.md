# Contributing to Nexa Website

## Repository Context

`nexa-website` is the public product website for the Nexa TB2 delivery.

| Field | Value |
|---|---|
| Current release | `v4.0.1` |
| Delivery | TB2 |
| Runtime | Static HTML / CSS / JavaScript |
| Deployment | GitHub Pages |
| Live Website | https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/ |
| WebApp | https://nexa-webapp.onrender.com/#/auth/login |

## Workflow

1. Create a branch from `develop` unless the maintainer requests a release correction from `main`.
2. Keep changes scoped to one page, one content area, or one documentation concern.
3. Use conventional commits.
4. Validate locally before opening a pull request.
5. Do not commit temporary files, local screenshots, OS metadata, or unrelated generated artifacts.

## Branch Names

| Prefix | Use |
|---|---|
| `feature/` | New public page or section |
| `fix/` | Broken link, copy, layout, or script fix |
| `docs/` | Documentation update |
| `style/` | Visual refinement without content contract change |
| `chore/` | Configuration, tooling, release maintenance |

## Architecture Rules

- Use semantic HTML.
- Keep styles in the existing CSS structure.
- Keep JavaScript small and page-focused.
- Keep visible content aligned with Nexa's B2B cold-chain domain.
- Keep public links pointing to current deployed services.
- Do not introduce external dependencies unless approved.

## Validation Checklist

Before requesting review:

```bash
python3 -m http.server 8000
node --check assets/js/i18n.js
node --check assets/js/pricing.js
```

For visual work, verify desktop and mobile layouts in a browser.

## Pull Request Notes

Each pull request should include:

- Affected page or section.
- Public claim or link changes.
- Responsive layout impact.
- Validation commands and results.
- Deployment notes, if any.

---

Team King · UPC · Aplicaciones Web · TB2 · 2026-10
