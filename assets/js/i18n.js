const STORAGE_KEY = 'nexa-lang';
const DEFAULT_LANG = 'en';
const TRANSLATIONS = { es: {} };

Object.assign(TRANSLATIONS.es, {
  "shared.nav.aria": "Navegacion principal",
  "shared.nav.logoAria": "Inicio de Nexa",
  "shared.nav.home": "Inicio",
  "shared.nav.platform": "Plataforma",
  "shared.nav.solutions": "Soluciones",
  "shared.nav.company": "Empresa",
  "shared.nav.faq": "FAQ",
  "shared.nav.requestDemo": "Solicitar una demostracion",
  "shared.nav.login": "Ingresar",
  "shared.nav.languageAria": "Selector de idioma",
  "shared.nav.mobileToggle": "Abrir navegacion",
  "shared.nav.importers.title": "Importadores y mayoristas",
  "shared.nav.importers.desc": "Ingreso portuario para lotes de queso, charcuteria y lacteos.",
  "shared.nav.distributors.title": "Distribuidores",
  "shared.nav.distributors.desc": "Cumplimiento de ultima milla, reposicion FEFO y pedidos B2B.",
  "shared.nav.storage.title": "Operadores de camaras frias",
  "shared.nav.storage.desc": "Camaras de queso, camaras lacteas y registros de inocuidad alimentaria.",
  "shared.footer.tagline": "La plataforma operativa para equipos de charcuteria, quesos y lacteos. Precision operativa en cada nodo refrigerado.",
  "shared.footer.product": "Producto",
  "shared.footer.company": "Empresa",
  "shared.footer.resources": "Recursos",
  "shared.footer.productLinks": `<li><a href="platform.html">Resumen de la plataforma</a></li><li><a href="platform.html#catalog">Datos de producto</a></li><li><a href="platform.html#inventory">Inventario en vivo</a></li><li><a href="platform.html#orders">Pedidos B2B</a></li><li><a href="platform.html#traceability">Trazabilidad</a></li>`,
  "shared.footer.companyLinks": `<li><a href="company.html">Sobre Nexa</a></li><li><a href="company.html#support">Como acompanamos</a></li><li><a href="company.html#contact">Contacto</a></li><li><a href="faq.html">FAQ</a></li>`,
  "shared.footer.resourceLinks": `<li><a href="faq.html">FAQ</a></li><li><a href="faq.html#getting-started">Primeros pasos</a></li><li><a href="faq.html#implementation">Implementacion</a></li><li><a href="company.html#contact">Solicitar una demostracion</a></li>`,
  "shared.footer.legal": "© 2026 Nexa Technologies, Inc. Todos los derechos reservados.",
  "shared.footer.privacy": "Politica de privacidad",
  "shared.footer.terms": "Terminos del servicio",
  "shared.footer.cookies": "Politica de cookies",
  "shared.footer.kicker": "Mantente cerca",
  "shared.footer.editorialTitle": "Mantente cerca del equipo que esta construyendo claridad operativa para alimentos refrigerados.",
  "shared.footer.editorialCopy": "Usa la misma linea directa que usamos durante los despliegues: habla con el equipo, explora la plataforma o entra al FAQ cuando necesites algo concreto.",
  "shared.footer.editorialPrimary": "Hablar con el equipo",
  "shared.footer.editorialSecondary": "Ver la plataforma",
  "shared.footer.direct": "Accesos directos",
  "shared.footer.directCopy": "Canales reales para escribir, pedir una demostracion o resolver dudas hoy.",
  "shared.footer.emailAria": "Enviar correo a Nexa",
  "shared.footer.contactAria": "Ir al contacto de Nexa",
  "shared.footer.faqAria": "Abrir el FAQ de Nexa",
  "shared.footer.solutionsAria": "Ver soluciones de Nexa",
  "shared.support.launcherAria": "Abrir panel de soporte",
  "shared.support.closeAria": "Cerrar panel de soporte",
  "shared.support.kicker": "Soporte",
  "shared.support.title": "Elige el siguiente paso.",
  "shared.support.copy": "Habla con el equipo, revisa la plataforma o abre el FAQ.",
  "shared.support.card1Title": "Hablar con el equipo",
  "shared.support.card1Copy": "Ve directo al equipo de despliegue.",
  "shared.support.card2Title": "Ver la plataforma",
  "shared.support.card2Copy": "Revisa como funciona el sistema.",
  "shared.support.card3Title": "Preguntas clave",
  "shared.support.card3Copy": "Abre las respuestas que mas revisan antes de decidir.",
  "shared.support.card4Title": "Elegir solucion",
  "shared.support.card4Copy": "Encuentra el flujo que encaja con tu operacion.",
  "shared.support.searchLabel": "Buscar en el FAQ",
  "shared.support.searchCopy": "Ir a respuestas estructuradas y detalles de implementacion.",
  "shared.support.composerLabel": "Inicia un mensaje",
  "shared.support.composerPlaceholder": "El chat en vivo estara disponible pronto. Usa hoy el formulario de contacto.",
  "shared.support.composerNote": `El chat en vivo estara disponible pronto. Por ahora, <a href="company.html#contact" class="support-composer-link">usa el formulario de contacto directo</a>.`,
  "shared.before": "Antes",
  "shared.after": "Despues"
});

