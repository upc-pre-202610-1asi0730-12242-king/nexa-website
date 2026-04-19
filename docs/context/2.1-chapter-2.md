# Capítulo II: Requirements Elicitation & Analysis

## 2.1.	Competidores
<p align  = "justify">
El ecosistema de soluciones de software aplicadas a la gestión comercial y logística en América Latina ha experimentado un grado de maduración significativo. Sin embargo, una revisión crítica del paisaje competitivo demuestra que la oferta tecnológica padece de una severa hiperespecialización. Las plataformas dominantes tienden a enfocarse en nichos aislados: o resuelven exclusivamente la captura de la venta comercial, o se dedican estrictamente al monitoreo físico del transporte. 
Para una pyme distribuidora de productos refrigerados, esta fragmentación significa que no existe un competidor directo integral que cubra sus necesidades de extremo a extremo (desde el catálogo hasta el control de frío). Por lo tanto, hemos seleccionado para nuestro análisis a tres competidores representativos que dominan diferentes capas del proceso, con el objetivo de demostrar cómo nuestra solución consolida sus fortalezas y ataca sus debilidades en nuestro segmento específico:


**Riqra (Competencia en la Capa Transaccional/Comercial):**

**Perfil:** Es una consolidada plataforma SaaS de comercio electrónico B2B de origen peruano, con fuerte presencia regional. Su propuesta de valor permite a fabricantes y grandes distribuidores desplegar portales web donde sus clientes corporativos pueden autogestionar compras.

**Debilidad frente a nuestro nicho:** Es una plataforma completamente agnóstica al producto. Al ser una herramienta de propósito general (horizontal), su base de datos trata de igual manera a un saco de cemento que a un lote de carne congelada. Carece de lógicas estructurales nativas orientadas a la cadena de frío, omitiendo alertas biológicas, gestión de rangos térmicos por producto y restricciones de incompatibilidad de carga.

**Drivin (Competencia en la Capa Logística y Ruteo):**

**Perfil**: Posicionado como un Sistema de Gestión de Transporte (TMS) robusto a nivel internacional. Su núcleo de negocio es la optimización algorítmica de rutas, la consolidación de carga en vehículos y la recolección de Pruebas Electrónicas de Entrega (POD) mediante aplicaciones móviles para choferes.

**Debilidad frente a nuestro nicho**: Opera exclusivamente "aguas abajo" (downstream) en la cadena de suministro. Drivin interviene únicamente cuando la orden de compra ya existe en el sistema. No proporciona un portal B2B para que el cliente final (la bodega o el supermercado) explore el catálogo o genere el pedido, asumiendo que el distribuidor ya resolvió previamente el caos comercial.

**OnTracking de RedGPS (Competencia en la Capa de Infraestructura y Telemetría):**

**Perfil:** Proveedor de plataformas de rastreo vehicular y monitoreo físico mediante Internet de las Cosas (IoT). Son el estándar de la industria para certificar que un camión frigorífico mantuvo la temperatura exigida durante el trayecto, enviando alertas en tiempo real si se rompe la cadena térmica.

**Debilidad frente a nuestro nicho:** Operan en una capa estrictamente de infraestructura técnica (telemetría y geolocalización), desconectada por completo de la dinámica comercial. No gestionan catálogos, no manejan políticas de precios B2B y no interactúan con el cliente que realiza la compra. Además, dependen de la costosa instalación de hardware físico (sensores) en cada unidad de transporte.

</p>

### 2.1.1.	Análisis competitivo (Landscapte & SWOT)
<p align = "justify">

El análisis competitivo estructurado a continuación emplea una matriz de variables del mercado (Landscape) y un análisis FODA cruzado (SWOT) para evaluar nuestro posicionamiento estratégico frente a las plataformas establecidas. Las dimensiones evaluadas no solo contemplan la arquitectura de software, sino también la fricción de adopción, el mercado objetivo y el modelo de monetización; factores críticos para la supervivencia de un SaaS en el canal comercial peruano. 

</p>

**Tabla 11**  
*Análisis Competitivo*

