# Nexa Codebase Cleanup Before Rebuild

## Regla principal
No reutilizar `assets/css/components.css` como base directa del rebuild.

## Por que no
- Acumula demasiadas responsabilidades en un solo archivo.
- Contiene redefiniciones tardias de componentes que ya existen antes en el mismo sistema.
- Mezcla decision de layout, skin visual y excepciones de pagina.
- Hace dificil saber cual es el contrato real de un componente.

## Selectores y areas con deuda visible
- `.page-hero`
- `.badge`
- `.faq-layout`
- `.closing-cta`
- wrappers de cards y shells de soluciones

Estas areas aparecen reconfiguradas o extendidas varias veces. Eso obliga a leer el archivo entero para entender cada caso. No es base de sistema. Es acumulacion.

## Problemas de sistema detectados

### 1. Drift entre docs y codigo activo
- `docs/Nexa_V5_Technical_Style_Guidelines_Report.html` propone una direccion tipografica mas rica.
- `assets/css/typography.css` ejecuta una solucion mucho mas generica.
- Consecuencia: el equipo puede creer que existe un sistema que en produccion no esta ocurriendo.

### 2. Tokens incompletos
- Hay una direccion de color razonable.
- No hay escalera tonal suficientemente completa para surfaces, borders, focus y estados.
- Consecuencia: los componentes compensan con opacidad, gradientes suaves y overrides.

### 3. Componentes definidos por excepcion
- Varias piezas visuales dependen de ajustes especificos por pagina.
- Consecuencia: el sistema pierde portabilidad.

### 4. Copy y claims mezclados con UI
- Algunas promesas fuertes viven embebidas en cards y banners sin una capa clara de gobernanza editorial.
- Consecuencia: es facil heredar claims no verificados al rebuild.

### 5. JS util mezclado con micro-comportamientos dispensables
- Hay interacciones utiles como FAQ accordion y validacion basica.
- Tambien hay efectos de reveal y soporte flotante que no justifican su presencia.
- Consecuencia: conviene separar interaccion funcional de animacion ornamental.

## Limpieza recomendada antes de construir v2.1
1. Redefinir tokens de color, type, spacing y states en una capa nueva.
2. Separar layout, component contracts y page compositions.
3. Crear una matriz unica de tipografia que coincida con el codigo real.
4. Auditar claims con negocio antes de escribir nuevas paginas.
5. Migrar solo la logica util de JS: accordion, form validation, nav states.
6. Tratar `archives/rebuild-kit/*` como referencia historica, no como starter.

## Conclusion tecnica
El rebuild deberia extraer decisiones, no heredar archivos. La base actual contiene piezas rescatables, pero su composicion tecnica no merece continuidad directa.