Object.assign(TRANSLATIONS.es, {
  "home.meta.description": "Nexa — Un solo lugar para operar tu negocio de charcuteria, quesos y lacteos. Gestiona pedidos, inventario, temperatura y entregas sin caos por WhatsApp.",
  "home.meta.ogTitle": "Nexa — Tu operacion de charcuteria y lacteos, por fin visible",
  "home.meta.ogDescription": "Deja de perseguir actualizaciones por WhatsApp. Nexa le da a tu equipo un solo lugar para operar charcuteria, quesos y lacteos.",
  "home.meta.title": "Nexa — Tu operacion de charcuteria y lacteos, por fin visible",
  "home.hero.title": "Haz visible tu<br>operacion de <span class=\"text-accent\">charcuteria y lacteos.</span>",
  "home.hero.lead": "Inventario, pedidos, temperatura y entregas en una sola vista operativa. Hecho para queso, charcuteria y lineas lacteas que no pueden depender de hojas sueltas ni de grupos de WhatsApp.",
  "home.hero.ctaPrimary": "Solicitar una demostracion",
  "home.hero.ctaSecondary": "Ver la plataforma",
  "home.hero.stat1": "menos merma · promedio del primer trimestre",
  "home.hero.stat2": "hasta el primer despliegue",
  "home.hero.stat3": "soporte humano",
  "home.fit.aria": "Para quienes esta construido Nexa",
  "home.fit.badge": "Enfoque operativo",
  "home.fit.title": "Hecho para los nodos donde el control de charcuteria y lacteos se rompe primero.",
  "home.fit.copy": "Elige el perfil operativo que refleja como se mueve el producto en tu negocio y unifica pedidos, inventario, temperatura y prueba de entrega en una sola vista.",
  "home.fit.importers.meta": "Puerto a bodega",
  "home.fit.importers.title": "Importadores y mayoristas",
  "home.fit.importers.copy": "Telemetria de contenedor para el ingreso de lotes de queso, charcuteria y lacteos.",
  "home.fit.distributors.meta": "Bodega a ruta",
  "home.fit.distributors.title": "Distribuidores",
  "home.fit.distributors.copy": "Pedidos B2B, despacho FEFO y prueba de entrega en un mismo flujo.",
  "home.fit.storage.meta": "Monitoreo de instalacion",
  "home.fit.storage.title": "Operadores de camaras frias",
  "home.fit.storage.copy": "Monitoreo de camaras de queso, escalamiento y registro de inocuidad alimentaria.",
  "home.fit.fact1": "Primer despliegue en 5 dias",
  "home.fit.fact2": "Funciona sin conexion y con bajo ancho de banda",
  "home.fit.fact3": "No requiere departamento de TI",
  "home.chaos.badge": "Caos operativo",
  "home.chaos.title": "Deja de manejar tu operacion por WhatsApp",
  "home.chaos.copy": "Cuando pedidos, alertas de temperatura y pruebas de entrega caen en el mismo chat, nadie tiene el estado real de la operacion. Nexa convierte ese ruido en trabajo visible.",
  "home.chaos.current.label": "La realidad actual",
  "home.chaos.current.group": "Operaciones — 14 participantes",
  "home.chaos.current.msg1": "\"¿Alguien vio el pedido de Quesos del Valle?\"",
  "home.chaos.current.photo": "Foto borrosa de la factura...",
  "home.chaos.current.msg2": "\"La camara 4 se quedo sin conexion. Necesito ayuda.\"",
  "home.chaos.current.seen": "Visto hace 3 horas",
  "home.chaos.current.msg3": "\"No encuentro mi cuaderno de inventario...\"",
  "home.chaos.current.typing": "Carlos esta escribiendo...",
  "home.chaos.current.bottom": "¿Te suena conocido?",
  "home.chaos.nexa.label": "Con Nexa",
  "home.chaos.nexa.row1.title": "Pedido #4492 · Quesos del Valle",
  "home.chaos.nexa.row1.detail": "250 kg · Distribuidor Sur",
  "home.chaos.nexa.row1.badge": "Confirmado ✓",
  "home.chaos.nexa.row2.title": "Camara 01 · Temperatura",
  "home.chaos.nexa.row2.detail": "−18.2°C · Ultimas 24h",
  "home.chaos.nexa.row2.badge": "Estable",
  "home.chaos.nexa.row3.title": "Camara 04 · Alerta sin conexion",
  "home.chaos.nexa.row3.detail": "Equipo notificado automaticamente",
  "home.chaos.nexa.row3.badge": "Resuelto · 12s",
  "home.chaos.nexa.row4.title": "Inventario · Queso Brie Artesanal",
  "home.chaos.nexa.row4.detail": "450 cajas · Reposicion: jueves",
  "home.chaos.nexa.row4.badge": "Trazado",
  "home.chaos.nexa.bottom": "Todo visible. Nada se pierde.",
  "home.timeline.badge": "Flujo diario",
  "home.timeline.title": "Como cambia tu dia con Nexa",
  "home.timeline.copy": "Desde el ingreso hasta la confirmacion, cada paso se vuelve visible para tu equipo y para quienes esperan tu producto.",
  "home.timeline.step1.title": "Sincroniza stock",
  "home.timeline.step1.copy": "Cada SKU en cada ubicacion, actualizado en tiempo real. Sin hojas de calculo.",
  "home.timeline.step2.title": "Recibe pedidos",
  "home.timeline.step2.copy": "Tus clientes piden desde un portal. Los requisitos de temperatura se validan antes del despacho.",
  "home.timeline.step3.title": "Ruta y despacho",
  "home.timeline.step3.copy": "Rotacion FEFO y ruteo inteligente. Sale el producto correcto a la temperatura correcta.",
  "home.timeline.step4.title": "Confirma entrega",
  "home.timeline.step4.copy": "Firma digital y prueba fotografica en cada parada. Cadena de custodia completa.",
  "home.capabilities.badge": "Cobertura del sistema",
  "home.capabilities.title": "Lo que cubre Nexa",
  "home.capabilities.copy": "Cuatro areas operativas. Un sistema. Cada problema que antes se colaba por las grietas.",
  "home.capabilities.inventory.title": "Visibilidad de inventario",
  "home.capabilities.inventory.copy": "Sabe que tienes, donde esta y cuando reponer en cada ubicacion. Sin hojas de calculo ni supuestos.",
  "home.capabilities.inventory.product": "Queso Brie Artesanal",
  "home.capabilities.inventory.tag": "+12% demanda",
  "home.capabilities.inventory.count": "450 cajas",
  "home.capabilities.inventory.reorder": "Reposicion: jueves",
  "home.capabilities.orders.title": "Coordinacion de pedidos",
  "home.capabilities.orders.copy": "Del ingreso al despacho: cada pedido queda trazado. Tus clientes siguen el avance sin llamarte.",
  "home.capabilities.orders.status1": "Pedido #882 · despachado",
  "home.capabilities.orders.status2": "Pedido #901 · pendiente de validacion",
  "home.capabilities.temp.title": "Conciencia termica",
  "home.capabilities.temp.copy": "Alertas preventivas que evitan miles en producto perdido. Integra tus sensores actuales y recibe alertas instantaneas ante cualquier desvio.",
  "home.capabilities.temp.cert": "Listo para auditorias de inocuidad",
  "home.capabilities.temp.meta": "Estable · Ultimas 24h",
  "home.capabilities.temp.range": "Rango optimo (−18°C a −22°C)",
  "home.capabilities.delivery.title": "Confirmacion de entrega",
  "home.capabilities.delivery.copy": "Firma digital y prueba fotografica en cada parada. Cadena de custodia completa documentada.",
  "home.capabilities.delivery.metaTitle": "Entregado · Firmado",
  "home.capabilities.delivery.metaCopy": "M. Reyes · 14:32 · Foto adjunta",
  "home.adopt.title": "Despliegue medido en dias, no en trimestres",
  "home.adopt.copy": "Sin cambios pesados de TI. Sin detener la operacion. Nexa se integra a tu flujo en menos de dos semanas.",
  "home.adopt.item1.title": "Sincronizacion de equipos en 48 horas",
  "home.adopt.item1.copy": "Si usas Sensitech u Onset, mapeamos tus claves API de inmediato. No hace falta comprar equipo nuevo.",
  "home.adopt.item2.title": "Primero mapeamos el proceso",
  "home.adopt.item2.copy": "No te encerramos en un entorno cerrado. Mapeamos tus flujos fisicos actuales dentro de Nexa antes de la puesta en marcha.",
  "home.adopt.item3.title": "Despliegue guiado para alimentos refrigerados",
  "home.adopt.item3.copy": "Nuestro equipo acompana tus primeros despachos de forma segura. Nunca te dejamos solo.",
  "home.adopt.support.title": "Soporte humano 24/7",
  "home.adopt.support.copy": "Cuando algo falla en piso, necesitas una persona que entienda tu operacion, no un bot.",
  "home.adopt.support.cta": "Habla con una persona →",
  "home.cta.step1.title": "Cuentanos sobre tu operacion",
  "home.cta.step1.copy": "Tamano, ubicaciones y principales dolores.",
  "home.cta.step2.title": "Te mostramos Nexa con tus datos",
  "home.cta.step2.copy": "No es una demostracion generica. Son tus productos y tus rutas.",
  "home.cta.step3.title": "Tu equipo esta en vivo en una semana",
  "home.cta.step3.copy": "Puesta en marcha, capacitacion y soporte incluidos.",
  "home.cta.headline": "Sin demostraciones genericas.<br>Te mostramos como Nexa encaja en <span class=\"text-accent\">tu operacion.</span>",
  "home.cta.primary": "Agendar una consultoria",
  "home.cta.secondary": "Enviar un mensaje"
});

