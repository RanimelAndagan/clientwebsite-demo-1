/* =====================================================================
   The North Cafe — Cool ass website
   ===================================================================== */
'use strict';

/* - NAV: scrolled state + mobile toggle - */
(function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (!toggle || !links) return;

  const close = () => {
    nav.classList.remove('nav--open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };
  const open = () => {
    nav.classList.add('nav--open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  };

  toggle.addEventListener('click', () => {
    nav.classList.contains('nav--open') ? close() : open();
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) close();
  });

  // close when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && nav.classList.contains('nav--open')) close();
  });
})();

/* - MENU FILTER CHIPS - */
(function initMenuFilter() {
  const chips  = document.querySelectorAll('.menu__tabs .chip');
  const dishes = document.querySelectorAll('.menu .dish');
  if (!chips.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');

      const filter = chip.dataset.filter;

      dishes.forEach((dish, i) => {
        const match = filter === 'all' || dish.dataset.category === filter;
        dish.style.transitionDelay = match ? (i * 40) + 'ms' : '0ms';
        dish.classList.toggle('is-hidden', !match);
      });
    });
  });
})();

/* - REVEAL ON SCROLL - */
(function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  // Stagger children inside grouped containers via --i custom property
  const stagger = (selector) => {
    document.querySelectorAll(selector).forEach(group => {
      [...group.children].forEach((child, i) => child.style.setProperty('--i', i));
    });
  };
  stagger('.menu__grid');
  stagger('.ambiance__gallery');
  stagger('.notes__grid');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => io.observe(el));

  // Also reveal the parent grids (so the staggered child transitions fire)
  document.querySelectorAll('.menu__grid, .ambiance__gallery, .notes__grid').forEach(g => {
    const go = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          go.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    go.observe(g);
  });
})();

/* - SMOOTH SCROLL (progressive enhancement) - */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById('nav')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* - FOOTER YEAR - */
(function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* - HERO TITLE: line-by-line reveal on load - */
(function initHeroIntro() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // mark hero as loaded once fonts are ready (if possible)
  const ready = () => hero.classList.add('is-loaded');
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(ready);
    // fallback in case fonts API hangs
    setTimeout(ready, 800);
  } else {
    window.addEventListener('load', ready);
  }
})();

/* - SUBTLE SEAL TILT ON MOUSE MOVE (desktop) - */
(function initSealTilt() {
  const seal = document.querySelector('.seal');
  const logo = document.querySelector('.seal__logo');
  if (!seal || !logo) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const art = document.querySelector('.hero__art');
  if (!art) return;

  art.addEventListener('mousemove', (e) => {
    const rect = seal.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    logo.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
    logo.style.transition = 'transform 0.15s ease-out';
  });
  art.addEventListener('mouseleave', () => {
    logo.style.transform = '';
    logo.style.transition = 'transform 0.6s cubic-bezier(0.22,1,0.36,1)';
  });
})();
