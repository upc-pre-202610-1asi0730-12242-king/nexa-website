# Auditoria Visual Senior - Nexa

Fecha de auditoria: 2026-04-11
Auditor: Codex
Alcance: Landing, paginas internas, paginas de soluciones, FAQ y stub de dashboard
Estado del codigo: documento historico de evaluacion visual; no usarlo como source of truth del estado actual del producto
Nota de ruta: el stub revisado en esta auditoria vive actualmente en `archives/app/dashboard.html`

## 1. Resumen ejecutivo

La base visual de Nexa es buena. Hay una direccion de marca clara, una tipografia solida, una paleta coherente y una primera impresion convincente en el home y en varias hero sections. El problema principal no es de identidad visual, sino de consistencia de sistema, calidad de implementacion visual y control fino de espaciado/contraste.

Mi veredicto como verificador senior es el siguiente:

| Categoria | Nota | Evaluacion |
|---|---:|---|
| Direccion visual / branding | 8.0/10 | La marca se percibe moderna, enterprise y relativamente premium |
| Jerarquia visual | 7.5/10 | En heroes funciona bien; cae en secciones secundarias y anchors |
| Consistencia del sistema | 5.0/10 | Hay demasiados overrides, tokens rotos y componentes fuera de contrato |
| Padding / espaciado | 5.5/10 | El sistema base existe, pero se rompe en muchos puntos por inline styles y faltas de size modifiers |
| Contraste / legibilidad | 5.0/10 | Varias piezas oscuras usan opacidades demasiado bajas para texto pequeno |
| Responsive / mobile | 5.5/10 | La composicion principal aguanta, pero el menu movil no tiene estado visual implementado y hay CTAs rotos |
| Calidad de implementacion visual | 4.5/10 | Hay deuda clara en tokens no definidos, clases incompletas y dependencia excesiva de estilos inline |
| Nota global | 5.9/10 | Buen producto visualmente prometedor, pero todavia no pasa una verificacion senior de acabado premium |

### Conclusiones ejecutivas

- El home y varios heroes venden bien el producto.
- La calidad percibida cae mucho en cuanto aparecen componentes fuera del sistema.
- Hay fallos de contrato CSS que afectan el render real: tokens no definidos, botones sin size modifier y menu movil sin estado visual.
- El contraste en bloques oscuros no esta suficientemente controlado para un producto enterprise.
- El mayor riesgo actual no es estetico sino de confianza visual: el usuario percibe zonas "acabadas" y zonas "prototipo" dentro del mismo site.

## 2. Metodologia de revision

La auditoria se hizo sobre render real en navegador local y lectura de codigo.

Viewports revisados:

- Desktop: 1440x900
- Mobile: 390x844

Paginas revisadas:

- `index.html`
- `platform.html`
- `company.html`
- `faq.html`
- `solutions.html`
- `solutions-importers.html`
- `solutions-distributors.html`
- `solutions-cold-storage.html`
- `archives/app/dashboard.html`

Enfoque de evaluacion:

- Heuristicas de consistencia y estandares
- Jerarquia visual y escaneabilidad
- Proximidad, alineacion y ritmo vertical
- Contraste y legibilidad con criterio WCAG AA
- Affordance de botones, pills, tarjetas y navegacion
- Coherencia entre desktop y mobile
- Mantenibilidad del sistema visual desde el codigo

## 3. Heuristicas usadas

Estas son las heuristicas concretas que se usaron para calificar el trabajo:

- Consistencia y estandares: un mismo patron debe verse, espaciarse y comportarse igual en todas las paginas.
- Jerarquia visual: el usuario debe identificar en menos de 2 segundos titulo, descripcion, CTA y bloques secundarios.
- Proximidad y agrupacion: elementos relacionados deben compartir distancia, borde, fondo o alineacion consistente.
- Contraste y legibilidad: texto pequeno debe cumplir AA 4.5:1; texto grande y componentes de apoyo no deben apoyarse en opacidades arbitrarias sin control.
- Affordance: un boton debe parecer boton, una pill debe parecer pill, un menu movil debe abrir visualmente.
- Ritmo vertical: los cambios de seccion deben seguir una escala predecible y no depender de valores aislados inline.
- Robustez de implementacion visual: el sistema no debe depender de tokens inexistentes ni de clases incompletas.
- Estado inicial fiable: un deep link o una carga por ancla no debe mostrar contenido visualmente oculto o "apagado".
- Calidad responsive: no basta con que "quepa"; debe mantener jerarquia, respiracion y estado navegable.