Object.assign(TRANSLATIONS.es, {
  "platform.meta.description": "Plataforma Nexa — Un solo sistema para catalogo, inventario, pedidos, temperatura y entrega de charcuteria, quesos y lacteos.",
  "platform.meta.ogTitle": "Nexa — Lo que realmente hace la plataforma",
  "platform.meta.ogDescription": "Cinco areas operativas. Un sistema. Sin hojas de calculo, sin WhatsApp, sin adivinar.",
  "platform.meta.title": "Nexa — Lo que hace la plataforma",
  "platform.hero.badge": "La plataforma",
  "platform.hero.title": "Un solo sistema para todo lo que maneja<br>tu equipo de charcuteria y lacteos.",
  "platform.hero.copy": "Catalogo, inventario, pedidos, temperatura y entrega para lineas de charcuteria, quesos y lacteos en un solo lugar. Sin hojas de calculo, sin grupos de WhatsApp, sin conciliacion manual.",
  "platform.hero.sidecardAria": "Alcance operativo de la plataforma",
  "platform.hero.kicker": "Huella operativa",
  "platform.hero.sidecardTitle": "El mismo sistema sigue al producto desde el catalogo hasta la entrega final.",
  "platform.hero.pill1": "5 areas operativas",
  "platform.hero.pill2": "Funciona sin conexion",
  "platform.hero.pill3": "En vivo en 5 dias",
  "platform.hero.pill4": "Soporte humano 24/7",
  "platform.modules.badge": "Lo que cubre Nexa",
  "platform.modules.title": "Cinco areas operativas. Un sistema.",
  "platform.modules.copy": "Cada una resuelve un problema concreto. Juntas eliminan las grietas donde se pierde producto, se confunden pedidos y nadie sabe que esta pasando.",
  "platform.modules.catalog.title": "Catalogo de producto",
  "platform.modules.catalog.copy": "Cada rueda de queso, SKU de charcuteria y linea lactea con su rango de temperatura, vida util y precio, visible para toda tu red de distribuidores. Si actualizas un producto, todos lo ven al instante. Se acabaron los PDFs y las listas por correo.",
  "platform.modules.catalog.col1": "Producto",
  "platform.modules.catalog.col2": "Stock",
  "platform.modules.catalog.col3": "Rango temp.",
  "platform.modules.catalog.col4": "Estado",
  "platform.modules.catalog.statusOptimal": "Optimo",
  "platform.modules.catalog.statusLow": "Stock bajo",
  "platform.modules.inventory.title": "Inventario en vivo",
  "platform.modules.inventory.copy": "Ve que tienes, donde esta y cuando vence en cada bodega, camara fria y camara de maduracion de queso. La rotacion FEFO es automatica: el sistema toma primero el lote mas cercano a vencerse.",
  "platform.modules.orders.title": "Pedidos B2B",
  "platform.modules.orders.copy": "Tus retailers, mostradores deli y equipos compradores hacen pedidos desde un portal donde ven tu catalogo real, precios reales y stock real. Sin llamadas para confirmar disponibilidad. Sin hilos interminables de correo.",
  "platform.modules.telemetry.title": "Temperatura y entrega",
  "platform.modules.telemetry.copy": "Tus choferes registran temperatura y recogen firma digital en cada entrega usando su propio telefono. Obtienes foto, ubicacion GPS y temperatura exacta al momento de la entrega.",
  "platform.modules.traceability.title": "Trazabilidad completa",
  "platform.modules.traceability.copy": "Cada producto tiene un registro completo: de donde vino, por que bodegas paso, a que temperatura estuvo y quien lo recibio. Los expedientes de inocuidad y trazabilidad se generan automaticamente.",
  "platform.changes.badge": "Cambios visibles",
  "platform.changes.title": "Problemas que desaparecen cuando usas Nexa.",
  "platform.changes.copy": "Tu trabajo diario cambia de formas muy practicas. Esto es lo primero que los operadores notan.",
  "platform.changes.card1.before": "El stock se sigue en hojas de calculo. Nadie sabe que esta por vencer hasta que ya es tarde.",
  "platform.changes.card1.after": "Stock en tiempo real en cada ubicacion. Alertas de vencimiento automaticas. La rotacion FEFO deja de ser opcional.",
  "platform.changes.card2.before": "Los pedidos llegan por WhatsApp, telefono o correo. Tu equipo los vuelve a escribir en otro sistema.",
  "platform.changes.card2.after": "Los clientes piden desde un portal B2B con precios y stock reales. Los pedidos llegan estructurados, confirmados y listos para despacho.",
  "platform.changes.card3.before": "Disputas de entrega sin evidencia. El cliente dice que llego tibio y no tienes como demostrar lo contrario.",
  "platform.changes.card3.after": "Firma digital, GPS, temperatura y foto con sello de tiempo en cada entrega. Las disputas se resuelven con evidencia.",
  "platform.changes.card4.before": "La data de temperatura vive en un logger local que nadie revisa hasta la auditoria.",
  "platform.changes.card4.after": "Monitoreo continuo con alertas instantaneas. Te enteras de una falla en camara de queso o lacteos en minutos, no dias.",
  "platform.workflow.badge": "Como se usa",
  "platform.workflow.title": "Tu equipo no necesita entrenamiento tecnico para usar esto.",
  "platform.workflow.copy": "Nexa esta diseñado para piso de bodega, camaras de queso y rutas de entrega, no para departamentos de TI.",
  "platform.workflow.step1.title": "Los jefes de operacion usan el tablero",
  "platform.workflow.step1.copy": "Un tablero en navegador que funciona en cualquier laptop o tablet. Ve stock, pedidos, temperaturas y alertas en una sola vista.",
  "platform.workflow.step2.title": "Los choferes usan su telefono",
  "platform.workflow.step2.copy": "La interfaz movil corre en cualquier navegador de smartphone. Los choferes registran entregas, fotos y temperaturas. Funciona sin conexion y sincroniza cuando vuelve la señal.",
  "platform.workflow.step3.title": "Tus clientes usan el portal B2B",
  "platform.workflow.step3.copy": "Tus distribuidores, tiendas especializadas y equipos compradores ingresan, ven catalogo con stock y precios en vivo, y piden directamente.",
  "platform.workflow.step4.title": "Las alertas te llegan a ti",
  "platform.workflow.step4.copy": "Desvios de temperatura, stock bajo o camaras sin conexion: Nexa avisa automaticamente a la persona correcta.",
  "platform.workflow.note": "<strong>Sin descargas. Sin aplicaciones pesadas. Sin procesos paralelos.</strong> Una sola capa operativa compartida por jefes, choferes y compradores.",
  "platform.phases.badge": "Puesta en marcha",
  "platform.phases.title": "En vivo en dias. Totalmente operativo en semanas.",
  "platform.phases.copy": "Configuramos todo mientras tu equipo sigue operando. Sin proyectos IT gigantes ni lanzamientos traumáticos.",
  "platform.phases.step1.title": "Aprendemos tu operacion",
  "platform.phases.step1.copy": "Mapeamos productos, ubicaciones y rutas. Revisamos compatibilidad del equipo existente. Tu nos dices que esta roto y configuramos Nexa alrededor de eso.",
  "platform.phases.step1.item1": "Mapeo de productos y rutas",
  "platform.phases.step1.item2": "Revision de compatibilidad del equipo",
  "platform.phases.step1.item3": "Tu equipo define que corregir primero",
  "platform.phases.step2.title": "Lo configuramos",
  "platform.phases.step2.copy": "Cargamos tu catalogo, conectamos sensores y capacitamos a tu equipo. La gente aprende antes de la puesta en marcha, no despues.",
  "platform.phases.step2.item1": "Catalogo e inventario cargados",
  "platform.phases.step2.item2": "Sensores y equipos conectados",
  "platform.phases.step2.item3": "Capacitacion practica del equipo",
  "platform.phases.step3.title": "Entras en vivo y nos quedamos",
  "platform.phases.step3.copy": "Tu equipo usa Nexa en operacion real. Monitoreamos los primeros despachos y resolvemos los problemas que aparezcan. Despues de 30 dias, operan con autonomia.",
  "platform.phases.step3.item1": "Operacion real desde el dia uno",
  "platform.phases.step3.item2": "Soporte dedicado por 30 dias",
  "platform.phases.step3.item3": "Soporte humano 24/7 despues de eso",
  "platform.cta.badge": "Cierre de plataforma",
  "platform.cta.title": "Si tu operacion mueve <span class=\"text-accent\">queso, charcuteria o lacteos</span>, esto ya aplica hoy.",
  "platform.cta.copy": "Cuentanos como se mueve tu producto y te mostraremos exactamente que modulos activar primero, que equipos aprovechar y cual es la ruta mas corta para entrar en vivo.",
  "platform.cta.note": "Siguiente paso",
  "platform.cta.meta": "Respondemos con un alcance de recorrido guiado ajustado a tu operacion y con la ruta mas corta hacia un despliegue real.",
  "platform.cta.primary": "Solicitar un recorrido guiado",
  "platform.cta.secondary": "Leer las FAQ",
  "platform.footer.productLinks": `<li><a href="platform.html">Resumen de la plataforma</a></li><li><a href="platform.html#catalog">Datos de producto</a></li><li><a href="platform.html#inventory">Inventario en vivo</a></li><li><a href="platform.html#orders">Pedidos B2B</a></li><li><a href="platform.html#traceability">Trazabilidad</a></li>`,
  "platform.footer.companyLinks": `<li><a href="company.html">Sobre Nexa</a></li><li><a href="company.html#support">Como acompanamos</a></li><li><a href="company.html#contact">Contacto</a></li><li><a href="faq.html">FAQ</a></li>`,
  "platform.footer.resourceLinks": `<li><a href="platform.html#how-it-works">Flujo y puesta en marcha</a></li><li><a href="faq.html">FAQ</a></li><li><a href="company.html#contact">Solicitar una demostracion</a></li><li><a href="solutions.html">Todas las soluciones</a></li>`
});

