# Nexa Website

Current release: `v4.1.0`.

Static bilingual website for communicating Nexa’s accepted B2B product scope and public status. The inherited visual design is retained. Product descriptions are informational and distinguish target scope from verified implementation.

Academic context: `1ACC0238 Aplicaciones para Dispositivos Móviles`, NRC `4949`, period `202620`. Course and team data are sourced from the current project materials.

## Public pages

- `index.html` — Nexa product scope overview.
- `pages/platform.html` — product domains and implementation boundaries.
- `pages/company.html` — current team profiles and product status.
- `pages/about-the-team.html` — verified project team profiles.
- `pages/about-the-product.html` — Mobile course product description.
- `pages/pricing.html` — commercial status; no public plans or prices.
- `pages/faq.html` — product scope and public-information limits.
- `pages/solutions/` — target-segment scope pages.

- `pages/login.html` — access information until the real sign-in destination is provided.

## Run locally

The site uses static HTML, CSS, and JavaScript; no package installation is required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Status

The Nexa business scope is defined in the product materials. This repository does not claim product acceptance, system acceptance, production readiness, a public service endpoint, pricing, an SLA, or support commitments.