<table>
  <thead>
    <tr>
      <th>Dimensión / Criterio</th>
      <th>Nuestra Startup (SaaS B2B Frío)</th>
      <th>Riqra (SaaS Ecommerce B2B)</th>
      <th>Drivin (SaaS TMS Logística)</th>
      <th>OnTracking / RedGPS (SaaS IoT Telemetría)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Overview</b></td>
      <td>Plataforma unificada que conecta la toma de pedidos B2B con la gestión operativa básica, especializada nativamente en productos de cadena de frío.</td>
      <td>Portal B2B de comercio electrónico orientado a digitalizar ventas para fabricantes y distribuidores generalistas.</td>
      <td>Plataforma TMS enfocada en la planificación de rutas, optimización de flota y última milla en múltiples industrias.</td>
      <td>Plataforma de monitoreo de sensores IoT y rastreo vehicular, orientada al cumplimiento físico de la cadena de frío.</td>
    </tr>
    <tr>
      <td><b>Ventaja Competitiva</b></td>
      <td>Integración del ciclo comercial (Portal) con la especificidad logística del frío (fechas de caducidad, rangos térmicos) en un solo software accesible.</td>
      <td>Especialización profunda en integraciones comerciales con ERPs corporativos (SAP, Oracle).</td>
      <td>Algoritmos avanzados de optimización de rutas y seguimiento en tiempo real del conductor.</td>
      <td>Certificación de temperaturas y hardware telemétrico confiable de grado industrial.</td>
    </tr>
    <tr>
      <td><b>Valor Ofrecido</b></td>
      <td>Reducción de mermas y errores logísticos eliminando canales informales (WhatsApp), en una herramienta sin fricción de adopción.</td>
      <td>Aumento del volumen de ventas al ofrecer tiendas B2B auto gestionables para clientes minoristas.</td>
      <td>Reducción radical de costos logísticos de transporte y cumplimiento de ventanas horarias estrictas.</td>
      <td>Prevención de siniestros y garantías de salubridad de la carga ante auditorías.</td>
    </tr>
    <tr>
      <td><b>Mercado Objetivo</b></td>
      <td>Pymes importadoras y distribuidoras exclusivas de productos refrigerados y congelados.</td>
      <td>Empresas medianas y grandes corporaciones de diversos sectores (abarrotes, ferretería, construcción).</td>
      <td>Operadores logísticos (3PL) y empresas con flotas vehiculares intensivas.</td>
      <td>Empresas de flotas que transportan mercancía médica o alimentaria de alto riesgo.</td>
    </tr>
    <tr>
      <td><b>Estrategias de Marketing</b></td>
      <td>Nicho directo: demostrar a las pymes cuánto dinero ahorran al evitar que la comida se pudra por desorganización interna.</td>
      <td>Casos de éxito con marcas de renombre regional, alianzas con entidades gubernamentales (ProInnóvate).</td>
      <td>Presencia en ferias logísticas especializadas, marketing enfocado en la reducción de huella de carbono y costos.</td>
      <td>Ventas orientadas a la certificación y aseguramiento de riesgos para retener a clientes de supermercados.</td>
    </tr>
    <tr>
      <td><b>Productos / Servicios</b></td>
      <td>Web App con Portal B2B, bandeja unificada de pedidos, gestión de stock por vida útil y seguimiento operativo.</td>
      <td>Tienda B2B en línea, integración ERP, gestión de reglas de precio y estados de cuenta.</td>
      <td>Software de ruteo, Torre de Control, App para conductores, Prueba Electrónica de Entrega (POD).</td>
      <td>Software de monitoreo, alertas de sensores de temperatura en tiempo real y descarga de certificados térmicos.</td>
    </tr>
    <tr>
      <td><b>Precios / Costos</b></td>
      <td>Suscripción SaaS escalonada, pensada para la capacidad de pago de pymes.</td>
      <td>Suscripción Enterprise, altos costos de licenciamiento e implementación.</td>
      <td>Licenciamiento basado en el tamaño de la flota o volumen de vehículos.</td>
      <td>Costo mixto (SaaS + adquisición e instalación de hardware IoT en los camiones).</td>
    </tr>
    <tr>
      <td><b>Canales</b></td>
      <td>Web Application responsiva.</td>
      <td>Web y APIs corporativas.</td>
      <td>Web, integraciones telemáticas y Apps móviles.</td>
      <td>Web y hardware en vehículos.</td>
    </tr>
    <tr>
      <td><b>Fortalezas (S)</b></td>
      <td>Océano Azul: única plataforma enfocada en la intersección del comercio B2B y las variables de frío. Interfaz fácil y de rápida implementación.</td>
      <td>Plataforma muy madura, soporte corporativo robusto y gran posicionamiento regional.</td>
      <td>Tecnología algorítmica inigualable a corto plazo. Alta reputación en el rubro logístico.</td>
      <td>Especialización técnica profunda en lectura de datos físicos del mundo real.</td>
    </tr>
    <tr>
      <td><b>Debilidades (W)</b></td>
      <td>Marca nueva sin base instalada inicial. El MVP no incluye optimización avanzada de rutas ni conexión física con sensores (IoT).</td>
      <td>Plataforma agnóstica; no entiende de fechas de caducidad ni incompatibilidad biológica de carga.</td>
      <td>Nulo contacto con la etapa comercial. Asumen que la empresa ya tiene los pedidos ordenados antes de usar el sistema.</td>
      <td>Solución altamente costosa y dependiente de instalación de hardware en cada camión.</td>
    </tr>
    <tr>
      <td><b>Oportunidades (O)</b></td>
      <td>Nuevas regulaciones del MINSA obligan a las pymes a buscar software de trazabilidad. Crecimiento de la cultura de comercio electrónico B2B.</td>
      <td>Expansión a más países de LATAM donde el canal tradicional sigue siendo fuerte.</td>
      <td>Aumento del e-commerce y servicios de última milla a nivel nacional.</td>
      <td>Abaratamiento paulatino del costo de los dispositivos IoT.</td>
    </tr>
    <tr>
      <td><b>Amenazas (T)</b></td>
      <td>Resistencia al cambio del bodeguero tradicional (apego a WhatsApp). Posible desarrollo de módulos "fríos" por parte de la competencia.</td>
      <td>Surgimiento de startups especializadas por sector que les roben cuota de mercado local.</td>
      <td>Competencia agresiva por precio de otros TMS entrantes al mercado.</td>
      <td>Aplicaciones móviles gratuitas que intenten reemplazar la necesidad de hardware.</td>
    </tr>
  </tbody>
