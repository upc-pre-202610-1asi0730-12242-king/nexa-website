# NexaV5 Repository Content Classification

This file defines which parts of the repository are source of truth for the current product direction and which parts are reference-only.

## 1. Producto activo

- Root HTML pages:
  - `index.html`
  - `platform.html`
  - `company.html`
  - `faq.html`
  - `solutions.html`
  - `solutions-importers.html`
  - `solutions-distributors.html`
  - `solutions-cold-storage.html`
- Runtime assets:
  - `assets/css/*`
  - `assets/js/*`
  - `assets/img/*`
- Current product docs:
  - `docs/Nexa_V5_Technical_Style_Guidelines_Report.html`
  - `docs/Nexa_V5_Technical_Style_Guidelines_Report.docx`
  - `docs/INFORME_NUEVO_V2_SCOPE_GAP.md`

## 2. Archivo editable

- Historical but reusable Nexa templates:
  - `archives/rebuild-kit/*`
- Archived Nexa application stub:
  - `archives/app/dashboard.html`
- Historical internal audits and notes:
  - `docs/AUDITORIA_VISUAL_NEXA.md`

These files can be updated when they still describe Nexa patterns, reusable components, or historical internal context.

## 3. Referencia externa / fuera de alcance del producto actual

- `Materiales adicionales/**`
- `docs/research/Materiales adicionales/**`

These folders contain supporting research, screenshots, PDFs, DOCX files, copied inspiration material, and third-party dumps. They are not source of truth for current product copy or positioning unless a file is explicitly promoted into `docs/` or the live site root.

### Special case

- `Materiales adicionales/nuevas ideas/Controla Landing/*`
- `docs/research/Materiales adicionales/nuevas ideas/Controla Landing/*`

These contain raw third-party Controlant captures with pharma/clinical language. They remain only as external reference material and are outside the scope of the current charcuterie, cheese, and dairy product direction.