Object.assign(TRANSLATIONS.es, {
  "company.meta.description": "Nexa — Un equipo pequeno en Lima construyendo el sistema operativo que la logistica de charcuteria, quesos y lacteos venia necesitando.",
  "company.meta.ogTitle": "Nexa — Quienes somos",
  "company.meta.ogDescription": "Un equipo pequeno de ingenieros y operadores construyendo el sistema que la logistica de quesos y lacteos venia necesitando.",
  "company.meta.title": "Nexa — Quienes somos",
  "company.hero.badge": "Sobre Nexa",
  "company.hero.title": "Construido por personas que han trabajado<br>en operaciones de alimentos refrigerados.",
  "company.hero.copy": "Somos un equipo pequeno en Lima. Construimos el sistema operativo que las operaciones de charcuteria, quesos y lacteos venian necesitando, porque vimos de cerca lo que pasa cuando no existe.",
  "company.hero.sidecardAria": "Por que los operadores trabajan con Nexa",
  "company.hero.kicker": "Socio operativo",
  "company.hero.sidecardTitle": "Desplegamos con operadores, no solo con administracion o compras.",
  "company.hero.kpi1": `<div class="hero-kpi-value">Lima</div><div class="hero-kpi-label">Equipo de despliegue basado en el primer mercado que atendemos.</div>`,
  "company.hero.kpi2": `<div class="hero-kpi-value is-accent">1 dia</div><div class="hero-kpi-label">Tiempo tipico para una respuesta concreta despues del primer contacto.</div>`,
  "company.hero.kpi3": `<div class="hero-kpi-value">30 dias</div><div class="hero-kpi-label">Periodo de acompanamiento despues de la puesta en marcha antes de soltar por completo.</div>`,
  "company.hero.kpi4": `<div class="hero-kpi-value">Tu equipo</div><div class="hero-kpi-label">Nos adaptamos al equipo y a los flujos que ya usa tu operacion.</div>`,
  "company.origin.title": "Construimos Nexa porque no existia un sistema<br>para la forma real en que operan charcuteria y lacteos.",
  "company.origin.callout": "Pasamos meses dentro de operaciones de alimentos refrigerados: importadores, distribuidores y camaras frias. Los mismos problemas aparecian una y otra vez: stock de queso en hojas de calculo, pedidos de charcuteria entrando por WhatsApp y datos de temperatura encerrados en loggers que nadie revisaba hasta la auditoria o el reclamo.",
  "company.origin.body": "No eran operadores descuidados. Eran empresas serias funcionando sin un sistema hecho para su realidad. Los ERP genericos no cubrian temperatura. Las aplicaciones logisticas no cubrian inventario. Nadie unia el camino desde el catalogo hasta la entrega. Por eso construimos Nexa exactamente para eso.",
  "company.origin.stat1": `<div class="gap-stat-number">40%</div><div class="gap-stat-label">de los alimentos perecibles en LatAm se pierde antes de llegar al consumidor</div>`,
  "company.origin.stat2": `<div class="gap-stat-number">12%</div><div class="gap-stat-label">de ingreso promedio perdido por excursiones termicas</div>`,
  "company.origin.stat3": `<div class="gap-stat-number gap-stat-number-accent">34%</div><div class="gap-stat-label">de reduccion de merma en los primeros 90 dias con Nexa</div>`,
  "company.support.badge": "Como te acompanamos",
  "company.support.title": "Lo que pasa despues de que dices que si.",
  "company.support.copy": "No te damos un acceso y desaparecemos. Esto es lo que realmente significa trabajar con nosotros.",
  "company.support.card1": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m16 11 2 2 4-4"></path></svg></div><h3>Una persona real lleva tu puesta en marcha</h3><p>No es una videoguia ni una base de conocimiento. Alguien de nuestro equipo mapea tu operacion, carga tu catalogo, conecta tus sensores y entrena a tu gente directamente.</p>`,
  "company.support.card2": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0 1 16 0v3"></path><path d="M18 19a2 2 0 0 0 2-2v-2h-4v4z"></path><path d="M6 19a2 2 0 0 1-2-2v-2h4v4z"></path><path d="M10 19h4"></path></svg></div><h3>Hablas con personas, no con tickets</h3><p>Cuando algo se rompe o necesita ajuste, llegas directo a nuestro equipo. No hay bot, ni cola de tickets, ni espera de dias para obtener una respuesta util.</p>`,
  "company.support.card3": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="M8 15h4"></path><path d="M8 18h8"></path></svg></div><h3>Nos quedamos 30 dias despues de la puesta en marcha</h3><p>Monitoreamos tus primeros despachos reales, revisamos que la data termica sincronice bien y confirmamos que FEFO funcione en operacion antes de dar un paso al costado.</p>`,
  "company.support.card4": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div><h3>Tus datos siguen siendo tuyos</h3><p>Tu inventario, tus rutas, tus clientes y tus logs de temperatura son de tu operacion. Nunca vendemos ni compartimos tu informacion. Puedes exportar todo cuando quieras.</p>`,
  "company.support.card5": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg></div><h3>Funciona con tu equipo actual</h3><p>No te obligamos a comprar equipo nuevo. Si ya tienes sensores, nos conectamos a ellos. Si no, te recomendamos opciones segun presupuesto y operacion.</p>`,
  "company.support.card6": `<div class="company-support-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 16.5a5 5 0 0 1 7 0"></path><path d="M5 13a10 10 0 0 1 14 0"></path><path d="M2 9.5a15 15 0 0 1 4.36-3.14"></path><path d="M22 9.5a15 15 0 0 0-4.36-3.14"></path><path d="M12 20h.01"></path><path d="M3 3l18 18"></path></svg></div><h3>Funciona sin conexion</h3><p>¿Choferes en zonas con mala senal? La interfaz movil sigue registrando temperatura, firmas y GPS. Todo sincroniza automaticamente cuando vuelve la conectividad.</p>`,
  "company.thesis.badge": "Hecho por operadores",
  "company.thesis.title": "Construimos software porque vivimos el problema.",
  "company.thesis.body1": "Nexa nacio en Lima, Peru, con un equipo de ingenieros y operadores de supply chain. Vimos de primera mano la fuga operativa que aparece cuando la distribucion de queso, charcuteria y lacteos depende de logs desconectados, ERP genericos y WhatsApp fragmentado.",
  "company.thesis.body2": "No vendemos promesas visionarias. Desplegamos correcciones operativas duras. Cuando trabajas con nosotros, te acompana directamente el equipo que convierte tu flujo fisico en infraestructura digital confiable.",
  "company.thesis.cta": "Habla con el equipo de despliegue →",
  "company.contact.badge": "Contacto",
  "company.contact.title": "Cuentanos sobre tu operacion.",
  "company.contact.copy": "Ya manejes 3 camiones o 30 camaras frias, responderemos con detalles concretos de como Nexa aplica a tu operacion. Sin guiones de venta.",
  "company.contact.stepsTitle": "Lo que pasa despues de escribir",
  "company.contact.step1": "Una persona real lee tu mensaje, normalmente dentro de pocas horas.",
  "company.contact.step2": "Respondemos con preguntas especificas sobre tu operacion y proponemos una llamada corta.",
  "company.contact.step3": "En la llamada, te mostramos Nexa con tus quesos, SKUs de charcuteria, lineas lacteas y rutas; no con una presentacion generica.",
  "company.contact.location": "Lima, Peru — atendiendo LatAm",
  "company.contact.form.heading": "Envianos un mensaje directo",
  "company.contact.form.nameLabel": "Tu nombre",
  "company.contact.form.namePlaceholder": "Tu nombre",
  "company.contact.form.emailLabel": "Correo de trabajo",
  "company.contact.form.emailPlaceholder": "Correo de trabajo",
  "company.contact.form.companyLabel": "Empresa",
  "company.contact.form.companyPlaceholder": "Nombre de la empresa",
  "company.contact.form.messageLabel": "Detalles de la operacion",
  "company.contact.form.messagePlaceholder": "¿Como es tu operacion? Quesos, charcuteria, lineas lacteas, ubicaciones: cualquier dato ayuda.",
  "company.contact.form.submit": "Enviar mensaje",
  "company.contact.success.title": "Estamos revisando tu operacion",
  "company.contact.success.copy": `Tus datos fueron enviados de forma segura a nuestro equipo de despliegue en Lima. <strong>Te escribiremos dentro de un dia habil</strong> con tiempos concretos de integracion y disponibilidad para un recorrido guiado.`,
  "company.contact.success.note": "Mientras tanto",
  "company.contact.success.cta": "Leer nuestra FAQ operativa"
});

Object.assign(TRANSLATIONS.es, {
  "faq.meta.description": "FAQ de Nexa — Respuestas claras y practicas sobre plataforma, implementacion, integraciones, seguridad y precios.",
  "faq.meta.ogTitle": "FAQ de Nexa — Todo lo que necesitas saber antes de decidir",
  "faq.meta.ogDescription": "¿Cuanto tarda la activacion? ¿Nexa reemplaza mi ERP? ¿Que equipo necesito? Respondido de forma directa.",
  "faq.meta.title": "FAQ de Nexa — Todo lo que necesitas saber antes de decidir",
  "faq.hero.badge": "Preguntas frecuentes",
  "faq.hero.title": "Todo lo que necesitas saber<br>antes de decidir.",
  "faq.hero.copy": "Respuestas cortas y directas a las preguntas que mas hacen los operadores cuando evalúan Nexa. No necesitas una demostracion para entender como funciona.",
  "faq.hero.sidecardAria": "Resumen de temas del FAQ",
  "faq.hero.sidecardTitle": "Lo que encontraras",
  "faq.hero.topic1": "<span>Primeros pasos</span><strong>Alcance y encaje</strong>",
  "faq.hero.topic2": "<span>La plataforma</span><strong>Modulos y flujos</strong>",
  "faq.hero.topic3": "<span>Implementacion</span><strong>Tiempos y equipo</strong>",
  "faq.hero.topic4": "<span>Seguridad y datos</span><strong>Propiedad y disponibilidad</strong>",
  "faq.hero.topic5": "<span>Precios y acceso</span><strong>Modelo comercial</strong>",
  "faq.sidebar.aria": "Navegacion del FAQ",
  "faq.sidebar.start": "Primeros pasos",
  "faq.sidebar.platform": "La plataforma",
  "faq.sidebar.implementation": "Implementacion",
  "faq.sidebar.security": "Seguridad y datos",
  "faq.sidebar.pricing": "Precios y acceso",
  "faq.q1.q": "¿Que es exactamente Nexa?",
  "faq.q1.a": "<p>Nexa es el sistema operativo central que reemplaza hojas de calculo y mensajes de WhatsApp en flujos de charcuteria, quesos y lacteos.</p><p>En vez de herramientas fragmentadas, le da a tu equipo una sola pantalla confiable para manejar inventario, monitorear temperatura y coordinar despacho sin adivinar.</p>",
  "faq.q2.q": "¿Para que tipo de empresa esta diseñado Nexa?",
  "faq.q2.a": "<p>Nexa esta construido para tres tipos de operadores:</p><p><strong>Importadores y mayoristas</strong> — manejan grandes volumenes de queso, charcuteria y lacteos con monitoreo termico a nivel contenedor y asignacion de inventario a granel.</p><p><strong>Distribuidores</strong> — operan ultima milla para pedidos especializados con portal B2B, despacho con FEFO y prueba digital de entrega.</p><p><strong>Operadores de camaras frias</strong> — manejan instalaciones multicamara, cuartos de maduracion y stock lacteo con monitoreo en tiempo real, alertas automáticas y registros de inocuidad.</p><p>Si gestionas alimentos refrigerados a escala comercial, Nexa aplica a tu operacion.</p>",
  "faq.q3.q": "¿Nexa reemplaza mi ERP?",
  "faq.q3.a": "<p><strong>No: Nexa no es un ERP.</strong> Opera junto a tu ERP existente, no en su lugar.</p><p>Piensa en Nexa como la capa de ejecucion operativa: maneja catalogo, visibilidad de inventario, procesamiento de pedidos y monitoreo termico en tiempo real. Tu ERP sigue llevando finanzas, contabilidad y compras.</p><p>Nexa se conecta con SAP, Oracle y cualquier ERP con API REST publicada. La data fluye en ambos sentidos; no necesitas reingresar nada.</p>",
  "faq.q4.q": "¿Que necesito tener listo antes de empezar?",
  "faq.q4.a": "<p>Muy poco. No necesitas una infraestructura digital sofisticada para comenzar con Nexa.</p><p>Lo minimo es: una lista de tus SKUs, una idea basica de tus nodos de distribucion o camaras, y acceso a los dispositivos que tu equipo ya usa.</p><p>Si ya tienes sensores IoT, revisamos compatibilidad. Si todavia no, te recomendamos equipo compatible durante la puesta en marcha.</p>",
  "faq.q5.q": "¿Cuales son los cinco modulos y que hace cada uno?",
  "faq.q5.a": "<p><strong>Datos de producto</strong> — tu lista completa de productos con codigos SKU, rangos de temperatura, ventanas de vida util y precios.</p><p><strong>Inventario en vivo</strong> — niveles de stock en tiempo real en todos los nodos. FEFO se aplica automaticamente y dispara alertas cuando algo baja de umbral.</p><p><strong>Portal B2B</strong> — una interfaz de autoservicio para distribuidores, retailers y equipos compradores. Ven stock disponible, hacen pedidos y siguen el despacho sin llamar.</p><p><strong>Telemetria movil</strong> — tus choferes capturan firma digital y temperatura al momento de la entrega. Toda la evidencia queda sellada en tiempo y registro.</p><p><strong>Trazabilidad</strong> — cada movimiento de lote desde origen hasta la entrega final, con cadena de custodia e historial termico completos.</p>",
  "faq.q6.q": "¿Puedo usar algunos modulos sin activar los cinco?",
  "faq.q6.a": "<p>Si. Los modulos se pueden activar de forma progresiva. Muchas operaciones comienzan con catalogo e inventario, luego suman el portal B2B y finalmente telemetria movil.</p><p>Los cinco modulos comparten una sola capa de datos, asi que agregar uno nuevo no exige migraciones ni reconfiguraciones pesadas.</p>",
  "faq.q7.q": "¿Como funciona FEFO (First Expired, First Out) en la practica?",
  "faq.q7.a": "<p>Cuando entra un pedido B2B, Nexa asigna automaticamente stock del lote con vencimiento mas cercano, no del lote mas nuevo. Tu equipo de despacho no decide; el sistema decide por ellos.</p><p>Esto evita que el stock viejo se quede al fondo de la camara esperando al ultimo cliente. Cada pedido toma el lote correcto sin margen para error humano.</p>",
  "faq.q8.q": "¿Que nivel de detalle captura el modulo de trazabilidad?",
  "faq.q8.a": "<p>Cada lote recibe un registro completo de cadena de custodia: origen, productor, fecha de produccion, transferencias en transito, almacenamiento, asignacion de camara y entrega final con firma digital, temperatura y sello GPS.</p><p>Los documentos de cumplimiento se generan automaticamente en PDF y quedan disponibles para auditorias o reclamos.</p>",
  "faq.q9.q": "¿Cuanto tiempo tarda salir en vivo?",
  "faq.q9.a": "<p><strong>Tu catalogo y la visibilidad de inventario pueden estar activos en pocos dias despues de firmar.</strong> La implementacion completa, incluyendo calibracion de sensores, integracion ERP y entrenamiento, se despliega dentro de una linea de 12 semanas.</p><p>Esas 12 semanas no son espera pasiva: son despliegue activo. Tu equipo usa los modulos base desde las primeras dos semanas mientras terminamos pruebas, configuraciones especiales y acompanamiento posterior.</p>",
  "faq.q10.q": "¿Que equipo es compatible con Nexa?",
  "faq.q10.a": "<p>Nexa es agnostico al equipo. Se integra con sensores o dispositivos de monitoreo de temperatura que entreguen salida de datos, incluyendo Onset, Sensitech, Controlant y cualquier marca con interfaz REST o MQTT.</p><p>No necesitas reemplazar el equipo existente. Si ya registras datos, nos conectamos a ese feed. Si aun no tienes sensores, te recomendamos opciones compatibles.</p>",
  "faq.q11.q": "¿Mi equipo necesita entrenamiento tecnico para usar Nexa?",
  "faq.q11.a": "<p><strong>No.</strong> La interfaz fue pensada para jefes de bodega, choferes y equipos de despacho, no para areas de TI. Los choferes usan su propio telefono: abren un enlace, toman una foto, registran una temperatura y tocan “entregar”.</p><p>La capacitacion practica esta incluida. Entrenamos al equipo antes de la puesta en marcha, no despues.</p>",
  "faq.q12.q": "¿Nexa soporta operaciones multinodo o multiinstalacion?",
  "faq.q12.a": "<p>Si. Nexa esta hecho para operaciones con varios nodos. Puedes manejar varias bodegas, hubs de distribucion y camaras frias desde una sola cuenta, con cada nodo visible por separado en el tablero.</p><p>El stock se controla de forma independiente por nodo, pero todo se consolida en una sola vista de inventario. Las alertas termicas se mantienen segmentadas por camara o instalacion.</p>",
  "faq.q13.q": "¿Quien es dueño de mis datos operativos?",
  "faq.q13.a": "<p><strong>Tu organizacion.</strong> Tu inventario, tus relaciones con clientes, tu historico de pedidos y tus logs de temperatura le pertenecen a tu operacion. Nexa los procesa solo para hacer funcionar la plataforma.</p><p>Puedes exportar todo en formatos estandar cuando quieras. Si dejas de usar Nexa, la data sale contigo.</p>",
  "faq.q14.q": "¿Como se protege mi data?",
  "faq.q14.a": "<p><strong>Tu data se respalda de forma constante y permanece separada de la de otros clientes.</strong> Todo viaja cifrado para que solo tus responsables autorizados puedan ver inventario y ordenes.</p><p>Para equipos tecnicos y de cumplimiento: mantenemos logs inmutables de 7 anos y una infraestructura redundante para que una falla fisica localizada no corte tu capacidad de despacho.</p>",
  "faq.q15.q": "¿Que pasa si Nexa se cae?",
  "faq.q15.a": "<p>Nexa opera con un SLA de disponibilidad del 99.9%. La plataforma esta diseñada para degradarse con elegancia: si falla una red, la telemetria movil sigue registrando localmente y sincroniza cuando vuelve la conectividad.</p><p>Las operaciones criticas, como la confirmacion de entrega, siguen funcionando sin conexion. El tablero muestra datos en cache e indica con claridad cualquier retraso de sincronizacion.</p>",
  "faq.q16.q": "¿Como se cobra Nexa?",
  "faq.q16.a": "<p><strong>Cotizamos segun tu volumen operativo</strong>: medimos numero de nodos y escala de implementacion. No cobramos por asiento ni por chofer, asi que no tienes que restringir accesos para ahorrar.</p><p>Cuando nos explicas tu operacion, enviamos una propuesta cerrada en dos dias habiles. Sin costos sorpresa ni integraciones ocultas.</p>",
  "faq.q17.q": "¿Puedo ver una demostracion antes de comprometerme?",
  "faq.q17.a": "<p>Si. Hacemos recorridos guiados en vivo adaptados a tu operacion, no una demostracion generica. Cuentanos que manejas y te mostraremos especificamente como Nexa resuelve ese flujo.</p><p><a href=\"company.html#contact\">Usa el formulario de contacto</a> para pedir una sesion. Respondemos dentro de un dia habil.</p>",
  "faq.q18.q": "¿Que incluye los primeros 30 dias despues de la puesta en marcha?",
  "faq.q18.a": "<p><strong>Tienes una linea directa con nuestro equipo, no un sistema de tickets.</strong> Monitoreamos los primeros despachos reales, revisamos que la data termica sincronice bien, confirmamos que FEFO este funcionando y corregimos problemas de configuracion que aparezcan en operacion.</p><p>Despues de 30 dias, tu equipo opera con autonomia. El soporte no desaparece: sigues llegando a una persona real por correo o telefono.</p>",
  "faq.cta.badge": "¿Aun tienes dudas?",
  "faq.cta.title": "Te respondemos directo.",
  "faq.cta.copy": "Cuentanos sobre tu operacion y responderemos con especificidad. Sin guion de ventas, sin presion.",
  "faq.cta.note": "Siguiente paso",
  "faq.cta.meta": "Usa el canal de contacto si necesitas una respuesta directa en vez de otra pagina de producto.",
  "faq.cta.primary": "Contactanos",
  "faq.cta.secondary": "Explorar la plataforma"
});

Object.assign(TRANSLATIONS.es, {
  "solutions.meta.description": "Soluciones Nexa — Hechas para importadores, distribuidores y operadores de camaras frias de charcuteria, quesos y lacteos.",
  "solutions.meta.ogTitle": "Soluciones Nexa — Construido para los nodos que mas importan",
  "solutions.meta.ogDescription": "Cada segmento refrigerado tiene exigencias distintas. Nexa se adapta a la tuya, desde importacion de quesos y lacteos hasta distribucion de ultima milla.",
  "solutions.meta.title": "Soluciones Nexa — Construido para los nodos que mas importan",
  "solutions.hero.badge": "Soluciones",
  "solutions.hero.title": "Para cada nodo de la cadena<br><span class=\"text-accent\">de charcuteria y lacteos.</span>",
  "solutions.hero.copy": "Desde el momento en que un contenedor de queso libera en puerto hasta la entrega final, Nexa se adapta a la realidad de tu operacion refrigerada.",
  "solutions.hero.sidecardAria": "Cobertura de soluciones",
  "solutions.hero.kicker": "Cobertura refrigerada",
  "solutions.hero.sidecardTitle": "Elige el nodo operativo que coincide con como se mueve realmente el producto en tu negocio.",
  "solutions.hero.status1": "<span>Importadores y mayoristas</span><span class=\"hero-status-value\">Puerto a bodega</span>",
  "solutions.hero.status2": "<span>Distribuidores</span><span class=\"hero-status-value is-accent\">Bodega a ruta</span>",
  "solutions.hero.status3": "<span>Operadores de camaras frias</span><span class=\"hero-status-value\">Monitoreo de instalacion</span>",
  "solutions.routing.badge": "Ruteo operativo",
  "solutions.routing.title": "Empieza por el nodo donde el control se rompe primero.",
  "solutions.routing.copy": "En lugar de navegar tarjetas de funciones, entra por el traspaso fisico que necesitas estabilizar primero: llegada, despacho o monitoreo de camara de queso.",
  "solutions.route.importers": `<div class="solution-route-meta">Puerto a bodega</div><h2 class="solution-route-title">Importadores y mayoristas</h2><p class="solution-route-copy">Sigue la condicion del contenedor antes de recepcionar, mapea lotes de queso y lacteos al llegar y separa carga comprometida antes de que entre al inventario vendible.</p><ul class="solution-route-list"><li>Trazado de contenedor desde origen hasta bodega</li><li>Monitoreo de integridad termica en vivo</li><li>Mapeo de inventario a granel</li></ul><a href="solutions-importers.html" class="solution-route-cta">Explorar para importadores</a>`,
  "solutions.route.distributors": `<div class="solution-route-meta">Bodega a ruta</div><h2 class="solution-route-title">Distribuidores</h2><p class="solution-route-copy">Reemplaza pedidos por WhatsApp con un flujo vivo desde el ingreso B2B hasta el despacho FEFO y la prueba firmada de entrega.</p><ul class="solution-route-list"><li>Portal B2B de autoservicio</li><li>FEFO automatizado por lote</li><li>POD digital con temperatura de entrega</li></ul><a href="solutions-distributors.html" class="solution-route-cta">Explorar para distribuidores</a>`,
  "solutions.route.storage": `<div class="solution-route-meta">Monitoreo de instalacion</div><h2 class="solution-route-title">Operadores de camaras frias</h2><p class="solution-route-copy">Unifica monitoreo de camaras, escalamiento y salidas de auditoria para que el cumplimiento ya no viva en hojas sueltas ni en exports USB.</p><ul class="solution-route-list"><li>Monitoreo centralizado multicamara</li><li>Reportes de cumplimiento automaticos</li><li>Despacho inteligente de alertas</li></ul><a href="solutions-cold-storage.html" class="solution-route-cta">Explorar para camaras frias</a>`,
  "solutions.advantage.badge": "Infraestructura compartida",
  "solutions.advantage.title": "Por que los operadores eligen Nexa en lugar de construir por su cuenta.",
  "solutions.advantage.copy": "El software logistico a medida tarda 18 meses y cuesta mucho mas que el problema que quiere resolver. Nexa ya esta listo para produccion hoy.",
  "solutions.advantage.card1": `<div class="advantage-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><h3>Operativo en dias</h3><p>Del contrato firmado al inventario en vivo en menos de dos semanas. Nuestra puesta en marcha estructurada elimina meses de configuracion.</p>`,
  "solutions.advantage.card2": `<div class="advantage-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div><h3>Hardware mapeado en 48h</h3><p>¿Ya usas Onset, Sensitech u otro proveedor? Nexa se conecta a tu infraestructura IoT existente sin obligarte a cambiar nada.</p>`,
  "solutions.advantage.card3": `<div class="advantage-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"></path><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path></svg></div><h3>Cero traspasos por WhatsApp</h3><p>Desde el dock hasta el despacho final, la operacion vive en una sola pantalla. Se termina perseguir confirmaciones en papel y correos reenviados.</p>`,
  "solutions.compat.label": "Funciona con tu operacion actual",
  "solutions.compat.copy": "Feeds de sensores, capas ERP y APIs abiertas viven bajo el mismo modelo operativo. Nexa estabiliza la ejecucion, no obliga a reemplazar todo alrededor.",
  "solutions.cta.badge": "¿Necesitas ayuda para elegir?",
  "solutions.cta.title": "¿No sabes que <span class=\"text-accent\">solucion encaja mejor?</span>",
  "solutions.cta.copy": "Cuéntanos sobre tu operacion y te mostraremos exactamente como funciona Nexa para tu flujo especifico de queso, charcuteria o lacteos.",
  "solutions.cta.note": "Siguiente paso",
  "solutions.cta.meta": "Mapeamos la ruta correcta de despliegue sin hacerte pasar primero por una demostracion equivocada.",
  "solutions.cta.primary": "Hablar con nosotros",
  "solutions.cta.secondary": "Ver resumen de plataforma"
});