</table>

*Nota.* Tabla de análisis competitivo. Elaboración propia.

**Profundización del Análisis Estratégico (SWOT)**
<p align = "justify">
A partir de la matriz expuesta, el equipo de Ingeniería de Software ha identificado los vectores críticos de éxito y los riesgos arquitectónicos que guiarán el desarrollo del producto:

- **Explotación de Fortalezas (S) — El Océano Azul:**  
  Nuestra ventaja central no recae en la creación de un algoritmo complejo, sino en el modelado conceptual del dominio (*Domain-Driven Design*). Al construir nuestra base de datos asumiendo que **todo producto tiene una fecha de caducidad y una tolerancia térmica**, le hablamos al cliente distribuidor en su idioma nativo. Plataformas consolidadas como Riqra tendrían que forzar o refactorizar a un alto costo para poder igualar esta capacidad.

- **Mitigación de Debilidades (W) — Enfoque del MVP:**  
    Somos conscientes de que, como startup naciente, nuestra herramienta carece de conectividad física con el hardware de los camiones (como lo hace RedGPS). Para mitigar esta debilidad durante la fase inicial, nuestro sistema permitirá la carga manual y fotográfica de las guías de remisión y las lecturas térmicas en cada estado del pedido. Esto provee un nivel de trazabilidad documental aceptable para el cliente B2B, ganando tiempo hasta que nuestra plataforma logre la madurez necesaria para integrarse vía APIs con proveedores externos de telemetría.

- **Captura de Oportunidades (O) — Apalancamiento Regulatorio:**  
  El endurecimiento de las normativas de salubridad gubernamentales, como las emitidas recientemente por el MINSA, juega a nuestro favor. Las pymes se verán obligadas a abandonar el papel para evitar multas. Nuestra estrategia comercial posicionará al software no solo como una herramienta de ventas, sino como un escudo de cumplimiento normativo y sanitario.

- **Neutralización de Amenazas (T) — Diseño Libre de Fricción:**  
  La amenaza más inminente para la viabilidad del proyecto no proviene de la competencia corporativa, sino del arraigo cultural de los usuarios (bodegueros) a herramientas gratuitas como WhatsApp. Para neutralizar esta amenaza, la arquitectura de Front-end (Interfaz de Usuario) no requerirá instalaciones de aplicaciones pesadas ni configuraciones tediosas; operará bajo un modelo *Mobile-First*, garantizando que el bodeguero pueda reabastecer su tienda en menos de tres interacciones (clicks/taps).