## 4. Hallazgos criticos y mayores

## V-01 - P1 - CTA primario roto por faltar size modifier

Paginas afectadas:

- `solutions-distributors.html:109`
- `company.html:391`

Heuristicas afectadas:

- Affordance
- Consistencia y estandares
- Padding / hit area

Observado:

Hay instancias de `.btn.btn-primary` sin `btn-sm`, `btn-md` o `btn-lg`. El CSS base de `.btn` no define altura, padding ni radio final; esos valores viven en las clases de size. En consecuencia, el CTA `See B2B Portal` y el boton `Send Message` renderizan como una banda azul apretada alrededor del texto, no como un boton premium ni siquiera como un boton correcto.

Evidencia tecnica:

- Base sin tamano: `assets/css/buttons.css:7-20`
- Sizes viven solo en:
  - `assets/css/buttons.css:28-48`
- Instancias rotas:
  - `solutions-distributors.html:109`
  - `company.html:391`

Impacto visual:

- Rompe inmediatamente la confianza del usuario.
- Hace que una parte importante del layout parezca inacabada.
- En mobile el problema es aun mas evidente porque el CTA queda extremadamente comprimido.

Criterio de aceptacion para corregirlo:

- Ningun `.btn` funcional debe existir sin size modifier o sin un default seguro.
- Todo CTA primario visible debe tener altura consistente y padding horizontal suficiente.
- En desktop y mobile todos los botones deben leerse como botones completos, no como highlight de texto.

## V-02 - P1 - El sistema visual usa tokens no definidos y eso degrada el render real

Paginas / CSS afectados:

- `assets/css/components.css:2373-2524`
- `assets/css/components.css:2742-2764`
- `solutions.html:194-196`
- `solutions.html:250-253`
- `company.html:201`
- `solutions-importers.html:122,127,146,195,302`
- `solutions-distributors.html:113-127,146,178,291`
- `solutions-cold-storage.html:132,140,149,166,280`

Tokens usados y no definidos:

- `--c-border`
- `--c-bg`
- `--c-bg-dark`
- `--c-surface-hover`
- `--c-border-hover`
- `--c-primary-dark`
- `--spacing-4`
- `--spacing-6`
- `--spacing-8`

Heuristicas afectadas:

- Consistencia y estandares
- Robustez de implementacion visual
- Separacion de superficies
- Ritmo vertical

Observado:

Hay una parte significativa del sistema que se apoya en tokens que no existen en `assets/css/tokens.css:1-72`. Esto hace que varias superficies, bordes, rellenos y layouts no se rendericen como el autor aparentemente pretendia. En particular, la pagina `solutions.html` es la mas penalizada: las cards de segmentos pierden fondo, bordes y aire, y visualmente pasan de "premium selector" a "bloque lavado / prototipo".

Impacto visual:

- Tarjetas con separacion insuficiente
- Bordes que desaparecen o quedan inconsistentes
- Fondos de preview demasiado planos
- Paddings que vuelven al valor por defecto o no aplican
- Sensacion de sistema parcialmente roto

Criterio de aceptacion para corregirlo:

- No debe existir ninguna referencia `var(--token)` a tokens no definidos.
- Todo color, borde y spacing usado en componentes productivos debe salir de un token real del sistema.
- El lint de tokens visuales debe quedar en cero.

## V-03 - P1 - El menu movil esta incompleto visualmente

Archivos afectados:

- `assets/js/interactions.js:97-103`
- `assets/css/patterns.css:184-194`

Heuristicas afectadas:

- Visibilidad del estado
- Affordance
- Responsive

Observado:

En JS, al pulsar el boton movil, se anade o elimina la clase `.mobile-open` sobre `.navbar-links`. Sin embargo, en CSS no existe ninguna regla para `.navbar-links.mobile-open`. En mobile, `.navbar-links` solo tiene `display: none` bajo `@media (max-width: 768px)`, por lo que el usuario ve un icono hamburguesa pero no tiene un estado visual completo de menu desplegado implementado.