Object.assign(TRANSLATIONS.es, {
  "importers.meta.description": "Soluciones Nexa — Importadores y mayoristas de charcuteria, quesos y lacteos. Trazado de contenedores, integridad termica y mapeo de inventario a granel.",
  "importers.meta.ogTitle": "Soluciones Nexa — Importadores y mayoristas",
  "importers.meta.ogDescription": "Sigue la condicion del contenedor, protege la recepcion de queso y lacteos y crea lotes mayoristas antes de que el producto comprometido toque inventario.",
  "importers.meta.title": "Soluciones Nexa — Importadores y mayoristas",
  "importers.hero.breadcrumb": "<a href=\"solutions.html\">Soluciones</a><span class=\"page-hero-breadcrumb-sep\">/</span><span class=\"page-hero-breadcrumb-current\">Importadores y mayoristas</span>",
  "importers.hero.title": "12,000 km en transito. Deja de tratar la temperatura de llegada de queso y lacteos como una sorpresa.",
  "importers.hero.copy": "Nexa conecta la telemetria del contenedor directamente con tus registros de inventario de queso, charcuteria y lacteos. Conoce la condicion termica antes de abrir las puertas.",
  "importers.hero.figure": `<div class="page-hero-pipeline"><div class="page-hero-pipeline-node"><div class="page-hero-pipeline-dot page-hero-pipeline-dot-origin"></div><span class="page-hero-pipeline-label">Origen</span></div><div class="page-hero-pipeline-track page-hero-pipeline-track-dashed"></div><div class="page-hero-pipeline-node"><div class="page-hero-pipeline-dot page-hero-pipeline-dot-transit"></div><span class="page-hero-pipeline-label page-hero-pipeline-label-current">Transito</span></div><div class="page-hero-pipeline-track page-hero-pipeline-track-solid"></div><div class="page-hero-pipeline-node"><div class="page-hero-pipeline-dot page-hero-pipeline-dot-end"></div><span class="page-hero-pipeline-label page-hero-pipeline-label-end">Recepcion</span></div></div>`,
  "importers.problem.badge": "El problema",
  "importers.problem.title": "La realidad de las operaciones de importacion",
  "importers.problem.copy": "Un punto ciego desde la llegada a puerto hasta que la bodega abre la puerta.",
  "importers.problem.card1": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="24" height="24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><h3 class="benefit-item-title">Descubrimiento post-mortem</h3><p class="benefit-item-desc">Se abre el contenedor y la excursion se descubre recien al descargar. Ya es imposible asignar responsabilidad.</p>`,
  "importers.problem.card2": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="24" height="24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><h3 class="benefit-item-title">Puntos ciegos aduaneros</h3><p class="benefit-item-desc">Las demoras en aduana generan enorme estres termico, pero el sistema de inventario sigue asumiendo que cada lote llego intacto.</p>`,
  "importers.problem.card3": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="24" height="24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg><h3 class="benefit-item-title">Desconexion de datos</h3><p class="benefit-item-desc">Los logs de temperatura llegan por correo dias despues. La bodega ya mezclo lotes comprometidos con inventario vendible.</p>`,
  "importers.response.title": "Visibilidad que cambia la ejecucion",
  "importers.response.mockup": `<div class="segment-mockup-topbar"><div class="segment-mockup-dots"><div class="segment-mockup-dot browser-dot is-red"></div><div class="segment-mockup-dot browser-dot is-yellow"></div><div class="segment-mockup-dot browser-dot is-green"></div></div><div class="segment-mockup-label">nexa — contenedor #NX-2901-Z</div><div class="segment-mockup-status">● En transito</div></div><div class="segment-mockup-body"><div class="segment-metric-row"><div class="segment-metric-label">ID de contenedor</div><div class="segment-metric-value">NX-2901-Z</div><div class="segment-metric-tag tag-ok">Optimo</div></div><div class="segment-metric-row"><div class="segment-metric-label">Puerto de origen</div><div class="segment-metric-value">Callao, Lima</div><div class="segment-metric-tag tag-info">Aduana libre</div></div><div class="segment-metric-row"><div class="segment-metric-label">Temperatura en vivo</div><div class="segment-metric-value">−18.3°C</div><div class="segment-metric-tag tag-ok">En rango</div></div><div class="segment-metric-row"><div class="segment-metric-label">Carga (IQF)</div><div class="segment-metric-value">12,400 kg asignados</div><div class="segment-metric-tag tag-ok">Verificado</div></div><div class="segment-metric-row"><div class="segment-metric-label">Excursiones</div><div class="segment-metric-value">0 registradas</div><div class="segment-metric-tag tag-ok">Ninguna</div></div></div>`,
  "importers.response.item1": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg><div class="benefit-item-content"><div class="benefit-item-title">Verificacion previa a la llegada</div><div class="benefit-item-desc">Conoce la grafica termica exacta mientras el contenedor sigue en puerto y rechaza carga comprometida antes de asumirla.</div></div>`,
  "importers.response.item2": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg><div class="benefit-item-content"><div class="benefit-item-title">Creacion automatica de lotes a granel</div><div class="benefit-item-desc">Cuando la recepcion es valida, Nexa crea registros de inventario mayorista con FEFO amarrado al viaje maritimo especifico.</div></div>`,
  "importers.response.item3": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><polyline points="20 6 9 17 4 12"></polyline></svg><div class="benefit-item-content"><div class="benefit-item-title">Documentacion lista para reclamo</div><div class="benefit-item-desc">Si ocurre una excursion, genera un PDF sellado que muestra exactamente cuando y donde paso para activar reclamos de seguro al instante.</div></div>`,
  "importers.fit.title": "Este modulo funciona si tu operacion maneja:",
  "importers.fit.pill1": "» Importacion maritima en contenedor (FCL/LCL)",
  "importers.fit.pill2": "» Fraccionamiento mayorista de alto volumen",
  "importers.fit.pill3": "» Productos de vida util estricta (quesos, lacteos, charcuteria)",
  "importers.fit.note": "Integra desde el inicio con monitores Sensitech y manifiestos aduaneros estandar.",
  "importers.fit.metric1": `<div class="fit-proof-value">&lt; 4 horas</div><p class="fit-proof-text">Tiempo promedio para resolver reclamos con logs de auditoria de Nexa, frente a 3 semanas antes.</p>`,
  "importers.fit.metric2": `<div class="fit-proof-value is-accent">0</div><p class="fit-proof-text">Contenedores comprometidos mezclados por error con inventario mayorista vendible de queso y lacteos.</p>`,
  "importers.cta.badge": "Cierre para importadores",
  "importers.cta.title": "Deja de perder margen en la puerta de muelle.",
  "importers.cta.copy": "No hacemos demostraciones genericas. Cuentanos una excursion reciente y te mostramos exactamente como los logs de auditoria y el mapeo de inventario habrian detectado el problema antes de descargar.",
  "importers.cta.note": "Siguiente paso",
  "importers.cta.meta": "Ideal para equipos que necesitan unir telemetria portuaria, demoras aduaneras y recepcion de bodega en un solo flujo.",
  "importers.cta.primary": "Hablar con nuestro equipo de despliegue",
  "importers.cta.secondary": "Revisar la FAQ de implementacion →"
});

Object.assign(TRANSLATIONS.es, {
  "distributors.meta.description": "Soluciones Nexa — Distribuidores de charcuteria, quesos y lacteos. Ultima milla, reposicion FEFO y portal B2B.",
  "distributors.meta.ogTitle": "Soluciones Nexa — Distribucion de charcuteria y lacteos",
  "distributors.meta.ogDescription": "Reemplaza pedidos por WhatsApp con pedido B2B, despacho FEFO y prueba de entrega para rutas de queso, charcuteria y lacteos.",
  "distributors.meta.title": "Soluciones Nexa — Distribucion de charcuteria y lacteos",
  "distributors.hero.breadcrumb": "<a href=\"solutions.html\">Soluciones</a><span class=\"page-hero-breadcrumb-sep\">/</span><span class=\"page-hero-breadcrumb-current\">Distribuidores</span>",
  "distributors.hero.title": "Tus despachadores de queso y charcuteria siguen operando en grupos de WhatsApp. Ya no deberian.",
  "distributors.hero.copy": "Tus compradores esperan una entrega profesional de queso, charcuteria y lacteos. Dales un portal de autoservicio conectado a tu inventario en vivo y aplica FEFO de inmediato.",
  "distributors.hero.cta": "Agendar recorrido guiado",
  "distributors.hero.status": "Despachado",
  "distributors.hero.tempLabel": "Temp. de entrega:",
  "distributors.hero.visual": `<div class="page-hero-visual-head"><div class="page-hero-visual-title">Pedido #NX-8820</div><div class="badge badge-success">Despachado</div></div><div class="page-hero-driver"><div class="page-hero-driver-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div><div><div class="page-hero-driver-name">Chofer: Carlos M.</div><div class="page-hero-driver-meta">Ruta 4 — San Isidro</div></div></div><div class="page-hero-temp-card"><div class="page-hero-temp-row"><span>Temp. de entrega:</span><span class="page-hero-temp-value">−18.4°C</span></div><div class="page-hero-temp-bar"><span></span></div></div>`,
  "distributors.problem.badge": "El problema",
  "distributors.problem.title": "La carga manual crea peso muerto operativo.",
  "distributors.problem.copy": "Los pedidos llegan por mensajes y correos, obligando a reescribirlos en el ERP. Los quiebres se descubren recien al picking. Los choferes toman el lote mas facil, no el que vence primero.",
  "distributors.problem.calloutTitle": "El costo de la desconexion",
  "distributors.problem.item1": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Llamadas constantes con restaurantes, tiendas y compradores`,
  "distributors.problem.item2": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Alta tasa de errores en pedidos`,
  "distributors.problem.item3": `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Ingreso perdido por merma y mala rotacion`,
  "distributors.response.clientTag": "B2B",
  "distributors.response.title": "Gestion de pedidos sin caos",
  "distributors.response.mockup": `<div class="segment-mockup-topbar"><div class="segment-mockup-dots"><div class="segment-mockup-dot browser-dot is-red"></div><div class="segment-mockup-dot browser-dot is-yellow"></div><div class="segment-mockup-dot browser-dot is-green"></div></div><div class="segment-mockup-label">nexa — pedido b2b #ORD-0482</div><div class="segment-mockup-status">● Despachado</div></div><div class="segment-mockup-body"><div class="segment-metric-row"><div class="segment-metric-label">Cliente</div><div class="segment-metric-value">Restaurante Astrid</div><div class="segment-metric-tag tag-ok">B2B</div></div><div class="segment-metric-row"><div class="segment-metric-label">Items</div><div class="segment-metric-value">4 SKUs / 180 kg</div><div class="segment-metric-tag tag-ok">Confirmado</div></div><div class="segment-metric-row"><div class="segment-metric-label">Rotacion FEFO</div><div class="segment-metric-value">Lote NX-0412 (vence en 6d)</div><div class="segment-metric-tag tag-ok">Autoasignado</div></div><div class="segment-metric-row"><div class="segment-metric-label">POD del chofer</div><div class="segment-metric-value">Firmado · 11:24am</div><div class="segment-metric-tag tag-ok">Verificado</div></div><div class="segment-metric-row"><div class="segment-metric-label">Temp. de entrega</div><div class="segment-metric-value">−17.8°C en la entrega</div><div class="segment-metric-tag tag-ok">En rango</div></div></div>`,
  "distributors.response.item1": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M3 9l2-4h14l2 4"></path><path d="M5 9v10h14V9"></path><path d="M9 13h6"></path><path d="M9 17h4"></path></svg><div class="benefit-item-content"><div class="benefit-item-title">Portal B2B de autoservicio</div><div class="benefit-item-desc">Deja que restaurantes, tiendas y compradores hagan sus pedidos contra stock vivo y con su precio negociado ya aplicado.</div></div>`,
  "distributors.response.item2": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><rect x="3" y="6" width="9" height="5" rx="1"></rect><rect x="3" y="13" width="11" height="5" rx="1"></rect><circle cx="18" cy="8" r="3"></circle><path d="M18 6.5V8l1.2.8"></path></svg><div class="benefit-item-content"><div class="benefit-item-title">FEFO estricto</div><div class="benefit-item-desc">El sistema asigna automaticamente el lote que vence primero y evita que el picking saque primero el pallet mas comodo.</div></div>`,
  "distributors.response.item3": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M9 3h6"></path><path d="M10 6h4"></path><rect x="5" y="5" width="14" height="16" rx="2"></rect><polyline points="9 13 11 15 15 11"></polyline><path d="M9 18h6"></path></svg><div class="benefit-item-content"><div class="benefit-item-title">Prueba digital de entrega</div><div class="benefit-item-desc">Las apps de chofer capturan firma digital, fotos y temperatura exacta al momento de la entrega, para que las disputas dejen de ser grises.</div></div>`,
  "distributors.fit.title": "Este modulo funciona si tu operacion maneja:",
  "distributors.fit.pill1": "» Distribucion diaria con multiples paradas",
  "distributors.fit.pill2": "» Distribucion especializada de queso y charcuteria",
  "distributors.fit.pill3": "» Reposicion retail de alta frecuencia",
  "distributors.fit.note": "Se integra con software de ruteo existente o puede operar de forma independiente para flotas mas pequenas.",
  "distributors.fit.metric1": `<div class="fit-proof-value">22%</div><p class="fit-proof-text">de reduccion en stock muerto gracias a rutinas de picking FEFO.</p>`,
  "distributors.fit.metric2": `<div class="fit-proof-value is-accent">&lt; 1 hora</div><p class="fit-proof-text">dedicada al dia a resolver entregas discutidas o logs de temperatura faltantes.</p>`,
  "distributors.cta.badge": "Cierre de distribucion",
  "distributors.cta.title": "Deja de correr la ultima milla por WhatsApp.",
  "distributors.cta.copy": "En lugar de recorridos genericos, cuéntanos una ruta tipica de alto volumen. Te mostramos como Nexa resuelve visibilidad de despacho, ajustes de pedido y POD fotografico sin papel.",
  "distributors.cta.note": "Siguiente paso",
  "distributors.cta.meta": "Ideal para equipos que necesitan pedidos B2B, FEFO y prueba de entrega dentro de un mismo flujo operativo.",
  "distributors.cta.primary": "Mapear el flujo con nosotros",
  "distributors.cta.secondary": "Revisar la FAQ de puesta en marcha →"
});

