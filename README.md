<div align="center">

<br/>

<img src="docs/contenido-para-nexa-v2.1/08-notas-tecnicas/nexa-logo.svg" alt="Nexa Logo" width="220"/>

<br/><br/>

# Nexa — Landing Page

**Plataforma B2B para distribuidores de productos refrigerados y congelados en Perú**

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

<br/>

![Course](https://img.shields.io/badge/Curso-1ASI0730%20Aplicaciones%20Web-0a2540?style=flat-square)
![Cycle](https://img.shields.io/badge/Ciclo-2026--10-0a2540?style=flat-square)
![University](https://img.shields.io/badge/Universidad-UPC-0a2540?style=flat-square)
![Team](https://img.shields.io/badge/Equipo-King-2a67d9?style=flat-square)
![Status](https://img.shields.io/badge/Estado-En%20desarrollo-f59e0b?style=flat-square)

<br/>

</div>

---

## ¿Qué es Nexa?

Nexa es una plataforma web B2B para distribuidores de productos refrigerados y congelados. El problema que atacamos es bastante concreto: hoy en día, la mayoría de pedidos entre distribuidores y sus compradores (bodegas, minimarkets, HORECA) se coordinan por WhatsApp, llamadas y planillas manuales. Eso genera errores, pérdidas y cero trazabilidad.

Con Nexa, el flujo de pedidos pasa a ser estructurado y digital:

```
Sin Nexa:
  Comprador → WhatsApp audio → Staff lo interpreta → Planilla manual → Despacho con errores

Con Nexa:
  Comprador → Portal B2B → Pedido estructurado → Visibilidad para todos → Despacho limpio
```

---

## Stack

| Capa | Tecnología |
|---|---|
| Markup | HTML5 semántico |
| Estilos | CSS3 con tokens propios (sin frameworks) |
| Comportamiento | JavaScript vanilla |
| Animaciones | GSAP + ScrollTrigger |
| Internacionalización | i18n propio (es_419 / en_US) |
| Despliegue | GitHub Pages |

La web app (repositorio separado, fase siguiente) usará Vue.js + ASP.NET Core.

---

## Estructura del repo

```
nexa-website/
│
├── index.html          # Landing principal
├── assets/
│   ├── css/            # Tokens, tipografía, layout, botones, componentes
│   ├── js/             # Animaciones, interacciones, i18n
│   └── img/            # Assets visuales
│
├── pages/              # Páginas adicionales
└── docs/               # Documentación del proyecto (no se despliega)
```

---

## Cómo correrlo localmente

```bash
git clone https://github.com/upc-pre-202610-1asi0730-12242-king/nexa-website.git
cd nexa-website
python3 -m http.server 8080
# Abre http://localhost:8080
```

También funciona con Live Server de VS Code.

---

## Equipo

**Organización:** [upc-pre-202610-1asi0730-12242-king](https://github.com/upc-pre-202610-1asi0730-12242-king)

| Código | Integrante | Rol |
|---|---|---|
| U202323040 | Yucra Sandoval, Diego Sebastian | Team Leader |
| U202411937 | Marín Cueva, César Fernando | Team Member |
| — | Verde Bueno, Joaquín Francisco | Team Member |
| — | Torrejón De Los Santos, Gino Rodrigo | Team Member |
| U202413142 | Rojas Mancilla, Gerard Gianpier | Team Member |

---

<div align="center">

<br/>

**Nexa** · Universidad Peruana de Ciencias Aplicadas · 2026-10

*1ASI0730 — Aplicaciones Web · Ingeniería de Software*

<br/>

</div>
