# Nexa Audit Source Map

## Archivos activos leidos

### HTML principal
- `index.html`
  - Aporto hero principal, comparison block, operational fit cards, CTA de cierre y claims base.
- `platform.html`
  - Aporto page hero interior, estructura de plataforma, soporte, onboarding y variaciones de CTA.
- `company.html`
  - Aporto mensajes de confianza, soporte humano y tono institucional.
- `faq.html`
  - Aporto arquitectura FAQ, objeciones frecuentes y patron de accordion.
- `solutions.html`
  - Aporto overview de soluciones y shells de cards.
- `solutions-importers.html`
  - Aporto copy y estructura para vertical de importadores.
- `solutions-distributors.html`
  - Aporto copy y estructura para vertical de distribuidores.
- `solutions-cold-storage.html`
  - Aporto copy y estructura para vertical de cold storage.

### CSS activo
- `assets/css/tokens.css`
  - Aporto tokens de color, borde, states y superficies.
- `assets/css/typography.css`
  - Aporto la realidad tipografica activa del sitio.
- `assets/css/buttons.css`
  - Aporto sistema de botones, variantes, tamanos y estados.
- `assets/css/layout.css`
  - Aporto contenedores, grid y reglas de ancho.
- `assets/css/patterns.css`
  - Aporto patrones repetidos de surfaces y composicion.
- `assets/css/components.css`
  - Aporto evidencia de acumulacion, overrides y deuda estructural.
- `assets/css/main.css`
  - Aporto capa de entrada y relacion entre archivos.

### JS activo
- `assets/js/interactions.js`
  - Aporto FAQ accordion, nav/dropdown y widget de soporte.
- `assets/js/animations.js`
  - Aporto reveals y comportamiento ornamental.
- `assets/js/i18n.js`
  - Aporto contenido paralelo y evidencia de variaciones de copy.

## Documentacion leida para contraste
- `docs/AUDITORIA_VISUAL_NEXA.md`
  - Sirvio para contrastar percepciones visuales previas.
- `docs/REPO_CONTENT_CLASSIFICATION.md`
  - Sirvio para ubicar fuentes activas vs historicas.
- `docs/INFORME_NUEVO_V2_SCOPE_GAP.md`
  - Sirvio para detectar desviaciones de scope.
- `docs/Nexa_V5_Technical_Style_Guidelines_Report.html`
  - Sirvio para detectar mismatch entre guideline y front activo.

## Material historico usado solo como referencia
- `archives/rebuild-kit/rebuild-notes.md`
  - Usado para contexto historico. No adoptado como base.
- `archives/rebuild-kit/sample-hero.html`
  - Usado para contraste. No adoptado como componente.
- `archives/rebuild-kit/sample-cards.html`
  - Usado para contraste. No adoptado como sistema.

## Validacion visual por capturas
- `archives/audit-shots/home-fullpage-desktop.png`
- `archives/validation-screens/platform-full.png`
- `archives/validation-screens/faq-full.png`
- `archives/validation-screens/solutions-full.png`
- `archives/validation-screens/company-full.png`
- `archives/validation-screens/solutions-importers-full.png`
- `archives/restructure-screens/home-full-final.png`
- `archives/correction-audit-screens/home-full.png`
- `archives/correction-audit-screens/home-final.png`

Estas capturas sirvieron para validar peso visual, ancho real, repeticion de shells, contraste y consistencia de layout sin depender solo del codigo fuente.

## Asset rescatado
- `nexa.svg`
  - Rescatado como unico asset directo dentro del paquete.

## Nota final
La auditoria se apoyo en el sitio activo como fuente principal. Los documentos y archivos historicos se usaron solo para confirmar contradicciones, alcance y decisiones que no deben heredarse sin filtro.