Object.assign(TRANSLATIONS.es, {
  "storage.meta.description": "Soluciones Nexa — Operadores de camaras frias para quesos, charcuteria y lacteos. Monitoreo multicamara, cumplimiento automatizado y despacho de alertas.",
  "storage.meta.ogTitle": "Soluciones Nexa — Operadores de camaras frias",
  "storage.meta.ogDescription": "Monitorea camaras de queso, camaras lacteas e instalaciones refrigeradas con logs listos para auditoria y alertas escaladas.",
  "storage.meta.title": "Soluciones Nexa — Operadores de camaras frias",
  "storage.hero.breadcrumb": "<a href=\"solutions.html\">Soluciones</a><span class=\"page-hero-breadcrumb-sep\">/</span><span class=\"page-hero-breadcrumb-current\">Operadores de camaras frias</span>",
  "storage.hero.title": "Tu registro de cumplimiento en camaras de queso no deberia ser una hoja que alguien olvido actualizar.",
  "storage.hero.copy": "Las instalaciones multicamara para queso, charcuteria y lacteos necesitan monitoreo serio. Nexa unifica todos tus sensores en un solo tablero y genera registros listos para auditoria al instante.",
  "storage.hero.sidecardAria": "Puntos de prueba para camaras frias",
  "storage.hero.kicker": "Pulso de la camara de queso",
  "storage.hero.sidecardTitle": "Una red de camaras debe leerse como infraestructura viva, no como una tarea administrativa semanal.",
  "storage.hero.kpi1": `<div class="hero-kpi-value is-accent">99.99%</div><div class="hero-kpi-label">de disponibilidad en monitoreo continuo y entrega de alertas.</div>`,
  "storage.hero.kpi2": `<div class="hero-kpi-value">5 min</div><div class="hero-kpi-label">de cadencia de polling para redes activas de sensores.</div>`,
  "storage.hero.kpi3": `<div class="hero-kpi-value">4/4</div><div class="hero-kpi-label">estado de camaras visible desde una sola pantalla.</div>`,
  "storage.hero.kpi4": `<div class="hero-kpi-value">Auto</div><div class="hero-kpi-label">registros de inocuidad generados sin formato manual.</div>`,
  "storage.problem.badge": "El problema",
  "storage.problem.title": "Sensores aislados generan respuestas reactivas.",
  "storage.problem.stat1": `<div class="storage-pain-value">Accion tardia</div><p class="storage-pain-copy">Te enteras de que fallo un compresor porque alguien entro a la camara, no porque el sistema de alertas hizo su trabajo.</p>`,
  "storage.problem.stat2": `<div class="storage-pain-value">3 dias</div><p class="storage-pain-copy">de preparacion promedio para auditorias, juntando datos fragmentados en USB y dando formato manual a hojas.</p>`,
  "storage.response.title": "Infraestructura en la que realmente puedes confiar",
  "storage.response.mockup": `<div class="segment-mockup-topbar"><div class="segment-mockup-dots"><div class="segment-mockup-dot browser-dot is-red"></div><div class="segment-mockup-dot browser-dot is-yellow"></div><div class="segment-mockup-dot browser-dot is-green"></div></div><div class="segment-mockup-label">nexa — instalacion: hub sur lima</div><div class="segment-mockup-status">● 4/4 Online</div></div><div class="segment-mockup-body"><div class="segment-metric-row"><div class="segment-metric-label">Camara 01</div><div class="segment-metric-value">−18.1°C</div><div class="segment-metric-tag tag-ok">Optimo</div></div><div class="segment-metric-row"><div class="segment-metric-label">Camara 02</div><div class="segment-metric-value">−16.4°C</div><div class="segment-metric-tag tag-warn">Alerta de desvio</div></div><div class="segment-metric-row"><div class="segment-metric-label">Camara 03</div><div class="segment-metric-value">+2.1°C</div><div class="segment-metric-tag tag-ok">Optimo</div></div><div class="segment-metric-row"><div class="segment-metric-label">Camara 04</div><div class="segment-metric-value">−22.0°C</div><div class="segment-metric-tag tag-ok">Optimo</div></div><div class="segment-metric-row"><div class="segment-metric-label">Log de cumplimiento</div><div class="segment-metric-value">Autoactualizado · ahora</div><div class="segment-metric-tag tag-info">Listo para auditoria</div></div><div class="segment-metric-row"><div class="segment-metric-label">Alertas activas</div><div class="segment-metric-value">1 — Tecnico despachado</div><div class="segment-metric-tag tag-warn">Escalada</div></div></div>`,
  "storage.response.item1": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg><div class="benefit-item-content"><div class="benefit-item-title">Centro de comando multicamara</div><div class="benefit-item-desc">Ve el estado termico en vivo de cada camara en todas tus instalaciones desde una sola pantalla.</div></div>`,
  "storage.response.item2": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><div class="benefit-item-content"><div class="benefit-item-title">Cumplimiento listo para auditoria</div><div class="benefit-item-desc">Nexa compila y formatea historicos de temperatura en logs continuos que cumplen con requisitos de inocuidad y autoridad sanitaria.</div></div>`,
  "storage.response.item3": `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><div class="benefit-item-content"><div class="benefit-item-title">Sistema de alertas escalables</div><div class="benefit-item-desc">Configura umbrales que escalan por rol. Si el responsable de piso no confirma una alerta temprana, el gerente de instalacion recibe el aviso automaticamente.</div></div>`,
  "storage.fit.title": "Este modulo funciona si tu operacion maneja:",
  "storage.fit.pill1": "» Instalaciones de enfriamiento y congelacion multicamara",
  "storage.fit.pill2": "» Operadores de almacenamiento tercerizado (3PL)",
  "storage.fit.pill3": "» Operaciones de maduracion de queso y resguardo de charcuteria",
  "storage.fit.note": "Compatible desde el inicio con redes Onset, Sensitech o LoRaWAN.",
  "storage.fit.metric1": `<div class="fit-proof-value">100%</div><p class="fit-proof-text">de las operaciones con Nexa pasan auditorias de inocuidad y cumplimiento sin formateo manual de data.</p>`,
  "storage.fit.metric2": `<div class="fit-proof-value is-accent">9 min</div><p class="fit-proof-text">de tiempo promedio desde la deteccion de anomalia hasta el escalamiento y despacho tecnico.</p>`,
  "storage.cta.badge": "Cierre para camaras frias",
  "storage.cta.title": "Deja de fallar auditorias de temperatura.",
  "storage.cta.copy": "No hacemos presentaciones de venta genericas. Comparte la distribucion de tus camaras y tu equipo actual y te mostramos exactamente como Nexa centraliza alertas, logs y reportes sin agregar mas trabajo manual.",
  "storage.cta.note": "Siguiente paso",
  "storage.cta.meta": "Ideal para operadores que necesitan monitoreo, escalamiento y salida de auditoria dentro de la misma capa operativa.",
  "storage.cta.primary": "Conversar sobre tu instalacion",
  "storage.cta.secondary": "Revisar la FAQ de seguridad →"
});