Impacto visual:

- La navegacion movil no transmite acabado profesional.
- El header mobile parece funcional a primera vista, pero visualmente esta a medio implementar.
- Es un fallo de confianza muy visible en auditoria mobile.

Criterio de aceptacion para corregirlo:

- Al abrir el menu movil debe existir un estado visible, legible y alineado con la marca.
- El menu desplegado debe tener capa, fondo, espaciado, jerarquia y cierre claros.
- El estado abierto debe ser comprobable visualmente, no solo por clase JS.

## V-04 - P1 - El contenido arranca oculto por `reveal` y eso rompe anchors y cargas parciales

Archivos afectados:

- `assets/css/components.css:888-902`
- `assets/js/animations.js:8-27`

Heuristicas afectadas:

- Estado inicial fiable
- Jerarquia visual
- Visibilidad del contenido

Observado:

El patron `.reveal` arranca con `opacity: 0` y `transform: translateY(20px)`. El contenido solo aparece cuando `IntersectionObserver` lo marca como visible. Este enfoque puede funcionar para scroll progresivo, pero penaliza mucho los deep links y algunas capturas above-the-fold: varias secciones ancladas cargan visualmente apagadas o casi vacias antes de revelarse.

Impacto visual:

- Una seccion importante puede parecer rota o vacia al entrar por ancla.
- Se degrada la calidad percibida en pages como `index`, `platform` y bloques inferiores.
- La animacion pasa por delante de la legibilidad inicial.

Criterio de aceptacion para corregirlo:

- Ninguna seccion critica debe depender de JS para ser visible en su estado inicial.
- Los contenidos enlazables por `#anchor` deben ser plenamente legibles al cargar.
- La animacion no puede comprometer la percepcion del layout base.

## V-05 - P1 - Contraste insuficiente en textos pequenos sobre superficies oscuras

Archivos afectados:

- `assets/css/components.css:697-699`
- `assets/css/components.css:710-718`
- `assets/css/components.css:1408-1456`
- `assets/css/components.css:2729-2732`
- `assets/css/typography.css:101-128`
- `assets/css/tokens.css:27-35`

Heuristicas afectadas:

- Contraste y legibilidad
- Accesibilidad visual
- Escaneabilidad

Observado:

El sistema usa repetidamente blancos al 0.35, 0.45, 0.5, 0.55 y 0.6 sobre fondos oscuros o azules fuertes. En texto pequeno esto queda demasiado tenue para un producto enterprise.

Casos concretos:

- `telemetry-header p` usa `rgba(255,255,255,0.5)` en `assets/css/components.css:1409`
- `telemetry-stage-label` usa `rgba(255,255,255,0.35)` en `assets/css/components.css:1435-1440`
- `telemetry-card p` usa `rgba(255,255,255,0.45)` en `assets/css/components.css:1455-1456`
- `roadmap` usa secundarios muy oscuros para un contexto ya oscuro en `assets/css/components.css:697-699`
- Los placeholders del formulario oscuro heredan `var(--c-text-label)` desde `assets/css/components.css:1742`; sobre el campo oscuro del contacto quedan alrededor de 3.87:1, por debajo de AA para texto pequeno

Notas de contraste calculadas:

- `--c-text-label` sobre `--c-surface`: aprox. `4.35:1` (borderline o insuficiente para texto pequeno)
- Blanco al 0.45 sobre tarjeta oscura tipo telemetry: aprox. `4.53:1` en el mejor caso y sin mucho margen
- Blanco al 0.35 sobre tarjeta oscura tipo telemetry: aprox. `3.21:1` (insuficiente)
- Blanco al 0.6 sobre azul primario: aprox. `3.24:1` (insuficiente para texto pequeno)

Impacto visual:

- Bloques oscuros se ven "apagados" en lugar de sofisticados.
- La lectura rapida empeora.
- La interfaz parece menos acabada de lo que realmente esta.

Criterio de aceptacion para corregirlo:

- Todo texto pequeno debe cumplir o superar 4.5:1.
- Toda etiqueta, helper text, stage label y placeholder debe seguir una escala de contraste predefinida.
- No usar opacidades arbitrarias en dark UI sin comprobacion de contraste.

## V-06 - P1 - La pagina `solutions.html` no alcanza calidad premium por separacion de tarjetas demasiado debil

Archivos afectados:

- `solutions.html:136-255`
- `assets/css/components.css:2373-2447`

Heuristicas afectadas:

- Proximidad y agrupacion
- Separacion de superficies
- Consistencia visual

Observado:

La pagina overview de soluciones deberia ser una de las paginas mas fuertes del proyecto porque actua como selector estrategico. Hoy ocurre lo contrario: las cards de segmentos se perciben planas, demasiado cercanas al fondo y con previews visuales lavados. La causa no es solo estetica; esta muy relacionada con los tokens no definidos del hallazgo V-02.

Impacto visual:

- El bloque mas importante de navegacion por segmentos no se siente "heroic".
- Se pierde sensacion de profundidad y valor.
- Las tres cards parecen menos accionables de lo que deberian.

Criterio de aceptacion para corregirlo:

- Cada tarjeta debe leerse como superficie independiente y premium.
- Los previews superiores deben tener fondos, bordes y contraste claros.
- La rejilla debe mantener ritmo y separacion constantes en desktop y mobile.

## 5. Hallazgos moderados

## V-07 - P2 - Familia de pills y badges demasiado ajustada verticalmente

Archivos afectados:

- `assets/css/patterns.css:449-462`
- `assets/css/components.css:1001-1013`
- `assets/css/components.css:2124-2133`
- `assets/css/components.css:2160-2169`

Heuristicas afectadas:

- Padding
- Legibilidad
- Consistencia

Observado:

La familia de pills (`.badge`, `.page-hero-trust-pill`, `.faq-jump-link`, sidebar pills) usa mucho `padding: 6px ...` y en algunos casos `line-height: 1`. Esto produce una sensacion de compresion vertical. En labels cortos puede pasar, pero en labels medianos o largos se acerca demasiado al ejemplo de "bad padding" que mostraste: el texto respira poco respecto al borde.

Casos especialmente sensibles:

- `.badge`: `assets/css/patterns.css:449-462`
- `.page-hero-trust-pill`: `assets/css/components.css:1001-1013`
- `.faq-jump-link`: `assets/css/components.css:2124-2133`
- `.faq-sidebar-link`: `assets/css/components.css:2160-2169`
- `.navbar-link`: `assets/css/patterns.css:134-144`

Impacto visual:

- El sistema parece mas "apretado" que refinado.
- En desktop se tolera; en mobile y en textos largos canta.

Criterio de aceptacion para corregirlo:

- Las pills deben tener suficiente aire vertical para no parecer highlight de texto.
- Debe existir una especificacion minima por familia: altura minima o padding vertical minimo consistente.

## V-08 - P2 - La navegacion principal y secundaria usa tap targets visualmente estrechos

Archivos afectados:

- `assets/css/patterns.css:126-166`
- `assets/css/components.css:2160-2176`

Heuristicas afectadas:

- Responsive
- Affordance
- Ergonomia visual

Observado:

- `.navbar-link` usa `padding: 6px 14px` con `line-height: 1`
- `.faq-sidebar-link` usa `padding: 6px 12px`

No es un fallo demoledor en desktop, pero visualmente se sienten demasiado finos para una UI enterprise moderna. La barra superior se ve algo "lightweight" comparada con el peso del hero. La sidebar del FAQ tambien parece mas una lista textual que una navegacion secundaria robusta.

Criterio de aceptacion para corregirlo:

- Los links interactivos de navegacion deben verse comodamente clicables.
- Navbar y sidebar deben usar una familia de altura visual compartida.

## V-09 - P2 - Exceso de estilos inline rompe el ritmo del sistema y dificulta el acabado

Archivos afectados:

- `company.html:114-201,293-391`
- `solutions.html:114-196`
- `solutions-importers.html:105-302`
- `solutions-distributors.html:91-291`
- `solutions-cold-storage.html:91-280`
- `index.html:334-388,523-545,702`