---

**Conclusión del Landscape:**  
Para que una pyme distribuidora peruana intente alcanzar un ecosistema digital de extremo a extremo hoy en día, se vería obligada a contratar a Riqra para las ventas, a Drivin para las rutas, a RedGPS para el monitoreo y gastar decenas de miles de dólares en integración tecnológica. Nuestra startup suprime esa barrera financiera y técnica, consolidando la base operativa de esos tres mundos en un **Software as a Service unificado, accesible y diseñado explícitamente para proteger la integridad de los alimentos**.
</p>

### 2.1.2.	Estrategias y tácticas frente a competidores
<p align = "justify">
Al ingresar a un mercado donde interactúan sistemas empresariales heredados y plataformas consolidadas, nuestra startup debe adoptar un pragmatismo estratégico. La viabilidad del negocio no depende de desarrollar la máxima cantidad de funcionalidades de software en el menor tiempo posible, sino de asegurar la adopción de la herramienta resolviendo fricciones puntuales que la competencia ignora. 

A continuación, se detallan las estrategias operativas y cómo estas se traducirán en tácticas arquitectónicas y funcionales medibles dentro de la construcción del producto:

**Estrategia de Especialización Vertical (Posicionamiento frente a Riqra)**

**Objetivo Estratégico:** Es una consolidada plataforma SaaS de comercio electrónico B2B de origen peruano, con fuerte presencia regional. Su propuesta de valor permite a fabricantes y grandes distribuidores desplegar portales web donde sus clientes corporativos pueden autogestionar compras.

**Táctica Ejecutable (Base de Datos y Lógica de Negocio):** El esquema de la base de datos se diseñará con atributos ineludibles para la industria del frío. Mientras un e-commerce estándar maneja variables básicas (Nombre, Precio, Stock), nuestra entidad principal de "Producto" exigirá la parametrización de campos obligatorios como Temperatura_Minima_Grados, Temperatura_Maxima_Grados y Vida_Util_Dias.


**Táctica Ejecutable (Interfaz de Usuario):** En la aplicación web del cliente 
(bodeguero), el "carrito de compras" incluirá validaciones automatizadas. Si un usuario intenta añadir al mismo despacho productos biológicamente incompatibles (por ejemplo, cortes de carne cruda en el mismo contenedor que lácteos procesados), el sistema generará una alerta visual recomendando la separación de la carga, aportando valor agregado y previniendo la contaminación cruzada antes de que el pedido llegue al almacén.

**Estrategia Land and Expand (Aterrizar y Expandirse - Posicionamiento frente a Drivin y RedGPS)**

**Objetivo Estratégico:** No confrontar directamente a los gigantes del ruteo algorítmico (TMS) o de la infraestructura de hardware (IoT), sino capturar la capa transaccional inicial para volvernos indispensables en la operación diaria del cliente.

**Táctica Ejecutable (Fase 1 - MVP)**: "Aterrizar" en la empresa solucionando exclusivamente el dolor del área comercial y administrativa: eliminar el caos de los pedidos recibidos por WhatsApp. Capturaremos el 100% de la data de intención de compra en nuestra base de datos, convirtiéndonos en la fuente primaria de la verdad operativa (Single Source of Truth).


**Táctica Ejecutable (Fase 2 - Roadmap Tecnológico):** Una vez logrado el arraigo (lock-in) del cliente, "expandir" las capacidades mediante integraciones. El Back-end será construido utilizando una arquitectura basada en APIs RESTful, preparándolo para que, en un futuro, cuando un pedido cambie a estado "Despachado", el sistema pueda invocar de manera asíncrona un webhook hacia un TMS externo (como Drivin) para delegarle el ruteo avanzado, o recibir métricas térmicas desde los sensores de RedGPS, operando como un concentrador central.

**Estrategia de Adopción con Cero Fricción Tecnológica**

**Objetivo Estratégico:** Vencer la resistencia al cambio del usuario tradicional y evadir la barrera financiera que supone exigirle a una pyme costosas implementaciones de integración con sus sistemas contables (ERP) desde el día uno.

