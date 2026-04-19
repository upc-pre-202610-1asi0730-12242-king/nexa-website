# Nexa Grid And Spacing Findings

## Diagnostico general
La estructura actual funciona mejor que la identidad visual. El sitio tiene varios shells utiles: contenedores anchos, heroes con masa real, grids de 3 y 4 columnas, y CTA closures bien centrados. El problema no es la ausencia de layout. El problema es que varias secciones viven dentro de una paleta demasiado plana y una tipografia demasiado generica, asi que la estructura pierde impacto.

## Layouts que si vale la pena rescatar

### 1. `container-wide`
- Origen: `assets/css/layout.css`
- Por que sirve: da espacio suficiente para contenido B2B sin encerrar la pagina en un ancho de plantilla.
- Que tiene bueno: permite heroes, proof cards y comparisons con aire suficiente.
- Que tiene roto: algunas secciones internas no aprovechan todo el ancho disponible y vuelven a sentirse estrechas por exceso de wrappers.
- Veredicto: `preservar`

### 2. Hero full-bleed con contenido y prueba visual
- Referencia: `index.html`, validado con `archives/audit-shots/home-fullpage-desktop.png`
- Por que sirve: combina claim, supporting copy y modulo demostrativo.
- Que tiene bueno: se siente mas producto que brochure.
- Que tiene roto: depende demasiado de superficies claras cercanas; si el proof card perdiera peso, el hero caeria.
- Veredicto: `preservar`

### 3. Grids amplios de cards operativas
- Referencia: home, platform, solution pages
- Por que sirven: permiten mostrar capacidades, pains y comparaciones sin columnas estrechas.
- Que tienen bueno: buena lectura en desktop, especialmente cuando la card tiene contenido real.
- Que tienen roto: cuando la card contiene relleno, el espacio amplio solo hace mas visible el vacio.
- Veredicto: `preservar con criterio`

### 4. Closing CTA shell
- Referencia: `assets/css/components.css`, `platform.html`, `company.html`
- Por que sirve: buen recurso de cierre editorial y comercial.
- Que tiene bueno: separa el ultimo paso del resto del scroll.
- Que tiene roto: visualmente depende demasiado del mismo idioma de cards palidas.
- Veredicto: `revisar levemente`

## Layouts que deben usarse solo como inspiracion

### Page heroes interiores
- Referencia: `platform.html`, `company.html`, `solutions*.html`
- Lo util: estructura con eyebrow, headline, supporting copy y companion card.
- Lo debil: varios quedan demasiado altos para la informacion que cargan.
- Riesgo: introducen demasiado aire antes de entregar valor.
- Veredicto: `usar solo como inspiracion`

### FAQ two-column shell
- Referencia: `faq.html`
- Lo util: separa indice lateral y contenido principal.
- Lo debil: depende mucho de la fuerza del copy y de los anchors.
- Riesgo: si la columna lateral no agrega navegacion real, queda como espacio muerto.
- Veredicto: `usar solo como inspiracion`

## Layouts que desperdician espacio

### Wrappers adicionales dentro de secciones ya anchas
- Problema: varios modulos tienen contenedor amplio y luego vuelven a encerrarse.
- Efecto: la pagina promete amplitud pero entrega cajas medianas.
- Decision: simplificar shells.

### Cards con demasiado padding para poco contenido
- Problema: algunas cards parecen premium solo por area vacia.
- Efecto: sensacion de maqueta inflada.
- Decision: ajustar densidad o eliminar cards flojas.

### Filas largas de bloques con el mismo tratamiento
- Problema: el mismo patron repetido aplana la pagina.
- Efecto: recorrido monotono.
- Decision: variar ritmo visual y jerarquia entre secciones.

## Ritmo y espaciado

### Lo que funciona
- Buen uso de respiracion entre secciones principales.
- Padding suficiente para heroes y shells de CTA.
- Grillas que no colapsan de inmediato en desktop.

### Lo que no funciona
- Espaciados muy parecidos entre secciones fuertes y secciones de relleno.
- Falta de compresion en areas secundarias.
- Separaciones internas poco diferenciadas entre titulo, supporting text y CTA.

## Validacion visual usada
- `archives/audit-shots/home-fullpage-desktop.png`
- `archives/validation-screens/platform-full.png`
- `archives/validation-screens/faq-full.png`
- `archives/validation-screens/solutions-full.png`
- `archives/validation-screens/company-full.png`

## Recomendacion para v2.1
Reusar la logica de contenedores anchos, heroes con prueba visual y grids operativas. No reusar el exceso de wrappers ni la costumbre de resolver jerarquia con padding en vez de contenido fuerte. El siguiente rebuild necesita menos cajas, menos relleno y una relacion mas clara entre ancho, densidad y evidencia.
