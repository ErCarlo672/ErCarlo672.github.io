/* carlos.dev · main.js
   IIFE clásico, sin módulos. Cada init va envuelto en safe(). */
(function () {
  'use strict';

  var EMAIL = 'carlossalguero09@gmail.com';
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
    'hero.cta': 'Tell me about your project', 'hero.cta2': 'See my work',
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
    'p5.type': 'Brand site + 3D',
    'p5.d': 'Nail and beauty studio in Montequinto. Interactive 3D nail polish scene, shade picker, service catalogue and direct booking on Booksy.',
    'p6.type': 'Brand site + 3D',
    'p6.d': 'Nail art, tooth gems and threading studio in Dos Hermanas. Bold identity, floating 3D objects, work gallery and Booksy booking.',
    'work.live': 'See it live',
    'chip.a': '5 sites launched in 2026',
    'about.label': 'about me', 'about.title': "Hi, I'm Carlos.<br>The person behind your&nbsp;website.",
    'about.p1': 'I am a full-stack developer working with real businesses: padel clubs, nail studios, service companies. I like sitting down with the owner, understanding what they need and turning it into a website that works for them.',
    'about.p2': 'With me you are not talking to an agency or a salesperson. You talk to the person who designs and codes every line of your project, start to finish.',
    'about.f1': 'sites published in 2026', 'about.f2': 'cities with clients', 'about.f3': 'person, start to finish', 'about.cta': "Let's grab a coffee",
    'p3.t': 'Your project could be next.', 'p3.d': 'Tell me what you need and within 24 h you get a proposal with price and dates.',
    'process.label': 'process', 'process.title': 'Four steps. Zero surprises.',
    'st1.t': 'Discovery call', 'st1.d': '30 minutes to understand your business and goals. Within 48 h you get a fixed price proposal.',
    'st2.t': 'Design and prototype', 'st2.d': 'You see your site before a single line is written. We refine it together until it fits your brand.',
    'st3.t': 'Development with weekly releases', 'st3.d': 'Every Friday you get a preview URL with real progress, not just reports.',
    'st4.t': 'Launch and support', 'st4.d': 'I publish your site, set up domain and analytics, and stay with you for 30 days of included support.',
    'stack.title': 'Modern tools, chosen to last.',
    'stack.d': 'I use technology proven in production by thousands of companies. Your site will be fast, secure and easy for any developer to maintain in the future.',
    'g1': 'Fixed price, no hidden costs', 'g2': 'You own the code and the domain', 'g3': 'Designed mobile first', 'g4': '30 days of support after launch',
    'faq.title': 'Frequently asked questions.',
    'q1': 'How much does a website cost?', 'a1': 'A landing page starts at €890, a company site at €1,790 and custom applications are quoted after our first call. Always at a fixed price.',
    'q2': 'How long does it take?', 'a2': 'A landing page takes 2 to 3 weeks. A full site, 4 to 6. You get exact dates in the proposal.',
    'q3': 'Can I edit the content myself?', 'a3': 'Yes. If you need it, I add a simple content panel and record a video showing you how to use it.',
    'q4': 'Do you handle domain and hosting?', 'a4': 'Yes. I set everything up in your name so it is always yours, even if you switch providers one day.',
    'q5': 'Do you work with clients outside Spain?', 'a5': 'Yes. I work remotely in English and Spanish, and schedule calls in your time zone.',
    'q6': 'What happens after launch?', 'a6': 'You get 30 days of included support. After that you can book monthly maintenance or ask for one off changes.',
    'contact.label': 'contact', 'contact.title': 'Got an idea?<br>Let’s make it real.',
    'contact.d': 'I reply within 24 h with a first assessment. No commitment.', 'contact.time': 'My time',
    'f.name': 'Name', 'f.errName': 'Please enter your name.', 'f.errEmail': 'Check the email, it looks incomplete.',
    'f.type': 'Project type', 'f.t2': 'Company site', 'f.t3': 'Application', 'f.t4': 'Store',
    'f.msg': 'Tell me a bit more', 'f.errMsg': 'Add at least one sentence about your project.',
    'f.send': 'Send message', 'f.ok': 'Your email app opened with the message ready. I will reply within 24 h.',
    'footer.made': 'Handmade, no templates.', 'footer.privacy': 'Privacy',
    'pal.ph': 'Type a command…'
  };
  var UI = {
    es: {
      roles: ['Next.js y React', 'APIs con Node.js', 'Supabase y PostgreSQL', 'tiendas que venden', 'webs que cargan en < 1 s'],
      accWords: ['plantillas.', 'clic.'], copied: 'Email copiado', langSet: 'Idioma: español',
      mailSubject: 'Nuevo proyecto', none: 'Sin resultados',
      cmds: { about: 'Sobre mí', insta: 'Abrir Instagram', services: 'Ir a servicios', work: 'Ver proyectos', process: 'Ver proceso', stack: 'Ver stack', faq: 'Preguntas frecuentes', contact: 'Contactar', email: 'Copiar email', lang: 'Switch to English', github: 'Abrir GitHub', top: 'Volver arriba' }
    },
    en: {
      roles: ['Next.js & React', 'Node.js APIs', 'Supabase & PostgreSQL', 'stores that sell', 'sites that load in < 1 s'],
      accWords: ['templates.', 'click.'], copied: 'Email copied', langSet: 'Language: English',
      mailSubject: 'New project', none: 'No results',
      cmds: { about: 'About me', insta: 'Open Instagram', services: 'Go to services', work: 'See work', process: 'See process', stack: 'See stack', faq: 'FAQ', contact: 'Get in touch', email: 'Copy email', lang: 'Cambiar a español', github: 'Open GitHub', top: 'Back to top' }
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

  /* ---------------- Canvas hero: constelación reactiva ---------------- */
  function initHeroCanvas() {
    var c = $('#heroCanvas'); if (!c || !c.getContext) return;
    var ctx = c.getContext('2d'), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W, H, pts = [], mouse = { x: -9999, y: -9999 }, running = true, raf;
    function size() {
      var r = c.getBoundingClientRect(); W = r.width; H = r.height;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(110, (W * H) / 13000));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.4 + .4, c: Math.random() < .15 });
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      var LINK = 130, i, j, p, q, dx, dy, d;
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        dx = mouse.x - p.x; dy = mouse.y - p.y; d = Math.sqrt(dx * dx + dy * dy);
        if (d < 180) { p.vx += dx / d * .02; p.vy += dy / d * .02; }
        p.vx *= .985; p.vy *= .985;
        p.vx += (Math.random() - .5) * .01; p.vy += (Math.random() - .5) * .01;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        for (j = i + 1; j < pts.length; j++) {
          q = pts[j]; dx = p.x - q.x; dy = p.y - q.y; d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            ctx.strokeStyle = 'rgba(197,255,74,' + (0.14 * (1 - Math.sqrt(d) / LINK)) + ')';
            ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        dx = mouse.x - p.x; dy = mouse.y - p.y; d = Math.sqrt(dx * dx + dy * dy);
        if (d < 180) {
          ctx.strokeStyle = 'rgba(74,227,255,' + (0.35 * (1 - d / 180)) + ')';
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = p.c ? 'rgba(74,227,255,.9)' : 'rgba(197,255,74,.75)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (running) raf = requestAnimationFrame(frame);
    }
    size(); frame();
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 200); });
    var hero = c.parentNode, glow = $('#heroGlow');
    hero.addEventListener('pointermove', function (e) {
      var r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      if (glow) { glow.style.setProperty('--gx', mouse.x + 'px'); glow.style.setProperty('--gy', mouse.y + 'px'); }
    });
    hero.addEventListener('pointerleave', function () { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(function (en) {
      var vis = en[0].isIntersecting;
      if (vis && !running) { running = true; frame(); } else if (!vis) { running = false; cancelAnimationFrame(raf); }
    }).observe(hero);
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
        var r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .25) + 'px,' + ((e.clientY - r.top - r.height / 2) * .35) + 'px)';
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
    var reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    function check(input) {
      var ok = input.type === 'email' ? reEmail.test(input.value.trim()) : input.value.trim().length >= (input.tagName === 'TEXTAREA' ? 10 : 2);
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
      var body = d.get('message') + '\n\n— ' + d.get('name') + ' (' + d.get('email') + ')';
      // EDITAR: para recibir el formulario sin abrir el correo, conecta Formspree o similar.
      location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(UI[lang].mailSubject + ' · ' + d.get('type')) + '&body=' + encodeURIComponent(body);
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
  /* ---------------- Retrato 3D del hero ---------------- */
  function initPortrait() {
    var stage = $('#portraitStage'), hero = $('#top'); if (!stage || !hero) return;
    var chips = $$('.portrait__chip', stage);
    if (finePointer) {
      hero.addEventListener('pointermove', function (e) {
        var r = stage.getBoundingClientRect();
        var x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
        var y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
        stage.style.setProperty('--ry', (x * 22).toFixed(2) + 'deg');
        stage.style.setProperty('--rx', (-y * 18).toFixed(2) + 'deg');
        chips.forEach(function (c, i) { c.style.translate = (x * (14 + i * 10)).toFixed(1) + 'px ' + (y * (10 + i * 8)).toFixed(1) + 'px'; });
      });
      hero.addEventListener('pointerleave', function () {
        stage.style.setProperty('--ry', '0deg'); stage.style.setProperty('--rx', '0deg');
        chips.forEach(function (c) { c.style.translate = ''; });
      });
    }
    // Entrada: el retrato gira desde el fondo
    stage.animate([
      { opacity: 0, transform: 'perspective(1200px) rotateY(-35deg) rotateX(12deg) translateZ(-200px)' },
      { opacity: 1, transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)' }
    ], { duration: 1600, delay: 900, easing: 'cubic-bezier(0.32, 0.72, 0, 1)', fill: 'backwards' });
  }

  function initConsole() {
    if (window.console) console.log('%c<cs/>%c  ¿Curioseando el código? Me caes bien. Escríbeme: ' + EMAIL, 'background:#C5FF4A;color:#0B0F00;padding:4px 8px;border-radius:4px;font-weight:700', 'color:#9B9B9B');
  }

  function boot() {
    safe(initI18n, 'i18n');
    safe(initSplash, 'splash');
    safe(initReveal, 'reveal');
    safe(initNav, 'nav');
    safe(initHeroCanvas, 'heroCanvas');
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
    safe(initConsole, 'console');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