**Táctica Ejecutable para el Bodeguero (Usuario Secundario):** El portal B2B eliminará los complejos flujos de "Registro de Cuenta" que suelen causar abandono en el sector corporativo. El administrador de la empresa distribuidora pre-creará las cuentas en el sistema. El bodeguero simplemente ingresará al portal utilizando su número de documento fiscal (RUC o DNI) como identificador y una contraseña temporal de un solo uso (One-Time Password), accediendo instantáneamente a su lista de precios personalizada bajo una interfaz heurísticamente idéntica a la de una aplicación de supermercado B2C.


**Táctica Ejecutable para el Distribuidor (Cliente Primario):** Para reducir el "tiempo de salida al mercado" (Time to Market) de la implementación, el panel de administración contará nativamente con un módulo de migración masiva. Permitiremos que el distribuidor importe su catálogo completo, niveles de stock base y lista de clientes utilizando archivos de valores separados por comas (CSV) o formatos tabulares (Excel). Esto garantiza que el distribuidor pueda procesar su primer pedido real a las pocas horas de haber adquirido la licencia SaaS.
</p>

## 2.2.	Entrevistas

### 2.2.1.	Diseño de entrevistas

<p align = "justify">

**Apertura sugerida para cualquier segmento**

“Hola, gracias por darte este tiempo. Somos estudiantes de Ingeniería de Software y estamos investigando cómo se gestionan actualmente los pedidos y la coordinación operativa en la distribución de productos refrigerados. La idea no es evaluarte a ti ni a tu empresa, sino entender cómo trabajan hoy, qué dificultades aparecen y qué cosas les generan más carga o incertidumbre. La conversación durará aproximadamente entre 15 y 25 minutos; en algunos casos podría extenderse un poco más si aparece información valiosa. ¿Te parece bien si la grabamos solo para revisar luego la información y no perder detalles?”

**Guion por segmento**

**Segmento 1: Mercaderistas y personal de coordinación comercial**

**Segmento:** Personal que recibe, interpreta y canaliza pedidos hacia facturación, almacén o despacho

**Objetivo de investigación:** Entender cómo se recibe, interpreta y coordina el pedido en el día a día; identificar fricciones de comunicación, visibilidad y carga operativa.

**Duración sugerida:** 15 a 25 minutos.

**Tipo de entrevistado buscado:** 2 a 3 entrevistados que trabajen directamente con pedidos, clientes, vendedores o coordinación comercial.

**Foco principal:** Canales usados, pasos reales del proceso, ambigüedad de pedidos, retrabajo, presión operativa y criterios de adopción de una herramienta digital.

**Warm-up y contexto del rol**
Conviene arrancar por la rutina del trabajo, no por la solución.
- Cuéntame un poco cuál es tu rol y qué parte del proceso te toca manejar más seguido.  
- ¿Desde hace cuánto haces este trabajo y con qué tipo de clientes o puntos de venta coordinas más?  
- En tu día a día, ¿qué canales usas más para comunicarte con vendedores, clientes o el equipo interno?  
- ¿Qué dispositivo usas más cuando trabajas y con cuál te sientes más cómodo para resolver pedidos o consultas rápidas?  

**Flujo actual de coordinación de pedidos**

Aquí interesa entender el proceso tal como ocurre hoy, paso a paso.
- Cuando un cliente necesita hacer un pedido o consultar disponibilidad, ¿cómo suele empezar todo?  
- ¿Qué tipo de mensajes recibes normalmente: texto, audio, foto, captura, lista, llamada?  
- Después de que llega el pedido, ¿qué haces tú paso a paso hasta dejarlo encaminado?  
- ¿En qué momento revisas stock, precios o condiciones y con quién validas antes de continuar?  

**Fricciones, errores y retrabajo**

Aquí no basta con identificar el problema; hay que hacer que la persona recuerde casos reales.

- ¿Qué parte del proceso te hace perder más tiempo o te complica más?  
- ¿Te ha pasado que el pedido llegue mal armado, incompleto o con productos que no correspondían? ¿Qué pasó exactamente?  
- ¿Qué tan frecuente es tener que volver a escribir, confirmar o corregir algo que ya se había coordinado?  
- Cuando almacén o despacho detecta inconsistencias, ¿cómo te enteras y cómo se corrige eso?  