Heuristicas afectadas:

- Consistencia
- Mantenibilidad visual
- Ritmo vertical

Observado:

Hay demasiados ajustes inline de `padding`, `margin`, `font-size`, `background`, `border` y alineacion. Esto tiene dos consecuencias:

- La UI deja de depender del sistema y pasa a depender de decisiones puntuales por pagina.
- El mismo patron visual se resuelve distinto segun el autor y el contexto.

Ejemplos claros:

- `company.html:163` mezcla `padding-left: 16px` y despues `padding: 16px` en el mismo style, lo cual hace menos legible la intencion del componente
- `solutions-distributors.html:91,113,160,291`
- `solutions-importers.html:122,302`
- `solutions-cold-storage.html:107,140,280`

Criterio de aceptacion para corregirlo:

- Todo patron repetido debe vivir como clase del sistema, no como style inline por pagina.
- Los espaciados deben salir del token system, no de valores ad hoc.

## V-10 - P2 - El dark UI esta visualmente subexpuesto, especialmente en roadmap y data flow

Archivos afectados:

- `assets/css/components.css:680-718`
- `assets/css/components.css:1401-1456`
- `index.html:732-760`
- `platform.html` bloque `#data-flow`

Heuristicas afectadas:

- Contraste
- Jerarquia visual
- Separacion de planos

Observado:

Los bloques oscuros usan:

- fondo base muy oscuro
- pattern overlay tenue
- tarjetas oscuras con 4-7% de blanco
- subtitulos con 35-55% de blanco

El resultado es correcto como direccion estetica, pero demasiado subexpuesto en uso real. El usuario debe esforzarse mas de la cuenta para leer, especialmente en `roadmap` del home y `data flow` de `platform`.

Impacto visual:

- Los bloques oscuros parecen menos "premium" y mas "lavados".
- La marca pierde autoridad en secciones que deberian verse tecnicas y fuertes.

Criterio de aceptacion para corregirlo:

- Cada bloque oscuro debe tener por lo menos un plano claramente dominante, uno secundario y uno interactivo.
- El contraste no puede descansar solo en opacidades bajas.

## V-11 - P2 - El formulario oscuro de Company no esta equilibrado visualmente

Archivos afectados:

- `company.html:351-391`
- `assets/css/components.css:2718-2733`
- `assets/css/components.css:1719-1742`

Heuristicas afectadas:

- Balance visual
- Contraste
- Affordance

Observado:

La composicion general del bloque de contacto es buena, pero visualmente esta descompensada por tres razones:

- El CTA principal esta roto por no tener size modifier
- Los placeholders sobre fondo oscuro tienen contraste insuficiente
- El panel del formulario y el fondo del CTA estan cercanos en valor tonal, por lo que el formulario no despega tanto como deberia

Impacto visual:

- El bloque final importante de contacto no cierra con la misma calidad que el hero inicial.

Criterio de aceptacion para corregirlo:

- El formulario debe leerse como un panel claramente operable.
- Placeholders, inputs y CTA deben tener tres niveles de jerarquia distintos.

## V-12 - P2 - La timeline de Company mezcla una idea buena con una implementacion visual fragil

Archivos afectados:

- `company.html:293-310`
- `assets/css/components.css:2484-2529`

Heuristicas afectadas:

- Consistencia
- Visibilidad
- Robustez visual

Observado:

La timeline horizontal de Company tiene buena idea conceptual, pero depende de tokens no definidos (`--c-bg-dark`, `--c-primary-dark`) y delgadas lineas semitransparentes sobre dark UI. Si no se sanea la capa de tokens, este modulo no puede considerarse visualmente estable.

Criterio de aceptacion para corregirlo:

- La timeline debe construirse 100% sobre tokens reales.
- Los estados `live` y `future` deben diferenciarse sin ambiguedad.

## V-13 - P2 - Las transiciones verticales entre hero y seccion siguiente no siempre siguen el mismo ritmo

Archivos afectados:

- `solutions-importers.html:146`
- `solutions-distributors.html:146`
- `solutions-cold-storage.html:132`
- `company.html:155,199,233,351`
- `solutions.html:114,136`

Heuristicas afectadas:

