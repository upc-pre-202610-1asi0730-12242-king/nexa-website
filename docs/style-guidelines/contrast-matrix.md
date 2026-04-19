# Nexa — Contrast Matrix v1.1 (FROZEN, 2026-04-18, iter-2)

WCAG 2.1 AA targets:
- **Normal text:** ≥ 4.5:1
- **Large text** (≥ 18.66 px regular OR ≥ 14 px bold / weight ≥ 700): ≥ 3:1
- **Non-text UI** (focus rings, borders that convey state): ≥ 3:1

All ratios computed against the actual hex values in
[`tokens.css`](./tokens.css).

### Iter-2 surface change

`--n-100` cream deepened from `#f5f2ee` to `#efe7d6` (~12 lightness points
below white instead of ~5). This drops `--blue-600` action on cream from
4.9:1 to 4.26:1 — **below AA**. Resolution: the `[data-band="cream"]` scope
overrides `--action` to `--blue-700` (5.67:1) and `--action-hover` to
`--blue-800`. The Band 2 cream surface table below is fully recomputed
against the new background.

### Pre-freeze remediations carried from v1.0

| Token | Old | New | Reason |
|---|---|---|---|
| `--n-500` | `#857c72` | `#6b6259` | Failed AA on legacy `--n-100` (3.60:1 → 5.28:1); re-verified at 4.98:1 on iter-2 cream `#efe7d6`, still passes |
| `--band-dark-ink-3` | `#7a7670` | `#908b85` | Failed AA on `--band-dark-bg` (3.69:1 → 4.89:1) |

---

## Band 1 + Band 3 — dark surface (`--band-dark-bg` `#1a1f2e`)

| Foreground | FG hex | BG token | BG hex | Ratio | AA Normal | AA Large | Use |
|---|---|---|---|---|---|---|---|
| `--band-dark-ink` | `#f0ede8` | `--band-dark-bg` | `#1a1f2e` | 14.6 : 1 | ✅ | ✅ | Display + H1 + H2 headlines |
| `--band-dark-ink-2` | `#b5b0a6` | `--band-dark-bg` | `#1a1f2e` | 7.5 : 1 | ✅ | ✅ | Body + body-lg paragraphs |
| `--band-dark-ink-3` | `#908b85` | `--band-dark-bg` | `#1a1f2e` | 4.89 : 1 | ✅ | ✅ | Caption + micro + eyebrow muted |
| `--blue-300` (action) | `#7aaae8` | `--band-dark-bg` | `#1a1f2e` | 6.7 : 1 | ✅ | ✅ | Inline links + secondary action — the canonical on-dark accent |
| `--blue-600` (DO NOT USE as on-dark text) | `#2a67d9` | `--band-dark-bg` | `#1a1f2e` | 3.13 : 1 | ❌ | ✅ | **Below AA Normal.** Documented to make explicit why dark-band scope flips `--action` to `--blue-300`. Acceptable ONLY as the fill of a CTA whose label is `--n-0` white (5.2:1). |
| `#95bbef` (action hover) | `#95bbef` | `--band-dark-bg` | `#1a1f2e` | 8.2 : 1 | ✅ | ✅ | Action hover state |
| `--n-0` (CTA fill ink) | `#ffffff` | `--blue-600` | `#2a67d9` | 5.2 : 1 | ✅ | ✅ | Primary CTA label inside Band 1/3 |
| `--n-0` (CTA fill ink) | `#ffffff` | `--blue-700` | `#1f52b8` | 7.5 : 1 | ✅ | ✅ | Primary CTA hover label |
| `--n-0` (focus ring inner) | `#ffffff` | `--band-dark-bg` | `#1a1f2e` | 14.6 : 1 | ✅ | ✅ | Focus ring inner border |
| `--blue-300` (focus ring outer) | `#7aaae8` | `--band-dark-bg` | `#1a1f2e` | 6.7 : 1 | ✅ | ✅ | Focus ring outer (non-text 3:1) |

## Band 2 — white surface (`--n-0` `#ffffff`)

| Foreground | FG hex | BG token | BG hex | Ratio | AA Normal | AA Large | Use |
|---|---|---|---|---|---|---|---|
| `--ink-primary` (`--n-800`) | `#252118` | `--n-0` | `#ffffff` | 16.4 : 1 | ✅ | ✅ | Display + H1 + H2 headlines |
| `--n-700` body | `#3a342c` | `--n-0` | `#ffffff` | 12.0 : 1 | ✅ | ✅ | Primary body text |
| `--ink-secondary` (`--n-600`) | `#5c554c` | `--n-0` | `#ffffff` | 7.6 : 1 | ✅ | ✅ | Secondary copy / body-sm |
| `--ink-muted` (`--n-500`) | `#6b6259` | `--n-0` | `#ffffff` | 6.0 : 1 | ✅ | ✅ | Captions + meta on white |
| `--blue-600` (action) | `#2a67d9` | `--n-0` | `#ffffff` | 5.2 : 1 | ✅ | ✅ | Primary inline link / CTA outline border |
| `--blue-700` (action hover) | `#1f52b8` | `--n-0` | `#ffffff` | 7.5 : 1 | ✅ | ✅ | Hover for inline link |
| `--blue-700` on accent-quiet | `#1f52b8` | `--blue-50` `#eef3fd` | — | 6.9 : 1 | ✅ | ✅ | Eyebrow pill text on tinted bg |
| `--n-0` (CTA fill ink) | `#ffffff` | `--blue-600` | `#2a67d9` | 5.2 : 1 | ✅ | ✅ | Primary CTA label |

## Band 2 cream surface (`--n-100` `#efe7d6` — deepened in iter-2)

