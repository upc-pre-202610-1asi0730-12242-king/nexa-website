# Nexa — Phase A/B/C Locked Output

**Status:** Locked after Brutal Critic remediation + user Q1–Q4 answers.
**Owner:** Diego Y. Sandoval (U202323040).
**Date:** 2026-04-18.
**Consumers:** Visual System Agent (Phase D), UX Architect + Page Composer (Phase E), Build (Phase F).
**Hard rule:** downstream work must cite this doc; no inheritance from old Nexa landing or from `docs/contenido-para-nexa-v2.1/` unless a fragment is explicitly approved here.

---

## SECTION A — LOCKED TRUTH (non-negotiable)

### A.0 Contamination flags — READ FIRST
These categories are permanently forbidden in Nexa copy, imagery, icons, data tables, testimonials, case studies, and motion narrative. If a generated section even hints at them, reject and rewrite:

- **Medicine / pharma / vaccines / insulin / biologicals / clinical cold chain** — Nexa is NOT a vaccine cold-chain product. Any pharma-adjacent framing is a blocker.
- **Mining / hospital / laboratory refrigeration** — out of scope even if adjacent domains exist in research.
- **Fake enterprise logos, fake testimonials, fake client counts, fake uptime metrics, fake "trusted by X companies"** — disallowed in early-stage framing.
- **Generic SaaS claims** ("streamline," "unlock," "next-gen," "reimagine") — disallowed by `docs/claude.md` anti-slop rules.
- **IoT / mobile / telemetry as current features** — these are *future evolution*, not MVP. Mentioning them as shipping = scope drift.

### A.1 What Nexa is (product truth)
B2B SaaS web platform for Peruvian importers and distributors of **refrigerated and frozen food products** (cheese, dairy, charcuterie, and similar perecederos) serving commercial B2B buyers — bodegas, minimarkets, small wholesalers, and HORECA.

The product digitizes the fragmented, WhatsApp-audio-driven order coordination that today produces retrabajo, errores de interpretación, quiebres de stock, y pérdidas por mala rotación.

### A.2 MVP scope — 4 modules only
1. **Specialized catalog** with cold-chain product attributes (temperature ranges, expiration/rotation flags, presentations).
2. **Structured order registration** replacing free-text WhatsApp / audio messages.
3. **Basic inventory control** with FEFO rotation signals.
4. **Operational order tracking** + B2B buyer self-service portal (status visibility for the commercial client).

Out of scope for MVP (future evolution, do not sell as shipping):
- Mobile apps for field work
- IoT temperature telemetry
- Logistics integrations
- Advanced térmica traceability

### A.3 Segments (3, independent)
- **S1** — Mercaderistas / coordinación comercial. Pain: interpret WhatsApp audio/text pedidos, retrabajo, transcripción manual. Value: flujo de captura estructurado.
- **S2** — Jefatura de logística / operaciones / almacén. Pain: visibilidad fragmentada, decisiones con data incompleta. Value: visión integrada pedido+stock+despacho.
- **S3** — Clientes comerciales B2B (bodegas, minimarkets, HORECA, pequeños mayoristas). Pain: respuestas variables, sin visibilidad de stock ni del estado del pedido. Value: portal autoservicio con catálogo, pedido y seguimiento.

### A.4 Business/brand truth
- Early-stage serious build. **No paying customers named, no fake logos, no inflated metrics.** Affirmative trust is built through domain vocabulary, workflow specificity, and honest early-stage framing (see §C Band 3).
- SaaS B2B specialized, not horizontal marketplace.
- UPC academic provenance is legitimate context but is **not the primary trust signal** (per user Q1 decision).
- Bilingual es_419 (primary) + en_US at full parity.

### A.5 Rubric / build constraints (1ASI0730, UPC)
- Stack: **HTML5 + CSS3 + vanilla JS only**.
- Allowed libs: **GSAP + ScrollTrigger + Lottie** (and nothing heavier without written approval).
- No React, no Vue, no Next, no Tailwind, no Svelte, no Astro.
- Semantic HTML required. ARIA required on every interactive element. Keyboard operability required.
- Responsive required: mobile (≤640), tablet (641–1024), desktop (≥1025).
- AV1 deliverable: landing + Chapters I–V docs by Week 4.
- GitFlow + conventional commits + per-member commit attribution.

