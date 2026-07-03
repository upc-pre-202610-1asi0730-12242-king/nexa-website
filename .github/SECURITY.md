# Security Policy

## Supported Versions

This repository hosts the **Nexa public landing website** — a static site deployed via GitHub Pages. There is no backend runtime, authentication layer, or database in this repository.

| Scope | Status |
|---|---|
| Static HTML / CSS / JS | ✅ In scope |
| GitHub Pages deployment | ✅ In scope |
| Third-party embeds (YouTube iframe) | ⚠️ Out of scope — report to provider |
| WebApp backend (`nexa-webapp`) | ⚠️ Out of scope — report separately |

## Reporting a Vulnerability

If you discover a security concern related to this repository (e.g. exposed credentials in source, malicious script injection, or broken access in GitHub Actions workflows), please follow responsible disclosure:

1. **Do not open a public GitHub Issue** for security vulnerabilities.
2. **Contact the team directly** via the contact form on the live website:  
   [https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/pages/company.html#contact](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/pages/company.html#contact)
3. Include a clear description of the issue, affected file(s), and steps to reproduce if applicable.

We will acknowledge your report within **72 hours** and work to address confirmed issues as a priority.

## Scope Notes

- This site does **not** process payments, store user credentials, or transmit sensitive personal data.
- All login actions redirect externally to `nexa-webapp.onrender.com` — this is a separate repository and runtime environment.
- Cookie consent is managed client-side via `localStorage`. No tracking cookies are set.

---

*Universidad Peruana de Ciencias Aplicadas · Team King · Course 1ASI0730 · 2026-10*
