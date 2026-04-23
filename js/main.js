/* ============================================================
   DOMÉA — Interaction layer
   GSAP, ScrollTrigger, Lenis smooth scroll, and custom UX
   ============================================================ */

(function () {
  'use strict';

  // ================== LOADER ==================
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('loaded');
      document.body.style.overflow = '';
      // Trigger hero reveal
      document.querySelector('.hero-title')?.classList.add('revealed');
      document.querySelector('.hero-tag')?.classList.add('revealed');
      document.querySelector('.hero-sub')?.classList.add('revealed');
      document.querySelector('.hero-cta')?.classList.add('revealed');
    }, 2400);
  });
  document.body.style.overflow = 'hidden';

  // ================== LENIS SMOOTH SCROLL ==================
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchor links
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: 0, duration: 1.6 });
          document.getElementById('mobileMenu')?.classList.remove('open');
          document.getElementById('menuToggle')?.classList.remove('open');
        }
      });
    });
  }

  // ================== GSAP + SCROLLTRIGGER ==================
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Sync Lenis + ScrollTrigger
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // Navbar scroll
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      toggleClass: { className: 'scrolled', targets: '#navbar' }
    });

    // Reveal-up elements
    gsap.utils.toArray('.reveal-up').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('in-view'),
        once: true
      });
    });

    // Reveal images
    gsap.utils.toArray('.reveal-img').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('in-view'),
        once: true
      });
    });

    // Section eyebrows — fade + underline grow
    gsap.utils.toArray('.section-eyebrow').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -20,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    // Section headings — line reveal
    gsap.utils.toArray('.section-heading, .section-heading-light').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    // Project cards stagger
    gsap.utils.toArray('#projectsGrid .project-card').forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: (i % 2) * 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });

    // Service cards
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: i * 0.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: card.parentElement, start: 'top 80%' }
      });
    });

    // Process steps
    gsap.utils.toArray('.process-step').forEach((step, i) => {
      gsap.from(step, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: step.parentElement, start: 'top 80%' }
      });
    });

    // Experience items
    gsap.utils.toArray('.experience-item').forEach((item, i) => {
      gsap.from(item, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: (i % 4) * 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 90%' }
      });
    });

    // Testimonials
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: i * 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 88%' }
      });
    });

    // Blog cards
    gsap.utils.toArray('.blog-card').forEach((card, i) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: (i % 3) * 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%' }
      });
    });

    // Hero bg parallax (slow drift)
    gsap.to('.hero-bg img', {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Parallax on any .parallax-img
    gsap.utils.toArray('.parallax-img').forEach((img) => {
      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  // ================== CUSTOM CURSOR ==================
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Hover states
    const hoverSelectors = 'a, button, .project-card, .blog-card, .service-card, .filter-btn, input, select, textarea, .ba-slider';
    document.querySelectorAll(hoverSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  // ================== MOBILE MENU ==================
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ================== PROJECT FILTER ==================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.cat === filter;
        if (match) {
          card.classList.remove('hidden-filter');
          if (window.gsap) {
            gsap.fromTo(card, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
          }
        } else {
          card.classList.add('hidden-filter');
        }
      });

      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  });

  // ================== BEFORE / AFTER SLIDER ==================
  const baSlider = document.getElementById('baSlider');
  const baBefore = document.getElementById('baBefore');
  const baHandle = document.getElementById('baHandle');
  if (baSlider && baBefore && baHandle) {
    let dragging = false;

    const setPos = (clientX) => {
      const rect = baSlider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      baBefore.style.width = pct + '%';
      baHandle.style.left = pct + '%';
    };

    const start = (e) => {
      dragging = true;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const move = (e) => {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const end = () => { dragging = false; };

    baSlider.addEventListener('mousedown', start);
    baSlider.addEventListener('touchstart', start, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);

    // Entrance animation: sweep from 100 to 50
    if (window.gsap && window.ScrollTrigger) {
      ScrollTrigger.create({
        trigger: baSlider,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.fromTo(baBefore, { width: '100%' }, { width: '50%', duration: 1.6, ease: 'power3.inOut' });
          gsap.fromTo(baHandle, { left: '100%' }, { left: '50%', duration: 1.6, ease: 'power3.inOut' });
        }
      });
    }
  }

  // ================== CONTACT FORM ==================
  const form = document.getElementById('contactForm');
  if (form) {
    // Float-label state for selects (native selects don't trigger :placeholder-shown)
    const select = form.querySelector('select');
    const syncSelect = () => {
      const field = select.closest('.form-field');
      if (!field) return;
      if (select.value) field.classList.add('filled');
      else field.classList.remove('filled');
    };
    if (select) { select.addEventListener('change', syncSelect); syncSelect(); }

    // Make inputs have a placeholder for :placeholder-shown trick
    form.querySelectorAll('input, textarea').forEach((i) => {
      if (!i.hasAttribute('placeholder')) i.setAttribute('placeholder', ' ');
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      const name = form.name?.value?.trim();
      const phone = form.phone?.value?.trim();
      const project = form.projectType?.value;
      if (!name || !phone || !project) {
        if (status) {
          status.textContent = 'Please complete the required fields.';
          status.style.color = '#E8A87C';
          status.style.opacity = '1';
        }
        return;
      }
      if (status) {
        status.textContent = 'Thank you — our studio will reach out within 24 hours.';
        status.style.color = '#D4B684';
        status.style.opacity = '1';
      }
      form.reset();
      syncSelect?.();
    });
  }

  // ================== FOOTER / CURRENT YEAR ==================
  // (handled inline above)

  // ================== IMAGE FALLBACK ==================
  // Graceful fallback for any image that fails to load — swap to a neutral placeholder gradient
  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => {
      img.style.background = 'linear-gradient(135deg, #E8DFD1 0%, #D4C4A8 50%, #B8935A 100%)';
      img.style.opacity = '0.6';
    });
  });

})();
