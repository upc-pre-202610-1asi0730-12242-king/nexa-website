# Nexa Interaction Components Reference

## 1. FAQ accordion logic

Origen:

- `faq.html`
- `assets/js/interactions.js`

Por que sirve:

- Es simple, entendible y suficientemente reusable.

Lo bueno:

- Abre una respuesta y cierra las demas.
- Mantiene `aria-expanded`.
- Recalcula alturas al cambiar idioma o viewport.

Lo roto:

- Sigue usando `max-height`, que es correcto para marketing pero fragil para contenido dinamico grande.
- Depende de una sola respuesta abierta.

Veredicto:

- `revisar levemente`

Snippet de referencia para rebuild:

```js
const items = Array.from(document.querySelectorAll(".faq-item"));

function openItem(item) {
  const button = item.querySelector(".faq-question");
  const panel = item.querySelector(".faq-answer");
  panel.hidden = false;
  item.classList.add("open");
  button.setAttribute("aria-expanded", "true");
  panel.style.maxHeight = `${panel.scrollHeight}px`;
}

function closeItem(item) {
  const button = item.querySelector(".faq-question");
  const panel = item.querySelector(".faq-answer");
  item.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  panel.style.maxHeight = "0px";
  window.setTimeout(() => {
    if (!item.classList.contains("open")) panel.hidden = true;
  }, 360);
}
```

## 2. Validacion basica del formulario de contacto

Origen:

- `company.html`
- `assets/js/interactions.js`

Por que sirve:

- La validacion es minima y suficiente para un primer contrato de UX.

Lo bueno:

- Valida nombre, email y mensaje.
- Usa `aria-invalid`.
- Tiene estado de loading.

Lo roto:

- El submit exitoso es una simulacion.
- No hay integracion real con backend ni manejo de error de red.

Veredicto:

- `usar solo como inspiracion`

Snippet de referencia para rebuild:

```js
const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

function validateContact({ name, email, message }) {
  const errors = {};

  if (!name || name.trim().length < 2) errors.name = "Nombre invalido";
  if (!emailPattern.test(email || "")) errors.email = "Email invalido";
  if (!message || message.trim().length < 20) errors.message = "Mensaje demasiado corto";

  return errors;
}
```

## 3. Navbar dropdown y mobile menu

Origen:

- navbar compartida en paginas activas
- `assets/js/interactions.js`
- `assets/css/patterns.css`

Por que sirve:

- La arquitectura de navegacion esta bien planteada para un sitio de producto con verticales.

Lo bueno:

- El dropdown de solutions esta donde debe estar.
- El mobile menu ya tiene estado visual real en CSS.
- La estructura soporta expansion futura.

Lo roto:

- El sistema arrastra deuda historica de auditorias que ya no representan el estado actual.
- Sigue habiendo demasiadas variantes de CTA en header para un sitio pequeno.

Veredicto:

- `revisar levemente`

## 4. Scroll reveal

Origen:

- `assets/js/animations.js`

Por que no debe sobrevivir como sistema base:

- Es decoracion, no producto.
- Aumenta dependencia de JS para una pagina que ya tiene suficiente complejidad visual.

Lo poco rescatable:

- El gating por `prefers-reduced-motion` esta bien.

Lo roto:

- No aporta credibilidad.
- Sigue siendo un layer extra que el rebuild no necesita por defecto.

Veredicto:

- `descartar`

## 5. Support widget / support panel

Origen:

- `assets/js/interactions.js`
- `assets/css/patterns.css`

Por que no debe pasar a v2.1:

- Simula una capa de soporte producto que el marketing no puede sostener.
- Duplica rutas ya resueltas por CTA, footer y FAQ.

Veredicto:

- `descartar`

## 6. Sistema de cambio de idioma

Origen:

- `assets/js/i18n.js`
- navbar compartida

Por que sirve:

- Nexa probablemente seguira necesitando ingles y espanol.

Lo bueno:

- La traduccion esta desacoplada del HTML por claves.
- El contrato es simple.

Lo roto:

- El contenido traducido no siempre tiene la misma calidad editorial en ambos idiomas.
- La capa de marketing aun no decide que mensajes deben vivir solo en un idioma.

Veredicto:

- `usar solo como inspiracion`