function getStoredLang() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'es' || saved === 'en' ? saved : DEFAULT_LANG;
}

function getTranslation(lang, key) {
  return TRANSLATIONS[lang] && Object.prototype.hasOwnProperty.call(TRANSLATIONS[lang], key)
    ? TRANSLATIONS[lang][key]
    : null;
}

const defaults = new WeakMap();

function rememberDefault(el, prop, value) {
  const existing = defaults.get(el) || {};
  if (!(prop in existing)) {
    existing[prop] = value;
    defaults.set(el, existing);
  }
}

function readDefault(el, prop) {
  return (defaults.get(el) || {})[prop];
}

function setTextPreservingChildren(el, text) {
  if (!el.firstElementChild) {
    el.textContent = text;
    return;
  }

  Array.from(el.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .forEach((node) => node.remove());

  const firstChild = el.firstElementChild;
  const goesAfterFirst = firstChild.classList && firstChild.classList.contains('badge-dot');
  const node = document.createTextNode(goesAfterFirst ? ` ${text}` : `${text} `);

  if (goesAfterFirst) {
    el.insertBefore(node, firstChild.nextSibling);
  } else {
    el.insertBefore(node, firstChild);
  }
}

function ensureToast() {
  let toast = document.querySelector('.site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'site-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.setAttribute('aria-atomic', 'true');
    document.body.appendChild(toast);
  }
  return toast;
}

let toastTimer = null;

function showToast(lang) {
  const toast = ensureToast();
  toast.textContent = lang === 'es' ? 'Portal de clientes disponible pronto' : 'Client portal available soon';
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1800);
}

