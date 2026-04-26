document.addEventListener('DOMContentLoaded', () => {
  const getLang = () => (document.documentElement.lang === 'es' ? 'es' : 'en');

  const copy = {
    en: {
      nameRequired: 'Please enter your name.',
      nameShort: 'Use at least 2 characters.',
      emailRequired: 'Enter your work email.',
      emailInvalid: 'Enter a valid work email.',
      messageRequired: 'Tell us a bit about your operation.',
      messageShort: 'Share at least 20 characters so we can understand your setup.'
    },
    es: {
      nameRequired: 'Ingresa tu nombre.',
      nameShort: 'Usa al menos 2 caracteres.',
      emailRequired: 'Ingresa tu correo de trabajo.',
      emailInvalid: 'Ingresa un correo de trabajo valido.',
      messageRequired: 'Cuentanos un poco sobre tu operacion.',
      messageShort: 'Comparte al menos 20 caracteres para entender tu operacion.'
    }
  };

  const t = (key) => copy[getLang()][key] || copy.en[key];

  /* --- Interaccion del Menu (Scroll) --- */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* --- Menu Movil y Desplegable --- */
  const mobileToggle = document.querySelector('.navbar-mobile-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  const dropdownTrigger = document.getElementById('nav-solutions-trigger');
  const dropdownBtn = document.getElementById('nav-solutions');
  const dropdownPanel = document.getElementById('solutions-dropdown');
  const navbarOverlay = document.getElementById('navbar-overlay');
  const supportLauncher = document.querySelector('[data-support-launcher]');
  const supportPanel = document.querySelector('[data-support-panel]');
  const supportOverlay = document.querySelector('[data-support-overlay]');
  const supportClose = document.querySelector('[data-support-close]');
  const supportRevealAnchor = document.querySelector('#hero, .page-hero, .faq-page-hero, #faq-hero');
  let supportShouldDisplay = false;

  if (dropdownPanel) {
    dropdownPanel.hidden = true;
  }

  if (supportPanel) {
    supportPanel.hidden = true;
    supportPanel.setAttribute('aria-hidden', 'true');
  }

  if (supportOverlay) {
    supportOverlay.hidden = true;
    supportOverlay.setAttribute('aria-hidden', 'true');
  }

  if (supportLauncher) {
    supportLauncher.setAttribute('aria-expanded', 'false');
  }

  function isSupportOpen() {
    return Boolean(supportPanel && !supportPanel.hidden);
  }

  function syncSupportLauncherVisibility() {
    if (!supportLauncher) return;

    const shouldHideLauncher = isSupportOpen() || !supportShouldDisplay;
    supportLauncher.classList.toggle('is-hidden', shouldHideLauncher);
    supportLauncher.setAttribute('aria-hidden', shouldHideLauncher ? 'true' : 'false');
  }

  function updateSupportAvailability() {
    if (!supportLauncher) return;

    if (supportRevealAnchor) {
      const rect = supportRevealAnchor.getBoundingClientRect();
      supportShouldDisplay = rect.bottom <= Math.max(window.innerHeight * 0.42, 180);
    } else {
      supportShouldDisplay = window.scrollY > 180;
    }

    syncSupportLauncherVisibility();
  }

  function syncShellState() {
    const mobileNavIsOpen = Boolean(navbarLinks && navbarLinks.classList.contains('mobile-open'));
    const dropdownIsOpen = Boolean(dropdownTrigger && dropdownTrigger.classList.contains('open'));
    const shouldShowOverlay = mobileNavIsOpen || dropdownIsOpen;
    const supportOpen = isSupportOpen();

    if (navbarOverlay) {
      navbarOverlay.classList.toggle('visible', shouldShowOverlay);
      navbarOverlay.setAttribute('aria-hidden', shouldShowOverlay ? 'false' : 'true');
    }

    if (navbarLinks) {
      if (window.innerWidth <= 768) {
        navbarLinks.setAttribute('aria-hidden', mobileNavIsOpen ? 'false' : 'true');
      } else {
        navbarLinks.removeAttribute('aria-hidden');
      }
    }

    document.body.style.overflow = mobileNavIsOpen || supportOpen ? 'hidden' : '';
  }

  function closeDropdown() {
    if (!dropdownTrigger || !dropdownBtn) return;
    dropdownTrigger.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    if (dropdownPanel) dropdownPanel.hidden = true;
    syncShellState();
  }

  function openDropdown() {
    if (!dropdownTrigger || !dropdownBtn) return;
    dropdownTrigger.classList.add('open');
    dropdownBtn.setAttribute('aria-expanded', 'true');
    if (dropdownPanel) dropdownPanel.hidden = false;
    syncShellState();
  }

  function closeMobileMenu() {
    if (!mobileToggle || !navbarLinks) return;
    navbarLinks.classList.remove('mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'false');

    if (window.innerWidth <= 768) {
      closeDropdown();
    } else {
      syncShellState();
    }
  }

  function toggleMobileMenu() {
    if (!mobileToggle || !navbarLinks) return;
    const isOpen = navbarLinks.classList.toggle('mobile-open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (!isOpen) {
      closeDropdown();
    } else {
      syncShellState();
    }
  }

  function closeSupportPanel(returnFocus = true) {
    if (!supportPanel || !supportLauncher) return;

    supportPanel.hidden = true;
    supportPanel.setAttribute('aria-hidden', 'true');
    supportLauncher.setAttribute('aria-expanded', 'false');

    if (supportOverlay) {
      supportOverlay.hidden = true;
      supportOverlay.setAttribute('aria-hidden', 'true');
    }

    updateSupportAvailability();
    syncShellState();

    if (returnFocus && supportShouldDisplay) {
      supportLauncher.focus();
    }
  }

  function openSupportPanel() {
    if (!supportPanel || !supportLauncher) return;

    closeDropdown();
    closeMobileMenu();

    supportPanel.hidden = false;
    supportPanel.setAttribute('aria-hidden', 'false');
    supportLauncher.setAttribute('aria-expanded', 'true');
    supportLauncher.classList.add('is-hidden');

    if (supportOverlay) {
      supportOverlay.hidden = false;
      supportOverlay.setAttribute('aria-hidden', 'false');
    }

    syncSupportLauncherVisibility();
    syncShellState();

    if (supportClose) {
      window.requestAnimationFrame(() => supportClose.focus());
    }
  }

  if (mobileToggle && navbarLinks) {
    mobileToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      toggleMobileMenu();
    });

    navbarLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeMobileMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (window.innerWidth > 768) return;
      if (!navbarLinks.contains(event.target) && !mobileToggle.contains(event.target)) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navbarLinks.classList.remove('mobile-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }

      updateSupportAvailability();
      syncShellState();
      syncOpenFaqHeights();
    });
  }

  if (dropdownTrigger && dropdownBtn) {
    dropdownBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = dropdownTrigger.classList.contains('open');
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    document.addEventListener('click', (event) => {
      if (!dropdownTrigger.contains(event.target)) {
        closeDropdown();
      }
    });

    if (navbarOverlay) {
      navbarOverlay.addEventListener('click', () => {
        closeDropdown();
        closeMobileMenu();
      });
    }
  }

  if (supportLauncher && supportPanel) {
    updateSupportAvailability();
    window.addEventListener('scroll', updateSupportAvailability, { passive: true });

    supportLauncher.addEventListener('click', () => {
      if (isSupportOpen()) {
        closeSupportPanel();
      } else {
        openSupportPanel();
      }
    });

    if (supportClose) {
      supportClose.addEventListener('click', () => {
        closeSupportPanel();
      });
    }

    if (supportOverlay) {
      supportOverlay.addEventListener('click', () => {
        closeSupportPanel(false);
      });
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;

    if (isSupportOpen()) {
      closeSupportPanel();
      return;
    }

    closeDropdown();
    closeMobileMenu();
    if (dropdownBtn) dropdownBtn.blur();
  });

  /* --- Acordeon de Preguntas --- */
  const faqItems = Array.from(document.querySelectorAll('.faq-item'));
  const faqTimers = new WeakMap();

  function clearFaqTimer(answer) {
    const timer = faqTimers.get(answer);
    if (!timer) return;
    window.clearTimeout(timer);
    faqTimers.delete(answer);
  }

  function closeFaqItem(item, immediate = false) {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    clearFaqTimer(answer);
    item.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');

    if (immediate) {
      answer.hidden = true;
      answer.style.maxHeight = '';
      return;
    }

    answer.style.maxHeight = `${answer.scrollHeight}px`;
    requestAnimationFrame(() => {
      answer.style.maxHeight = '0px';
    });

    const timer = window.setTimeout(() => {
      if (!item.classList.contains('open')) {
        answer.hidden = true;
        answer.style.maxHeight = '';
      }
    }, 360);

    faqTimers.set(answer, timer);
  }

  function openFaqItem(item) {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    clearFaqTimer(answer);
    answer.hidden = false;
    item.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    answer.style.maxHeight = '0px';

    requestAnimationFrame(() => {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
  }

  function syncOpenFaqHeights() {
    faqItems.forEach((item) => {
      if (!item.classList.contains('open')) return;
      const answer = item.querySelector('.faq-answer');
      if (!answer) return;
      answer.hidden = false;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    });
  }

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;

    answer.hidden = true;
    answer.style.maxHeight = '';

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          closeFaqItem(otherItem);
        }
      });

      if (isOpen) {
        closeFaqItem(item);
      } else {
        openFaqItem(item);
      }
    });
  });

  if (faqItems.length > 0) {
    const hashTarget = window.location.hash ? document.querySelector(window.location.hash) : null;
    const hashFaqItem = hashTarget ? hashTarget.closest('.faq-item') : null;

    if (hashFaqItem) {
      openFaqItem(hashFaqItem);
    }

    window.addEventListener('resize', syncOpenFaqHeights, { passive: true });
    window.addEventListener('load', syncOpenFaqHeights, { passive: true });
    document.addEventListener('nexa:languagechange', syncOpenFaqHeights);
  }

  /* --- Formulario de Contacto --- */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  const contactSubmit = document.getElementById('contact-submit');
  const contactFields = {
    name: document.getElementById('contact-name'),
    email: document.getElementById('contact-email'),
    message: document.getElementById('contact-message')
  };
  const contactErrors = {
    name: document.getElementById('contact-name-error'),
    email: document.getElementById('contact-email-error'),
    message: document.getElementById('contact-message-error')
  };
  const contactFieldKeys = Object.keys(contactFields);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(fieldName, message = '') {
    const field = contactFields[fieldName];
    const error = contactErrors[fieldName];
    if (!field || !error) return;

    const hasError = Boolean(message);
    field.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    error.textContent = message;
    error.hidden = !hasError;
  }

  function validateField(fieldName) {
    const field = contactFields[fieldName];
    if (!field) return true;

    const value = field.value.trim();
    let messageKey = '';

    if (fieldName === 'name') {
      if (!value) messageKey = 'nameRequired';
      else if (value.length < 2) messageKey = 'nameShort';
    }

    if (fieldName === 'email') {
      if (!value) messageKey = 'emailRequired';
      else if (!emailPattern.test(value)) messageKey = 'emailInvalid';
    }

    if (fieldName === 'message') {
      if (!value) messageKey = 'messageRequired';
      else if (value.length < 20) messageKey = 'messageShort';
    }

    setFieldError(fieldName, messageKey ? t(messageKey) : '');
    return !messageKey;
  }

  function syncTranslatedErrors() {
    contactFieldKeys.forEach((fieldName) => {
      const field = contactFields[fieldName];
      if (field && field.getAttribute('aria-invalid') === 'true') {
        validateField(fieldName);
      }
    });
  }

  function setSubmitting(isSubmitting) {
    if (!contactSubmit) return;
    contactSubmit.classList.toggle('is-loading', isSubmitting);
    contactSubmit.disabled = isSubmitting;
    contactSubmit.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
  }

  if (contactForm && contactSuccess && contactSubmit) {
    contactFieldKeys.forEach((fieldName) => {
      const field = contactFields[fieldName];
      if (!field) return;

      field.addEventListener('blur', () => {
        if (!contactForm.classList.contains('is-success')) {
          validateField(fieldName);
        }
      });

      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') {
          validateField(fieldName);
        }
      });
    });

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (contactForm.classList.contains('is-success')) return;

      const firstInvalidField = contactFieldKeys.find((fieldName) => !validateField(fieldName));

      if (firstInvalidField) {
        contactFields[firstInvalidField].focus();
        return;
      }

      setSubmitting(true);

      window.setTimeout(() => {
        setSubmitting(false);
        contactForm.classList.add('is-success');
        contactSuccess.hidden = false;
        contactSuccess.focus();
      }, 700);
    });

    document.addEventListener('nexa:languagechange', syncTranslatedErrors);
  }

  /* --- Simulador de Inicio de Sesion --- */
  document.querySelectorAll('[data-login-placeholder]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (typeof window.showToast === 'function') {
        window.showToast(getLang());
      }
    });
  });

  syncShellState();
});
