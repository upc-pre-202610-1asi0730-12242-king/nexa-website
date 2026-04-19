# Nexa Surface And Contrast Findings

## Hallazgo central
El sitio no fracasa por una mala intencion cromatica. Fracasa por falta de distancia entre capas. Hay demasiadas superficies claras casi iguales y demasiados textos secundarios resueltos con opacidad suave. Eso reduce claridad y autoridad.

## Donde el contraste funciona

### Hero principal
- Referencia validada contra `archives/audit-shots/home-fullpage-desktop.png`
- Lo util: el fondo claro, el azul primario y la tarjeta de prueba visual generan una separacion suficiente.
- Limite: funciona porque el modulo central tiene masa visual. No porque el sistema entero tenga buen contraste.

### Footer
- Referencia validada contra `archives/validation-screens/company-full.png`
- Lo util: el fondo oscuro recupera peso institucional.
- Limite: parte del texto secundario pierde firmeza por usar tonos demasiado apagados.

### Botones primarios
- Referencia: `assets/css/buttons.css`
- Lo util: el CTA principal si se distingue del entorno.
- Limite: el sistema alrededor del boton es mas debil que el propio boton.

## Donde el contraste falla

### Cards sobre fondos casi blancos
- Referencia: home, platform, solutions
- Problema: surface, card y page background viven en una banda tonal demasiado estrecha.
- Resultado: la interfaz parece plana incluso cuando la estructura es correcta.
- Decision: rehacer la separacion tonal.

### Texto secundario sobre fondos oscuros
- Referencia: footer y closing CTA
- Problema: uso excesivo de opacidad en lugar de un color secundario dedicado.
- Resultado: la lectura aguanta en desktop, pero pierde presencia en textos pequeños.
- Decision: redefinir tokens de texto para fondos oscuros.

### Bordes de tarjetas y shells
- Referencia: `assets/css/tokens.css`, `assets/css/components.css`
- Problema: bordes demasiado debiles para ordenar modulos densos.
- Resultado: cards anchas que deberian sentirse solidas terminan sintiendose blandas.
- Decision: reconstruir strokes y niveles de elevacion.

### Gradientes decorativos palidos
- Referencia: cards y wrappers en home y solutions
- Problema: agregan brillo pero no agregan informacion.
- Resultado: ruido visual con sensacion de maqueta automatica.
- Decision: descartar.

## Evaluacion de superficies

### Superficie base
- Utilidad: correcta como lienzo general.
- Falla: demasiado cercana a otras capas.
- Veredicto: `usar solo como inspiracion`

### Superficie elevada
- Utilidad: intenta separar modulos importantes.
- Falla: no siempre se percibe como otro nivel.
- Veredicto: `revisar profundamente`

### Superficie oscura
- Utilidad: entrega mas peso y cierre.
- Falla: necesita mejores tokens de texto y borde.
- Veredicto: `revisar levemente`

## Recomendacion para el rebuild
- Definir al menos 5 pasos tonales para neutrales claros.
- Definir al menos 4 pasos tonales para el azul primario.
- Separar explicitamente `background`, `surface`, `surface-raised`, `stroke-subtle`, `stroke-strong`.
- Dejar de usar opacidad como solucion principal para texto secundario.
- Reservar gradientes solo para momentos de marca, no como relleno sistematico.
