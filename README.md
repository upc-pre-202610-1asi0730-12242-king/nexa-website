<div align="center">

<br/>

<img src="docs/contenido-para-nexa-v2.1/08-notas-tecnicas/nexa-logo.svg" alt="Nexa Logo" width="220"/>

<br/><br/>

# Nexa — Landing Page

**B2B SaaS platform for refrigerated and frozen food distributors in Peru**

*Digitizing the order flow between distributors and their commercial buyers*

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

<br/>

![Course](https://img.shields.io/badge/Course-1ASI0730%20Aplicaciones%20Web-0a2540?style=flat-square)
![Cycle](https://img.shields.io/badge/Cycle-2026--10-0a2540?style=flat-square)
![University](https://img.shields.io/badge/University-UPC-0a2540?style=flat-square)
![Team](https://img.shields.io/badge/Team-King-2a67d9?style=flat-square)
![Status](https://img.shields.io/badge/Status-In%20Development-f59e0b?style=flat-square)

<br/>

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [The Problem We Solve](#-the-problem-we-solve)
- [Target Segments](#-target-segments)
- [MVP Scope](#-mvp-scope)
- [Competitive Landscape](#-competitive-landscape)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Deliverables Timeline](#-deliverables-timeline)
- [Team](#-team)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)

---

## 🧊 About the Project

**Nexa** is a specialized B2B SaaS web platform focused on digitizing and structuring the order management cycle for importers and distributors of refrigerated and frozen products in Peru.

The product targets a critical and underserved gap in the market: the coordination between a distributor's internal commercial operations and their commercial buyers (bodegas, minimarkets, HORECA) still relies on fragmented informal channels — WhatsApp audio notes, phone calls, and manual spreadsheets — leading to errors, waste, and zero traceability in cold chain operations.

> **Nexa is not** a logistics platform, a TMS, an IoT system, or a horizontal marketplace.
> **Nexa is** the order flow layer that structures what happens between order intent and operational execution.

<br/>

```
┌─────────────────────────────────────────────────────────────────┐
│                     WITHOUT NEXA (today)                        │
│                                                                 │
│  Buyer          WhatsApp        Staff           Spreadsheet     │
│  bodega   ──►   audio/text  ──► interprets  ──► manual entry    │
│                                                 (errors, gaps)  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      WITH NEXA (v2.1)                           │
│                                                                 │
│  Buyer        B2B Portal      Platform         Operations       │
│  bodega  ──►  catalog +   ──► structured   ──► tracking +       │
│               order form      order data       visibility       │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

### Mission & Vision

| | |
|---|---|
| **Mission** | Digitize and organize the B2B order cycle for refrigerated product distributors through a web platform that improves operational visibility, reduces errors, and enables catalog, order, inventory, and dispatch management. |
| **Vision** | Become the reference specialized SaaS for cold chain B2B commercial and operational management in Peru, evolving toward greater traceability, mobility, and IoT integration. |
| **Values** | Specialization · Operational clarity · Innovation · Collaboration |

---

## 🚨 The Problem We Solve

The cold chain distribution sector in Peru operates with persistent digitalization gaps. Refrigerated and frozen product distributors coordinate their entire B2B order flow through informal channels, creating compounding operational risks.

### The Core Pain

```
Customer places order via WhatsApp audio
           │
           ▼
Staff interprets and transcribes manually
           │
           ▼
Warehouse prepares with outdated inventory data
           │
           ▼
Dispatch ships with unresolved inconsistencies
           │
           ▼
No shared visibility at any stage for any party
```

### Impact by the Numbers

| Risk Area | Evidence |
|---|---|
| Chain-of-cold breaks | 64 thermal incidents recorded in a single health micronetwork in 1 year |
| Digital maturity | ~83% of traditional channel buyers are still at "beginner" digital adoption level |
| Temperature compliance | Refrigerated beef cuts recorded at 9.75°C avg (regulatory limit: 4°C) |
| Root cause | Manual coordination between orders, inventory, and dispatch with no shared system |

### 5W2H Analysis

| Dimension | Applied to Nexa |
|---|---|
| **Who** | Importers, distributors, and their B2B commercial buyers (bodegas, minimarkets, HORECA) |
| **What** | Manual, fragmented, non-traceable B2B order flow for refrigerated products |
| **Where** | Lima and main Peruvian logistics corridors |
| **When** | Recurring daily — every order cycle, every week |
| **Why** | Low digital adoption, priority on physical assets over information systems |
| **How** | Orders via audio/text → manual transcription → misaligned warehouse prep → dispatch errors |
| **How much** | High but unquantified — evidence of significant economic and sanitary risk |

---

## 👥 Target Segments

Nexa addresses three independent user segments within the same B2B ecosystem:

| Segment | Actor | Role | Core Need | Value from Nexa |
|---|---|---|---|---|
| **S1** | Mercaderistas / Coordination staff | Receive, interpret, and route orders | Reduce rework, ambiguity, and informal channel dependency | Structured orders, shared visibility, less manual load |
| **S2** | Logistics & operations leadership | Supervise stock, warehouse, dispatch | Full process visibility and integrated decision data | One view of order state, availability, and tracking |
| **S3** | B2B commercial buyers (bodegas, minimarkets, HORECA) | Place repeat orders with distributors | Autonomy, clarity, and predictability in replenishment | Catalog portal, order confirmation, dispatch tracking |

> **S1 is the primary validation segment.** If Nexa does not reduce friction at the order capture point, the platform cannot demonstrate real impact on the core business flow.

---

## 📦 MVP Scope

The first version focuses on the most critical slice of the B2B operational flow:

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│              │   │              │   │              │   │              │
│   Catalog    │──►│    Orders    │──►│  Inventory   │──►│  Tracking    │
│              │   │              │   │   (basic)    │   │              │
│ Specialized  │   │ Structured   │   │ Availability │   │ Order status │
│ cold chain   │   │ B2B flow     │   │ + FEFO       │   │ + dispatch   │
│ attributes   │   │ (not chat)   │   │ rotation     │   │ visibility   │
│              │   │              │   │              │   │              │
└──────────────┘   └──────────────┘   └──────────────┘   └──────────────┘
```

### What's IN the MVP

| Module | Description |
|---|---|
| Specialized catalog | Products with cold chain attributes: temp ranges, expiry, FEFO logic |
| B2B order registration | Structured order form — replaces WhatsApp free text |
| Basic inventory control | Real-time availability, rotation management |
| Operational tracking | Order status visibility for all parties |
| B2B buyer portal | Self-service for commercial buyers (S3) |

### What's NOT in the MVP

| Feature | Reason |
|---|---|
| Mobile app | Phase 2 — post-MVP validation |
| IoT / temperature sensors | Phase 3 — requires hardware integration |
| Route optimization (TMS) | Out of scope — Drivin handles this layer |
| ERP integrations | Phase 2+ |
| Advanced analytics | Post-validation feature |

---

## ⚔️ Competitive Landscape

| Dimension | **Nexa** | Riqra | Drivin | OnTracking / RedGPS |
|---|---|---|---|---|
| **Focus** | Cold chain B2B order flow | Horizontal B2B e-commerce | Route optimization / TMS | IoT thermal monitoring |
| **Target** | SMB cold chain distributors | Mid-large generalist distributors | Logistics operators with fleets | Fleet-intensive cargo companies |
| **Cold chain native** | ✅ Yes — temp ranges, FEFO, expiry | ❌ No — product-agnostic | ❌ No — assumes orders exist | ✅ Partially — telemetry only |
| **B2B portal** | ✅ Yes | ✅ Yes | ❌ No | ❌ No |
| **Pricing** | SaaS — SMB-accessible | Enterprise licensing | Fleet-based licensing | Hardware + SaaS |
| **Integration readiness** | API-first for future phases | ERP-heavy | Route APIs | Sensor APIs |

> **Nexa's blue ocean:** No existing competitor integrates B2B commercial flow *and* cold chain operational specificity *and* accessibility for Peruvian SMBs in a single platform.

---

## 🛠 Tech Stack

### Landing Page (this repository)

| Layer | Technology | Notes |
|---|---|---|
| Markup | HTML5 | Semantic, accessible structure |
| Styles | CSS3 | Custom tokens, no framework |
| Behavior | Vanilla JavaScript | No framework — per rubric requirement |
| Animations | GSAP + ScrollTrigger | Scroll-driven entrance animations |
| Internationalization | i18n custom (`en_US`, `es_419`) | Both languages required |
| Accessibility | ARIA attributes | `aria-expanded`, `aria-label`, roles |
| Deployment | GitHub Pages / Netlify | Static hosting |

### Web Application (separate repository — future)

| Layer | Technology |
|---|---|
| Frontend Framework | Vue.js + PrimeVue |
| Backend | ASP.NET Core / C# — RESTful API |
| API Docs | OpenAPI / Swagger |
| Architecture | Domain-Driven Design, C4 Model |

### Design & Tooling

| Tool | Purpose |
|---|---|
| Figma | UI design, wireframes, prototypes |
| UXPressia | User personas, journey maps |
| Structurizr | C4 architecture diagrams |
| Miro | EventStorming, Lean UX Canvas |
| GitHub + GitFlow | Version control and branching strategy |

---

## 🗂 Repository Structure

```
nexa-website/
│
├── index.html                   # Landing page entry point
├── README.md
│
├── assets/
│   ├── css/
│   │   ├── tokens.css           # Design tokens (color, type, spacing)
│   │   ├── typography.css       # Type system
│   │   ├── layout.css           # Grid and containers
│   │   ├── buttons.css          # Button system
│   │   ├── components.css       # UI components
│   │   └── main.css             # Entry stylesheet
│   │
│   ├── js/
│   │   ├── main.js              # Entry script
│   │   ├── animations.js        # GSAP scroll animations
│   │   ├── interactions.js      # FAQ, nav, form behavior
│   │   └── i18n.js              # Internationalization
│   │
│   ├── img/                     # Images and visual assets
│   └── fonts/                   # Self-hosted typefaces
│
└── docs/                        # Project documentation (not deployed)
    ├── claude.md                 # AI working rules
    ├── contenido-para-nexa-v2.1/ # Rescue package + component audit
    ├── context/                  # Academic chapters (Ch. I–III)
    ├── requirements/             # ABET rubrics and project requirements
    ├── style-guidelines/         # Design system (in progress)
    └── guide-screanshots/        # Flecto visual reference
```

> ⚠️ The `assets/` directory is planned — no source code exists yet. All structure above reflects the intended organization for the v2.1 build.

---

## 📅 Deliverables Timeline

| Milestone | Week | Deliverable |
|---|---|---|
| **AV1** | Week 4 | First Landing Page deployed + Chapters I–V documentation |
| **TB1** | Week 7 | Updated docs + First Frontend Web App deployed |
| **AV2** | Week 12 | New Landing Page + New Web App + First Web Services + Validation interviews |
| **TB2** | Week 15 | Final versions of all products + Complete documentation + Sprint 4 |

### Sprint Structure

Each sprint must include:
- Sprint Planning record (date, attendees, goals, velocity, story points)
- Sprint Backlog with work items
- Development evidence (commits table)
- Execution evidence (screenshots + navigation video)
- Team Collaboration Insights (GitHub analytics)

---

## 👥 Team

**Organization:** [upc-pre-202610-1asi0730-12242-king](https://github.com/upc-pre-202610-1asi0730-12242-king)

| Code | Member | Role |
|---|---|---|
| U202323040 | Yucra Sandoval, Diego Sebastian | Team Leader |
| U202411937 | Marín Cueva, César Fernando | Team Member |
| — | Verde Bueno, Joaquín Francisco | Team Member |
| — | Torrejón De Los Santos, Gino Rodrigo | Team Member |
| U202413142 | Rojas Mancilla, Gerard Gianpier | Team Member |

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome 120+, Firefox 121+, Safari 17+)
- A local HTTP server for development (e.g., VS Code Live Server, Python `http.server`)

### Run locally

```bash
# Clone the repository
git clone https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-website.git

# Navigate into the project
cd nexa-website

# Serve with Python (or use VS Code Live Server)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Branch Strategy (GitFlow)

```
main          ← production-ready code only
  └── develop ← integration branch
        ├── feature/landing-hero
        ├── feature/landing-comparison
        ├── feature/landing-modules
        └── feature/landing-cta
```

> Commit messages follow **Conventional Commits** format:
> `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`

---

## 🤝 Contributing

All team members must contribute with visible commits to every deliverable.

1. Branch from `develop` using the `feature/` prefix
2. Follow Conventional Commits for all messages
3. Open a Pull Request to `develop` — do not push directly to `main`
4. Each PR must include a brief description of what changed and why

---

<div align="center">

<br/>

**Nexa** · Universidad Peruana de Ciencias Aplicadas · 2026-10

*1ASI0730 — Aplicaciones Web · Ingeniería de Software*

<br/>

</div>