- Ritmo vertical
- Proximidad

Observado:

Hay paginas donde el paso `hero -> siguiente bloque` se percibe correcto, y otras donde queda mas abierto o mas brusco. Esto no parece ser una decision narrativa consistente, sino el resultado de mezclar:

- `padding-top: 96px`
- `padding-top: 80px`
- `padding-top: 64px`
- `padding-top: 48px`
- `padding-top: var(--spacing-4)` sin definir

Criterio de aceptacion para corregirlo:

- Debe existir una regla clara para la distancia entre hero y primer bloque de contenido.
- Las excepciones deben ser intencionales y justificadas, no accidentales.

## V-14 - P2 - Texto pequeno sobre azul primario queda corto de contraste en varios mini componentes

Archivos afectados:

- `index.html:382-388`
- `index.html:523-545`
- `assets/css/components.css:697-699`

Heuristicas afectadas:

- Contraste
- Legibilidad en componentes compactos

Observado:

En superficies azules fuertes se usan secundarios tipo `rgba(255,255,255,0.6)` y `rgba(255,255,255,0.4)` para etiquetas pequenas. Sobre `--c-primary` eso es demasiado bajo para AA en textos pequenos.

Impacto visual:

- Los microdatos de tarjetas azules se ven "bonitos" pero no suficientemente claros.

Criterio de aceptacion para corregirlo:

- En superficies primarias saturadas, el texto pequeno debe subir de contraste respecto a la pauta actual.

## 6. Hallazgos menores

## V-15 - P3 - El stub del dashboard no esta al nivel visual del marketing site

Archivo afectado:

- `archives/app/dashboard.html:1-33`

Observado:

Como placeholder cumple, pero se percibe muy claramente provisional frente al resto del sitio. Esto no es grave si el objetivo era solo tener una salida temporal, pero desde verificacion visual no deberia evaluarse como una extension natural del producto sino como un stub.

## V-16 - P3 - Algunos labels y metadatos pequeños rozan el limite minimo de legibilidad aunque no siempre fallen de forma critica

Archivos afectados:

- `assets/css/typography.css:101-117`
- `assets/css/patterns.css:553-566`
- `assets/css/components.css:93-105`

Observado:

No todo lo pequeno esta mal, pero el sistema tiende a empujar componentes auxiliares hacia el limite:

- labels de 12px
- status dots muy compactos
- pills con 6px verticales
- line-height igual a 1 en algunos contextos

Esto no rompe solo, pero combinado con contrastes bajos y fondos sutiles si deteriora la percepcion premium.

## 7. Evaluacion por pagina

## `index.html`

Nota visual: 7.2/10

Fortalezas:

- Hero muy fuerte, bien balanceado y con buen peso visual.
- CTA principal y secundario correctamente jerarquizados.
- Mockup creible y con buen trabajo de volumen.

Debilidades:

- Las secciones oscuras pierden claridad y energia visual.
- Algunos microtextos sobre azul y dark UI estan demasiado tenues.
- El sistema de reveal perjudica anchors y secciones profundas.

Veredicto:

- Muy buena portada.
- El home convence arriba, pero se vuelve menos fiable abajo.

## `platform.html`

Nota visual: 6.8/10

Fortalezas:

- Hero limpio y enterprise.
- Modulos bien presentados.
- Buen uso de tipografia y contenedor.

Debilidades:

- `From sensor to decision` sufre contraste insuficiente y aspecto lavado.
- La fase de implementacion puede verse semivacia o apagada por reveal.

Veredicto:

- Buena estructura, falta tension visual y legibilidad en bloques oscuros / anclados.

## `company.html`

Nota visual: 6.4/10

Fortalezas:

- Hero y bloque de origen cuentan bien la historia.
- La seccion de principios tiene buena claridad.

Debilidades:

- El bloque `Trusted by operators...` depende de tokens no definidos.
- La timeline depende de tokens no definidos.
- El bloque de contacto pierde mucha calidad por CTA roto y placeholders flojos.

Veredicto:

- Buena narrativa, pero la implementacion visual no esta suficientemente cerrada.

## `faq.html`

Nota visual: 7.0/10

Fortalezas:

- Estructura limpia y facil de escanear.
- Buena lectura general.

Debilidades:

- Pills y sidebar algo ajustadas verticalmente.
- Los anchors y algunas cargas parciales pueden verse apagados por reveal.

Veredicto:

- De las paginas internas mas limpias del conjunto.

## `solutions.html`

Nota visual: 5.5/10

Fortalezas:

- Hero correcto y claro.
- Buen planteamiento estrategico.

Debilidades:

- Las cards principales no tienen la calidad premium esperable.
- Hay dependencia directa de tokens inexistentes.
- Es la pagina donde mas se nota la deuda del sistema.

Veredicto:

- Conceptualmente importante, pero hoy visualmente es una de las paginas mas debiles.

## `solutions-importers.html`

Nota visual: 6.7/10

Fortalezas:

- Hero limpio y convincente.
- Buena narrativa visual de origen -> transito -> recepcion.

Debilidades:

- Usa tokens inexistentes en bordes y spacing.
- Secciones inferiores dependen de superficies que hoy no estan definidas del todo.

Veredicto:

- Buena pagina, pero con deuda de sistema visible.

## `solutions-distributors.html`

Nota visual: 5.8/10

Fortalezas:

- El mensaje del hero es fuerte.
- El panel derecho tiene buena idea conceptual.

Debilidades:

- CTA principal roto.
- El panel derecho depende de tokens inexistentes.
- Tambien sufre spacing roto por `--spacing-4`.

Veredicto:

- Es la pagina con el fallo visual mas obvio y facil de detectar por cualquier usuario.

## `solutions-cold-storage.html`

Nota visual: 6.9/10

Fortalezas:

- Mejor hero oscuro del set.
- Mensaje potente y composicion fuerte.

Debilidades:

- Usa tokens inexistentes en varios bloques inferiores.
- Los metadatos pequenos del hero oscuro van justos de contraste.

Veredicto:

- Visualmente prometedora, pero todavia con deuda tecnica de sistema.

## `archives/app/dashboard.html`

Nota visual: 5.0/10

Fortalezas:

- Placeholder simple y entendible.

Debilidades:

- Queda muy por debajo del resto del marketing site.

Veredicto:

- Aceptable como stub, no como continuidad visual de producto.

## 8. Orden recomendado de correccion para otra IA o equipo

Orden de trabajo sugerido:

1. Sanear tokens visuales del sistema
2. Corregir contrato de botones y asegurar size modifier o default seguro
3. Implementar estado visual real del menu movil
4. Corregir contraste en dark UI y superficies primarias
5. Quitar dependencia del reveal para la visibilidad inicial de anchors
6. Normalizar familia de pills, badges, jump links y sidebar links
7. Migrar overrides inline repetidos a clases de sistema
8. Rehacer visualmente el selector de segmentos en `solutions.html`
9. Reequilibrar formulario de contacto en `company.html`

## 9. Definition of Done visual

No deberia darse por cerrada la correccion hasta que se cumpla todo lo siguiente:

- Cero tokens CSS no definidos
- Cero botones `.btn` sin size modifier o fallback seguro
- Menu movil con estado abierto visible y coherente
- Todo texto pequeno en AA 4.5:1 o superior
- Ningun deep link carga contenido principal en `opacity: 0`
- Todas las pills y badges tienen aire vertical consistente
- Las paginas de soluciones comparten un lenguaje de superficies claramente sistemico
- Los estilos inline dejan de ser el mecanismo principal para spacing y borders

## 10. Juicio final

Este trabajo no esta mal visualmente. De hecho, tiene varios momentos buenos y una direccion de marca bastante clara. Pero bajo una revision senior de producto real, todavia no pasa como interfaz visual plenamente terminada.

La lectura honesta es esta:

- Concepto visual: aprobado con buena base
- Calidad de sistema: insuficiente
- Acabado premium: todavia no
- Potencial tras correccion: alto

Si otra IA va a intervenir el proyecto, mi recomendacion es que no ataque "pixel sueltos" primero. Debe empezar por contratos del sistema visual: tokens, botones, menu movil, contraste y visibilidad inicial. Si no se corrige esa capa, cualquier refinamiento posterior sera cosmetico y fragil.
