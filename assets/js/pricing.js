document.addEventListener('DOMContentLoaded', () => {
  const FALLBACK_WEBAPP_BASE = 'https://nexa-webapp.onrender.com';
  const configuredWebappBase =
    document.documentElement.dataset.webappBase ||
    window.NEXA_WEBAPP_BASE ||
    localStorage.getItem('nexa-webapp-base') ||
    FALLBACK_WEBAPP_BASE;
  const REGISTER_WORKSPACE_URL = `${configuredWebappBase.replace(/\/$/, '')}/tenant-management/register-organization`;
  const plans = {
    en: {
      starter: {
        title: 'Starter',
        kicker: 'Entry visibility',
        purpose: 'Entry plan for buyer visibility and basic order tracking.',
        features: [
          'Basic Buyer Portal access',
          'Product Catalog visibility',
          'Purchase Requests',
          'Buyer order tracking',
          'Business document visibility',
          'Manual document checklist',
          'Basic notifications',
          'Limited team access',
          'No advanced decision support',
          'No dedicated integrations'
        ]
      },
      standard: {
        title: 'Standard',
        kicker: 'Core operations',
        purpose: 'The core recommended plan for importer-distributors.',
        features: [
          'S1 Commercial Workspace',
          'S2 Operations Workspace',
          'S3 Buyer Portal',
          'Product Catalog',
          'Purchase Requests',
          'Purchase Orders',
          'Business Documents',
          'Inventory Control',
          'Dispatch Orders',
          'Proof of Delivery',
          'Buyer Tracking',
          'Billing and payment management',
          'Shipping/tax/payment summary',
          'Visa, Mastercard, Apple Pay, Google Pay, PayPal, Yape, Plin, Bank Transfer and B2B Credit Line',
          'Basic promotions',
          'Customer portal requirements tracking',
          'Company Administration',
          'Team Access',
          'Operational Analytics'
        ]
      },
      professional: {
        title: 'Professional',
        kicker: 'Decision support',
        purpose: 'Advanced customer experience and decision support.',
        features: [
          'Everything in Standard',
          'Professional Buyer Catalog experience',
          'Advanced customer-specific discounts',
          'Advanced promotions',
          'Decision-support expansion',
          'Predictive demand recommendations',
          'Cold-chain anomaly insights',
          'Analytics exports',
          'Priority support',
          'Advanced price lists',
          'Multi-warehouse optimization preview'
        ]
      },
      enterprise: {
        title: 'Enterprise / Dedicated',
        kicker: 'Dedicated rollout',
        purpose: 'Dedicated integration and enterprise-grade operations.',
        features: [
          'Everything in Professional',
          'Real external customer portal integration roadmap',
          'SUNAT/document provider integration roadmap',
          'GPS/IoT provider integration roadmap',
          'Custom APIs',
          'SSO',
          'Dedicated onboarding',
          'Custom permissions',
          'Dedicated support agreement',
          'Dedicated infrastructure option'
        ]
      }
    },
    es: {
      starter: {
        title: 'Starter',
        kicker: 'Visibilidad inicial',
        purpose: 'Plan inicial para visibilidad de compradores y seguimiento básico de pedidos.',
        features: [
          'Acceso básico al Portal de Compradores',
          'Visibilidad del Catálogo de Productos',
          'Solicitudes de Compra',
          'Seguimiento de pedidos de compradores',
          'Visibilidad de documentos comerciales',
          'Lista de control de documentos manual',
          'Notificaciones básicas',
          'Acceso limitado del equipo',
          'Sin IA avanzada',
          'Sin integraciones dedicadas'
        ]
      },
      standard: {
        title: 'Standard',
        kicker: 'Operaciones principales',
        purpose: 'El plan operativo central recomendado para importadores-distribuidores.',
        features: [
          'Espacio de trabajo comercial S1',
          'Espacio de trabajo de operaciones S2',
          'Portal de compradores S3',
          'Catálogo de productos',
          'Solicitudes de compra',
          'Órdenes de compra',
          'Documentos comerciales',
          'Control de inventario',
          'Órdenes de despacho',
          'Evidencia de entrega (POD)',
          'Seguimiento para el comprador',
          'Gestión de facturación y pagos',
          'Resumen de envío, impuestos y pago',
          'Visa, Mastercard, Apple Pay, Google Pay, PayPal, Yape, Plin, Transferencia bancaria y Línea de crédito B2B',
          'Promociones básicas',
          'Seguimiento de requisitos del portal de clientes',
          'Administración de la empresa',
          'Acceso para el equipo',
          'Analítica operativa'
        ]
      },
      professional: {
        title: 'Professional',
        kicker: 'Soporte de decisiones',
        purpose: 'Experiencia avanzada del cliente y soporte en la toma de decisiones.',
        features: [
          'Todo lo incluido en Standard',
          'Experiencia de catálogo professional para compradores',
          'Descuentos avanzados específicos por cliente',
          'Promociones avanzadas',
          'Expansión del asistente de IA',
          'Recomendaciones de demanda predictivas',
          'Información sobre anomalías en cadena de frío',
          'Exportación de analíticas',
          'Soporte prioritario',
          'Listas de precios avanzadas',
          'Vista previa de optimización multi-almacén'
        ]
      },
      enterprise: {
        title: 'Enterprise / Dedicado',
        kicker: 'Despliegue dedicado',
        purpose: 'Integración dedicada y operaciones a escala empresarial.',
        features: [
          'Todo lo incluido en Professional',
          'Hoja de ruta real de integración de portal de clientes externos',
          'Hoja de ruta de integración con SUNAT o proveedor de documentos',
          'Hoja de ruta de integración con proveedor GPS o IoT',
          'APIs personalizadas',
          'Inicio de sesión único (SSO)',
          'Implementación guiada dedicada',
          'Permisos personalizados',
          'Acuerdo de nivel de soporte dedicado',
          'Opción de infraestructura de hardware dedicada'
        ]
      }
    }
  };

  const planCards = Array.from(document.querySelectorAll('[data-plan]'));
  const detailKicker = document.getElementById('plan-detail-kicker');
  const detailTitle = document.getElementById('plan-detail-title');
  const detailPurpose = document.getElementById('plan-detail-purpose');
  const detailFeatures = document.getElementById('plan-detail-features');
  const selectPlanButton = document.getElementById('select-plan-btn');
  let selectedPlanKey = 'standard';

  function updateSelectedPlan(planKey) {
    const lang = document.body.dataset.lang || 'en';
    const plan = (plans[lang] && plans[lang][planKey]) ? plans[lang][planKey] : plans.en[planKey] || plans.en.standard;
    selectedPlanKey = planKey;

    planCards.forEach((card) => {
      const isActive = card.dataset.plan === planKey;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    if (detailKicker) detailKicker.textContent = plan.kicker;
    if (detailTitle) detailTitle.textContent = plan.title;
    if (detailPurpose) detailPurpose.textContent = plan.purpose;

    if (detailFeatures) {
      detailFeatures.innerHTML = '';
      plan.features.forEach((feature) => {
        const item = document.createElement('li');
        item.textContent = feature;
        detailFeatures.appendChild(item);
      });
    }

  }

  planCards.forEach((card) => {
    card.addEventListener('click', () => {
      updateSelectedPlan(card.dataset.plan);
    });
  });

  if (selectPlanButton) {
    selectPlanButton.addEventListener('click', () => {
      window.location.href = REGISTER_WORKSPACE_URL;
    });
  }

  document.querySelectorAll('.pricing-faq-item').forEach((item) => {
    const button = item.querySelector('.pricing-faq-question');
    const answer = item.querySelector('.pricing-faq-answer');
    if (!button || !answer) return;

    button.addEventListener('click', () => {
      const willOpen = button.getAttribute('aria-expanded') !== 'true';

      document.querySelectorAll('.pricing-faq-question[aria-expanded="true"]').forEach((openButton) => {
        if (openButton === button) return;
        openButton.setAttribute('aria-expanded', 'false');
        const openAnswer = openButton.closest('.pricing-faq-item')?.querySelector('.pricing-faq-answer');
        if (openAnswer) openAnswer.hidden = true;
      });

      button.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      answer.hidden = !willOpen;
    });
  });

  // Listen to i18n language change events
  document.addEventListener('nexa:languagechange', () => {
    updateSelectedPlan(selectedPlanKey);
  });

  updateSelectedPlan(selectedPlanKey);
});