**Visibilidad y seguimiento**
La meta es saber qué tan ciego o visible es el proceso una vez que el pedido ya avanzó.

- Una vez que el pedido ya fue enviado o quedó en proceso, ¿cómo haces el seguimiento?  
- ¿Puedes saber fácilmente si ya salió, si se retrasó o si hubo algún problema?  
- Cuando hay cambios o reclamos, ¿la información queda clara o termina dispersa entre mensajes y llamadas?  

**Expectativas sobre una herramienta digital**
Aquí todavía no se vende la solución; se explora el mínimo valor esperado.
- Si existiera una herramienta digital para ordenar este proceso, ¿qué tendría que resolver sí o sí para que te sirva de verdad?  
- ¿Qué información te gustaría tener más visible y qué tarea manual te gustaría dejar de hacer?  
- ¿Qué te haría desconfiar o rechazar una herramienta nueva: complejidad, tiempo, costumbre, mala experiencia previa u otra cosa?  

**Cierre**
- Si pudieras cambiar una sola cosa del proceso actual, ¿qué cambiarías primero y por qué?  
- ¿Hay algo importante sobre tu trabajo o sobre este proceso que no te haya preguntado y creas que debería entender?  


**Nota para el moderador.** No es necesario formular todas las preguntas literalmente. Lo importante es mantener el foco, pedir ejemplos recientes, repreguntar “por qué” cuando aparezca un problema y no interrumpir silencios útiles.

**Segmento 2: Jefatura y responsables de logística, abastecimiento y operación**

**Segmento:**  Personas con responsabilidad de supervisión o decisión sobre importación, abastecimiento, almacén, inventario, despacho y coordinación logística.

**Objetivo de investigación:** Comprender el flujo end-to-end del pedido, sus puntos críticos, riesgos de escalabilidad y criterios de valor para una primera solución digital.

**Duración sugerida:** 20 a 30 minutos.

**Tipo de entrevistado buscado:** 2 a 3 entrevistados de jefatura, supervisión o coordinación operativa con visión amplia del proceso.

**Foco principal:** Trazabilidad, puntos de quiebre, visibilidad interna, coordinación entre áreas, prioridades del MVP y evolución futura.

**Warm-up y alcance del cargo**
La idea es ubicar rápido desde qué parte del proceso mira la operación.

- Cuéntame cuál es tu cargo y qué responsabilidad tienes dentro de la operación logística o de distribución.  
- ¿Tu enfoque está más en almacén, despacho, planificación, control o supervisión?  
- ¿Qué indicadores o preocupaciones tienes más presentes en tu trabajo: tiempos, stock, devoluciones, cumplimiento, mermas, incidencias?  

**Flujo operativo actual**

Aquí debe salir el recorrido real del pedido de extremo a extremo.


- Mirando el proceso completo desde que entra un pedido hasta que se entrega, ¿cómo funciona hoy en la práctica?  
- ¿Qué áreas intervienen y dónde se rompe más seguido el flujo?  
- ¿Cómo se conecta hoy la información comercial con la preparación, el stock y el despacho?  
- ¿Qué partes están integradas y cuáles siguen dependiendo de doble digitación o validaciones manuales?  

**Riesgos y puntos críticos**

Busca hechos, no opiniones generales.

- ¿Cuáles son los errores o incidencias que más afectan la operación logística?  
- En productos refrigerados, ¿qué variables son más delicadas y no se pueden perder de vista?  
- Cuando ocurre un problema, ¿qué tan fácil es rastrear qué pasó y en qué parte del proceso se originó?  
- ¿Qué parte del flujo se vuelve más vulnerable cuando sube el volumen de pedidos?  

**Gestión, control y decisiones**
Acá importa entender cómo decide y con qué información lo hace.
- ¿Qué tan visible es hoy el estado real de cada pedido para el equipo interno?  
- ¿Con qué información priorizan, corrigen o reprograman la operación?  
- ¿Qué decisiones hoy dependen demasiado de personas específicas y no de un sistema claro?  
- ¿Qué pasa cuando falta alguien del equipo o cuando entran muchos pedidos a la vez?  

**Valor esperado de una solución**
La meta es priorizar el valor real, no pedir features sueltas.

