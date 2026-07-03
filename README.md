<div align="center">

<br/>

<img src="./assets/img/nexa.svg" alt="Nexa" width="200"/>

<br/><br/>

# nexa-website

**Public landing website and central product entry point for the Nexa platform**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![i18n](https://img.shields.io/badge/i18n-ES%20%7C%20EN-2a67d9?style=for-the-badge)

<br/>

![Course](https://img.shields.io/badge/Course-1ASI0730%20Aplicaciones%20Web-0a2540?style=flat-square)
![Cycle](https://img.shields.io/badge/Cycle-2026--10-0a2540?style=flat-square)
![University](https://img.shields.io/badge/University-UPC-0a2540?style=flat-square)
![Team](https://img.shields.io/badge/Team-King-2a67d9?style=flat-square)
![Status](https://img.shields.io/badge/Status-Release%204.0.0-22c55e?style=flat-square)

<br/>

🌐 **[View Live Site →](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)**

<br/>

</div>

---

## Overview

The `nexa-website` repository hosts the public landing page for the Nexa platform. It serves as the primary B2B introduction for refrigerated and frozen food distributors, importers, and cold-storage operators — communicating the platform's cold-chain visibility value proposition and routing visitors to the active WebApp, pricing, and platform documentation.

Built entirely with vanilla HTML, CSS, and JavaScript. No frameworks, no build steps. Deployed automatically via GitHub Pages from the `main` branch.

---

## Repository Map

<table>
  <tr>
    <td width="50%">
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-website">nexa-website</a> (This Repository)</p>
      <p>Public landing website and central product entry point.</p>
      <p><a href="https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/">Open Live Website</a></p>
      <p>
        <img alt="HTML5" src="https://img.shields.io/badge/HTML5-static-E34F26?style=flat-square&logo=html5&logoColor=white" />
        <img alt="CSS3" src="https://img.shields.io/badge/CSS3-responsive-1572B6?style=flat-square&logo=css3&logoColor=white" />
        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
      </p>
    </td>
    <td width="50%">
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-webapp">nexa-webapp</a></p>
      <p>Main web application for operational workflows and buyer-facing coordination.</p>
      <p><a href="http://localhost:5173/#/auth/login">Open Local WebApp Login</a></p>
      <p>
        <img alt="Vue 3" src="https://img.shields.io/badge/Vue%203-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D" />
        <img alt="Vite" src="https://img.shields.io/badge/Vite-0F172A?style=flat-square&logo=vite&logoColor=FFD62E" />
        <img alt="PrimeVue" src="https://img.shields.io/badge/PrimeVue-0EA5E9?style=flat-square" />
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-platform">nexa-platform</a></p>
      <p>Backend platform and API service layer — Clean Architecture, DDD, ASP.NET Core.</p>
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-platform">Open Platform Repository</a></p>
      <p>
        <img alt="Platform" src="https://img.shields.io/badge/.NET%20Core-10.0-512BD4?style=flat-square" />
        <img alt="API" src="https://img.shields.io/badge/API-domain%20services-0EA5E9?style=flat-square" />
      </p>
    </td>
    <td width="50%">
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-ecosystem-report">nexa-ecosystem-report</a></p>
      <p>Academic report, product research, backlog, architecture documentation, and project evidence.</p>
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-ecosystem-report">Open Report Repository</a></p>
      <p>
        <img alt="Documentation" src="https://img.shields.io/badge/Documentation-report-0F172A?style=flat-square" />
        <img alt="UPC" src="https://img.shields.io/badge/UPC-course%20evidence-0EA5E9?style=flat-square" />
      </p>
    </td>
  </tr>
</table>

---

## Website Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Main landing — hero, product overview, segments, social proof |
| `/pages/platform.html` | Platform | Module breakdown and operational feature details |
| `/pages/about-the-product.html` | About the Product | Deep product context and workflow explanation |
| `/pages/pricing.html` | Pricing | Plan tiers and contact / informational request form |
| `/pages/company.html` | Company | Team, mission, and contact section |
| `/pages/faq.html` | FAQ | Common questions about the platform and process |
| `/pages/solutions/importers.html` | Importers | Segment landing for food importers |
| `/pages/solutions/distributors.html` | Distributors | Segment landing for B2B distributors |
| `/pages/solutions/cold-storage.html` | Cold Storage | Segment landing for cold-storage operators |
| `/pages/legal/terms.html` | Terms & Conditions | Legal terms of the platform |
| `/pages/legal/privacy.html` | Privacy & Policy | Data handling and privacy policy |
| `/pages/legal/cookies.html` | Cookies | Cookie usage and consent |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Markup** | HTML5 — semantic, accessible |
| **Styling** | Vanilla CSS3 — custom design tokens, responsive grid |
| **Interactivity** | Vanilla JavaScript — no dependencies |
| **Internationalization** | Custom i18n engine (ES / EN) |
| **Deployment** | GitHub Pages — Branch: `main`, Folder: `/` |

---

## Project Structure

```text
nexa-website/
├── index.html                  # Main entry point (Home)
├── assets/
│   ├── css/
│   │   ├── main.css            # CSS entry point — imports all modules
│   │   ├── tokens.css          # Design system tokens (colors, spacing, radius)
│   │   ├── typography.css      # Font scale and text utilities
│   │   ├── layout.css          # Grid, container, and section layout
│   │   ├── buttons.css         # Button variants
│   │   ├── patterns.css        # Reusable visual patterns
│   │   ├── components.css      # Page-level component styles
│   │   └── pricing.css         # Pricing page specific styles
│   ├── js/
│   │   ├── i18n.js             # Language switcher and translation engine (ES/EN)
│   │   ├── interactions.js     # Navbar, support panel, FAQ, cookie banner
│   │   ├── animations.js       # Scroll reveal and entrance animations
│   │   └── pricing.js          # Pricing toggle and plan interaction
│   └── img/
│       ├── nexa-team/          # Team member photos
│       └── *.svg / *.png       # Brand assets and illustrations
├── pages/
│   ├── platform.html
│   ├── about-the-product.html
│   ├── about-the-team.html
│   ├── pricing.html
│   ├── company.html
│   ├── faq.html
│   ├── solutions/
│   │   ├── index.html
│   │   ├── importers.html
│   │   ├── distributors.html
│   │   └── cold-storage.html
│   └── legal/
│       ├── terms.html
│       ├── privacy.html
│       └── cookies.html
└── .github/
    ├── workflows/              # GitHub Actions workflows
    ├── SECURITY.md             # Security policy and vulnerability reporting
    ├── CODE_OF_CONDUCT.md      # Community standards
    └── CONTRIBUTING.md         # Contribution guidelines
```

---

## Getting Started

### Local Preview

Since the website is built entirely on vanilla static files, it does not require complex local installation or build steps.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-website.git
   cd nexa-website
   ```

2. **Serve the project locally**:
   ```bash
   # Option A: Python 3
   python3 -m http.server 8000

   # Option B: Node.js static server
   npx serve .
   ```
   *Navigate to `http://localhost:8000` in your browser.*

---

## Deployment

The website is continuously deployed from the root of the `main` branch via GitHub Pages:

- **Provider**: GitHub Pages
- **Branch**: `main` — Folder: `/`
- **Production URL**: [https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)

Every push to `main` is automatically reflected at the live URL within minutes.

---

## Team

| Member | Role | GitHub |
|:---|:---|:---|
| **Diego Yucra Sandoval** | Founder & Chief Executive Officer | [DiegoS284](https://github.com/DiegoS284) |
| **César Marín Cueva** | Co-Founder & Head of Operations | [Cmarin2802](https://github.com/Cmarin2802) |
| **Joaquín Verde Bueno** | Product Designer | [JoaquinVerde115](https://github.com/JoaquinVerde115) |
| **Gino Torrejón de los Santos** | Engineering Manager | [R0obxdnt-bit](https://github.com/R0obxdnt-bit) |
| **Gerard Rojas Mancilla** | Chief Product Officer | [GerardRojasMancilla](https://github.com/GerardRojasMancilla) |

---

## Documentation

- **[Security Policy](SECURITY.md)**
- **[Code of Conduct](.github/CODE_OF_CONDUCT.md)**
- **[Contributing Guidelines](.github/CONTRIBUTING.md)**
- **[Live Website](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)**
- **[Local WebApp Login](http://localhost:5173/#/auth/login)**

---

<p align="center">
  <strong>Nexa Website</strong> · Universidad Peruana de Ciencias Aplicadas · 2026-10
</p>
