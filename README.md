# Nexa Website

Static bilingual website for communicating Nexa’s accepted B2B product scope and public status. The inherited visual design is retained. Product descriptions are informational and distinguish target scope from verified implementation.

## Public pages

- `index.html` — Nexa V1 scope overview.
- `pages/platform.html` — product domains and implementation boundaries.
- `pages/company.html` — current team profiles and product status.
- `pages/about-the-team.html` — placeholder pending publication review.
- `pages/about-the-product.html` — placeholder pending publication review.
- `pages/pricing.html` — commercial status; no public plans or prices.
- `pages/faq.html` — product scope and public-information limits.
- `pages/solutions/` — target-segment scope pages.

## Run locally

The site uses static HTML, CSS, and JavaScript; no package installation is required.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Product and asset provenance

See [`docs/content-provenance.md`](docs/content-provenance.md) for the current Blueprint and Mobile Report sources used to describe scope and team profiles.

## Status

The Nexa V1 business scope is defined in Blueprint. This repository does not claim product acceptance, system acceptance, production readiness, a public service endpoint, pricing, an SLA, or support commitments.
