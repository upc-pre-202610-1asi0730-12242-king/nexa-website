# Nexa Components For Rebuild

## Criterio de rescate

- Se rescata un componente si mejora confianza, claridad o conversion.
- Se degrada a inspiracion si el patron sirve pero su ejecucion actual es floja.
- Se descarta si solo aporta decoracion, ruido o apariencia de demo falsa.

## 1. Hero full-bleed con prueba visual

Origen:

- `index.html`
- `assets/css/components.css` (`.v5-hero*`)

Por que sirve:

- Abre con contexto de operacion real, no con ilustracion generica.
- Pone headline, CTA y prueba visual en el mismo plano.

Lo bueno:

- La foto y el overlay le dan peso industrial inmediato.
- El headline es corto y orientado a resultado.
- La CTA secundaria acompana sin competir demasiado.

Lo roto:

- Los stats del hero funcionan como promesa, no como prueba validada.
- El overlay lava demasiado la imagen en algunos recortes.
- Sigue dependiendo de una identidad tipografica debil.

Veredicto:

- `revisar levemente`

Referencia minima para rebuild:

```html
<section class="hero-proof">
  <div class="hero-proof__media"></div>
  <div class="hero-proof__content">
    <h1>Operacion visible. Control visible.</h1>
    <p>Pedidos, inventario, temperatura y entrega en un solo flujo.</p>
    <div class="hero-proof__actions">
      <a class="btn btn-primary btn-lg">Solicitar demo</a>
      <a class="btn btn-secondary btn-lg">Ver plataforma</a>
    </div>
    <div class="hero-proof__evidence">Prueba real del flujo, no decoracion.</div>
  </div>
</section>
```

## 2. Cards de "operational fit"

Origen:

- `index.html`
- `assets/css/components.css` (`.v5-fit-route*`)

Por que sirve:

- Traduce el producto a nodos operativos claros.
- Evita el error comun de vender una sola landing para todos.

Lo bueno:

- Cada card tiene una ruta operacional clara.
- La estructura es simple de escanear.
- Hace util la pagina de soluciones desde la home.

Lo roto:

- El tratamiento visual es demasiado palido.
- Las tres cards se parecen demasiado entre si.
- Falta una capa de prueba por vertical.

Veredicto:

- `revisar levemente`

## 3. Comparacion "WhatsApp chaos vs Nexa"

Origen:

- `index.html`
- `assets/css/components.css` (`.v5-chaos*`)

Por que sirve:

- Es el bloque mas entendible del sitio.
- No explica en abstracto: compara desorden contra estado visible.

Lo bueno:

- La mitad izquierda dramatiza bien el problema.
- La mitad derecha traduce el beneficio a estados concretos.
- El patron funciona tanto para home como para decks comerciales.

Lo roto:

- Algunas versiones historicas del bloque arrastraron ejemplos fuera de scope.
- Si el contenido no se limpia, puede volver a oler a mockup generico.
- El patron necesita datos refrigerados reales, no placeholders cambiables.

Veredicto:

- `revisar levemente`

## 4. Heroes de soluciones con prueba ligera

Origen:

- `solutions-importers.html`
- `solutions-distributors.html`
- `solutions-cold-storage.html`
- `assets/css/components.css` (`.page-hero*`, `.hero-sidecard`, `.page-hero-visual-card`)

Por que sirve:

- Cada vertical recibe una entrada propia.
- El hero deja de ser slogan y pasa a ser escenario.

Lo bueno:

- Importers usa un pipeline simple y util.
- Distributors usa un micro estado de entrega.
- Cold storage usa card de infraestructura y KPIs de red.

Lo roto:

- El sistema esta duplicado y sobredefinido en CSS.
- La calidad entre verticales no es pareja.
- Parte de los KPIs funciona como afirmacion comercial, no como prueba.

Veredicto:

- `revisar levemente`

## 5. FAQ accordion

Origen:

- `faq.html`
- `assets/css/components.css` (`.faq-*`)
- `assets/js/interactions.js`

Por que sirve:

- Ordena dudas comerciales en vez de soltarlas en una pagina plana.
- Hace visible el proceso de evaluacion.

Lo bueno:

- Buena arquitectura de informacion por grupos.
- Interaccion simple.
- El patron es reusable en otras paginas de decision.

