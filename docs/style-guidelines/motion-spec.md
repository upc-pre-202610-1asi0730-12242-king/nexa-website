# Nexa — Motion Spec v1.1 (FROZEN, 2026-04-18, iter-2)

Authority chain:
[`docs/orchestration/phase-a-b-c-locked.md`](../orchestration/phase-a-b-c-locked.md) §C.4 →
this spec → component CSS / GSAP timelines.

Rule of thumb: motion in Nexa supports orientation; it does not perform.
The product is refrigerated-food distribution software — operational seriousness with
warmth. Motion that draws attention to itself is a contamination flag.

**Iter-2 changes:** dropped `--ease-emphasized` (was a no-op alias of
`--ease-standard`); added §11 ARIA tab interaction contract (consolidated
from `tokens.css` band-scope notes + nexa-brand skill).

---

## 1. Duration palette

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | `150 ms` | Tab switch (opacity only), focus-ring fade in/out, hover background tint |
| `--duration-base` | `250 ms` | Hover translateY, button press, link underline grow, card lift |
| `--duration-slow` | `400 ms` | Single-element entrance inside a band (rare — only for elements that need to hold attention briefly) |
| `--duration-band` | `300 ms` | Band-level fade + 12 px translateY entrance (the default ScrollTrigger entry) |
| `--duration-seq-total` | `1200 ms` | **HARD CAP** for Band 1 flow-diagram sequence (4 steps × ~280 ms with stagger) |

Anything above 400 ms outside `--duration-seq-total` is a code-review fail.

## 2. Easing palette

| Token | Curve | Use | GSAP equivalent |
|---|---|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default — band entrances, hover, CTA, tabs, hero, flow diagram | `power2.out` |

The system runs on a single out-biased curve by design. v1.0 declared a second
token `--ease-emphasized` with the identical cubic-bezier — a no-op alias.
Iter-2 deleted it. If the design ever calls for a distinct in-out ease (e.g. a
closing drawer), introduce a new token here AND in `tokens.css` before using
it; do not inline a one-off cubic-bezier in component CSS.

## 3. Per-surface contracts

### Band 1 — dark hero
- **Band entrance:** opacity 0 → 1, translateY +12 px → 0, `--duration-band 300 ms`, `--ease-standard`. Triggered once at viewport intersection ratio 0.15.
- **Embedded flow diagram (the single allowed per-element sequence):**
  - 4 steps total (pedido informal → captura estructurada → visibilidad operativa → seguimiento del cliente).
  - Per-step duration ≤ `--duration-flow-step 280 ms` (defined inside `--duration-slow` ceiling).
  - Stagger between steps: 80 ms.
  - **Sequence ceiling:** total elapsed ≤ `--duration-seq-total 1200 ms`. If any iteration exceeds, reduce stagger or per-step duration.
  - Each step animates: opacity 0 → 1 + translateX +8 px → 0 (left-to-right reading flow). No scale, no rotation.
  - Connector strokes between steps draw via `stroke-dashoffset` over the same per-step duration.
  - On `prefers-reduced-motion: reduce`, the diagram renders fully visible immediately, no sequence.

### Band 2 — white → cream tabbed product depth
- **Band entrance:** same band defaults as Band 1.
- **Tab switch interaction:**
  - Indicator (3 px underline `--blue-600`) translates X to the new tab via CSS transform: `--duration-fast 150 ms`, `--ease-standard`.
  - Panel content cross-fades, opacity-only, 120 ms in / 80 ms out. **No translate.** No height-collapse animation — panel heights are equalized via `min-height` to prevent layout jumps.
  - Keyboard `ArrowLeft` / `ArrowRight` activates the next/previous tab on focus, with the same animation contract (manual-activation pattern: focus moves but selection requires Enter/Space).
  - Mobile (≤ 640 px): tabs collapse to horizontal scroll-snap strip. The indicator still uses the same fast-switch animation.
- **Tab focus ring:** appears instantly on `:focus-visible`, fades out over `--duration-fast` when blurred.
- **Annotated mock callouts:** static. No reveal animation. The annotation labels are not "discovered" through scroll — they are part of the surface from first paint.

