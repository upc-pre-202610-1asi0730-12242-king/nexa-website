<div align="center">

<br/>

<img src="./docs/assets/nexa-logo.svg" alt="Nexa" width="200"/>

<br/><br/>

# nexa-website

**Public landing website and central product entry point for the Nexa platform**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-22c55e?style=flat-square)

<br/>

![Course](https://img.shields.io/badge/Course-1ASI0730%20Aplicaciones%20Web-0a2540?style=flat-square)
![Cycle](https://img.shields.io/badge/Cycle-2026--10-0a2540?style=flat-square)
![University](https://img.shields.io/badge/University-UPC-0a2540?style=flat-square)
![Team](https://img.shields.io/badge/Team-King-2a67d9?style=flat-square)
![Status](https://img.shields.io/badge/Status-AV2%20Active-22c55e?style=flat-square)

<br/>

🌐 **[View Live Site →](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)**

<br/>

</div>

---

## Overview

The `nexa-website` repository hosts the landing page for the Nexa platform. It serves as the primary B2B introduction for refrigerated and frozen food distributors, explaining our cold-chain visibility services and routing users to the active WebApp and platform documentation.

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
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-webapp/wiki">Open Engineering Wiki</a></p>
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
      <p>Platform and backend work area for API, domain, and infrastructure concerns.</p>
      <p>
        <img alt="Platform" src="https://img.shields.io/badge/Platform-backend%20workspace-512BD4?style=flat-square" />
        <img alt="API" src="https://img.shields.io/badge/API-domain%20services-0EA5E9?style=flat-square" />
      </p>
    </td>
    <td width="50%">
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-report.">nexa-report</a></p>
      <p>Academic report, product research, backlog, architecture documentation, and project evidence.</p>
      <p><a href="https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-report.">Open Report Repository</a></p>
      <p>
        <img alt="Documentation" src="https://img.shields.io/badge/Documentation-report-0F172A?style=flat-square" />
        <img alt="UPC" src="https://img.shields.io/badge/UPC-course%20evidence-0EA5E9?style=flat-square" />
      </p>
    </td>
  </tr>
</table>

---

## Website Responsibilities

| Area | Purpose |
|---|---|
| **Product Story** | Communicates Nexa's cold-chain value proposition. |
| **Segment Landing** | Presents business segments, benefits, and conversion paths. |
| **Navigation Hub** | Redirects visitors to repositories, WebApp, and documentation. |
| **GitHub Pages** | Provides the public website deployment for the organization. |

---

## Project Structure

```text
nexa-website/
├── index.html                  # Main entry point
├── assets/                     # Styles, scripts, and illustrations
│   ├── css/                    # Custom CSS tokens and components
│   ├── js/                     # Vanilla interactive scripts
│   └── img/                    # Visual backgrounds and graphics
├── docs/                       # Project specifications and guides
│   ├── assets/                 # Branding logo files
│   └── requirements/           # Project requirement PDFs
└── pages/                      # Inner structural website routes
    ├── solutions/              # Niche solution files
    └── legal/                  # Compliance terms & cookies
```

---

## Getting Started

### Local Preview
Since the website is built entirely on vanilla static files, it does not require complex local installation or compilation steps.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-website.git
   cd nexa-website
   ```

2. **Serve the project**:
   Use any lightweight local server (like Python or Node) to preview:
   ```bash
   # Option A: Python 3
   python3 -m http.server 8000
   
   # Option B: Node.js static server
   npx serve .
   ```
   *Navigate to `http://localhost:8000` or `http://localhost:3000` in your web browser.*

---

## Deployment

The website is continuously deployed from the root directory of the `main` branch:

- **Deployment Provider**: GitHub Pages (Branch: `main`, Folder: `/`)
- **Production URL**: [https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/](https://upc-pre-202610-1asi0730-12242-king.github.io/nexa-website/)

---

## Team

| Member | Focus | GitHub Identity |
|:---|:---|:---|
| **Diego Yucra** | Team Leader / Sales context | [DiegoS284](https://github.com/DiegoS284) |
| **César Marín** | Logistics & Sales | [Cmarin2802](https://github.com/Cmarin2802) |
| **Joaquín Verde** | Warehouse | [JoaquinVerde115](https://github.com/JoaquinVerde115) |
| **Gino Torrejón** | Catalog & Warehouse | [R0obxdnt-bit](https://github.com/R0obxdnt-bit) |
| **Gerard Rojas** | Invoicing | [GerardRojasMancilla](https://github.com/GerardRojasMancilla) |

---

<p align="center">
  <strong>Nexa Website</strong> · Universidad Peruana de Ciencias Aplicadas · 2026-10
</p>
