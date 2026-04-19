# Nexa Color System Candidates

## Diagnostico general
La colorimetria actual tiene una direccion util, pero no un sistema tonal maduro. Hay una base recuperable: azul primario serio, superficies frias claras y un footer oscuro que transmite mas solidez que el resto del sitio. El problema es la ejecucion. La mayoria de los tonos claros estan demasiado cerca entre si. El resultado es una interfaz limpia, pero lavada.

El sistema sirve como punto de partida visual. No sirve como sistema final.

## Colores que si vale la pena rescatar

### 1. Azul primario de marca
- Origen: `assets/css/tokens.css`
- Tokens observados: `--c-primary`, `--c-primary-hover`, `--c-primary-light`
- Por que sirve: da continuidad entre hero, CTAs, pills y enlaces accionables.
- Que tiene bueno: se siente mas operativo que corporativo vacio. Funciona bien sobre blanco y en botones.
- Que tiene roto: no existe una escalera tonal completa. Hay azul principal y variaciones de uso, pero no una familia resuelta para hover, active, focus ring, backgrounds, lines y data visualization.
- Veredicto: `revisar levemente`

### 2. Footer oscuro
- Origen: `assets/css/tokens.css`, `assets/css/components.css`
- Tokens observados: `--c-footer-bg`, `--c-footer-dark`
- Por que sirve: es una de las pocas zonas que comunica peso y cierre real.
- Que tiene bueno: mejora el contraste frente al resto del sitio y ayuda a que la marca no parezca un SaaS generico de plantilla.
- Que tiene roto: algunos textos secundarios pierden fuerza sobre el fondo oscuro cuando se usa opacidad en vez de un tono dedicado.
- Veredicto: `revisar levemente`

### 3. Superficies frias neutras
- Origen: `assets/css/tokens.css`
- Tokens observados: `--c-base`, `--c-surface`, `--c-border-light`
- Por que sirven: ayudan a separar secciones, cards y shells sin caer en bloques grises pesados.
- Que tienen bueno: la direccion fria encaja con operaciones, trazabilidad y producto B2B.
- Que tienen roto: la distancia entre blanco, off-white y borde es demasiado corta. Muchas capas se pisan entre si.
- Veredicto: `usar solo como inspiracion`

### 4. Estados semanticos base
- Origen: `assets/css/tokens.css`
- Tokens observados: `--c-success`, `--c-warning`, `--c-error`
- Por que sirven: muestran que existe una intencion de sistema.
- Que tienen bueno: permiten construir badges, alerts y estados de formularios sin improvisar desde cero.
- Que tienen roto: no aparecen articulados como familia tonal ni como contrato de uso. Son fichas sueltas.
- Veredicto: `usar solo como inspiracion`

## Colores que no merecen sobrevivir tal cual

### Blancos demasiado cercanos entre si
- Problema: demasiadas superficies casi iguales.
- Efecto: cards, fondos y shells pierden jerarquia.
- Consecuencia: la pagina se ve correcta, pero sin tension visual ni autoridad.
- Veredicto: `descartar como sistema`

### Bordes demasiado timidos
- Problema: `--c-border-light` y varios strokes de cards no separan suficiente.
- Efecto: los modulos se mezclan con el fondo.
- Consecuencia: el layout parece mas vacio de lo que realmente es.
- Veredicto: `descartar como contrato final`

### Gradientes palidos decorativos
- Problema: varios fondos y cards agregan brillos leves que no aportan informacion.
- Efecto: lenguaje visual de startup generica.
- Consecuencia: baja la credibilidad en vez de subirla.
- Veredicto: `descartar`

## Que deberia sobrevivir hacia v2.1
- La idea de un azul operativo como color conductor.
- La idea de un footer oscuro como cierre editorial y de confianza.
- La direccion de superficies frias, pero con mas separacion tonal.
- La existencia de estados semanticos, reconstruidos como sistema real.

## Que debe reconstruirse antes del rebuild
- Una escalera tonal completa para primary, neutral y semantic.
- Un set claro para surface/background/elevated/stroke.
- Reglas de contraste para texto pequeno sobre fondos claros y oscuros.
- Tokens dedicados para focus ring, selected, disabled y hover.
- Una distincion real entre informacion, decoracion y estructura.

## Recomendacion directa para v2.1
Conservar la direccion cromatica, no la implementacion actual. Nexa puede seguir siendo azul, frio y tecnico sin quedarse atrapado en superficies palidas sin peso. El rebuild necesita menos hex sueltos y mas jerarquia tonal real.
