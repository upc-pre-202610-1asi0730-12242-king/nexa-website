# Nexa Button System Candidates

## Diagnostico general

El sistema de botones actual es util.
No es excepcional.
Si se lleva limpio al rebuild, cumple.
Si se copia sin criterio, se queda corto.

Lo que vale:

- matriz de tamanos
- estados de focus
- spinner de loading
- espaciado de iconos

Lo que no vale sobreproteger:

- brillo decorativo del primario
- excesiva dependencia de box-shadow como gesto premium

## Matriz base

Origen:

- `assets/css/buttons.css`

Lo bueno:

- `btn-sm`, `btn-md`, `btn-lg` dan un contrato claro.
- Hay disabled, loading y icon helpers.
- `focus-visible` existe y esta unificado.

Lo roto:

- El sistema depende totalmente de que siempre exista size modifier.
- No tiene un tercer estilo fuerte de "button-link" realmente resuelto.

Veredicto:

- `reusar tal cual` como base contractual

## 1. `btn-primary`

Lo bueno:

- Color correcto.
- Buen contraste.
- Tamaños creibles para CTA.
- Hover y loading estan cubiertos.

Lo roto:

- El sheen animado es accesorio.
- El patron no diferencia lo suficiente entre "CTA mayor" y "CTA corriente".

Veredicto:

- `revisar levemente`

## 2. `btn-secondary`

Lo bueno:

- Es el mejor companion del primario.
- No intenta inventar demasiado.
- Sirve para pagina, CTA y FAQ.

Lo roto:

- En fondos muy palidos puede perder presencia.

Veredicto:

- `reusar tal cual`

## 3. `btn-secondary-light`

Lo bueno:

- Funciona bien sobre hero fotografico o superficie compleja.

Lo roto:

- No deberia existir como variante global para cualquier contexto.
- Si se usa de mas, ensucia el sistema.

Veredicto:

- `usar solo como inspiracion`

## 4. `btn-ghost`

Lo bueno:

- Sirve para header y acciones de baja prioridad.

Lo roto:

- No alcanza como terciario de contenido.
- Se siente demasiado debil para conversion.

Veredicto:

- `revisar levemente`

## 5. Estados e iconografia

Lo bueno:

- focus visible correcto
- spinner claro
- disabled suficientemente claro
- `icon-right` y `icon-left` resuelven espaciado

Lo roto:

- falta una regla explicita de pressed para cada familia en tono y elevacion
- falta una definicion de width minima por tipo de CTA

Veredicto:

- `reusar tal cual` con endurecimiento menor

## Recomendacion para v2.1

- Conservar la matriz `sm / md / lg`.
- Mantener primario y secundario como sistema base.
- Rehacer el terciario como button-link o text action serio.
- No dejar que el boton dependa solo de sombra para parecer importante.

## Snippet de referencia para rebuild

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: 14px;
  border: 1px solid transparent;
  font: inherit;
  font-weight: 600;
}

.btn-primary {
  background: var(--c-primary);
  color: white;
}

.btn-secondary {
  background: white;
  color: var(--c-text-primary);
  border-color: var(--c-border-mid);
}

.btn:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 3px;
}
```

Contrato minimo de estados que si debe sobrevivir:

- `hover`
- `focus-visible`
- `active`
- `disabled`
- `loading`

