/* =====================================================
   DATA ANALYST PORTFOLIO — SCRIPT
   Handles: mobile nav, scroll-spy, reveal-on-scroll,
   skill bar fill, and contact form validation.
===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // close mobile nav after clicking a link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- scroll-spy: highlight active nav link ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActiveLink = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveLink(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));

  /* ---------- reveal-on-scroll for cards & groups ---------- */
  const revealTargets = document.querySelectorAll(
    '.project-card, .cert-card, .skill-group, .about-copy, .about-facts, .contact-copy, .contact-form'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => revealObserver.observe(el));

  /* ---------- skill bar fill on scroll into view ---------- */
  const skillBars = document.querySelectorAll('.skill-bar');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const fill = bar.querySelector('.skill-fill');
        const level = bar.getAttribute('data-level') || 0;
        if (fill) fill.style.width = `${level}%`;
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ---------- contact form validation ---------- */
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');

  const validators = {
    name: (value) => value.trim().length >= 2 || 'Enter your name (at least 2 characters).',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) || 'Enter a valid email address.',
    message: (value) => value.trim().length >= 10 || 'Message should be at least 10 characters.'
  };

  const showFieldError = (field, message) => {
    const row = field.closest('.form-row');
    const errorEl = document.getElementById(`${field.id}Error`);
    if (message) {
      row.classList.add('has-error');
      if (errorEl) errorEl.textContent = message;
    } else {
      row.classList.remove('has-error');
      if (errorEl) errorEl.textContent = '';
    }
  };

  if (form) {
    ['name', 'email', 'message'].forEach(id => {
      const field = document.getElementById(id);
      if (!field) return;
      field.addEventListener('blur', () => {
        const result = validators[id](field.value);
        showFieldError(field, result === true ? '' : result);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      ['name', 'email', 'message'].forEach(id => {
        const field = document.getElementById(id);
        const result = validators[id](field.value);
        if (result !== true) {
          isValid = false;
          showFieldError(field, result);
        } else {
          showFieldError(field, '');
        }
      });

      if (!isValid) {
        formStatus.textContent = 'Please fix the highlighted fields.';
        formStatus.className = 'form-status error';
        return;
      }

      // No backend is connected. Replace this block with a real
      // fetch() call to your form endpoint (e.g. Formspree, Netlify
      // Forms, or your own API) when you're ready to go live.
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(() => {
        formStatus.textContent = "Thanks — your message has been noted. I'll reply soon.";
        formStatus.className = 'form-status success';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send message';
        form.reset();
      }, 700);
    });
  }

});
