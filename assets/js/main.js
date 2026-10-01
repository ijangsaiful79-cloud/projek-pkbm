(function () {
  'use strict';
  var D = window.PKBM;

  /* ── Color helpers ──────────────────────────────────── */
  var BADGE = {
    blue:   'bg-slate-100 text-slate-700',
    teal:   'bg-slate-100 text-slate-700',
    amber:  'bg-slate-100 text-slate-700',
    green:  'bg-slate-100 text-slate-700',
    purple: 'bg-slate-100 text-slate-700',
    slate:  'bg-slate-100 text-slate-700',
    red:    'bg-slate-100 text-slate-700'
  };
  var LABEL = {
    blue:   'text-slate-500',
    teal:   'text-slate-500',
    amber:  'text-slate-500',
    green:  'text-slate-500',
    purple: 'text-slate-500',
    slate:  'text-slate-500',
    red:    'text-slate-500'
  };

  function badge(cat) {
    var cls = BADGE[cat.color] || BADGE.slate;
    return '<span class="inline-block ' + cls + ' text-xs font-bold px-3 py-1 rounded-full mb-2">' + cat.label + '</span>';
  }
  function labelSpan(cat) {
    var cls = LABEL[cat.color] || LABEL.slate;
    return '<span class="text-xs ' + cls + ' font-semibold uppercase tracking-wide">' + cat.label + '</span>';
  }

  /* ── Renderers ──────────────────────────────────────── */

  function renderBlogPreview() {
    var el = document.getElementById('blog-preview');
    if (!el || !D) return;
    var html = '';
    D.blog.slice(0, 3).forEach(function (post) {
      html += '<article class="blog-card group">'
        + '<div class="overflow-hidden rounded-2xl mb-4 aspect-[16/10]">'
        + '<img src="' + post.image + '" alt="' + post.imageAlt + '" class="blog-card-img w-full h-full object-cover" loading="lazy" width="600" height="375"/>'
        + '</div>'
        + labelSpan(post.category)
        + '<h3 class="font-heading font-bold text-slate-800 mt-1.5 mb-2 group-hover:text-blue-700 transition-colors leading-snug">' + post.title + '</h3>'
        + '<p class="text-slate-500 text-sm leading-relaxed line-clamp-2">' + post.excerpt + '</p>'
        + '<p class="text-xs text-slate-400 mt-3">' + post.date + '</p>'
        + '</article>';
    });
    el.innerHTML = html;
  }

  function renderBlogArticles() {
    var el = document.getElementById('blog-articles');
    if (!el || !D) return;
    var html = '';
    D.blog.forEach(function (post, i) {
      if (i > 0) html += '<div class="border-t border-slate-100"></div>';
      html += '<article class="blog-card group grid sm:grid-cols-2 gap-6 items-start">'
        + '<div class="overflow-hidden rounded-xl aspect-[16/10]">'
        + '<img src="' + post.image + '" alt="' + post.imageAlt + '" class="blog-card-img w-full h-full object-cover" loading="lazy" width="600" height="375"/>'
        + '</div>'
        + '<div>'
        + badge(post.category)
        + '<h2 class="font-heading font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-700 transition-colors leading-snug">' + post.title + '</h2>'
        + '<p class="text-slate-500 text-sm leading-relaxed mb-3">' + post.excerpt + '</p>'
        + '<div class="flex items-center justify-between">'
        + '<p class="text-xs text-slate-400">' + post.date + '</p>'
        + '<a href="#" class="text-blue-700 text-xs font-semibold hover:underline">Baca Selengkapnya</a>'
        + '</div></div></article>';
    });
    el.innerHTML = html;
  }

  function renderBlogRecent() {
    var el = document.getElementById('blog-recent');
    if (!el || !D) return;
    var html = '';
    D.blog.slice(0, 3).forEach(function (post) {
      var thumb = post.image.replace('w=600&h=375', 'w=100&h=80');
      html += '<li class="flex gap-3 items-start">'
        + '<img src="' + thumb + '" alt="" class="w-14 h-12 rounded-lg object-cover flex-shrink-0" loading="lazy" width="100" height="80"/>'
        + '<div><a href="#" class="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors leading-snug block">' + post.title + '</a>'
        + '<p class="text-xs text-slate-400 mt-1">' + post.dateShort + '</p></div>'
        + '</li>';
    });
    el.innerHTML = html;
  }

  function renderFAQ() {
    var el = document.getElementById('faq-list');
    if (!el || !D) return;
    var html = '';
    D.faq.forEach(function (item) {
      html += '<div class="bg-white rounded-xl border border-slate-200 overflow-hidden">'
        + '<button class="faq-btn w-full flex items-center justify-between px-6 py-[18px] text-left cursor-pointer">'
        + '<span class="font-heading font-semibold text-slate-800 text-sm">' + item.question + '</span>'
        + '<svg class="faq-icon w-5 h-5 text-slate-400 flex-shrink-0 ml-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M12 4v16m8-8H4"/></svg>'
        + '</button>'
        + '<div class="faq-body px-6"><p class="text-slate-600 text-sm leading-relaxed pb-5">' + item.answer + '</p></div>'
        + '</div>';
    });
    el.innerHTML = html;
  }

  var SVG_CLOCK = '<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
  var SVG_PIN   = '<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>';

  function agendaCard(item) {
    var up = item.status === 'upcoming';
    var html = '<div class="border ' + (up ? 'border-slate-200 bg-white' : 'border-slate-200 bg-slate-50') + ' rounded-2xl overflow-hidden">'
      + '<div class="grid sm:grid-cols-[auto_1fr] gap-0">'
      + '<div class="' + (up ? 'bg-blue-700' : 'bg-slate-400') + ' text-white flex flex-col items-center justify-center px-6 py-5 sm:py-0 min-w-[90px]">'
      + '<span class="font-heading font-bold text-3xl leading-none">' + item.date + '</span>'
      + '<span class="' + (up ? 'text-white/70' : 'text-slate-200') + ' text-sm mt-1">' + item.month + '</span>'
      + '</div>'
      + '<div class="p-5">'
      + badge(item.category)
      + '<h3 class="font-heading font-bold ' + (up ? 'text-slate-800' : 'text-slate-700') + ' text-base mb-1">' + item.title + '</h3>'
      + '<p class="' + (up ? 'text-slate-500' : 'text-slate-400') + ' text-sm leading-relaxed' + (up ? ' mb-3' : '') + '">' + item.description + '</p>';
    if (up && (item.time || item.location)) {
      html += '<div class="flex flex-wrap gap-4 text-sm text-slate-500">';
      if (item.time)     html += '<span class="flex items-center gap-1.5">' + SVG_CLOCK + item.time + '</span>';
      if (item.location) html += '<span class="flex items-center gap-1.5">' + SVG_PIN + item.location + '</span>';
      html += '</div>';
    }
    html += '</div></div></div>';
    return html;
  }

  function renderAgenda() {
    if (!D) return;
    var upEl  = document.getElementById('agenda-upcoming');
    var pastEl = document.getElementById('agenda-past');
    if (upEl)   upEl.innerHTML   = D.agenda.filter(function (a) { return a.status === 'upcoming'; }).map(agendaCard).join('');
    if (pastEl) pastEl.innerHTML = D.agenda.filter(function (a) { return a.status === 'past';     }).map(agendaCard).join('');
  }

  function renderGallery() {
    var el = document.getElementById('gallery-grid');
    if (!el || !D) return;
    var html = '';
    D.gallery.forEach(function (item) {
      var wide = item.wide ? ' col-span-2 md:col-span-1' : '';
      html += '<div class="gallery-grid-item gallery-item overflow-hidden rounded-xl aspect-square' + wide + '" data-cat="' + item.cat + '">';
      if (item.isVideo) {
        html += '<div class="relative w-full h-full bg-slate-800 cursor-pointer group">'
          + '<img src="' + item.src + '" alt="' + item.alt + '" class="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity" loading="lazy" width="600" height="600"/>'
          + '<div class="absolute inset-0 flex items-center justify-center">'
          + '<div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform">'
          + '<svg class="w-6 h-6 text-blue-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'
          + '</div></div></div>';
      } else {
        html += '<img src="' + item.src + '" alt="' + item.alt + '" class="w-full h-full object-cover" loading="lazy" width="600" height="600"/>';
      }
      html += '</div>';
    });
    el.innerHTML = html;
  }

  /* ── Interactive Binders ────────────────────────────── */

  function initSlider() {
    var slides = document.querySelectorAll('.slide');
    var dots   = document.querySelectorAll('.dot');
    if (!slides.length) return;
    var current = 0, timer;
    function goTo(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function next()  { goTo(current + 1); }
    function start() { timer = setInterval(next, 5000); }
    function stop()  { clearInterval(timer); }
    var btnNext = document.getElementById('slide-next');
    var btnPrev = document.getElementById('slide-prev');
    if (btnNext) btnNext.addEventListener('click', function () { stop(); next(); start(); });
    if (btnPrev) btnPrev.addEventListener('click', function () { stop(); goTo(current - 1); start(); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { stop(); goTo(i); start(); });
    });
    start();
  }

  function initCounters() {
    var section = document.getElementById('stats-section');
    if (!section) return;
    var obs = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      document.querySelectorAll('.counter').forEach(function (el) {
        var target = +el.dataset.target;
        var step   = Math.ceil(target / 55);
        var val    = 0;
        var tick   = setInterval(function () {
          val = Math.min(val + step, target);
          el.textContent = val.toLocaleString('id-ID');
          if (val >= target) clearInterval(tick);
        }, 28);
      });
    }, { threshold: 0.3 });
    obs.observe(section);
  }

  function initFAQ() {
    document.querySelectorAll('.faq-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var body   = btn.nextElementSibling;
        var icon   = btn.querySelector('.faq-icon');
        var isOpen = body.classList.contains('open');
        document.querySelectorAll('.faq-body.open').forEach(function (b)  { b.classList.remove('open'); });
        document.querySelectorAll('.faq-icon.open').forEach(function (ic) { ic.classList.remove('open'); });
        if (!isOpen) { body.classList.add('open'); if (icon) icon.classList.add('open'); }
      });
    });
  }

  function initGalleryFilter() {
    var btns  = document.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll('.gallery-grid-item');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var f = btn.dataset.filter;
        items.forEach(function (item) {
          item.style.display = (f === 'all' || item.dataset.cat === f) ? '' : 'none';
        });
      });
    });
  }

  function initTabs() {
    var tabs   = document.querySelectorAll('.tab-btn');
    var panels = document.querySelectorAll('.tab-panel');
    if (!tabs.length) return;

    function activateTab(id) {
      tabs.forEach(function (t)   { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      var btn = document.querySelector('.tab-btn[data-tab="' + id + '"]');
      var panel = document.getElementById(id);
      if (btn)   btn.classList.add('active');
      if (panel) panel.classList.add('active');
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tab.dataset.tab);
        history.replaceState(null, '', '#' + tab.dataset.tab);
      });
    });

    function activateFromHash() {
      var hash = window.location.hash.replace('#', '');
      if (hash && document.querySelector('.tab-btn[data-tab="' + hash + '"]')) {
        activateTab(hash);
      }
    }

    activateFromHash();
    window.addEventListener('hashchange', activateFromHash);
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Mengirim...';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = 'Pesan Terkirim';
        btn.classList.add('bg-green-600');
        form.reset();
        setTimeout(function () {
          btn.textContent = 'Kirim Pesan';
          btn.classList.remove('bg-green-600');
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  /* ── Bootstrap ──────────────────────────────────────── */
  function init() {
    renderBlogPreview();
    renderBlogArticles();
    renderBlogRecent();
    renderFAQ();
    renderAgenda();
    renderGallery();
    initSlider();
    initCounters();
    initFAQ();
    initGalleryFilter();
    initTabs();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