---

## SECTION B — SKILL SURFACE AUDIT

### B.1 Agents available (`.claude/agents/`)
- `director` — top-level orchestrator (this session uses it)
- `truth-guardian` — blocks contamination, rubric, scope drift, invented metrics
- `ux-architect` — IA, section ordering, segment→section mapping, heuristics
- `visual-system` — tokens.css, type specimen, contrast matrix, motion specs
- `page-composer` — per-section annotated layout specs
- `brutal-critic` — gated review between agent output and next phase; max 10 issues/pass

### B.2 Skills available (`.claude/skills/`)
- `nexa-truth-guard` — truth validation gate
- `nexa-rubric-enforcer` — stack/ARIA/bilingual/GitFlow checks
- `nexa-scope-lock` — MVP 4-module scope enforcement
- `nexa-anti-slop` — generic-copy + visual-slop detection
- `nexa-brand` — token system (SKELETON; values TBD in Phase D)
- `nexa-caveman-compress` — state compression for routing/summaries
- `nexa-staff-critic` — secondary staff-engineer review pass
- `nexa-handoff-writer` — phase-to-phase handoff doc generator

### B.3 Default invocation order for frontend work
(Per `docs/claude.md`, enforced.)
1. `/frontend-design` (baseline)
2. `/brand-guidelines` (if assets exist — they will after Phase D)
3. `/ui-ux-pro-max` (landing / high-visibility surface)
4. `/impeccable` (final quality pass)
5. `/caveman` (if output becomes bloated/noisy)

### B.4 Critical skill guarantees
- Visual System MUST be freezed (Phase D) before Page Composer runs (Phase E).
- Truth Guardian MUST pass on every copy draft before merge.
- Brutal Critic MUST run between every agent output and the next phase.

---

## SECTION C — FLECTO RE-ANCHOR + BAND ARCHITECTURE

**Reference fidelity:** Flecto (`docs/flecto-guide-code/` + `docs/guide-screanshots/flecto-home/` + `docs/guide-screanshots/flecto-about-us/`) is the PRIMARY structural/visual reference. Match pacing, surface temperature cadence, annotated-mockup discipline, tabbed depth, and narrative separation. Do **not** inherit old Nexa landing structure.

> **ALL visual directives in this section are PROVISIONAL art-direction.** Concrete token values (hex, type scale, spacing scale, radius, shadow, motion timing) are frozen by the Visual System Agent in Phase D and live in `docs/style-guidelines/tokens.css`. If a Phase D token disagrees with a qualitative directive here, Phase D wins and this doc is updated.

### C.1 Homepage architecture — 3 bands, narrative
Large narrative bands, not 7–10 marketing micro-sections. Each band has ONE job.

#### Band 1 — Dark band: product + value (hero + embedded flow diagram)
- **Job:** orient in 3 seconds. Answer *what is Nexa, for whom, what changes*.
- **Tone:** directa, honesta, sin lorem de startup.
- **Surface:** dark (deep neutral; exact hex from Phase D tokens).
- **Content blocks:**
  - Eyebrow pill (small, operational-vocabulary): e.g. `SaaS B2B · Productos refrigerados · Perú`.
  - Headline (clear product definition, not slogan).
  - Sub (1–2 lines) naming the 3 segmentos and the shift from WhatsApp-audio to flujo estructurado.
  - Embedded flow diagram / annotated schematic showing: pedido informal → captura estructurada → visibilidad operativa → seguimiento del cliente. Flecto-style, with left/right callouts.
  - Primary CTA: **"See how it works"** → scrolls to Band 2.
  - Secondary link (tertiary visual weight, optional): "Read the product note" → Chapter 1 doc.
- **Anti-slop guardrails:** no empty "hero dashboard," no random gradient halos, no fake metric ticker, no "trusted by" row.
- **Motion:** band-level entrance only (fade+translate, GSAP). Flow diagram reveal is sequential, but each step ≤ 350ms and the total sequence ≤ 1.2s. No parallax on mobile. Respect `prefers-reduced-motion`.