window.showToast = showToast;

function applyLanguage(lang) {
  const safeLang = lang === 'es' ? 'es' : 'en';
  document.documentElement.lang = safeLang;
  document.body.dataset.lang = safeLang;
  window.localStorage.setItem(STORAGE_KEY, safeLang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    rememberDefault(el, 'html', el.innerHTML);
    const key = el.getAttribute('data-i18n');
    const translated = getTranslation(safeLang, key);

    if (!translated || safeLang === 'en') {
      el.innerHTML = readDefault(el, 'html');
      return;
    }

    if (!el.firstElementChild) {
      el.textContent = translated;
      return;
    }

    setTextPreservingChildren(el, translated);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    rememberDefault(el, 'htmlBlock', el.innerHTML);
    const key = el.getAttribute('data-i18n-html');
    const translated = getTranslation(safeLang, key);
    el.innerHTML = translated && safeLang !== 'en' ? translated : readDefault(el, 'htmlBlock');
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    rememberDefault(el, 'placeholder', el.getAttribute('placeholder') || '');
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = getTranslation(safeLang, key);
    el.setAttribute('placeholder', translated && safeLang !== 'en' ? translated : readDefault(el, 'placeholder'));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    rememberDefault(el, 'ariaLabel', el.getAttribute('aria-label') || '');
    const key = el.getAttribute('data-i18n-aria-label');
    const translated = getTranslation(safeLang, key);
    el.setAttribute('aria-label', translated && safeLang !== 'en' ? translated : readDefault(el, 'ariaLabel'));
  });

  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const prop = el.tagName.toLowerCase() === 'title' ? 'textContent' : 'content';
    rememberDefault(el, prop, prop === 'content' ? (el.getAttribute('content') || '') : el.textContent);
    const key = el.getAttribute('data-i18n-content');
    const translated = getTranslation(safeLang, key);
    const value = translated && safeLang !== 'en' ? translated : readDefault(el, prop);
    if (prop === 'content') {
      el.setAttribute('content', value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    const isActive = button.getAttribute('data-lang-option') === safeLang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  document.dispatchEvent(new CustomEvent('nexa:languagechange', { detail: { lang: safeLang } }));
  window.dispatchEvent(new Event('resize'));
}

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getStoredLang();
  applyLanguage(initialLang);

  document.querySelectorAll('[data-lang-option]').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.getAttribute('data-lang-option'));
    });
  });
});
