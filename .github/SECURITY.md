# Nexa Website Security Policy

## Supported Version

| Repository | Current Release | Delivery | Security Support |
|---|---:|---|---|
| `nexa-website` | `v4.0.1` | TB2 | Active |

Older tags remain available for academic traceability, but security corrections are applied to the latest active release line.

## Scope

Security review for this repository includes:

- Static HTML, CSS, and JavaScript.
- Public links to WebApp, Platform API, and legal pages.
- GitHub Pages deployment configuration.
- Client-side i18n and cookie consent behavior.
- External embeds or third-party links when present.

## Live Security Surface

| Service | URL |
|---|---|
| Website | https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/ |
| WebApp | https://nexa-webapp.onrender.com/#/auth/login |
| Platform API | https://nexa-platform-20wt.onrender.com |

## Reporting a Vulnerability

Do not open a public issue for vulnerabilities. Report privately to the Team King maintainers or through GitHub private vulnerability reporting when available.

Include:

- Affected page, file, link, or script.
- Steps to reproduce.
- Expected and actual behavior.
- Browser and environment details.
- Risk level and suggested mitigation, if known.

## Security Requirements

- Do not commit secrets, tokens, private contact data, or local artifacts.
- Keep public links accurate and HTTPS-based.
- Avoid adding third-party scripts without review.
- Keep cookie and privacy language aligned with current site behavior.
- Validate JavaScript syntax before release.

---

Team King · UPC · Aplicaciones Web · TB2 · 2026-10