#### Band 2 — White/cream band: how it works + product depth (tabbed)
- **Job:** prove the product exists and is specific to refrigerated-food distribution. No vaporware.
- **Tone:** concrete, workflow-first. Operational vocabulary visible inside mocks (FEFO, DESPACHO, RUPTURA, CATÁLOGO, PEDIDO, STOCK, SEGUIMIENTO).
- **Surface:** white → cream progression (warmer as the band descends). Exact tones from Phase D.
- **Content blocks:**
  - Section intro (short, no marketing inflation).
  - **Tabbed product depth** with 4 tabs, one per MVP module:
    1. Catálogo especializado
    2. Registro de pedidos
    3. Inventario + FEFO
    4. Seguimiento + portal B2B
  - Each tab shows an annotated mock (Flecto discipline): left/right callouts on real product terms, NOT on empty placeholder UI.
  - Short segment mapping strip: which segment (S1/S2/S3) benefits most per module.
  - Primary CTA: **"Request a demo"** → anchor `#contacto` in Band 3.
- **Tab interaction spec (ARIA tablist):**
  - `role="tablist"` on tab container.
  - Each tab: `role="tab"`, `aria-selected`, `aria-controls="panel-id"`, `id="tab-id"`.
  - Each panel: `role="tabpanel"`, `aria-labelledby="tab-id"`, `tabindex="0"`.
  - Arrow-key navigation (Left/Right on desktop, also Home/End). Enter/Space to activate on manual-activation pattern.
  - Focus-visible ring required. Default active tab = Catálogo.
  - Mobile: tabs collapse to horizontal scroll strip with scroll-snap; no dropdown menu.
- **Anti-slop guardrails:** no generic feature-icon grid, no "benefit cards with trendy gradient icons," no placeholder lorem screenshots.

#### Band 3 — Dark band: company + trust (honest early-stage framing) + contact
- **Job:** build affirmative trust through domain proof and honesty, then convert to conversation.
- **Trust model (per user Q1 answer — combined b + c):**
  - **(b) Operational-vocabulary proof-of-domain:** visible product language and workflow specificity already demonstrated in Band 2 is reinforced here through a short "Cómo pensamos el producto" block that names real artifacts (FEFO, ruptura de cadena de frío operacional, catálogo con atributos de refrigeración, portal B2B).
  - **(c) Transparent early-stage framing — worded strong, not weak:** e.g. *"Construido con distribuidores piloto en Lima. Sin clientes inventados, sin métricas infladas — todavía estamos validando con la operación real."* The framing signals rigor, not uncertainty.
  - UPC academic provenance + team names appear as a minor credential strip at the band foot, NOT as the primary trust signal.
  - **Forbidden:** fake logo wall, invented stats, stock "5-star testimonial" cards.
- **Content blocks:**
  - Short "Quiénes estamos detrás" (team names + UPC attribution, compact).
  - "Cómo pensamos el producto" (3–5 sentences, operational specificity).
  - Early-stage honesty statement.
  - **Simple contact form** anchored at `#contacto` — fields: nombre, empresa, rol, email, mensaje. Required fields marked, `aria-required`, `aria-describedby` for inline errors. No external provider integration required for MVP landing; form can submit to `mailto:` or a static endpoint — decided in Phase F.
  - Primary CTA (form submit): **"Talk to us"** (English version) / **"Hablemos"** (es_419).
  - Footer strip: links to Chapter docs, GitHub repo, LinkedIn (team), copyright, `lang` toggle.
- **Motion:** band-level entrance only. Form reveals inline, no modal.

### C.2 Surface temperature cadence
Dark (Band 1) → White→Cream (Band 2) → Dark (Band 3). This is intentional: open with weight, breathe in the middle where the product lives, close with gravity for trust + contact.

### C.3 Visual principles (PROVISIONAL — Phase D confirms)
- **Typography:** one serif for headlines that does NOT read as luxury-fashion; one neutral geometric sans for UI/body. Pair must feel intentional, not mechanically Tailwind. Phase D proposes candidates.
- **Hierarchy:** visible in 3 seconds per band. One dominant element per band, max.
- **Depth:** flat surfaces + one soft shadow tier + restrained borders. No glassmorphism. No blur-spam. No neon glow. No random gradient blobs.
- **Radius:** single scale, not mixed. Phase D sets value.
- **Spacing:** 8px base, consistent rhythm across bands; generous inter-band padding.
- **Color:** neutrals-first, one accent. The accent is product-serious, not Instagram-bright.
- **Iconography:** monoline, consistent stroke weight. No 3D emoji, no stock-icon mix.
- **Imagery:** annotated product mocks > stock photography. If photography is ever used, it is refrigerated-food-operation photography, never medical/pharma/laboratory.

