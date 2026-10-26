/* carlos.dev · main.js
   IIFE clásico, sin módulos. Cada init va envuelto en safe(). */
(function () {
  'use strict';

  var EMAIL = 'carlossalguero09@gmail.com';
  var WHATSAPP = '34640082313'; // formato internacional sin + ni espacios
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  function safe(fn, name) {
    try { fn(); } catch (e) { if (window.console) console.warn('[init] ' + name + ' falló:', e); }
  }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }

  /* ---------------- i18n ---------------- */
  var EN = {
    'skip': 'Skip to content',
    'nav.about': 'About', 'nav.services': 'Services', 'nav.work': 'Work', 'nav.process': 'Process', 'nav.cta': "Let's talk",
    'hero.badge': 'Available for 2 new projects in November',
    'hero.title': 'I build fast websites<br>that turn visitors<br>into clients.',
    'hero.sub': "I'm Carlos, a full-stack developer. I design, build and launch your entire project, from the interface to the database, with no middlemen and a fixed price.",
    'hero.typePrefix': 'focus',
    'hero.cta': 'Tell me about your project', 'hero.cta2': 'See my work', 'pill.seo': 'Technical SEO',
    'work.sub': 'Real websites, live and working for real businesses. Drag to see them all and open any of them live.',
    'stats.load.d': 'Lightweight sites that open instantly, even on a weak connection.', 'stats.lh.d': 'Performance, accessibility and SEO measured on every delivery.',
    'stats.reply.d': 'Write to me today and tomorrow you have a priced proposal.', 'stats.support.d': 'After launch I stay with you for any tweak you need.', 'hero.scroll': 'scroll · 8 chapters',
    'stats.load': 'target load time', 'stats.lh': 'on Lighthouse', 'stats.reply': 'response time', 'stats.support': 'of support included',
    'services.label': 'services', 'services.title': 'Everything your project needs, in one person.',
    's1.t': 'Custom websites', 's1.d': 'Landing pages and company sites designed from scratch, with careful animation and built to win clients.',
    's2.t': 'Full-stack applications', 's2.d': 'Dashboards, SaaS, client portals and online booking with Next.js, Node and Supabase. Auth, payments and deployment included.',
    's3.t': 'Online stores', 's3.d': 'E-commerce on Shopify or custom with Stripe, so buying feels easy on mobile too.',
    's4.t': 'Performance and technical SEO', 's4.d': 'I audit your current site, fix its Core Web Vitals and make it easy for Google to understand. Faster means more sales.',
    'tagline': "I don't sell templates. I write every line thinking about who will use it and what your business needs to happen after the click.",
    'work.label': 'work', 'work.title': 'Recent work.',
    'p1.type': 'Company site + local SEO',
    'p1.d': 'Website for a 24/7 emergency plumbing company. One tap to call from mobile, pages per service and area, and local SEO across the province of Jaén.',
    'p2.type': 'Multi page site + app',
    'p2.d': 'Platform for a premium home maintenance company in Marbella. Bilingual, with online booking and a private client area powered by Supabase.',
    'p4.type': 'Immersive 3D site',
    'p4.d': 'Indoor padel club in Dos Hermanas. A real-time 3D court you fly through as you scroll, a 3D carousel with the head coach videos, WhatsApp trial class and Playtomic booking.',
    'p5.type': 'Shopify online store',
    'p5.d': 'Online sportswear store with a custom Shopify theme. Video homepage, shade picker, every piece linked to its other colours and its matching set, size guide and a drop launch with countdown.',
    'p6.type': 'Showcase site + scroll animation',
    'p6.d': 'Website for a new and recycled artificial grass company in Morón de la Frontera. Scroll-driven scenes, model catalogue, square-metre calculator and quotes straight on WhatsApp.',
    'p7.type': 'Institutional website redesign',
    'p7.d': 'Concept redesign for the Andalusian Olympic Shooting Federation: 2026 calendar with filters and calendar export, live agendas for its 8 delegations connected to their WordPress, a 72-club directory and a step-by-step insurance guide.',
    'work.live': 'See it live',
    'ps.pts': 'particles', 'ps.k1': 'noise', 'ps.k2': 'shape', 'ps.k3': 'code',
    'ps.t1': 'It all starts with a thousand loose ideas.', 'ps.t2': 'Behind every website there is someone putting them in order.', 'ps.t3': 'And turning them into code that works.',
    'hero.reel': 'Watch the video', 'reel.label': 'showreel · 24 s', 'reel.title': '24 seconds that sum it all up.', 'reel.play': 'Watch with sound',
    'ch.1': 'Intro', 'ch.2': 'Performance', 'ch.3': 'Work', 'ch.4': 'Code', 'ch.6': 'Guarantees', 'ch.7': "Let's talk",
    'chip.a': '6 sites launched in 2026',
    'about.label': 'about me', 'about.title': "Hi, I'm Carlos.<br>The person behind your&nbsp;website.",
    'about.p1': 'I am a full-stack developer working with real businesses: padel clubs, clothing stores, service companies. I like sitting down with the owner, understanding what they need and turning it into a website that works for them.',
    'about.p2': 'With me you are not talking to an agency or a salesperson. You talk to the person who designs and codes every line of your project, start to finish.',
    'about.f1': 'sites published in 2026', 'about.f2': 'cities with clients', 'about.f3': 'person, start to finish', 'about.cta': "Let's grab a coffee",
    'p3.t': 'Your project could be next.', 'p3.d': 'Tell me what you need and within 24 h you get a proposal with price and dates.',
    'process.label': 'process', 'process.title': 'Four steps. Zero surprises.',
    'st1.t': 'Discovery call', 'st1.d': '30 minutes to understand your business and goals. Within 48 h you get a fixed price proposal.',
    'st2.t': 'Design and prototype', 'st2.d': 'You see your site before a single line is written. We refine it together until it fits your brand.',
    'st3.t': 'Built in 2-3 days', 'st3.d': 'You get a preview URL to see the site working and ask for changes before it goes live.',
    'st4.t': 'Launch and support', 'st4.d': 'I publish your site, set up domain and analytics, and stay with you for 30 days of included support.',
    'stack.title': 'Modern tools, chosen to last.',
    'stack.d': 'I use technology proven in production by thousands of companies. Your site will be fast, secure and easy for any developer to maintain in the future.',
    'g1': 'Fixed price, no hidden costs', 'g2': 'You own the code and the domain', 'g3': 'Designed mobile first', 'g4': '30 days of support after launch',
    'faq.title': 'Frequently asked questions.',
    'q1': 'How much does a website cost?', 'a1': 'A website costs between €500 and €800, depending on what you need. Always at a fixed price.',
    'q2': 'How long does it take?', 'a2': '2 to 3 days. You get exact dates in the proposal.',
    'q3': 'Can I edit the content myself?', 'a3': 'Yes. If you need it, I add a simple content panel and record a video showing you how to use it.',
    'q4': 'Do you handle domain and hosting?', 'a4': 'Yes. I set everything up in your name so it is always yours, even if you switch providers one day.',
    'q5': 'Do you work with clients outside Spain?', 'a5': 'Yes. I work remotely in English and Spanish, and schedule calls in your time zone.',
    'q6': 'What happens after launch?', 'a6': 'You get 30 days of included support. After that you can book monthly maintenance or ask for one off changes.',
    'contact.label': 'contact', 'contact.title': 'Got an idea?<br>Let’s make it real.',
    'contact.d': 'I reply within 24 h with a first assessment. No commitment.', 'contact.time': 'My time',
    'f.name': 'Name', 'f.errName': 'Please enter your name.',
    'f.type': 'Project type', 'f.t2': 'Company site', 'f.t3': 'Application', 'f.t4': 'Store',
    'f.msg': 'Tell me a bit more', 'f.errMsg': 'Add at least one sentence about your project.',
    'f.send': 'Send on WhatsApp', 'f.ok': 'WhatsApp opened with the message ready. Just hit send and I will reply within 24 h.',
    'footer.made': 'Handmade, no templates.', 'footer.privacy': 'Privacy',
    'pal.ph': 'Type a command…'
  };
  var UI = {
    es: {
      roles: ['Next.js y React', 'APIs con Node.js', 'Supabase y PostgreSQL', 'tiendas que venden', 'webs que cargan en < 1 s'],
      accWords: ['plantillas.', 'clic.'], copied: 'Email copiado', langSet: 'Idioma: español',
      waIntro: 'Hola Carlos, te escribo desde tu web.', waName: 'Nombre', waType: 'Proyecto', none: 'Sin resultados',
      cmds: { reel: 'Ver el vídeo', about: 'Sobre mí', insta: 'Abrir Instagram', services: 'Ir a servicios', work: 'Ver proyectos', process: 'Ver proceso', stack: 'Ver stack', faq: 'Preguntas frecuentes', contact: 'Contactar', email: 'Copiar email', lang: 'Switch to English', github: 'Abrir GitHub', top: 'Volver arriba' }
    },
    en: {
      roles: ['Next.js & React', 'Node.js APIs', 'Supabase & PostgreSQL', 'stores that sell', 'sites that load in < 1 s'],
      accWords: ['templates.', 'click.'], copied: 'Email copied', langSet: 'Language: English',
      waIntro: 'Hi Carlos, I am writing from your website.', waName: 'Name', waType: 'Project', none: 'No results',
      cmds: { reel: 'Watch the video', about: 'About me', insta: 'Open Instagram', services: 'Go to services', work: 'See work', process: 'See process', stack: 'See stack', faq: 'FAQ', contact: 'Get in touch', email: 'Copy email', lang: 'Cambiar a español', github: 'Open GitHub', top: 'Back to top' }
    }
  };
  var ES = {}; // se rellena leyendo el HTML original
  var lang = 'es';
  var langListeners = [];

  function captureES() {
    $$('[data-i18n]').forEach(function (el) { ES[el.getAttribute('data-i18n')] = el.textContent; });
    $$('[data-i18n-html]').forEach(function (el) { ES[el.getAttribute('data-i18n-html')] = el.innerHTML; });
    $$('[data-i18n-ph]').forEach(function (el) { ES[el.getAttribute('data-i18n-ph')] = el.getAttribute('placeholder'); });
  }
  function applyLang(l) {
    lang = l === 'en' ? 'en' : 'es';
    var dict = lang === 'en' ? EN : ES;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) { var k = el.getAttribute('data-i18n'); if (dict[k] != null) el.textContent = dict[k]; });
    $$('[data-i18n-html]').forEach(function (el) { var k = el.getAttribute('data-i18n-html'); if (dict[k] != null) el.innerHTML = dict[k]; });
    $$('[data-i18n-ph]').forEach(function (el) { var k = el.getAttribute('data-i18n-ph'); if (dict[k] != null) el.setAttribute('placeholder', dict[k]); });
    store('lang', lang);
    langListeners.forEach(function (fn) { safe(fn, 'langListener'); });
  }
  function initI18n() {
    captureES();
    var saved = store('lang');
    var initial = saved || ((navigator.language || 'es').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
    if (initial !== 'es') applyLang(initial); else document.documentElement.lang = 'es';
    $('#langToggle').addEventListener('click', function () { applyLang(lang === 'es' ? 'en' : 'es'); toast(UI[lang].langSet); });
  }

  /* ---------------- Splash ---------------- */
  function initSplash() {
    var s = $('#splash'); if (!s) return;
    var ms = $('#splashMs'); if (ms) ms.textContent = String(Math.round(performance.now()) || 412);
    var hide = function () { s.classList.add('is-done'); document.body.classList.add('is-ready'); };
    setTimeout(hide, 1500);
  }

  /* ---------------- Reveal ---------------- */
  function initReveal() {
    var els = $$('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('is-in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        var sibs = $$('.reveal:not(.is-in)', el.parentNode).filter(function (x) { return x.parentNode === el.parentNode; });
        var delay = Math.max(0, sibs.indexOf(el)) * 80;
        setTimeout(function () { el.classList.add('is-in'); el.dispatchEvent(new CustomEvent('revealed')); }, Math.min(delay, 400));
        io.unobserve(el);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
    // Red de seguridad: nada se queda oculto más de 6s
    setTimeout(function () { els.forEach(function (e) { e.classList.add('is-in'); }); }, 6000);
  }

  /* ---------------- Toast ---------------- */
  var toastT;
  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('is-on');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('is-on'); }, 2200);
  }

  /* ---------------- Nav, menú y progreso ---------------- */
  function initNav() {
    var nav = $('#nav'), burger = $('#burger'), menu = $('#menu'), bar = $('#progress');
    function setMenu(open) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    }
    burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('is-open')) setMenu(false); });

    var lastY = 0, ticking = false;
    function onScroll() {
      var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
      var open = menu.classList.contains('is-open');
      nav.classList.toggle('is-hidden', !open && y > 400 && y > lastY + 4);
      if (y < lastY - 4 || y < 400) nav.classList.remove('is-hidden');
      lastY = y; ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    // Sección activa
    var links = $$('.nav__links a');
    var map = {}; links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
          map[en.target.id].classList.add('is-active'); map[en.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------------- Typewriter ---------------- */
  function initTyped() {
    var el = $('#typed'); if (!el) return;
    var i = 0, ch = el.textContent.length, del = false, t;
    function tick() {
      var words = UI[lang].roles, w = words[i % words.length];
      if (!del) { ch++; el.textContent = w.slice(0, ch); if (ch >= w.length) { del = true; t = setTimeout(tick, 1800); return; } }
      else { ch--; el.textContent = w.slice(0, ch); if (ch <= 0) { del = false; i++; } }
      t = setTimeout(tick, del ? 35 : 70);
    }
    el.textContent = UI[lang].roles[0]; ch = el.textContent.length; del = true;
    t = setTimeout(tick, 2600);
    langListeners.push(function () { clearTimeout(t); i = 0; ch = 0; del = false; tick(); });
  }

  /* ---------------- Contadores + gauge ---------------- */
  function initCounters() {
    $$('[data-count]').forEach(function (el) {
      var target = +el.getAttribute('data-count'); if (target < 2) return;
      var io = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting) return; io.disconnect();
        var t0 = performance.now(), dur = 1600;
        (function step(now) {
          var k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4);
          el.textContent = Math.round(target * e);
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }, { threshold: 0.05 });
      io.observe(el);
    });
    var g = $('#gaugeFg'), num = $('#gaugeNum'); if (!g) return;
    var io2 = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return; io2.disconnect();
      var target = 98, C = 326.7;
      setTimeout(function () {
        g.style.strokeDashoffset = String(C * (1 - target / 100));
        var t0 = performance.now();
        (function step(now) {
          var k = Math.min(1, (now - t0) / 2000), e = 1 - Math.pow(1 - k, 4);
          num.textContent = Math.round(target * e);
          if (k < 1) requestAnimationFrame(step);
        })(t0);
      }, 300);
    }, { threshold: 0.05 });
    io2.observe(g.closest('.card'));
  }

  /* ---------------- Tagline palabra a palabra ---------------- */
  function initTagline() {
    var el = $('#tagline'); if (!el) return;
    var words = [];
    function split() {
      var acc = UI[lang].accWords;
      var txt = el.textContent.trim().split(/\s+/);
      el.innerHTML = txt.map(function (w) { return '<span class="w' + (acc.indexOf(w) > -1 ? ' acc' : '') + '">' + w + '</span>'; }).join(' ');
      words = $$('.w', el); update();
    }
    var ticking = false;
    function update() {
      var r = el.getBoundingClientRect(), vh = window.innerHeight;
      // empieza cuando el bloque entra al 85% de la pantalla y termina al 35%
      var p = (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.6);
      p = Math.max(0, Math.min(1, p));
      var n = Math.round(p * words.length);
      for (var i = 0; i < words.length; i++) words[i].classList.toggle('on', i < n);
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    split();
    langListeners.push(split);
  }

  /* ---------------- Scramble de etiquetas ---------------- */
  function initScramble() {
    var chars = '!<>-_\\/[]{}=+*^?#01';
    $$('[data-scramble]').forEach(function (el) {
      el.addEventListener('revealed', function () {
        var nodes = [];
        (function walk(n) { n.childNodes.forEach(function (c) { if (c.nodeType === 3) nodes.push(c); else walk(c); }); })(el);
        nodes.forEach(function (node) {
          var final = node.textContent, f = 0, total = 18;
          (function step() {
            node.textContent = final.split('').map(function (ch, i) {
              if (ch === ' ' || ch === '/') return ch;
              return i < (f / total) * final.length ? ch : chars[(Math.random() * chars.length) | 0];
            }).join('');
            if (++f <= total) setTimeout(step, 40); else node.textContent = final;
          })();
        });
      });
    });
  }

  /* ---------------- Spotlight, tilt, magnético ---------------- */
  function initPointerFx() {
    if (!finePointer) return;
    $$('.spot').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px'); el.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
    $$('.tilt').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = 'perspective(1000px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateZ(0)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
    $$('.magnetic').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = 'translate(' + (x * 6).toFixed(1) + 'px,' + (y * 4).toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }

  /* ---------------- Cursor ---------------- */
  function initCursor() {
    if (!finePointer) return;
    var cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring');
    var x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    document.addEventListener('pointermove', function (e) { x = e.clientX; y = e.clientY; cur.classList.remove('is-hidden'); });
    document.addEventListener('pointerleave', function () { cur.classList.add('is-hidden'); });
    document.addEventListener('pointerover', function (e) {
      cur.classList.toggle('is-hover', !!e.target.closest('a, button, summary, label, input, textarea, .tilt, [role="option"]'));
    });
    (function loop() {
      rx += (x - rx) * .18; ry += (y - ry) * .18;
      dot.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* ---------------- Línea de proceso ---------------- */
  function initSteps() {
    var list = $('#steps'); if (!list) return;
    var steps = $$('.step', list), ticking = false;
    function update() {
      var r = list.getBoundingClientRect(), mid = window.innerHeight * 0.6;
      var p = Math.max(0, Math.min(1, (mid - r.top) / r.height));
      list.style.setProperty('--p', p.toFixed(3));
      steps.forEach(function (s) { var sr = s.getBoundingClientRect(); s.classList.toggle('is-lit', sr.top + 28 < mid); });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* ---------------- Editor que se escribe solo ---------------- */
  function initCode() {
    var pre = $('#code'); if (!pre || !('IntersectionObserver' in window)) return;
    var nodes = [];
    (function walk(n) { n.childNodes.forEach(function (c) { if (c.nodeType === 3) nodes.push({ n: c, t: c.textContent }); else walk(c); }); })(pre);
    var caret = document.createElement('span'); caret.className = 'caret';
    var io = new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return; io.disconnect();
      nodes.forEach(function (o) { o.n.textContent = ''; });
      var ni = 0, ci = 0;
      (function step() {
        if (ni >= nodes.length) { pre.querySelector('code').appendChild(caret); return; }
        var o = nodes[ni];
        for (var k = 0; k < 3 && ci < o.t.length; k++) o.n.textContent += o.t[ci++];
        if (o.n.parentNode) o.n.parentNode.insertBefore(caret, o.n.nextSibling);
        if (ci >= o.t.length) { ni++; ci = 0; }
        setTimeout(step, 16);
      })();
    }, { threshold: 0.3 });
    io.observe(pre);
  }

  /* ---------------- Contacto ---------------- */
  function copyEmail() {
    var done = function () { toast(UI[lang].copied); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(EMAIL).then(done, function () { location.href = 'mailto:' + EMAIL; });
    else location.href = 'mailto:' + EMAIL;
  }
  function initContact() {
    $('#copyEmail').addEventListener('click', copyEmail);
    var clock = $('#clock');
    function tickClock() {
      try { clock.textContent = new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' }).format(new Date()); } catch (e) { clock.textContent = ''; }
    }
    tickClock(); setInterval(tickClock, 30000); langListeners.push(tickClock);
    $('#year').textContent = new Date().getFullYear();

    var form = $('#form');
    function check(input) {
      var ok = input.value.trim().length >= (input.tagName === 'TEXTAREA' ? 10 : 2);
      input.closest('.field').classList.toggle('is-err', !ok);
      input.setAttribute('aria-invalid', String(!ok));
      return ok;
    }
    var req = $$('[required]', form);
    req.forEach(function (i) {
      i.addEventListener('blur', function () { if (i.value) check(i); });
      i.addEventListener('input', function () { if (i.closest('.field').classList.contains('is-err')) check(i); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = req.filter(function (i) { return !check(i); });
      if (bad.length) { bad[0].focus(); return; }
      var d = new FormData(form);
      var t = UI[lang], typeLabel = form.querySelector('[name="type"]:checked').nextElementSibling.textContent;
      var text = t.waIntro + '\n\n' + t.waName + ': ' + d.get('name').trim() + '\n' + t.waType + ': ' + typeLabel + '\n\n' + d.get('message').trim();
      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text);
      var win = window.open(url, '_blank');
      if (win) win.opener = null; else location.href = url;
      $('#formOk').classList.add('is-on');
    });
  }

  /* ---------------- Paleta de comandos ---------------- */
  function initPalette() {
    var pal = $('#palette'), input = $('#paletteInput'), list = $('#paletteList'), sel = 0, items = [], lastFocus;
    function go(id) { return function () { var t = document.getElementById(id); if (t) t.scrollIntoView({ behavior: 'smooth' }); }; }
    function commands() {
      var c = UI[lang].cmds;
      return [
        { i: 'ph-chat-circle-dots', t: c.contact, run: go('contacto') },
        { i: 'ph-copy', t: c.email, run: copyEmail },
        { i: 'ph-play-circle', t: c.reel, run: function () { if (window.__playReel) window.__playReel(); } },
        { i: 'ph-user', t: c.about, run: go('sobre-mi') },
        { i: 'ph-squares-four', t: c.services, run: go('servicios') },
        { i: 'ph-folder-open', t: c.work, run: go('proyectos') },
        { i: 'ph-path', t: c.process, run: go('proceso') },
        { i: 'ph-code', t: c.stack, run: go('stack') },
        { i: 'ph-question', t: c.faq, run: go('faq') },
        { i: 'ph-translate', t: c.lang, run: function () { applyLang(lang === 'es' ? 'en' : 'es'); } },
        { i: 'ph-github-logo', t: c.github, run: function () { window.open('https://github.com/ErCarlo672', '_blank', 'noopener'); } },
        { i: 'ph-instagram-logo', t: c.insta, run: function () { window.open('https://www.instagram.com/caarloos_23/', '_blank', 'noopener'); } },
        { i: 'ph-arrow-up', t: c.top, run: go('top') }
      ];
    }
    function render() {
      var q = input.value.toLowerCase().trim();
      items = commands().filter(function (c) { return !q || c.t.toLowerCase().indexOf(q) > -1; });
      sel = Math.min(sel, Math.max(0, items.length - 1));
      list.innerHTML = items.length ? items.map(function (c, i) {
        return '<li role="option" data-i="' + i + '" class="' + (i === sel ? 'is-sel' : '') + '" aria-selected="' + (i === sel) + '"><i class="ph ' + c.i + '"></i>' + c.t + '</li>';
      }).join('') : '<li class="palette__empty">' + UI[lang].none + '</li>';
    }
    function open() { lastFocus = document.activeElement; pal.hidden = false; input.value = ''; sel = 0; render(); setTimeout(function () { input.focus(); }, 10); }
    function close() { pal.hidden = true; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
    function run(i) { var c = items[i]; if (!c) return; close(); c.run(); }
    $('#openPalette').addEventListener('click', open);
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.hidden ? open() : close(); return; }
      if (pal.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % Math.max(1, items.length); render(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + items.length) % Math.max(1, items.length); render(); }
      else if (e.key === 'Enter') { e.preventDefault(); run(sel); }
    });
    input.addEventListener('input', function () { sel = 0; render(); });
    list.addEventListener('click', function (e) { var li = e.target.closest('li[data-i]'); if (li) run(+li.getAttribute('data-i')); });
    pal.addEventListener('click', function (e) { if (e.target === pal) close(); });
  }

  /* ---------------- Easter egg en consola ---------------- */
  /* ---------------- Galería curva 3D del hero ---------------- */
  // Las tarjetas se colocan en el interior de un cilindro con la cámara en su eje,
  // así las de los lados se ven más grandes e inclinadas hacia el visitante.
  function initCurve() {
    var curve = $('#curve'), track = $('#curveTrack'); if (!curve || !track) return;
    var items = $$('.curve__item', track), mid = Math.floor(items.length / 2);
    var R = 1000, turn = 0, target = 0, spin = 0, raf = null;

    function layout() {
      curve.classList.add('is-3d'); // antes de medir: sin esta clase las tarjetas laterales están ocultas
      R = parseFloat(getComputedStyle(curve).getPropertyValue('--r')) || 1000;
      var gap = 18, ang = [], w = items.map(function (el) { return el.offsetWidth; });
      ang[mid] = 0;
      for (var i = mid + 1; i < items.length; i++) ang[i] = ang[i - 1] + (w[i - 1] / 2 + gap + w[i] / 2) / R;
      for (var j = mid - 1; j >= 0; j--) ang[j] = ang[j + 1] - (w[j + 1] / 2 + gap + w[j] / 2) / R;
      items.forEach(function (el, k) { el.dataset.a = ang[k]; });
      paint();
    }
    function paint() {
      raf = null;
      turn += (target + spin - turn) * .08;
      items.forEach(function (el) {
        var a = parseFloat(el.dataset.a) + turn;
        el.style.transform = 'translateZ(' + R + 'px) rotateY(' + a.toFixed(4) + 'rad) translateZ(' + (-R) + 'px)';
        el.style.opacity = Math.max(0, Math.min(1, 1.6 - Math.abs(a) * 1.5)).toFixed(3);
      });
      if (Math.abs(target + spin - turn) > .0005) raf = requestAnimationFrame(paint);
    }
    function kick() { if (!raf) raf = requestAnimationFrame(paint); }

    // El scroll gira el cilindro y el ratón lo inclina un poco
    window.addEventListener('scroll', function () {
      spin = -Math.min(window.scrollY / window.innerHeight, 1.2) * .18; kick();
    }, { passive: true });
    if (finePointer) {
      $('#top').addEventListener('pointermove', function (e) { target = (e.clientX / window.innerWidth - .5) * -.18; kick(); });
      $('#top').addEventListener('pointerleave', function () { target = 0; kick(); });
    }
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(layout, 150); });
    layout();
  }

  /* ---------------- Retrato 3D del hero ---------------- */
  function initPortrait() {
    var stage = $('#portraitStage'), hero = $('#top'); if (!stage || !hero) return;
    var chips = $$('.portrait__chip', stage);
    if (finePointer) {
      hero.addEventListener('pointermove', function (e) {
        var r = stage.getBoundingClientRect();
        var x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
        var y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
        stage.style.setProperty('--ry', (x * 26).toFixed(2) + 'deg');
        stage.style.setProperty('--rx', (-y * 18).toFixed(2) + 'deg');
        chips.forEach(function (c, i) { c.style.translate = (x * (14 + i * 10)).toFixed(1) + 'px ' + (y * (10 + i * 8)).toFixed(1) + 'px'; });
      });
      hero.addEventListener('pointerleave', function () {
        stage.style.setProperty('--ry', '0deg'); stage.style.setProperty('--rx', '0deg');
        chips.forEach(function (c) { c.style.translate = ''; });
      });
    } else {
      // En móvil gira un poco con el scroll para que se note la profundidad
      window.addEventListener('scroll', function () {
        var k = Math.min(window.scrollY / window.innerHeight, 1);
        stage.style.setProperty('--ry', (k * -18).toFixed(2) + 'deg');
        stage.style.setProperty('--rx', (k * 8).toFixed(2) + 'deg');
      }, { passive: true });
    }
    // Entrada: el retrato gira desde el fondo
    stage.animate([
      { opacity: 0, transform: 'rotateY(-35deg) rotateX(12deg) translateZ(-200px)' },
      { opacity: 1, transform: 'rotateY(0deg) rotateX(0deg) translateZ(0)' }
    ], { duration: 1600, delay: 900, easing: 'cubic-bezier(0.32, 0.72, 0, 1)', fill: 'backwards' });
  }

  /* ---------------- Carrusel de proyectos con curva 3D ---------------- */
  // Avanza solo, se para al pasar el ratón y se puede arrastrar. Las tarjetas
  // se inclinan según su distancia al centro, como la galería del hero.
  function initShowcase() {
    var box = $('#showcase'), track = $('#showcaseTrack'); if (!box || !track) return;
    var originals = $$('.work', track);
    originals.forEach(function (el) { // segunda copia para que el bucle no tenga costura
      var c = el.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      $$('a', c).forEach(function (a) { a.setAttribute('tabindex', '-1'); });
      if (c.matches('a')) c.setAttribute('tabindex', '-1');
      track.appendChild(c);
    });
    var cards = $$('.work', track);
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var x = 0, half = 0, speed = reduce ? 0 : 38, hover = false, drag = null, moved = 0, last = performance.now(), running = false, visible = false;
    box.classList.add('is-live');

    var boxW = 0, centers = []; // centro de cada tarjeta, medido una vez para no forzar layout en cada fotograma
    function measure() { half = track.scrollWidth / 2; boxW = box.clientWidth; centers = cards.map(function (c) { return c.offsetLeft + c.offsetWidth / 2; }); }
    function wrap() { if (half) { while (x <= -half) x += half; while (x > 0) x -= half; } }
    function paint() {
      track.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
      var mid = boxW / 2;
      cards.forEach(function (c, i) {
        var cx = centers[i] + x - mid, k = Math.max(-1.4, Math.min(1.4, cx / mid));
        c.style.transform = 'rotateY(' + (-k * 16).toFixed(2) + 'deg) translateZ(' + (-Math.abs(k) * 70).toFixed(1) + 'px)';
      });
    }
    function tick(now) {
      var dt = Math.min(50, now - last) / 1000; last = now;
      if (!drag && !hover) { x -= speed * dt; wrap(); }
      paint();
      if (visible) requestAnimationFrame(tick); else running = false;
    }
    function start() { if (running) return; running = true; last = performance.now(); requestAnimationFrame(tick); }

    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); }).observe(box);
    if (finePointer) {
      box.addEventListener('pointerenter', function () { hover = true; });
      box.addEventListener('pointerleave', function () { hover = false; });
    }
    box.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      drag = { x0: e.clientX, from: x, id: e.pointerId }; moved = 0;
    });
    window.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      moved = Math.abs(e.clientX - drag.x0);
      if (moved > 6) { box.classList.add('is-drag'); x = drag.from + (e.clientX - drag.x0); wrap(); }
    });
    window.addEventListener('pointerup', function () { drag = null; box.classList.remove('is-drag'); });
    window.addEventListener('pointercancel', function () { drag = null; box.classList.remove('is-drag'); });
    // Si se ha arrastrado, el clic final no abre la web
    box.addEventListener('click', function (e) { if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);
    box.addEventListener('dragstart', function (e) { e.preventDefault(); });
    // Con teclado: la tarjeta enfocada se centra
    box.addEventListener('focusin', function (e) {
      var c = e.target.closest('.work'); if (!c) return;
      box.scrollLeft = 0; hover = true;
      x = -(c.offsetLeft + c.offsetWidth / 2 - box.clientWidth / 2); wrap(); paint();
    });
    box.addEventListener('focusout', function () { if (finePointer && box.matches(':hover')) return; hover = false; });
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { measure(); wrap(); paint(); }, 150); });
    window.addEventListener('load', measure);
    measure(); paint();
  }

  /* ---------------- Sobre mí · Particle Self: retrato en partículas guiado por el scroll ---------------- */
  // Tres formas para las mismas partículas: nube suelta, retrato en relieve y el logo <cs/>.
  // El scroll mezcla una con otra; cada partícula llega con su propio retraso para que fluya.
  function initParticleSelf() {
    var sec = $('#sobre-mi'), box = $('#pself'), cv = $('#pselfCanvas'); if (!sec || !box || !cv || !cv.getContext) return;
    var pin = $('.about__pin', sec);
    var ctx = cv.getContext('2d');
    var steps = $$('.pself__steps li', box), pctEl = $('#pselfPct'), countEl = $('#pselfCount');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var N = window.innerWidth < 700 ? 5000 : 9000;
    var S3 = new Float32Array(N * 3), P3 = new Float32Array(N * 3), T3 = new Float32Array(N * 3);
    var LUM = new Float32Array(N), TC = new Float32Array(N), SEED = new Float32Array(N), OX = new Float32Array(N), OY = new Float32Array(N);
    var hasT = false;

    // Paleta: cian → lima → blanco lima
    var B = 16, COLORS = [];
    (function () {
      var stops = [[74, 227, 255], [197, 255, 74], [240, 255, 214]];
      for (var b = 0; b < B; b++) {
        var u = b / (B - 1) * 2, k = Math.min(1, Math.floor(u)), f = u - k, a = stops[k], c = stops[k + 1];
        COLORS.push('rgb(' + Math.round(a[0] + (c[0] - a[0]) * f) + ',' + Math.round(a[1] + (c[1] - a[1]) * f) + ',' + Math.round(a[2] + (c[2] - a[2]) * f) + ')');
      }
    })();

    // Nube: cáscara esférica achatada
    for (var i = 0; i < N; i++) {
      var th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1), r = .75 + Math.pow(Math.random(), .6) * 1.1;
      S3[i * 3] = r * Math.sin(ph) * Math.cos(th); S3[i * 3 + 1] = r * Math.cos(ph) * .62; S3[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
      SEED[i] = Math.random();
      LUM[i] = TC[i] = SEED[i];
    }
    // Hasta tener retrato o logo, esas formas son la propia nube
    P3.set(S3); T3.set(S3);

    function sample(w, h, draw, minAlpha) {
      var c = document.createElement('canvas'); c.width = w; c.height = h;
      var g = c.getContext('2d', { willReadFrequently: true }); draw(g);
      var d = g.getImageData(0, 0, w, h).data, pts = [];
      for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
        var o = (y * w + x) * 4;
        if (d[o + 3] > minAlpha) pts.push(x, y, (d[o] * .3 + d[o + 1] * .59 + d[o + 2] * .11) / 255);
      }
      return pts;
    }

    var img = new Image();
    img.onload = function () {
      var w = 200, h = 250;
      var pts = sample(w, h, function (g) { g.drawImage(img, 0, 0, w, h); }, 150), n = pts.length / 3;
      if (!n) return;
      // Contraste del retrato: estira la luminancia al rango real de la foto
      var lo = 1, hi = 0;
      for (var j = 0; j < n; j++) { var l = pts[j * 3 + 2]; if (l < lo) lo = l; if (l > hi) hi = l; }
      for (var i = 0; i < N; i++) {
        var q = (Math.random() * n | 0) * 3, lum = Math.min(1, Math.max(0, (pts[q + 2] - lo) / ((hi - lo) || 1)));
        var py = (pts[q + 1] + Math.random() - h / 2) / h;
        // El cuerpo se apaga hacia cian para que la mirada vaya a la cara
        LUM[i] = Math.pow(lum, .8) * Math.max(.12, 1 - Math.max(0, py - .02) * 2.6);
        P3[i * 3] = (pts[q] + Math.random() - w / 2) / h;
        P3[i * 3 + 1] = py;
        P3[i * 3 + 2] = (lum - .5) * .3 + (Math.random() - .5) * .02;
      }
    };
    img.src = 'assets/photos/hero-cutout.webp?v=20261025';

    function sampleLogo() {
      if (hasT) return;
      var w = 720, h = 240;
      var pts = sample(w, h, function (g) {
        g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.font = '700 200px "Geist Mono", ui-monospace, Consolas, monospace';
        g.fillText('<cs/>', w / 2, h / 2 + 6);
      }, 128), n = pts.length / 3;
      if (!n) return;
      for (var i = 0; i < N; i++) {
        var q = (Math.random() * n | 0) * 3;
        T3[i * 3] = (pts[q] + Math.random() - w / 2) / w * 1.5;
        T3[i * 3 + 1] = (pts[q + 1] + Math.random() - h / 2) / w * 1.5;
        T3[i * 3 + 2] = (Math.random() - .5) * .08;
        TC[i] = pts[q] / w;
      }
      hasT = true;
    }
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(sampleLogo); setTimeout(sampleLogo, 3000); } else sampleLogo();
    function syncCount() { if (countEl) countEl.textContent = N.toLocaleString(lang === 'en' ? 'en' : 'es'); }
    langListeners.push(syncCount); syncCount();

    // Lienzo y encuadre
    var W = 0, H = 0, dpr = 1, cx = 0, cy = 0, SC = 1, TK = 1, dot = 1.6;
    function resize() {
      // Solo se fija si el texto cabe entero en la pantalla
      var grid = $('.about__grid', sec);
      sec.classList.add('is-pinned'); // se mide ya con el estilo compacto del modo fijo
      if (grid && grid.offsetHeight > window.innerHeight - 136) sec.classList.remove('is-pinned');
      W = cv.clientWidth; H = cv.clientHeight; dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // El lienzo desborda el panel (144% × 128%) para que la nube no se corte; el retrato se encuadra en el panel.
      // TK encoge el logo para que quepa a lo ancho.
      var bw = W / 1.44, bh = H / 1.28;
      cx = W / 2; cy = H / 2 + bh * .04; SC = Math.min(bh * .84, bw * 1.15); TK = Math.min(1, bw * 1.15 / (SC * 1.5)); dot = bw < 380 ? 1.3 : 1.6;
    }

    // Scroll y puntero
    var p = 0, sp = 0, ptr = { x: 0, y: 0, on: false, nx: 0, ny: 0 }, sx = 0, sy = 0;
    // Fijado (escritorio): el progreso es el scroll dentro del apartado. Sin fijar (móvil): lo que ha recorrido el panel por la pantalla.
    function progress() {
      var vh = window.innerHeight, v;
      if (pin && getComputedStyle(pin).position === 'sticky') {
        var total = sec.offsetHeight - vh; v = total > 0 ? -sec.getBoundingClientRect().top / total : 0;
      } else v = (vh - box.getBoundingClientRect().top) / (vh * .9);
      p = Math.min(1, Math.max(0, v));
    }
    window.addEventListener('scroll', progress, { passive: true });
    sec.addEventListener('pointermove', function (e) {
      var r = cv.getBoundingClientRect();
      ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; ptr.on = true;
      ptr.nx = ptr.x / W - .5; ptr.ny = ptr.y / H - .5;
    }, { passive: true });
    sec.addEventListener('pointerleave', function () { ptr.on = false; ptr.nx = 0; ptr.ny = 0; });

    function smooth(a, b, x) { x = Math.min(1, Math.max(0, (x - a) / (b - a))); return x * x * (3 - 2 * x); }
    function ease(x) { x = x < 0 ? 0 : x > 1 ? 1 : x; return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }

    var step = -1, paths = [], t0 = performance.now(), running = false, visible = false;
    function frame(now) {
      var t = (now - t0) / 1000;
      sp = reduce ? p : sp + (p - sp) * .09;
      sx += (ptr.nx - sx) * .06; sy += (ptr.ny - sy) * .06;
      var gather = smooth(.06, .36, sp), morph = smooth(.56, .8, sp);
      var yaw = (sp - .46) * 1.2 + sx * .5, pitch = sy * .3 - .05;
      var cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(pitch), spt = Math.sin(pitch);
      var spin = reduce ? 0 : t * .08, cs = Math.cos(spin), ss = Math.sin(spin);
      var FOV = 2.4, R = W >= 900 ? 110 : 70, R2 = R * R, wob = reduce ? 0 : .006;

      for (var b = 0; b < B; b++) paths[b] = new Path2D();
      for (var i = 0; i < N; i++) {
        var i3 = i * 3, d = SEED[i] * .45;
        var g = ease((gather - d * .7) / .7), m = ease((morph - d * .7) / .7);
        // Nube girando
        var ax = S3[i3] * cs - S3[i3 + 2] * ss, ay = S3[i3 + 1], az = S3[i3] * ss + S3[i3 + 2] * cs;
        var x = ax + (P3[i3] - ax) * g, y = ay + (P3[i3 + 1] - ay) * g, z = az + (P3[i3 + 2] - az) * g;
        x += (T3[i3] * TK - x) * m; y += (T3[i3 + 1] * TK - y) * m; z += (T3[i3 + 2] - z) * m;
        // A mitad del cambio retrato → logo, las partículas saltan hacia fuera
        var burst = Math.sin(m * Math.PI) * (SEED[i] - .5) * .9;
        z += burst; y -= Math.abs(burst) * .25;
        x += Math.sin(t * 1.3 + SEED[i] * 40) * wob; y += Math.cos(t * 1.1 + SEED[i] * 30) * wob;
        // Rotación y perspectiva
        var rx = x * cyw + z * syw, rz = -x * syw + z * cyw;
        var ry = y * cp - rz * spt; rz = y * spt + rz * cp;
        var f = FOV / (FOV - rz); if (f <= 0) continue;
        var X = cx + rx * SC * f, Y = cy + ry * SC * f;
        // El puntero aparta las partículas y vuelven solas
        if (ptr.on) {
          var dx = X + OX[i] - ptr.x, dy = Y + OY[i] - ptr.y, dd = dx * dx + dy * dy;
          if (dd < R2 && dd > .01) { var k = (1 - dd / R2) * 6 / Math.sqrt(dd); OX[i] += dx * k; OY[i] += dy * k; }
        }
        OX[i] *= .9; OY[i] *= .9;
        var col = SEED[i];
        col += (LUM[i] - col) * g; col += (TC[i] - col) * m;
        // En el retrato el tamaño sigue la luz de la foto: así se leen ojos, pelo y sombras
        var s = dot * Math.min(f, 1.8) * (1 + (LUM[i] * 1.1 - .75) * g * (1 - m));
        paths[(col * (B - 1) + .5) | 0].rect(X + OX[i] - s / 2, Y + OY[i] - s / 2, s, s);
      }
      ctx.clearRect(0, 0, W, H);
      ctx.globalAlpha = .9;
      for (b = 0; b < B; b++) { ctx.fillStyle = COLORS[b]; ctx.fill(paths[b]); }

      var ns = sp < .4 ? 0 : sp < .62 ? 1 : 2;
      if (ns !== step) { step = ns; steps.forEach(function (li, k) { li.classList.toggle('is-on', k === ns); }); }
      if (pctEl) pctEl.textContent = ('00' + Math.round(sp * 100)).slice(-3);

      if (visible) requestAnimationFrame(frame); else running = false;
    }
    function start() { if (running) return; running = true; requestAnimationFrame(frame); }

    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) { progress(); start(); } }).observe(sec);
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { resize(); progress(); }, 150); });
    resize(); progress();
  }

  /* ---------------- Showreel interactivo ---------------- */
  function initReel() {
    var sec = $('#showreel'), v = $('#reel'), frame = $('#reelFrame'); if (!sec || !v || !frame) return;
    var amb = $('#reelAmbient'), actx = amb && amb.getContext ? amb.getContext('2d') : null;
    var btnPlay = $('#reelPlay'), btnToggle = $('#reelToggle'), btnMute = $('#reelMute'), btnFs = $('#reelFs');
    var bar = $('#reelBar'), fill = $('#reelFill'), time = $('#reelTime');
    var chapters = $$('#reelChapters button'), cursor = $('.cursor');
    var sound = false, visible = false, dur = 24;
    var L = function (es, en) { return lang === 'en' ? en : es; };
    // El marco viaja entre la sección y el lightbox: su estado se marca en los dos
    function mark(name, on) { sec.classList.toggle(name, on); var l = $('#lightbox'); if (l) l.classList.toggle(name, on); }

    // Vídeo vertical en móviles en vertical
    if (window.matchMedia('(max-width: 700px) and (orientation: portrait)').matches) {
      sec.classList.add('reel--tall');
      if ($('#lightbox')) $('#lightbox').classList.add('lightbox--tall');
      v.poster = v.getAttribute('data-poster-tall');
      v.querySelector('source').src = v.getAttribute('data-tall');
      v.load();
    }
    if (!finePointer) mark('is-touch', true);

    function fmt(t) { t = Math.max(0, Math.floor(t)); return Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2); }
    function setIcon(btn, name) { var i = btn.querySelector('i'); i.className = 'ph ' + name; }
    function syncUi() {
      setIcon(btnToggle, v.paused ? 'ph-play' : 'ph-pause');
      btnToggle.setAttribute('aria-label', v.paused ? L('Reproducir', 'Play') : L('Pausar', 'Pause'));
      setIcon(btnMute, v.muted ? 'ph-speaker-slash' : 'ph-speaker-high');
      btnMute.setAttribute('aria-label', v.muted ? L('Activar sonido', 'Unmute') : L('Silenciar', 'Mute'));
      mark('is-paused', v.paused);
      if (cursor) cursor.classList.toggle('is-reel-pause', sound && !v.paused);
    }
    function tryPlay() { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

    // Vista previa silenciada: se reproduce sola al verse
    new IntersectionObserver(function (en) {
      visible = en[0].isIntersecting;
      if (visible && !sound) tryPlay();
      if (!visible && !v.paused) v.pause();
      if (visible) ambient();
    }, { threshold: 0.25 }).observe(frame);

    function startSound(fromStart) {
      sound = true; mark('is-sound', true);
      if (fromStart) v.currentTime = 0;
      v.loop = false; v.muted = false; tryPlay(); syncUi();
      try { frame.focus({ preventScroll: true }); } catch (e) {}
    }
    function backToPreview() {
      sound = false; mark('is-sound', false);
      v.muted = true; v.loop = true; v.currentTime = 0; if (visible) tryPlay(); syncUi();
    }
    function toggle() { if (!sound) { startSound(true); return; } if (v.paused) tryPlay(); else v.pause(); }

    btnPlay.addEventListener('click', function (e) { e.stopPropagation(); open(); });
    btnToggle.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });
    btnMute.addEventListener('click', function (e) { e.stopPropagation(); v.muted = !v.muted; syncUi(); });
    btnFs.addEventListener('click', function (e) {
      e.stopPropagation();
      if (document.fullscreenElement) { document.exitFullscreen(); return; }
      if (frame.requestFullscreen) frame.requestFullscreen().catch(function () {});
      else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen();
    });
    frame.addEventListener('click', function (e) { if (e.target.closest('.reel__ui')) return; if (!isOpen) open(); else toggle(); });
    frame.addEventListener('keydown', function (e) {
      var k = e.key.toLowerCase();
      if (k === ' ' || k === 'k' || k === 'enter') { e.preventDefault(); if (!isOpen) open(); else toggle(); }
      else if (k === 'm') { if (!isOpen) { open(); return; } v.muted = !v.muted; syncUi(); }
      else if (k === 'f') btnFs.click();
      else if (k === 'arrowright') v.currentTime = Math.min(dur, v.currentTime + 2);
      else if (k === 'arrowleft') v.currentTime = Math.max(0, v.currentTime - 2);
    });
    v.addEventListener('play', syncUi); v.addEventListener('pause', syncUi);
    v.addEventListener('ended', function () { if (sound) close(); });
    v.addEventListener('loadedmetadata', function () { if (v.duration) dur = v.duration; });

    // Progreso y capítulos
    function progress() {
      var t = v.currentTime || 0, k = Math.min(1, t / dur);
      fill.style.width = (k * 100) + '%';
      time.textContent = fmt(t) + ' / ' + fmt(dur);
      bar.setAttribute('aria-valuenow', String(Math.round(t)));
      chapters.forEach(function (b, i) {
        var a = +b.getAttribute('data-t'), z = chapters[i + 1] ? +chapters[i + 1].getAttribute('data-t') : dur;
        var on = t >= a && t < z;
        b.classList.toggle('is-on', on);
        b.style.setProperty('--cp', on ? ((t - a) / (z - a)).toFixed(3) : (t >= z ? '1' : '0'));
      });
    }
    v.addEventListener('timeupdate', progress);
    chapters.forEach(function (b) {
      b.addEventListener('click', function () {
        v.currentTime = +b.getAttribute('data-t');
        tryPlay();
        progress();
      });
    });
    function seekFrom(e) {
      var r = bar.getBoundingClientRect();
      v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * dur; progress();
    }
    var dragging = false;
    bar.addEventListener('pointerdown', function (e) { e.stopPropagation(); dragging = true; bar.setPointerCapture(e.pointerId); seekFrom(e); });
    bar.addEventListener('pointermove', function (e) { if (dragging) seekFrom(e); });
    bar.addEventListener('pointerup', function () { dragging = false; });
    bar.addEventListener('click', function (e) { e.stopPropagation(); });
    bar.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); v.currentTime = Math.min(dur, v.currentTime + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); e.stopPropagation(); v.currentTime = Math.max(0, v.currentTime - 1); }
    });

    // Luz ambiente: los colores del vídeo se derraman detrás del marco
    var ambOn = false;
    function ambient() {
      if (!actx || ambOn) return; ambOn = true;
      (function loop() {
        if (!visible) { ambOn = false; return; }
        if (v.readyState >= 2) { try { actx.drawImage(v, 0, 0, amb.width, amb.height); } catch (e) { ambOn = false; return; } }
        requestAnimationFrame(loop);
      })();
    }

    // Enlaces que abren el vídeo con sonido (botón del hero, paleta)
    $$('[data-reel-play]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); open(); });
    });
    window.__playReel = function () { $('[data-reel-play]').click(); };

    // Cursor "play"
    if (cursor && finePointer) {
      frame.addEventListener('pointerover', function (e) { cursor.classList.toggle('is-reel', !e.target.closest('.reel__ui')); });
      frame.addEventListener('pointerleave', function () { cursor.classList.remove('is-reel'); });
    }

    // Lightbox: la miniatura luminosa crece desde su sitio hasta el centro de la pantalla (técnica FLIP)
    var lb = $('#lightbox'), lbBody = $('#lightboxBody'), slot = $('#reelSlot'), isOpen = false, anim = null, lastFocus = null;
    var EASE = 'cubic-bezier(0.32, 0.72, 0, 1)';
    function flip(a, b) { // transform que hace que el elemento en b parezca estar en a
      return 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px) scale(' + (a.width / b.width) + ',' + (a.height / b.height) + ')';
    }
    function open() {
      if (isOpen || !lb) return; isOpen = true; lastFocus = document.activeElement;
      if (anim) { anim.finish(); }
      var from = frame.getBoundingClientRect();
      slot.style.height = from.height + 'px';
      lb.hidden = false; lbBody.insertBefore(frame, lbBody.firstChild);
      document.documentElement.classList.add('is-locked'); sec.classList.add('is-open');
      var to = frame.getBoundingClientRect();
      frame.style.transformOrigin = '0 0';
      anim = frame.animate([{ transform: flip(from, to) }, { transform: 'none' }], { duration: 750, easing: EASE });
      anim.onfinish = function () { anim = null; };
      requestAnimationFrame(function () { lb.classList.add('is-on'); });
      startSound(true);
    }
    function close() {
      if (!isOpen) return; isOpen = false;
      if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
      if (anim) anim.finish();
      var from = frame.getBoundingClientRect(), to = slot.getBoundingClientRect();
      lb.classList.remove('is-on');
      backToPreview();
      anim = frame.animate([{ transform: 'none' }, { transform: flip(to, from) }], { duration: 650, easing: EASE, fill: 'forwards' });
      anim.onfinish = function () {
        slot.appendChild(frame); slot.style.height = ''; frame.style.transformOrigin = '';
        lb.hidden = true; document.documentElement.classList.remove('is-locked'); sec.classList.remove('is-open');
        anim.cancel(); anim = null;
        if (visible) tryPlay();
      };
      if (lastFocus && lastFocus.focus) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
    }
    if (lb) {
      $$('[data-close]', lb).forEach(function (el) { el.addEventListener('click', close); });
      document.addEventListener('keydown', function (e) { if (isOpen && e.key === 'Escape') { e.preventDefault(); close(); } });
    }
    langListeners.push(syncUi);
    syncUi(); progress();
  }

  function initConsole() {
    if (window.console) console.log('%c<cs/>%c  ¿Curioseando el código? Me caes bien. Escríbeme: ' + EMAIL, 'background:#C5FF4A;color:#0B0F00;padding:4px 8px;border-radius:4px;font-weight:700', 'color:#9B9B9B');
  }

  /* ---------------- Capítulos: cada sección tiene forma, posición y luz propias ---------------- */
  var CHAPTERS = [
    { id: 'top',       n: 'I',    name: { es: 'intro', en: 'intro' },         shape: 'dust',   x: .5,  y: .4,  k: 2.2,  a: .45, spin: .0006, tilt: .2,  amb: 'rgba(197,255,74,.10)' },
    { id: 'servicios', n: 'II',   name: { es: 'servicios', en: 'services' },  shape: 'wave',   x: .5,  y: .7,  k: 1.5,  a: .45, spin: .0006, tilt: .55, amb: 'rgba(74,227,255,.09)' },
    { id: 'sobre-mi',  n: 'III',  name: { es: 'sobre mí', en: 'about' },      shape: 'dust',   x: .5,  y: .5,  k: 1.6,  a: .2,  spin: .0008, tilt: .2,  amb: 'rgba(197,255,74,.08)' },
    { id: 'proyectos', n: 'IV',   name: { es: 'proyectos', en: 'work' },      shape: 'helix',  x: .9,  y: .5,  k: 1.1,  a: .5,  spin: .004,  tilt: .15, amb: 'rgba(120,140,255,.09)' },
    { id: 'proceso',   n: 'V',    name: { es: 'proceso', en: 'process' },     shape: 'tunnel', x: .78, y: .5,  k: 1,    a: .45, spin: .0012, tilt: 0,   amb: 'rgba(74,227,255,.08)' },
    { id: 'stack',     n: 'VI',   name: { es: 'stack', en: 'stack' },         shape: 'cube',   x: .2,  y: .5,  k: .85,  a: .5,  spin: .003,  tilt: .5,  amb: 'rgba(197,255,74,.08)' },
    { id: 'faq',       n: 'VII',  name: { es: 'faq', en: 'faq' },             shape: 'dust',   x: .5,  y: .5,  k: 1.2,  a: .3,  spin: .0008, tilt: .2,  amb: 'rgba(160,120,255,.07)' },
    { id: 'contacto',  n: 'VIII', name: { es: 'contacto', en: 'contact' },    shape: 'word',   x: .5,  y: .55, k: 1.3,  a: .3,  spin: 0,     tilt: 0,   amb: 'rgba(197,255,74,.12)' }
  ];
  var chapterListeners = [];
  var currentChapter = CHAPTERS[0];

  function initChapters() {
    var byId = {};
    CHAPTERS.forEach(function (c) { byId[c.id] = c; });
    function set(c) {
      if (c === currentChapter) return;
      currentChapter = c;
      document.documentElement.style.setProperty('--amb', c.amb);
      chapterListeners.forEach(function (fn) { safe(function () { fn(c); }, 'chapterListener'); });
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting && byId[en.target.id]) set(byId[en.target.id]); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    CHAPTERS.forEach(function (c) { var s = document.getElementById(c.id); if (s) io.observe(s); });
  }

  /* ---------------- Mundo de partículas (fondo fijo que cambia de forma) ---------------- */
  function initWorld() {
    var c = $('#world'); if (!c || !c.getContext) return;
    var ctx = c.getContext('2d');
    var W, H, dpr, N, P = [], T = {}, t = 0, rot = 0, raf, running = true;
    var mob = window.matchMedia('(max-width: 900px)');
    var cx = 0, cy = 0, sc = 0, al = 0, mx = 0, my = 0, tmx = 0, tmy = 0, lastY = window.scrollY, vel = 0;

    function fib(n, r) {
      var out = [], g = Math.PI * (3 - Math.sqrt(5));
      for (var i = 0; i < n; i++) {
        var y = 1 - (i / (n - 1)) * 2, rr = Math.sqrt(1 - y * y), th = g * i;
        out.push([Math.cos(th) * rr * r, y * r, Math.sin(th) * rr * r]);
      }
      return out;
    }
    function rnd(a, b) { return a + Math.random() * (b - a); }

    var BUILD = {
      globe: function (n) {
        var core = Math.round(n * .82), out = fib(core, 1);
        for (var i = core; i < n; i++) { // órbita inclinada alrededor del globo
          var a = (i / (n - core)) * Math.PI * 2, r = 1.42;
          out.push([Math.cos(a) * r, Math.sin(a) * r * .18, Math.sin(a) * r]);
        }
        return out;
      },
      wave: function (n) {
        var out = [], side = Math.ceil(Math.sqrt(n));
        for (var i = 0; i < n; i++) {
          var gx = (i % side) / (side - 1) * 3.2 - 1.6, gz = Math.floor(i / side) / (side - 1) * 3.2 - 1.6;
          out.push([gx, 0, gz]);
        }
        return out;
      },
      ring: function (n) {
        var out = [];
        for (var i = 0; i < n; i++) {
          var u = Math.random() * Math.PI * 2, v = Math.random() * Math.PI * 2, R = 1, r = .26;
          out.push([(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)]);
        }
        return out;
      },
      helix: function (n) {
        var out = [];
        for (var i = 0; i < n; i++) {
          var k = i / n, y = k * 3.6 - 1.8, a = k * Math.PI * 7, strand = i % 3;
          if (strand === 2) { // peldaños entre las dos hebras
            var f = Math.random() * 2 - 1;
            out.push([Math.cos(a) * .55 * f, y, Math.sin(a) * .55 * f]);
          } else {
            var o = strand ? Math.PI : 0;
            out.push([Math.cos(a + o) * .55 + rnd(-.03, .03), y, Math.sin(a + o) * .55 + rnd(-.03, .03)]);
          }
        }
        return out;
      },
      tunnel: function (n) {
        var out = [], rings = 22, per = Math.ceil(n / rings);
        for (var i = 0; i < n; i++) {
          var ring = Math.floor(i / per), a = (i % per) / per * Math.PI * 2;
          out.push([Math.cos(a) * .9, Math.sin(a) * .9, ring / rings * 4 - 1.2]);
        }
        return out;
      },
      cube: function (n) {
        var out = [];
        for (var i = 0; i < n; i++) {
          var p = [rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)], ax = i % 3;
          if (i % 2 === 0) { p[ax] = p[ax] < 0 ? -1 : 1; p[(ax + 1) % 3] = p[(ax + 1) % 3] < 0 ? -1 : 1; } // aristas
          else p[ax] = p[ax] < 0 ? -1 : 1; // caras
          out.push([p[0] * .8, p[1] * .8, p[2] * .8]);
        }
        return out;
      },
      dust: function (n) {
        var out = [];
        for (var i = 0; i < n; i++) {
          var r = Math.cbrt(Math.random()) * 2.2, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
          out.push([r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph) * .6, r * Math.sin(ph) * Math.sin(th)]);
        }
        return out;
      },
      word: function (n) { // la firma <cs/> dibujada con partículas
        var oc = document.createElement('canvas'), w = 520, h = 160, octx = oc.getContext('2d');
        oc.width = w; oc.height = h;
        octx.fillStyle = '#fff'; octx.textAlign = 'center'; octx.textBaseline = 'middle';
        octx.font = '600 128px "Geist Mono", ui-monospace, monospace';
        octx.fillText('<cs/>', w / 2, h / 2 + 6);
        var d = octx.getImageData(0, 0, w, h).data, px = [];
        for (var y = 0; y < h; y += 2) for (var x = 0; x < w; x += 2) if (d[(y * w + x) * 4 + 3] > 128) px.push([x, y]);
        var out = [];
        for (var i = 0; i < n; i++) {
          var q = px.length ? px[(Math.random() * px.length) | 0] : [w / 2, h / 2];
          out.push([(q[0] / w - .5) * 3.4, (q[1] / h - .5) * 1.05, rnd(-.06, .06)]);
        }
        return out;
      }
    };

    function build() {
      N = mob.matches ? 650 : 1500;
      Object.keys(BUILD).forEach(function (k) { T[k] = BUILD[k](N); });
      if (P.length !== N) {
        P = [];
        for (var i = 0; i < N; i++) {
          var s = T.globe[i];
          P.push({ x: s[0] * 4, y: s[1] * 4, z: s[2] * 4, sp: rnd(.035, .075), cy: Math.random() < .16, sz: rnd(.8, 1.9) });
        }
      }
    }
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      W = window.innerWidth; H = window.innerHeight;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function place(ch) { // en móvil todo va centrado y más tenue para no tapar el texto
      return mob.matches ? { x: .5, y: ch.id === 'top' ? .3 : .5, k: ch.k * .9, a: ch.a * .6 } : { x: ch.x, y: ch.y, k: ch.k, a: ch.a };
    }

    function frame() {
      t += .016;
      var ch = currentChapter, pl = place(ch), tgt = T[ch.shape] || T.globe;
      cx += (pl.x * W - cx) * .045; cy += (pl.y * H - cy) * .045;
      sc += (Math.min(W, H) * .32 * pl.k - sc) * .045; al += (pl.a - al) * .04;
      tmx += (mx - tmx) * .05; tmy += (my - tmy) * .05;
      rot += ch.spin + vel * .00002;
      vel *= .9;
      var scatter = Math.min(vel * .0009, .35);

      var front = ch.shape === 'tunnel' || ch.shape === 'word'; // estas formas miran siempre a cámara
      var ry = (front ? 0 : rot) + tmx * .5, rx = ch.tilt + tmy * .35;
      var cY = Math.cos(ry), sY = Math.sin(ry), cX = Math.cos(rx), sX = Math.sin(rx);
      var cam = 3.4, isWave = ch.shape === 'wave', isTunnel = ch.shape === 'tunnel';

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      for (var pass = 0; pass < 2; pass++) {
        ctx.fillStyle = pass ? '#4AE3FF' : '#C5FF4A';
        for (var i = 0; i < N; i++) {
          var p = P[i];
          if ((pass === 1) !== p.cy) continue;
          var q = tgt[i], tx = q[0], ty = q[1], tz = q[2];
          if (isWave) ty = Math.sin(tx * 2.2 + t * 1.4) * .18 + Math.cos(tz * 1.8 + t) * .14;
          else if (isTunnel) { var tw = t * .35 + tz * .6, cw = Math.cos(tw), sw = Math.sin(tw); var ox = tx; tx = ox * cw - ty * sw; ty = ox * sw + ty * cw; }
          p.x += (tx - p.x) * p.sp; p.y += (ty - p.y) * p.sp; p.z += (tz - p.z) * p.sp;
          var x = p.x, y = p.y, z = p.z;
          if (scatter) { x += (Math.random() - .5) * scatter; y += (Math.random() - .5) * scatter; }
          var x1 = x * cY - z * sY, z1 = x * sY + z * cY;
          var y1 = y * cX - z1 * sX, z2 = y * sX + z1 * cX;
          var f = cam / (cam + z2);
          if (f <= 0) continue;
          var a = al * Math.max(.08, Math.min(1, (f - .55) * 1.6));
          var s = p.sz * f;
          ctx.globalAlpha = a;
          ctx.fillRect(cx + x1 * sc * f - s / 2, cy + y1 * sc * f - s / 2, s, s);
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      if (running) raf = requestAnimationFrame(frame);
    }

    size(); build();
    var p0 = place(currentChapter);
    cx = p0.x * W; cy = p0.y * H; sc = Math.min(W, H) * .32 * p0.k;
    frame();

    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(function () { var was = N; size(); if ((mob.matches ? 650 : 1500) !== was) build(); }, 200);
    });
    window.addEventListener('scroll', function () {
      var y = window.scrollY; vel += Math.abs(y - lastY); vel = Math.min(vel, 400); lastY = y;
    }, { passive: true });
    if (finePointer) {
      window.addEventListener('pointermove', function (e) { mx = e.clientX / W - .5; my = e.clientY / H - .5; }, { passive: true });
    }
    // La fuente mono puede llegar después: rehacer la firma cuando esté lista
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { T.word = BUILD.word(N); });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { running = false; cancelAnimationFrame(raf); }
      else if (!running) { running = true; frame(); }
    });

    // Brillo del hero que sigue al ratón (antes vivía en el canvas del hero)
    var hero = $('#top'), glow = $('#heroGlow');
    if (hero && glow) hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      glow.style.setProperty('--gx', (e.clientX - r.left) + 'px'); glow.style.setProperty('--gy', (e.clientY - r.top) + 'px');
    });
  }

  /* ---------------- Titulares palabra a palabra ---------------- */
  function initSplitHeadings() {
    var els = $$('.hero__title, .h2, .contact__title');
    function split(el) {
      if (el.querySelector('.wd')) return;
      var brs = el.querySelectorAll('br'), lastBr = brs[brs.length - 1];
      var grad = el.classList.contains('hero__title') || el.classList.contains('contact__title');
      var texts = [], i = 0;
      (function walk(n) { Array.prototype.slice.call(n.childNodes).forEach(function (c) { if (c.nodeType === 3) texts.push(c); else walk(c); }); })(el);
      texts.forEach(function (node) {
        var after = grad && lastBr && (lastBr.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING);
        var frag = document.createDocumentFragment();
        node.textContent.split(/([ \t\n]+)/).forEach(function (part) {
          if (!part) return;
          if (/^[ \t\n]+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
          var s = document.createElement('span');
          s.className = 'wd' + (after ? ' grad' : '');
          s.style.setProperty('--i', i++);
          s.textContent = part;
          frag.appendChild(s);
        });
        node.parentNode.replaceChild(frag, node);
      });
      el.classList.add('split');
    }
    els.forEach(split);
    langListeners.push(function () { els.forEach(split); });
    // Red de seguridad por si el splash no llegara a marcar la página como lista
    setTimeout(function () { document.body.classList.add('is-ready'); }, 3000);
  }

  /* ---------------- Riel de capítulos ---------------- */
  function initRail() {
    var rail = $('#rail'); if (!rail) return;
    var links = {};
    function render() {
      rail.innerHTML = '';
      CHAPTERS.forEach(function (c) {
        if (!document.getElementById(c.id)) return;
        var a = document.createElement('a');
        a.href = '#' + c.id;
        a.innerHTML = '<span></span><b></b><i></i>';
        a.querySelector('span').textContent = c.name[lang];
        a.querySelector('b').textContent = c.n;
        a.setAttribute('aria-label', c.n + ' · ' + c.name[lang]);
        if (c === currentChapter) a.classList.add('is-on');
        rail.appendChild(a);
        links[c.id] = a;
      });
    }
    render();
    langListeners.push(render);
    // En la portada se oculta para no taparse con el retrato
    function hide(c) { rail.classList.toggle('is-off', c.id === 'top'); }
    hide(currentChapter);
    chapterListeners.push(function (c) {
      Object.keys(links).forEach(function (id) { links[id].classList.toggle('is-on', id === c.id); });
      hide(c);
    });
  }

  /* ---------------- Dock inferior ---------------- */
  function initDock() {
    var dock = $('#dock'), contact = $('#contacto'); if (!dock) return;
    var ticking = false;
    function update() {
      var y = window.scrollY, past = y > window.innerHeight * .75;
      var nearEnd = contact && contact.getBoundingClientRect().top < window.innerHeight * .6;
      var on = past && !nearEnd && !$('#menu').classList.contains('is-open');
      dock.classList.toggle('is-on', on);
      if (on) dock.removeAttribute('inert'); else dock.setAttribute('inert', '');
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function boot() {
    safe(initI18n, 'i18n');
    safe(initSplash, 'splash');
    safe(initReveal, 'reveal');
    safe(initNav, 'nav');
    safe(initChapters, 'chapters');
    safe(initWorld, 'world');
    safe(initSplitHeadings, 'splitHeadings');
    safe(initRail, 'rail');
    safe(initDock, 'dock');
    safe(initTyped, 'typed');
    safe(initCounters, 'counters');
    safe(initTagline, 'tagline');
    safe(initScramble, 'scramble');
    safe(initPointerFx, 'pointerFx');
    safe(initCursor, 'cursor');
    safe(initSteps, 'steps');
    safe(initCode, 'code');
    safe(initContact, 'contact');
    safe(initPalette, 'palette');
    safe(initPortrait, 'portrait');
    safe(initCurve, 'curve');
    safe(initShowcase, 'showcase');
    safe(initParticleSelf, 'particleSelf');
    safe(initReel, 'reel');
    safe(initConsole, 'console');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