- Si pudieras ordenar el proceso con una sola mejora digital en esta etapa, ¿qué priorizarías?  
- ¿Qué sería suficiente para generar valor real desde una primera versión web?  
- ¿Qué cosas sí ves más para una fase futura y no como necesidad inmediata: mobile, sensores, integraciones complejas, automatizaciones avanzadas?  

**Cierre**

- Si pudieras cambiar una sola cosa del proceso actual, ¿qué cambiarías primero y por qué?  
- ¿Hay algo importante sobre la operación que no te haya preguntado y que consideres clave mencionar?  


**Nota para el moderador**. No es necesario formular todas las preguntas literalmente. Lo importante es mantener el foco, pedir ejemplos recientes, repreguntar “por qué” cuando aparezca un problema y no interrumpir silencios útiles.


**Segmento 3 · Clientes comerciales B2B minoristas y mayoristas**

**Segmento:** Bodegas, minimarkets, pequeños mayoristas y negocios HORECA que compran productos refrigerados o congelados a distribuidores.

**Objetivo de investigación: ** Entender cómo compra hoy el cliente comercial, qué fricciones vive al abastecerse y qué condiciones debería cumplir una plataforma para que realmente la adopte.

**Duración sugerida:** 15 a 25 minutos.

**Tipo de entrevistado buscado:** 3 a 5 entrevistados de clientes comerciales que compran a distribuidores de productos refrigerados o perecibles.

**Foco principal:** Abastecimiento, visibilidad de catálogo y stock, seguimiento del pedido, pérdidas por mala coordinación y condiciones reales de adopción digital.


**Warm-up y contexto del negocio**

El foco es ubicar frecuencia de compra y lógica de abastecimiento.

- Cuéntame un poco sobre tu negocio y tu rol cuando haces compras o reabastecimiento.  
- ¿Cada cuánto haces pedidos y qué tipo de productos compras con más frecuencia?  
- ¿A qué proveedores o distribuidores les compras normalmente y qué valoras más cuando eliges con quién abastecerte?  

**Forma actual de pedir y abastecerte**

Aquí interesa el flujo real de compra, no la versión ideal.
- Cuando necesitas hacer un pedido, ¿cómo lo haces hoy normalmente?  
- ¿Qué tan fácil o difícil es saber qué productos hay disponibles, a qué precio y en qué condiciones?  
- Después de pedir, ¿cómo haces seguimiento a lo que solicitaste?  
- ¿Sabes fácilmente si ya confirmaron, si falta algo o cuándo llegará?  

**Frustraciones y efectos en el negocio**


Hay que conectar la mala experiencia con consecuencias reales.
- ¿Qué es lo que más te incomoda o te hace perder tiempo cuando haces pedidos a distribuidores?  
- ¿Te ha pasado que pides algo y luego no llega como esperabas? ¿Qué ocurrió y cómo te afectó?  
- ¿Qué tan frecuente te pasa quedarte corto de stock o comprar de más por no tener información clara?  
- ¿Eso te genera pérdida, urgencia o desorden en tu negocio?  

**Tecnología, hábitos y confianza**

No basta saber si usa apps; importa cómo decide confiar en una herramienta.
- ¿Qué herramientas digitales usas hoy para tu negocio y con cuáles te sientes más cómodo?  
- Si un distribuidor te ofreciera una plataforma web para hacer pedidos, ¿qué tendría que tener para que sí la uses?  
- ¿Qué te haría no usarla o volver a WhatsApp: complejidad, lentitud, falta de confianza, costumbre u otra razón?  

**Cierre**
- Si pudieras describir la experiencia ideal de hacer un pedido a un distribuidor, ¿cómo debería ser?  
- ¿Qué pasos deberían simplificarse primero?  
- ¿Hay algo importante sobre tu forma de comprar o abastecerte que no te haya preguntado y consideres clave mencionar?  


**Nota para el moderador**. No es necesario formular todas las preguntas literalmente. Lo importante es mantener el foco, pedir ejemplos recientes, repreguntar “por qué” cuando aparezca un problema y no interrumpir silencios útiles.


</p>

### 2.2.2.	Registro de entrevistas
### 2.2.3.	Análisis de entrevistas

## 2.3.	Needfinding
### 2.3.1.	User Personas
### 2.3.2.	User Task Matrix
### 2.3.3.	User Journey Mapping
### 2.3.4.	Empathy Mapping

## 2.4.	Big Picture Eventstorming

## 2.5.	Ubiquitous Language
