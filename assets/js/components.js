(function () {
  'use strict';

  const WA_HREF = 'wa.html';

  const page = (function () {
    const p = window.location.pathname.split('/').pop();
    return p === '' ? 'index.html' : (p || 'index.html');
  })();

  function cls(ids) {
    const list = Array.isArray(ids) ? ids : [ids];
    return list.includes(page) ? 'nav-active' : '';
  }

  // ─── TOP BAR ──────────────────────────────────────────────────────────────
  const topBar = `
<div id="site-topbar" class="bg-slate-800 text-slate-300 text-xs hidden md:block" style="overflow:hidden;max-height:2.25rem;transition:max-height 280ms cubic-bezier(0.4,0,0.2,1),opacity 220ms cubic-bezier(0.4,0,0.2,1);opacity:1;">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 gap-4">
    <div class="flex items-center gap-5">
      <span class="flex items-center gap-1.5">
        <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Senin–Jumat 08.00–17.00 WIB &nbsp;&nbsp;|&nbsp;&nbsp; Sabtu 08.00–12.00 WIB
      </span>
      <a href="mailto:pkbmalfatih01@gmail.com" class="flex items-center gap-1.5 hover:text-white transition-colors">
        <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        pkbmalfatih01@gmail.com
      </a>
    </div>
    <div class="flex items-center gap-4">
      <a href="${WA_HREF}" class="flex items-center gap-1.5 hover:text-white transition-colors">
        <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        085807278828
      </a>
      <div class="flex items-center gap-2 border-l border-slate-700 pl-4">
        <a href="https://instagram.com/pkbmalfatih" target="_blank" rel="noopener" aria-label="Instagram" class="hover:text-white transition-colors">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="#" aria-label="Facebook" class="hover:text-white transition-colors">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" class="hover:text-white transition-colors">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a>
      </div>
    </div>
  </div>
</div>`;

  // ─── MAIN NAV ─────────────────────────────────────────────────────────────
  const nav = `
<nav id="navbar" class="bg-white border-b border-slate-100" style="transition:box-shadow 200ms cubic-bezier(0.4,0,0.2,1);">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">

      <a href="index.html" class="flex items-center gap-3 flex-shrink-0">
        <div class="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center">
          <span class="text-white font-heading font-bold text-sm">AF</span>
        </div>
        <div class="leading-tight">
          <p class="font-heading font-bold text-slate-800 text-base leading-none">PKBM AL-FATIH</p>
          <p class="text-amber-600 text-xs font-medium">Banyuwangi</p>
        </div>
      </a>

      <div class="hidden lg:flex items-center">
        <a href="index.html" class="nav-link ${cls('index.html')}">Beranda</a>

        <div class="nav-item-dropdown">
          <button class="nav-link flex items-center gap-1 ${cls('profil.html')}" aria-haspopup="true" aria-expanded="false">
            Profil
            <svg class="w-3.5 h-3.5 chevron" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="nav-dropdown" role="menu">
            <div class="nav-dropdown-inner">
              <a href="profil.html" class="dropdown-item" role="menuitem">Tentang Lembaga</a>
              <a href="profil.html#visi-misi" class="dropdown-item" role="menuitem">Visi dan Misi</a>
              <a href="profil.html#filosofi-logo" class="dropdown-item" role="menuitem">Filosofi Logo</a>
            </div>
          </div>
        </div>

        <div class="nav-item-dropdown">
          <button class="nav-link flex items-center gap-1 ${cls(['paket-a.html','paket-b.html','paket-c.html'])}" aria-haspopup="true" aria-expanded="false">
            Program
            <svg class="w-3.5 h-3.5 chevron" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="nav-dropdown" role="menu">
            <div class="nav-dropdown-inner">
              <a href="paket-a.html" class="dropdown-item" role="menuitem">Paket A &ndash; Setara SD/MI</a>
              <a href="paket-b.html" class="dropdown-item" role="menuitem">Paket B &ndash; Setara SMP/MTs</a>
              <a href="paket-c.html" class="dropdown-item" role="menuitem">Paket C &ndash; Setara SMA/MA</a>
            </div>
          </div>
        </div>

        <a href="galeri.html" class="nav-link ${cls('galeri.html')}">Galeri</a>
        <a href="blog.html"   class="nav-link ${cls('blog.html')}">Blog</a>
        <a href="agenda.html" class="nav-link ${cls('agenda.html')}">Agenda</a>
        <a href="kontak.html" class="nav-link ${cls('kontak.html')}">Kontak</a>
      </div>

      <div class="flex items-center gap-2">
        <a href="${WA_HREF}" class="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors">
          Daftar Sekarang
        </a>
        <button id="nav-toggle" aria-label="Buka menu" class="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="hidden lg:hidden border-t border-slate-100 pb-4 pt-2">
      <a href="index.html" class="mobile-link ${cls('index.html')}">Beranda</a>

      <button class="mobile-accordion w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" data-accordion="mobile-profil">
        Profil
        <svg class="w-4 h-4 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="mobile-profil" class="hidden">
        <a href="profil.html" class="mobile-link pl-8 ${cls('profil.html')}">Tentang Lembaga</a>
        <a href="profil.html#visi-misi" class="mobile-link pl-8">Visi &amp; Misi</a>
        <a href="profil.html#filosofi-logo" class="mobile-link pl-8">Filosofi Logo</a>
      </div>

      <button class="mobile-accordion w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" data-accordion="mobile-program">
        Program
        <svg class="w-4 h-4 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="mobile-program" class="hidden">
        <a href="paket-a.html" class="mobile-link pl-8 ${cls('paket-a.html')}">Paket A &ndash; SD/MI</a>
        <a href="paket-b.html" class="mobile-link pl-8 ${cls('paket-b.html')}">Paket B &ndash; SMP/MTs</a>
        <a href="paket-c.html" class="mobile-link pl-8 ${cls('paket-c.html')}">Paket C &ndash; SMA/MA</a>
      </div>

      <a href="galeri.html"  class="mobile-link ${cls('galeri.html')}">Galeri</a>
      <a href="blog.html"    class="mobile-link ${cls('blog.html')}">Blog</a>
      <a href="agenda.html"  class="mobile-link ${cls('agenda.html')}">Agenda</a>
      <a href="kontak.html"  class="mobile-link ${cls('kontak.html')}">Kontak</a>
      <div class="px-4 mt-3">
        <a href="${WA_HREF}" class="block text-center bg-amber-500 hover:bg-amber-400 text-white font-semibold py-3 rounded-lg text-sm transition-colors">Daftar Sekarang</a>
      </div>
    </div>
  </div>
</nav>`;

  // ─── FOOTER ───────────────────────────────────────────────────────────────
  const footer = `
<footer class="bg-slate-900 text-white pt-14 pb-6">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

      <div class="lg:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center flex-shrink-0">
            <span class="text-white font-heading font-bold text-sm">AF</span>
          </div>
          <div>
            <p class="font-heading font-bold text-base leading-none">PKBM AL-FATIH</p>
            <p class="text-amber-400 text-xs mt-0.5">Banyuwangi</p>
          </div>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">Mendidik Cerdas, Menciptakan Perubahan. Lembaga pendidikan non-formal resmi di bawah naungan Kemendikdasmen.</p>
        <div class="space-y-1 text-sm mb-5">
          <p class="text-slate-500"><span class="text-slate-300 font-medium">NPSN:</span> P9999185</p>
          <p class="text-slate-500"><span class="text-slate-300 font-medium">SIOP:</span> 421/8309/429.101/2024</p>
          <p class="text-slate-500"><span class="text-slate-300 font-medium">Kemenkumham:</span> AHU-00000.77.AH.01.04.2023</p>
        </div>
        <div class="flex gap-2">
          <a href="https://instagram.com/pkbmalfatih" target="_blank" rel="noopener" aria-label="Instagram" class="footer-social"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="#" aria-label="Facebook" class="footer-social"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="#" aria-label="YouTube" class="footer-social"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>
          <a href="#" aria-label="TikTok" class="footer-social"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
        </div>
      </div>

      <div>
        <p class="font-heading font-semibold text-sm mb-4 text-slate-200">Navigasi</p>
        <ul class="space-y-2 text-sm text-slate-400">
          <li><a href="index.html"   class="hover:text-white transition-colors">Beranda</a></li>
          <li><a href="profil.html"  class="hover:text-white transition-colors">Tentang Lembaga</a></li>
          <li><a href="paket-a.html" class="hover:text-white transition-colors">Program Paket A</a></li>
          <li><a href="paket-b.html" class="hover:text-white transition-colors">Program Paket B</a></li>
          <li><a href="paket-c.html" class="hover:text-white transition-colors">Program Paket C</a></li>
          <li><a href="galeri.html"  class="hover:text-white transition-colors">Galeri Kegiatan</a></li>
          <li><a href="blog.html"    class="hover:text-white transition-colors">Blog</a></li>
          <li><a href="agenda.html"  class="hover:text-white transition-colors">Agenda</a></li>
          <li><a href="kontak.html"  class="hover:text-white transition-colors">Kontak</a></li>
        </ul>
      </div>

      <div>
        <p class="font-heading font-semibold text-sm mb-4 text-slate-200">Kontak</p>
        <ul class="space-y-3 text-sm text-slate-400">
          <li class="flex items-start gap-2">
            <svg class="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
            <span>Perum Pesat Gatra Blok H4, RT 1 RW 2, Kel. Kebalenan, Kec. Banyuwangi</span>
          </li>
          <li><a href="${WA_HREF}" class="flex items-center gap-2 hover:text-green-400 transition-colors"><svg class="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>085807278828</a></li>
          <li><a href="mailto:pkbmalfatih01@gmail.com" class="flex items-center gap-2 hover:text-amber-400 transition-colors"><svg class="w-4 h-4 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>pkbmalfatih01@gmail.com</a></li>
          <li class="text-slate-500 text-xs pt-1 leading-relaxed">Senin–Jumat: 08.00–17.00 WIB<br>Sabtu: 08.00–12.00 WIB</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500">
      <p>2025 PKBM AL-FATIH Banyuwangi. Hak cipta dilindungi undang-undang.</p>
      <p>Lembaga resmi di bawah naungan <span class="text-slate-400">Kemendikdasmen RI</span></p>
    </div>
  </div>
</footer>`;

  // ─── FLOATING WA ──────────────────────────────────────────────────────────
  const waBtn = `
<a href="${WA_HREF}" aria-label="Chat WhatsApp" class="wa-float fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl" style="background:#25D366">
  <svg viewBox="0 0 24 24" class="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.112 1.528 5.836L.057 23.485a.75.75 0 00.921.921l5.694-1.473A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.716 9.716 0 01-5.007-1.382l-.36-.214-3.724.963.988-3.617-.235-.374A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
</a>`;

  function inject() {
    const navEl    = document.getElementById('site-nav');
    const footerEl = document.getElementById('site-footer');
    if (navEl) {
      navEl.style.position   = 'sticky';
      navEl.style.top        = '0';
      navEl.style.zIndex     = '500';
      navEl.style.background = 'white';
      navEl.style.overflow   = 'hidden';
      navEl.innerHTML = '<div id="site-header" style="overflow:hidden">' + topBar + nav + '</div>';
    }
    if (footerEl) footerEl.innerHTML = footer;
    document.body.insertAdjacentHTML('beforeend', waBtn);
    bindEvents();
  }

  function bindEvents() {
    // Mobile toggle
    document.getElementById('nav-toggle')?.addEventListener('click', () => {
      document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });

    // Close mobile on link click
    document.querySelectorAll('#mobile-menu a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.add('hidden'));
    });

    // Mobile accordion groups
    document.querySelectorAll('.mobile-accordion').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panelId = btn.getAttribute('data-accordion');
        var panel = document.getElementById(panelId);
        var chevron = btn.querySelector('svg');
        if (!panel) return;
        var isHidden = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !isHidden);
        chevron && chevron.classList.toggle('rotate-180', isHidden);
      });
    });

    // Auto-expand accordion group of the active page
    document.querySelectorAll('.mobile-accordion').forEach(function (btn) {
      var panelId = btn.getAttribute('data-accordion');
      var panel = document.getElementById(panelId);
      if (panel && panel.querySelector('.nav-active')) {
        panel.classList.remove('hidden');
        var chevron = btn.querySelector('svg');
        chevron && chevron.classList.add('rotate-180');
      }
    });

    // Desktop dropdown — CSS shows on hover; JS toggles .open for click/keyboard
    function closeAllDropdowns() {
      document.querySelectorAll('.nav-item-dropdown').forEach(function (w) {
        w.classList.remove('open');
        var b = w.querySelector(':scope > button');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }

    document.querySelectorAll('.nav-item-dropdown > button').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var wrap    = btn.closest('.nav-item-dropdown');
        var wasOpen = wrap.classList.contains('open');
        closeAllDropdowns();
        if (!wasOpen) {
          wrap.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    document.addEventListener('click', function () { closeAllDropdowns(); });

    // Scroll: collapse topbar on scroll-down, shadow on navbar
    const navbar = document.getElementById('navbar');
    const topbar = document.getElementById('site-topbar');
    var lastScrollY = window.scrollY;
    var rafPending = false;
    window.addEventListener('scroll', function () {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(function () {
        var cur = window.scrollY;
        var goingDown = cur > lastScrollY;

        // Topbar: collapse when scrolling down, restore when back near top
        if (topbar) {
          if (cur < 40) {
            topbar.style.maxHeight = '2.25rem';
            topbar.style.opacity   = '1';
          } else if (goingDown) {
            topbar.style.maxHeight = '0';
            topbar.style.opacity   = '0';
          } else {
            topbar.style.maxHeight = '2.25rem';
            topbar.style.opacity   = '1';
          }
        }

        if (navbar) navbar.classList.toggle('shadow-md', cur > 8);
        lastScrollY = cur;
        rafPending = false;
      });
    }, { passive: true });

    // Smooth anchor scroll (skip bare # links to avoid invalid selector error)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        var href = a.getAttribute('href');
        if (!href || href === '#') return;
        try {
          var target = document.querySelector(href);
          if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        } catch (_) {}
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
