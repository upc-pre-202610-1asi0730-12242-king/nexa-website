/**
 * interactions.js — Nexa V3
 * Scroll strip navigation + Navbar scroll state + Mobile menu + Demo modal + Contact form
 * Iteration 2: dropdown links updated to solutions.html anchors in HTML files directly.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAVBAR SCROLL STATE (flat sticky) ---- */
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 8) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load
  }

  /* ---- HORIZONTAL SCROLL STRIP (Protocol Section) ---- */
  const scrollContainer = document.querySelector('.scroll-strip');
  const btnLeft = document.querySelector('.btn-scroll-left');
  const btnRight = document.querySelector('.btn-scroll-right');

  if (scrollContainer) {
    const scrollAmount = 360;

    if (btnLeft) {
      btnLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }

    if (btnRight) {
      btnRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }

    // Update button disabled state
    const updateScrollButtons = () => {
      if (!btnLeft || !btnRight) return;
      btnLeft.disabled = scrollContainer.scrollLeft <= 0;
      btnRight.disabled =
        scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
    };

    scrollContainer.addEventListener('scroll', updateScrollButtons, { passive: true });
    updateScrollButtons(); // initial state
  }

  /* ---- DEMO MODAL ---- */
  const demoTriggers = document.querySelectorAll('[data-demo-trigger]');
  const modalOverlay = document.getElementById('demo-modal');

  if (modalOverlay) {
    demoTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Close button
    const closeBtn = modalOverlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
      }
    });

    function closeModal() {
      modalOverlay.classList.remove('open');
      syncShellState();
    }
  }

  /* ---- MOBILE NAVIGATION ---- */
  const mobileToggle = document.querySelector('.navbar-mobile-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  const dropdownTrigger = document.getElementById('nav-solutions-trigger');
  const dropdownBtn = document.getElementById('nav-solutions');
  const navbarOverlay = document.getElementById('navbar-overlay');

  function syncShellState() {
    const modalIsOpen = modalOverlay && modalOverlay.classList.contains('open');
    const mobileNavIsOpen = navbarLinks && navbarLinks.classList.contains('mobile-open');
    const dropdownIsOpen = dropdownTrigger && dropdownTrigger.classList.contains('open');
    const shouldShowOverlay = mobileNavIsOpen || dropdownIsOpen;

    if (navbarOverlay) {
      navbarOverlay.classList.toggle('visible', shouldShowOverlay);
    }

    document.body.style.overflow = (modalIsOpen || mobileNavIsOpen) ? 'hidden' : '';
  }

  function closeMobileMenu() {
    if (!mobileToggle || !navbarLinks) return;
    navbarLinks.classList.remove('mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    syncShellState();
  }

  function toggleMobileMenu() {
    if (!mobileToggle || !navbarLinks) return;
    const isOpen = navbarLinks.classList.toggle('mobile-open');
    mobileToggle.setAttribute('aria-expanded', isOpen.toString());

    if (!isOpen && dropdownTrigger) {
      dropdownTrigger.classList.remove('open');
      if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
    }

    syncShellState();
  }

  if (mobileToggle && navbarLinks) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    navbarLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeMobileMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (window.innerWidth > 768) return;
      if (!navbarLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  /* ---- SOLUTIONS DROPDOWN ---- */
  /*
   * Restrained Apple-inspired behavior:
   * - Click to open/close (not hover — more intentional B2B interaction)
   * - Chevron rotates 180° to signal state
   * - Background overlay: 5% black opacity — just enough to suggest focus, no drama
   * - Close via outside click or Escape key for accessibility
   */
  function openDropdown() {
    dropdownTrigger.classList.add('open');
    dropdownBtn.setAttribute('aria-expanded', 'true');
    syncShellState();
  }

  function closeDropdown() {
    dropdownTrigger.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
    syncShellState();
  }

  if (dropdownTrigger && dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownTrigger.classList.contains('open');
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdownTrigger.contains(e.target)) {
        closeDropdown();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDropdown();
        closeMobileMenu();
        dropdownBtn.blur();
      }
    });

    // Close when overlay is clicked
    if (navbarOverlay) {
      navbarOverlay.addEventListener('click', () => {
        closeDropdown();
        closeMobileMenu();
      });
    }
  }

  /* ---- FAQ ACCORDION ---- */
  /*
   * One-open-at-a-time. Click to toggle. Keyboard: Enter/Space supported via button.
   * Animation: max-height transition for smooth expand/collapse.
   */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-answer').style.maxHeight = null;
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---- CONTACT FORM (shared handler — works in company.html) ---- */
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');
  const contactSubmit = document.getElementById('contact-submit');

  if (contactForm && contactSuccess && contactSubmit) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.querySelectorAll('.form-group, .form-row').forEach(el => {
        el.style.display = 'none';
      });
      contactForm.querySelector('h3') && (contactForm.querySelector('h3').style.display = 'none');
      contactForm.querySelector('p') && (contactForm.querySelector('p').style.display = 'none');
      contactSubmit.style.display = 'none';
      contactSuccess.style.display = 'block';
    });
  }

});