Lo roto:

- Varias respuestas mezclan verdad de producto con claims no verificados.
- La sidebar es util pero no imprescindible.
- La UI visual es correcta, no memorable.

Veredicto:

- `reusar tal cual` para el patron de interaccion
- `revisar levemente` para contenido y visual

## 6. CTA de cierre con siguiente paso claro

Origen:

- `index.html`
- `platform.html`
- `faq.html`
- `solutions-*.html`
- `assets/css/components.css` (`.v5-cta*`, `.closing-cta*`)

Por que sirve:

- Baja la ansiedad del usuario.
- Explica el siguiente paso en vez de solo pedir contacto.

Lo bueno:

- El mejor caso es el home: tres pasos arriba, cierre verbal fuerte abajo.
- Las soluciones usan cierres orientados a cada flujo.
- El layout ancho soporta bien copy y CTA.

Lo roto:

- Se repite demasiado el mismo shell.
- Algunas versiones internas caen en copy relleno.
- El sistema visual del cierre esta distribuido en demasiados overrides.

Veredicto:

- `revisar levemente`

## 7. Formulario de contacto oscuro

Origen:

- `company.html`
- `assets/css/components.css` (`.contact-dark-*`)
- `assets/js/interactions.js`

Por que sirve:

- Es la pieza de conversion mas seria del sitio.
- Explica que pasa despues del envio.

Lo bueno:

- Buen contraste entre expectativa humana y formulario.
- La lista "what happens after you write" es util.
- El layout de dos columnas tiene peso comercial.

Lo roto:

- El envio exitoso es simulado en frontend.
- El copy promete tiempos concretos que requieren validacion.
- La pieza esta mejor como patron de estructura que como implementacion lista.

Veredicto:

- `revisar levemente`

## 8. Cards de soporte y confianza de `company.html`

Origen:

- `company.html`
- `assets/css/components.css` (`.company-support-card`)

Por que sirve:

- Traducen confianza a comportamientos operativos.

Lo bueno:

- Hablan de onboarding humano, hardware existente, soporte y offline.
- El contenido es mas util que el tipico "about us" vacio.

Lo roto:

- Son demasiadas cajas para ideas de densidad media.
- Visualmente ya se sienten cercanas al template SaaS.
- Varias podrian comprimirse en una estructura mas dura y menos repetitiva.

Veredicto:

- `usar solo como inspiracion`

## 9. Cards "before / after" de plataforma

Origen:

- `platform.html`
- `assets/css/components.css` (`.platform-change-card`)

Por que sirve:

- El patron comparativo es comercialmente util.

Lo bueno:

- Hace tangible el cambio operacional.
- Funciona bien para ventas, no solo para marketing.

Lo roto:

- La ejecucion actual es demasiado suave y prolija.
- Le falta mas friccion y evidencia real del "before".

Veredicto:

- `usar solo como inspiracion`

## 10. Footer editorial repetido

Origen:

- casi todas las paginas activas

Por que sirve:

- Cierra con una ruta util y conocida.

Lo bueno:

- Repite accesos importantes.
- El footer oscuro si da cierre de marca.

Lo roto:

- El bloque editorial superior repite demasiado el mismo mensaje.
- "Operational clarity" ya esta gastado.

Veredicto:

- `usar solo como inspiracion`

## 11. Widget flotante de soporte

Origen:

- casi todas las paginas activas
- `assets/css/patterns.css`
- `assets/js/interactions.js`

Por que no sirve:

- Introduce comportamiento de producto que el sitio no cumple.
- Baja credibilidad al mostrar chat futuro y soporte simulado.

Lo poco rescatable:

- Nada critico para marketing.

Lo roto:

- "Live chat is coming soon" no deberia vivir en una pagina B2B seria.
- Duplica rutas que el footer y el CTA ya resuelven mejor.

Veredicto:

- `descartar`

## 12. Repeticiones decorativas de gradients y pale cards

Origen:

- `assets/css/components.css`
- `assets/css/patterns.css`

Por que no sirve:

- Es una textura visual, no un componente.

Lo roto:

- Diluyen identidad.
- Hacen que demasiadas secciones parezcan intercambiables.

Veredicto:

- `descartar`