### Band 3 — dark trust + contact
- **Band entrance:** same band defaults.
- **Form field interaction:**
  - Border color transitions on focus: `var(--n-300)` → `var(--blue-600)` over `--duration-fast 150 ms`.
  - Inline error `<span>` (when validation fails on submit) appears via opacity 0 → 1 over `--duration-fast 150 ms`. **No height animation.** Reserve vertical space with `min-height` so the form does not jump.
  - Submit button hover: translateY -2 px, background `--blue-600 → --blue-700`, `--duration-base 250 ms`.

## 4. Hover contract (any band)

| Property | Value | Notes |
|---|---|---|
| translateY budget | `-2 px` max | §C.4 hard rule — no large lifts, no 3D tilt |
| Duration | `--duration-base 250 ms` | |
| Easing | `--ease-standard` | |
| Color shift | One step on a token (e.g. `--blue-600 → --blue-700`) | Never introduce a hover-only hex |
| Shadow change | None on default cards | The system has only one `--shadow-1` tier; do not animate elevation |

## 5. Focus contract

- Always render `:focus-visible`, never bare `:focus` (no mouse-click ring noise).
- Ring is 2 px solid, color = `--blue-600` on light surfaces, `--blue-300` on dark surfaces.
- Ring offset = 2 px from the focused element edge.
- Ring appearance is `--duration-fast 150 ms` opacity fade. No pulsing, no glow.
- The ring color must clear 3:1 against the immediate background — both are verified in `contrast-matrix.md`.

## 6. `prefers-reduced-motion` behavior

When `(prefers-reduced-motion: reduce)` matches:
- All `--duration-*` tokens collapse to `0ms` (handled in `tokens.css`).
- GSAP timelines should detect the user preference and call `gsap.set()` instead of `gsap.from()` to assign final values immediately.
- Band-entrance scroll triggers still fire — they just resolve instantly.
- Band 1 flow diagram: render the final state of all 4 steps + connectors immediately. No sequence.
- Hover translateY is suppressed (token `--hover-translate-y` resolves to 0).
- Color and opacity transitions on focus are also disabled.

## 7. GSAP / ScrollTrigger usage contract

```js
// Reduced-motion guard
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Band entrance — register once per <section data-band="*">
gsap.utils.toArray('section[data-band]').forEach((band) => {
  if (reduceMotion) {
    gsap.set(band.querySelectorAll('[data-enter]'), { opacity: 1, y: 0 });
    return;
  }
  gsap.from(band.querySelectorAll('[data-enter]'), {
    opacity: 0,
    y: 12,
    duration: 0.3,         // matches --duration-band
    ease: 'power2.out',    // matches --ease-standard
    stagger: 0.05,         // gentle within-band rhythm — DO NOT exceed 80 ms
    scrollTrigger: {
      trigger: band,
      start: 'top 85%',    // 0.15 viewport ratio — matches band-entrance contract
      once: true,
    },
  });
});

// Band 1 flow diagram — the single allowed per-element sequence
const flowSteps = gsap.utils.toArray('[data-flow-step]'); // 4 nodes
if (reduceMotion) {
  gsap.set(flowSteps, { opacity: 1, x: 0 });
} else {
  gsap.timeline({
    scrollTrigger: { trigger: '[data-flow-diagram]', start: 'top 70%', once: true },
  })
  .from(flowSteps, {
    opacity: 0,
    x: 8,
    duration: 0.28,        // ≤ --duration-flow-step
    stagger: 0.08,         // 80 ms — keep total ≤ 1.2s ceiling
    ease: 'power2.out',
  });
}
```

## 8. Lottie usage policy

Allowed only inside the Band 1 flow diagram, only if a static SVG sequence cannot
convey the four-step transition. Constraints:
- File size budget: ≤ 40 KB per Lottie animation.
- Loop policy: **no loop** — play once on viewport entrance, then settle.
- Reduced-motion: replace with the final-frame static SVG.
- Color: must be tokenized via `colors` runtime override; no hard-coded hex in the JSON.

