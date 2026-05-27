<div align="center">

<br/>

<img src="assets/img/nexa.svg" alt="Nexa" width="200"/>

<br/><br/>

# Nexa — Website

**B2B web platform for refrigerated and frozen food distributors in Peru**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

![Course](https://img.shields.io/badge/Course-1ASI0730%20Aplicaciones%20Web-0a2540?style=flat-square)
![Cycle](https://img.shields.io/badge/Cycle-2026--10-0a2540?style=flat-square)
![University](https://img.shields.io/badge/University-UPC-0a2540?style=flat-square)
![Team](https://img.shields.io/badge/Team-King-2a67d9?style=flat-square)
![Status](https://img.shields.io/badge/Status-TB2%20Current%20Iteration-22c55e?style=flat-square)

<br/>

🌐 **[View live →](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)**

<br/>

</div>

---

## What is Nexa?

Nexa is a B2B web platform for refrigerated and frozen food distributors. Most orders between distributors and their buyers (bodegas, minimarkets, HORECA) are still handled through WhatsApp voice notes and manual spreadsheets — which leads to errors, waste, and zero traceability.

Nexa replaces that with a structured digital order flow:

```text
Without Nexa:
  Buyer → WhatsApp audio → Staff transcribes manually → Spreadsheet → Errors at dispatch

With Nexa:
  Buyer → B2B portal → Structured order → Shared visibility → Clean dispatch
```

---

## Tech stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styles | CSS3 with custom design tokens (no frameworks) |
| Behavior | Vanilla JavaScript |
| i18n | Custom i18n module (es_419 / en_US) |
| Deployment | GitHub Pages |

---

## Repository structure

```text
nexa-website/
│
├── index.html
├── assets/
│   ├── css/
│   │   ├── typography.css
│   │   ├── tokens.css
│   │   ├── main.css
│   │   ├── layout.css
│   │   ├── buttons.css
│   │   ├── components.css
│   │   ├── pricing.css
│   │   └── patterns.css
│   ├── js/
│   │   ├── animations.js
│   │   ├── interactions.js
│   │   ├── i18n.js
│   │   └── pricing.js
│   └── img/
│       ├── hero-warehouse-bg.png
│       └── nexa.svg
│
└── pages/
    ├── platform.html
    ├── company.html
    ├── faq.html
    ├── pricing.html
    ├── solutions/
    │   ├── index.html
    │   ├── importers.html
    │   ├── distributors.html
    │   └── cold-storage.html
    └── legal/
        ├── terms.html
        ├── privacy.html
        └── cookies.html
```

The Nexa logo lives in `assets/img/nexa.svg` so it is versioned with the rest of the website visual assets and referenced consistently from root, page, solution, and legal routes.

## Current pages

- `index.html`
- `pages/platform.html`
- `pages/company.html`
- `pages/faq.html`
- `pages/pricing.html`
- `pages/solutions/index.html`
- `pages/solutions/importers.html`
- `pages/solutions/distributors.html`
- `pages/solutions/cold-storage.html`
- `pages/legal/terms.html`
- `pages/legal/privacy.html`
- `pages/legal/cookies.html`

---

## Branching strategy

| Branch | Purpose |
|---|---|
| `main` | Stable deliverable version |
| `develop` | Integration branch |
| `feature/*` | Temporary branches for screens, sections, and technical capabilities |
| `release/*` | Temporary branches for SemVer release preparation |
| `hotfix/*` | Temporary branches for urgent fixes from `main` |

All commits follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/): `type(scope): description`.

Merged `feature/*`, `release/*`, and `hotfix/*` branches are deleted from the remote after integration so the active GitFlow surface stays focused on `main` and `develop`.

---

## Related repositories

| Repository | Description |
|---|---|
| [nexa-report](https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-report) | Academic report — requirements, user stories, architecture docs |
| [nexa-webapp](https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-webapp) | Main web application (Vue.js) — [live](https://nexa-2f1bb.web.app) |
| [nexa-platform](https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-platform) | Backend service layer (ASP.NET Core, planned for next milestone) |

---

## Team

**Organization:** [upc-pre-202610-1asi0730-12242-king](https://github.com/upc-pre-202610-1asi0730-12242-king)

| Code | Member | Role |
|---|---|---|
| U202323040 | Yucra Sandoval, Diego Sebastian | Team Leader |
| U202411937 | Marín Cueva, César Fernando | Team Member |
| U20241A054 | Verde Bueno, Joaquín Francisco | Team Member |
| U202416289 | Torrejón De Los Santos, Gino Rodrigo | Team Member |
| U202413142 | Rojas Mancilla, Gerard Gianpier | Team Member |

---

<div align="center">

<br/>

**Nexa** · Universidad Peruana de Ciencias Aplicadas · 2026-10

*1ASI0730 — Aplicaciones Web · Ingeniería de Software*

<br/>

</div>