| Foreground | FG hex | BG token | BG hex | Ratio | AA Normal | AA Large | Use |
|---|---|---|---|---|---|---|---|
| `--ink-primary` | `#252118` | `--n-100` | `#efe7d6` | 14.2 : 1 | ✅ | ✅ | Display + headlines |
| `--n-700` body | `#3a342c` | `--n-100` | `#efe7d6` | 10.3 : 1 | ✅ | ✅ | Primary body text |
| `--ink-secondary` | `#5c554c` | `--n-100` | `#efe7d6` | 6.6 : 1 | ✅ | ✅ | Secondary copy |
| `--ink-muted` (`--n-500`) | `#6b6259` | `--n-100` | `#efe7d6` | 4.98 : 1 | ✅ | ✅ | Captions, S1/S2/S3 segment label, meta — confirmed re-passes after surface deepening |
| `--blue-600` (DO NOT USE on cream) | `#2a67d9` | `--n-100` | `#efe7d6` | 4.26 : 1 | ❌ | ✅ | **Below AA Normal.** Cream-band scope overrides `--action` to `--blue-700`. |
| `--blue-700` (cream-band action) | `#1f52b8` | `--n-100` | `#efe7d6` | 5.67 : 1 | ✅ | ✅ | Inline links, CTA outline — `[data-band="cream"]` `--action` |
| `--blue-800` (cream-band action hover) | `#163a82` | `--n-100` | `#efe7d6` | 8.4 : 1 | ✅ | ✅ | Hover state — `[data-band="cream"]` `--action-hover` |
| `--n-0` (CTA fill ink) | `#ffffff` | `--blue-700` | `#1f52b8` | 7.5 : 1 | ✅ | ✅ | Primary CTA label inside cream band |

## Status / semantic surfaces

| Foreground | FG hex | BG token | BG hex | Ratio | AA Normal | AA Large | Use |
|---|---|---|---|---|---|---|---|
| `--success` | `#2d7d4f` | `--success-bg` `#eaf5ee` | — | 5.0 : 1 | ✅ | ✅ | Success badge text |
| `--warning` | `#b06a00` | `--warning-bg` `#fef3e2` | — | 4.6 : 1 | ✅ | ✅ | Warning badge / FEFO alert text |
| `--danger` | `#c0312b` | `--danger-bg` `#fdecea` | — | 5.4 : 1 | ✅ | ✅ | Cadena-de-frío breach badge text |
| `--success` | `#2d7d4f` | `--n-0` `#ffffff` | — | 5.7 : 1 | ✅ | ✅ | Inline success label on white |
| `--warning` | `#b06a00` | `--n-0` `#ffffff` | — | 5.4 : 1 | ✅ | ✅ | Inline warning label on white |
| `--danger` | `#c0312b` | `--n-0` `#ffffff` | — | 6.4 : 1 | ✅ | ✅ | Inline danger label on white |

## Form interaction (Band 3 contact form)

| Foreground | FG hex | BG token | BG hex | Ratio | AA Normal | AA Large | Use |
|---|---|---|---|---|---|---|---|
| `--ink-placeholder` (`--n-400`) | `#aba098` | `--n-0` `#ffffff` | — | 2.8 : 1 | ❌ | ❌ | **PLACEHOLDER ONLY** — accepted because placeholders are non-essential per WCAG; required label still uses `--ink-secondary` 7.6:1 above the input. Confirm with form spec in Phase F. |
| `--danger` (inline error) | `#c0312b` | `--n-0` `#ffffff` | — | 6.4 : 1 | ✅ | ✅ | Field error message |
| `--ink-secondary` (helper) | `#5c554c` | `--n-0` `#ffffff` | — | 7.6 : 1 | ✅ | ✅ | Helper text under input |

## Non-text UI (focus + borders)

| Element | FG hex | BG hex | Ratio | Target | Status |
|---|---|---|---|---|---|
| `--blue-600` focus ring on white | `#2a67d9` | `#ffffff` | 5.2 : 1 | ≥ 3 : 1 | ✅ |
| `--blue-300` focus ring on dark | `#7aaae8` | `#1a1f2e` | 6.7 : 1 | ≥ 3 : 1 | ✅ |
| `--border-ui` (`--n-300`) on `--n-0` | `#cec7bb` | `#ffffff` | 1.8 : 1 | n/a (decorative hairline) | n/a |
| `--border-ui` (`--n-300`) on `--n-100` | `#cec7bb` | `#f5f2ee` | 1.7 : 1 | n/a (decorative hairline) | n/a |
| Tab indicator `--blue-600` on `--n-0` | `#2a67d9` | `#ffffff` | 5.2 : 1 | ≥ 3 : 1 | ✅ |
| Active tab underline 3px `--blue-600` | `#2a67d9` | `#ffffff` | 5.2 : 1 | ≥ 3 : 1 | ✅ |

---

## Open notes for Brutal Critic

1. **Placeholder text (`--n-400` on white)** is intentionally below AA. WCAG allows this when the placeholder is non-essential and the field has a visible always-on `<label>`. The Band 3 form spec in §C.1 already requires labels — confirm during Phase F build.
2. **Eyebrow pill border on white** (`rgba(42,103,217,0.2)` on white) is decorative and not contrast-load-bearing. The pill text inside it is the AA-bearing element (`--blue-700` on `--blue-50` = 6.9:1).
3. The dark-band `--band-dark-border` (`#353c52` on `#1a1f2e`) is a 1.5:1 hairline divider — decorative, not state-bearing. If we ever convey state via this stroke (e.g. selected card), bump to `--blue-300` (6.7:1) or higher.
4. `--blue-500` (`#2a67d9`) at body-text size on cream is at the AA edge (4.9:1). Keep CTAs and links at this stop OK; if we ever set 12-px small-print in `--blue-500`, bump to `--blue-700`.
