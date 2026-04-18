# Nexa v2.1 Rescue Package Specification

## 1. Objetivo del rescue package

Este paquete existe para separar criterio util de ruido heredado.

No es un redesign en sitio.
No es una refactorizacion del proyecto activo.
No es una libreria visual paralela.

Su funcion es dejar una base curada para un rebuild futuro de Nexa v2.1 con cuatro salidas claras:

- input de diseno
- input de contenido
- input estructural
- notas tecnicas para no arrastrar deuda actual

Regla central de todo el paquete:

- conservar solo lo que aumente confianza, claridad, usabilidad o credibilidad real
- rechazar lo generico, AI-made, demasiado palido, repetitivo, poco contrastado o estructuralmente debil

## 3. Que vale la pena preservar

- Segmentacion por nodo operativo. Importers, distributors y cold storage le dan estructura comercial real al producto.
- Comparacion "WhatsApp chaos vs Nexa". Es la pieza mas facil de entender y la mas cercana a un proof block util.
- Heroes de soluciones con prueba visual ligera. El sistema mejora cuando muestra un flujo o un estado en lugar de prometer en abstracto.
- FAQ con IA clara y accordion simple. Funciona como pieza de decision, no solo como relleno SEO.
- CTA de cierre con "que pasa despues". Reduce friccion y baja el tono de pitch genrico.
- Formulario oscuro de contacto con expectativa de respuesta. Es una buena pieza de conversion si se limpia el claim.
- Cards de soporte y onboarding de `company.html` cuando hablan de acompanamiento humano, no cuando solo repiten cajas blancas.
- Uso de `container-wide` y shells de 4 columnas. La estructura amplia le sienta mejor a Nexa que una landing angosta.
- Azul principal y footer oscuro. Son las dos decisiones mas coherentes del sistema visual.

## 4. Que vale la pena preservar parcialmente

- Sistema de botones. La base, tamanos, focus y loading sirven; el polish visual no es suficiente para copiarlo sin criterio.
- Badge / eyebrow system. La pieza funciona, pero esta sobreusada y sin jerarquia suficiente entre contextos.
- Sistema de page heroes internos. La familia estructural sirve, pero hoy esta duplicada y sobreescrita en CSS.
- Colorimetria de superficies. Hay direccion, pero no hay sistema tonal maduro.
- Copy de soporte humano y despliegue rapido. La tesis es buena; varios claims necesitan validacion antes de sobrevivir.

## 5. Que debe descartarse

- La identidad tipografica activa. `assets/css/typography.css` usa Helvetica en todo y no merece pasar a v2.1.
- Cualquier claim no validado usado como prueba central. El sitio actual depende demasiado de porcentajes y SLAs que no estan demostrados en el front.
- El widget flotante de soporte y el chat "coming soon". Restan seriedad y no anaden confianza.
- Repeticion de gradients palidos y cards blancas casi vacias. Eso empuja el sitio hacia un SaaS generico.
- `components.css` como base de rebuild. Tiene demasiadas redefiniciones y overrides tardios.
- Restos de scope viejo o contaminado. Nada pharma, healthcare, insulin o clinical debe reingresar.
- `archives/rebuild-kit/*` como plantilla de partida. Es referencia historica, no base confiable.

## 6. Que debe inspirar el siguiente rebuild

- Nexa funciona mejor cuando se presenta como software operativo, no como "AI SaaS" abstracto ni un ai slop.
- El producto gana cuando muestra trabajo visible: estados, pruebas, handoffs, inventario, alerts, dispatch.
- La mejor narrativa no es "feature list". Es "caos actual vs control operativo".
- La marca se fortalece cuando la evidencia visual se siente familiar y facil de entender por cualquier empresario.
- El cierre comercial correcto no es agresivo. Es claro, humano y especifico sobre el siguiente paso.

## 7. Direccion de diseno recomendada para Nexa v2.1

- Separar mejor superficie editorial de superficie operativa. Hoy casi todo cae en la misma familia de card lavada.
- Introducir una identidad tipografica real. El sitio ya pide una pareja editorial/UI, pero el codigo activo no la implementa.
- Usar layouts mas anchos, menos cajas, mas ritmo horizontal y menos dependencia de tarjetas para cada idea.
- Mantener prueba visual en hero, comparison, FAQ y CTA, pero exigir evidencia mas creible y mas especifica por vertical.
- Reforzar el tono B2B LatAm de operaciones refrigeradas. Menos "clarity" abstracta, mas control, handoff, merma, temperatura, FEFO y trazabilidad.

## 8. Limpieza tecnica y de diseno recomendada antes del rebuild

- No reutilizar `assets/css/components.css` como base directa.
- Rehacer tokens, tipografia, componentes y layouts desde contratos limpios.
- Consolidar componentes repetidos que hoy existen en varias capas: `page-hero`, `badge`, `faq-layout`, `closing-cta`.
- Resolver el mismatch entre documentacion tecnica y CSS activo en tipografia.
- Tratar todos los claims como contenido pendiente de validacion, no como sistema de prueba resuelto.
- Eliminar features placeholder del producto de marketing: chat futuro, interacciones simuladas sin backend, support states falsos.
- Rehacer la biblioteca de ejemplos visuales para que nunca vuelva a contaminarse con insulin, pharma o healthcare.