### C.4 Motion principles
- **Band-level entrance only:** each band fades/translates in once as it enters the viewport. One entrance per band, not per element.
- **Exception:** Band 1 flow diagram may use a sequential reveal (4–5 steps, total ≤ 1.2s). This is the single allowed per-element sequence.
- **Scroll:** no parallax on mobile. Desktop parallax limited to background plate, never foreground content.
- **Hover:** every interactive element has hover, focus-visible, active. Hover translateY ≤ 2px. No 3D tilt.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all entrance/scroll motion and keeps instant opacity.
- **Tooling:** GSAP + ScrollTrigger are the only motion libs. Lottie allowed only for the flow diagram in Band 1 if raster/SVG animation proves insufficient.

### C.5 Per-band CTA contract (approved user Q3)
| Band | CTA label (en) | CTA label (es) | Destination | Weight |
|---|---|---|---|---|
| Band 1 | See how it works | Ver cómo funciona | Scroll → Band 2 | Primary |
| Band 2 | Request a demo | Pedir demo | Anchor `#contacto` (Band 3) | Primary |
| Band 3 | Talk to us | Hablemos | Submit contact form (Band 3) | Primary |

**Rule:** exactly one primary CTA per band. No universal "Get Started" floater. No sticky nav CTA duplication of the primary.

### C.6 Bilingual mechanism (approved user Q2)
- **Single HTML file.** Content toggled via JS + `data-lang-es` / `data-lang-en` attributes on content nodes.
- `<html lang="...">` swapped on toggle.
- Default `lang="es"` on first paint; user toggle persists to `localStorage`.
- Meta description, Open Graph `locale`, and `<title>` also swap.
- Both languages MUST be at full parity; Truth Guardian will reject English drafts that skip sections present in Spanish.
- Toggle UI lives in the top-nav (EN / ES pill) and in the Band 3 footer strip.

### C.7 Phase-D commit plan (approved user Q4)
- **Branch:** `feat/visual-tokens-v1`
- **Author:** Diego Y. Sandoval
- **Commit:** `feat(style): freeze nexa-brand tokens v1`
- **Deliverable target files:**
  - `docs/style-guidelines/tokens.css` (the source of truth; all CSS custom properties)
  - `docs/style-guidelines/type-specimen.html` (type specimen page)
  - `docs/style-guidelines/contrast-matrix.md` (WCAG AA table)
  - `docs/style-guidelines/motion-spec.md` (timings, easings, reduced-motion)
  - Updates to the `nexa-brand` skill so its values are no longer placeholders

---

## Remediation ledger (Brutal Critic issues → resolutions)

| # | Issue | Resolution |
|---|---|---|
| 1 | Contamination flags buried | Moved to top of §A as `A.0 Contamination flags — READ FIRST`. |
| 2 | Visual directives read as frozen tokens | Entire §C now prefaced as **PROVISIONAL** art-direction; Phase D has authority. |
| 3 | Band 3 lacked affirmative trust | Built as user Q1 (b + c): operational proof-of-domain + strong early-stage honesty framing. UPC as minor credential strip only. |
| 4 | i18n mechanism undefined | User Q2: single file + `data-lang-*` attributes + JS toggle + `<html lang>` swap + `localStorage`. Spec in §C.6. |
| 5 | Motion rule ambiguous | §C.4 now clarifies: band-level entrance only; Band 1 flow diagram is the one permitted per-element sequence (≤1.2s total). |
| 6 | Per-band CTA copy missing | Table in §C.5 with en/es labels, destinations, weight. |
| 7 | Phase D commit ownership undefined | §C.7 specifies branch, author, commit message, deliverable files. |
| 8 | ARIA tablist spec missing | Band 2 tab interaction spec in §C.1 Band 2 block (`role="tablist"`, arrow keys, focus ring, mobile behavior). |

**Next gate:** Visual System Agent freezes tokens per §C.7.