If Lottie is added, document the file path here and link to its source.

## 9. Forbidden motion patterns (instant rejection)

- Parallax on mobile (≤ 640 px) — disabled at every breakpoint below the desktop floor.
- Page-scroll-driven horizontal sliding sections.
- "Magnetic" cursor effects on buttons or cards.
- Stagger reveals with > 4 elements per band.
- Per-character text reveals (Splittext, FlipChars). Headlines render whole.
- Any animation that runs longer than 400 ms outside the Band-1 flow-diagram sequence.
- Pulsing CTAs or any "breathing" loop on idle elements.
- Background gradient animation, animated grain, animated noise.
- Hover-triggered content reveal that hides essential information by default.

## 10. Performance budget

- Total JS for motion (GSAP core + ScrollTrigger): ≤ 60 KB minified, gzipped.
- No motion library other than GSAP family + Lottie (per §A.5 stack constraint).
- Band-entrance triggers must be `once: true` — never re-arm on scroll up.
- Use `will-change: transform, opacity` only on actively animating elements; remove after the animation completes.
- All `transform` animations must be GPU-accelerated (translate / scale / opacity only). No animating `top`, `left`, `width`, `height`, `margin`, `padding`.

## 11. ARIA tab interaction contract (Band 2 tabbed product depth)

Consolidated in iter-2 (was previously split across `tokens.css` band-scope
notes + the nexa-brand skill). This is the single source of truth for the
Band 2 tablist before Phase E composition.

### Markup

```html
<div class="tablist" role="tablist" aria-label="Módulos de Nexa">
  <button role="tab"
          id="tab-catalogo"
          aria-controls="panel-catalogo"
          aria-selected="true"
          tabindex="0">Catálogo</button>
  <button role="tab"
          id="tab-pedidos"
          aria-controls="panel-pedidos"
          aria-selected="false"
          tabindex="-1">Pedidos</button>
  <!-- repeat for inventario, seguimiento -->
</div>

<div role="tabpanel"
     id="panel-catalogo"
     aria-labelledby="tab-catalogo"
     tabindex="0">…</div>
```

### Activation pattern: **manual**

- `ArrowLeft` / `ArrowRight` move **focus** between tabs but do NOT change selection.
- `Enter` or `Space` on a focused tab activates it (sets `aria-selected="true"`,
  shows its panel, hides others).
- `Home` / `End` jump focus to first / last tab.
- `Tab` from the active tab moves focus into its panel (the panel is `tabindex="0"`).

Manual activation is required because the panels contain interactive content
(annotated mocks, links). Auto-activation would force the user through every
panel just to reach the panel-keyboard-trap.

### `tabindex` roving

Only the currently selected tab has `tabindex="0"`. All others have `tabindex="-1"`.
This keeps the tablist as a single Tab-stop in the page sequence.

### Focus ring

`:focus-visible` only — see §5. Ring color is `--blue-600` on Band 2 white,
`--blue-700` on Band 2 cream (matches the band-scope `--action` override).

### Indicator animation

3 px underline `--blue-600` translates X to the new tab's bounding box via CSS
`transform: translateX(...) scaleX(...)`. Duration `--duration-fast 150 ms`,
easing `--ease-standard`. The indicator is decorative — `aria-hidden="true"` —
selection state is conveyed by `aria-selected`, not by the indicator.

### Panel transition

Cross-fade only. Outgoing panel `opacity 1 → 0` over 80 ms, incoming panel
`opacity 0 → 1` over 120 ms. **No translate, no scale, no height collapse.**
Panels share an equalized `min-height` to prevent layout jumps when content
length differs.

### Reduced motion

Indicator translates instantly. Panels swap `display: none` / `display: block`
without opacity transition. `aria-selected` toggles regardless.

### Mobile (≤ 640 px)

Tabs collapse to a horizontal scroll-snap strip (`scroll-snap-type: x mandatory`,
each tab `scroll-snap-align: start`). Indicator animation contract unchanged.
The selected tab auto-scrolls into view via `element.scrollIntoView({block: "nearest", inline: "center"})`
on activation — wrapped in the reduced-motion guard.
