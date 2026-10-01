/* ──────────────────────────────────────────────────────
   PKBM AL-FATIH — Site Data
   Edit file ini untuk mengubah konten website tanpa
   perlu menyentuh file HTML.
   ────────────────────────────────────────────────────── */
window.PKBM = {

  /* ── Konfigurasi Umum ─────────────────────────────── */
  config: {
    name:        'PKBM AL-FATIH',
    tagline:     'Mendidik Cerdas, Menciptakan Perubahan',
    city:        'Banyuwangi',
    phone:       '085807278828',
    phoneWa:     '6285807278828',
    email:       'pkbmalfatih01@gmail.com',
    address:     'Perum Pesat Gatra Blok H4, RT 1 RW 2, Kel. Kebalenan, Kec. Banyuwangi, Jawa Timur',
    hours: {
      weekday: 'Senin–Jumat: 08.00–17.00 WIB',
      weekend: 'Sabtu: 08.00–12.00 WIB'
    },
    social: {
      instagram: 'https://instagram.com/pkbmalfatih',
      facebook:  '#',
      youtube:   '#',
      tiktok:    '#'
    },
    legal: {
      npsn:         'P9999185',
      siop:         '421/8309/429.101/2024',
      kemenkumham:  'AHU-00000.77.AH.01.04.2023'
    },
    waMessage: 'Halo Admin PKBM AL-FATIH, saya ingin mengetahui informasi lebih lanjut mengenai program pendidikan kesetaraan.'
  },

  /* ── Statistik (counter) ──────────────────────────── */
  stats: [
    { value: 500, suffix: '+', label: 'Alumni Lulus',         animated: true },
    { value: 8,   suffix: '+', label: 'Tahun Pengalaman',     animated: true },
    { value: 3,   suffix: '',  label: 'Program Kesetaraan',   animated: false },
    { value: 100, suffix: '%', label: 'Ijazah Resmi Negara',  animated: false }
  ],

  /* ── Artikel Blog ─────────────────────────────────── */
  blog: [
    {
      id:       'pendaftaran-2025',
      title:    'Pendaftaran Paket A, B dan C Tahun Ajaran 2025/2026 Resmi Dibuka',
      excerpt:  'Gelombang pendaftaran tahun ajaran baru telah dibuka. Calon warga belajar dapat segera menghubungi admin untuk mendapatkan informasi lengkap mengenai jadwal, biaya, dan persyaratan.',
      category: { label: 'Pengumuman', color: 'blue' },
      date:     '30 September 2025',
      dateShort:'30 Sep 2025',
      image:    'assets/images/foto-06.jpg',
      imageAlt: 'Pendaftaran 2025'
    },
    {
      id:       'apa-itu-kesetaraan',
      title:    'Apa Itu Pendidikan Kesetaraan? Penjelasan Lengkap untuk Calon Warga Belajar',
      excerpt:  'Banyak masyarakat yang masih belum memahami perbedaan antara ijazah kesetaraan dan ijazah formal. Artikel ini menjelaskan secara tuntas apa itu PKBM, dasar hukum, dan keberlakuannya di Indonesia.',
      category: { label: 'Edukasi', color: 'blue' },
      date:     '15 September 2025',
      dateShort:'15 Sep 2025',
      image:    'assets/images/foto-01.jpg',
      imageAlt: 'Pendidikan Kesetaraan'
    },
    {
      id:       'tips-belajar-sambil-kerja',
      title:    '5 Tips Efektif Belajar Sambil Bekerja untuk Peserta Program Paket C',
      excerpt:  'Mengatur waktu antara pekerjaan dan kegiatan belajar memang tidak mudah. Namun dengan strategi yang tepat, keduanya dapat dijalankan bersamaan tanpa mengorbankan salah satunya.',
      category: { label: 'Tips Belajar', color: 'slate' },
      date:     '1 September 2025',
      dateShort:'1 Sep 2025',
      image:    'assets/images/foto-08.jpg',
      imageAlt: 'Tips Belajar'
    },
    {
      id:       'alumni-masuk-ptn',
      title:    'Alumni Paket C PKBM AL-FATIH Berhasil Diterima di Universitas Negeri via SNBT',
      excerpt:  'Kisah inspiratif Rina Wulandari, alumni Paket C PKBM AL-FATIH yang berhasil menembus seleksi masuk universitas negeri setelah memperoleh ijazah kesetaraan dari lembaga kami.',
      category: { label: 'Kisah Alumni', color: 'green' },
      date:     '20 Agustus 2025',
      dateShort:'20 Ags 2025',
      image:    'assets/images/foto-08.jpg',
      imageAlt: 'Alumni Masuk PTN'
    }
  ],

  /* ── Testimoni Alumni ─────────────────────────────── */
  testimonials: [
    {
      name:   'Rina Wulandari',
      role:   'Alumni Paket C, CPNS 2024',
      quote:  'Berkat PKBM AL-FATIH, saya bisa mendapat ijazah SMA sambil tetap bekerja. Sekarang sudah lolos seleksi CPNS.',
      image:  'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name:   'Budi Santoso',
      role:   'Alumni Paket C, Lulus 2023',
      quote:  'Saya mendaftar di usia 35 tahun dan tidak ada masalah sama sekali. Tutornya sabar, materi bisa diakses dari HP kapan saja.',
      image:  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    },
    {
      name:   'Siti Aminah',
      role:   'Alumni Paket C 2023, Ibu Rumah Tangga',
      quote:  'Meski sudah berkeluarga dan punya anak, saya tetap bisa ikut program ini. Para tutor sangat suportif dan materi mudah dipahami.',
      image:  'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
    }
  ],

  /* ── FAQ ──────────────────────────────────────────── */
  faq: [
    {
      question: 'Apakah ijazah PKBM diakui secara resmi?',
      answer:   'Ya, 100% resmi. Ijazah kesetaraan PKBM AL-FATIH dikeluarkan di bawah naungan Kemendikdasmen dan diakui setara dengan ijazah formal. Dapat digunakan untuk melamar kerja, CPNS, TNI/POLRI, dan mendaftar PTN/PTS melalui jalur SNBT.'
    },
    {
      question: 'Berapa batas usia untuk mendaftar?',
      answer:   'Tidak ada batasan usia. Program kesetaraan kami terbuka untuk semua kalangan, mulai dari pelajar yang putus sekolah, pekerja dewasa, ibu rumah tangga, hingga lansia.'
    },
    {
      question: 'Apakah bisa mendaftar dari luar Banyuwangi?',
      answer:   'Bisa. Kami melayani peserta dari seluruh Indonesia. Sistem pembelajaran hybrid memungkinkan kamu belajar secara daring dari mana saja, dengan pertemuan tatap muka sesuai jadwal yang disepakati.'
    },
    {
      question: 'Alumni Paket C bisa masuk PTN?',
      answer:   'Ya. Ijazah Paket C diakui untuk mengikuti Seleksi Nasional Berdasarkan Tes (SNBT) masuk PTN. Kami memiliki alumni yang berhasil diterima di perguruan tinggi negeri dengan ijazah dari PKBM AL-FATIH.'
    },
    {
      question: 'Berapa biaya pendaftaran dan biaya per semester?',
      answer:   'Biaya pendaftaran dan biaya per semester sangat terjangkau dan dapat dicicil. Untuk informasi biaya terkini, silakan hubungi admin kami via WhatsApp karena biaya dapat berubah setiap periode pendaftaran.'
    },
    {
      question: 'Bagaimana sistem pembelajaran di PKBM AL-FATIH?',
      answer:   'Kami menggunakan sistem hybrid: materi dapat diakses secara daring kapan saja melalui platform pembelajaran online, serta pertemuan tatap muka dengan tutor setiap akhir pekan. Jadwal dapat disesuaikan dengan aktivitas peserta.'
    }
  ],

  /* ── Agenda ───────────────────────────────────────── */
  agenda: [
    {
      date:        '05',
      month:       'Okt 2026',
      title:       'Penutupan Pendaftaran Gelombang 1 Tahun Ajaran 2026/2027',
      description: 'Batas akhir pendaftaran gelombang pertama. Pendaftar yang sudah mengisi formulir harap segera melengkapi berkas ke kantor administrasi.',
      time:        '08.00 – 16.00 WIB',
      location:    'Kantor PKBM AL-FATIH',
      category:    { label: 'Pendaftaran', color: 'blue' },
      status:      'upcoming'
    },
    {
      date:        '12',
      month:       'Okt 2026',
      title:       'Masa Orientasi Warga Belajar Baru Tahun Ajaran 2026/2027',
      description: 'Pengenalan program, tata tertib, sistem pembelajaran, dan pertemuan dengan para tutor. Wajib dihadiri seluruh warga belajar baru yang diterima.',
      time:        '09.00 – 12.00 WIB',
      location:    'Aula PKBM AL-FATIH',
      category:    { label: 'Orientasi', color: 'blue' },
      status:      'upcoming'
    },
    {
      date:        '20',
      month:       'Okt 2026',
      title:       'Hari Pertama Kegiatan Belajar Mengajar Semester Ganjil',
      description: 'Kegiatan belajar mengajar resmi dimulai untuk seluruh program Paket A, B, dan C. Jadwal lengkap akan diumumkan kepada setiap warga belajar.',
      time:        'Sesuai Jadwal Masing-masing',
      location:    'Ruang Kelas PKBM AL-FATIH',
      category:    { label: 'Belajar', color: 'blue' },
      status:      'upcoming'
    },
    {
      date:        '15',
      month:       'Nov 2026',
      title:       'Ujian Tengah Semester (UTS) Paket A, B, dan C',
      description: 'Pelaksanaan Ujian Tengah Semester. Materi ujian sesuai kurikulum Merdeka Belajar yang telah disampaikan sejak awal semester.',
      time:        '08.00 – 11.00 WIB',
      location:    'Ruang Ujian PKBM AL-FATIH',
      category:    { label: 'Ujian', color: 'slate' },
      status:      'upcoming'
    },
    {
      date:        '30',
      month:       'Sep 2026',
      title:       'Pembukaan Pendaftaran Tahun Ajaran 2026/2027',
      description: 'Gelombang pendaftaran pertama resmi dibuka. Lebih dari 80 calon warga belajar telah mendaftar pada hari pertama pembukaan.',
      time:        '',
      location:    '',
      category:    { label: 'Terlaksana', color: 'slate' },
      status:      'past'
    },
    {
      date:        '15',
      month:       'Agu 2026',
      title:       'Wisuda Lulusan Paket A, B, dan C Tahun 2026',
      description: 'Prosesi wisuda dan penyerahan ijazah bagi 127 lulusan program Kesetaraan Paket A, B, dan C periode 2025/2026.',
      time:        '',
      location:    '',
      category:    { label: 'Terlaksana', color: 'slate' },
      status:      'past'
    }
  ],

  /* ── Galeri ───────────────────────────────────────── */
  gallery: [
    { src: 'assets/images/foto-01.jpg', alt: 'Suasana kegiatan belajar warga belajar PKBM AL-FATIH',              cat: 'kbm',        wide: true,  isVideo: false },
    { src: 'assets/images/foto-02.jpg', alt: 'Kegiatan belajar mengajar bersama tutor',                           cat: 'kbm',        wide: false, isVideo: false },
    { src: 'assets/images/foto-03.jpg', alt: 'Sesi belajar – tutor menjelaskan materi',                           cat: 'kbm',        wide: false, isVideo: false },
    { src: 'assets/images/foto-04.jpg', alt: 'Proses belajar mengajar Paket PKBM AL-FATIH',                       cat: 'kbm',        wide: false, isVideo: false },
    { src: 'assets/images/foto-05.jpg', alt: 'Pertemuan warga belajar bersama pengurus',                          cat: 'kbm',        wide: false, isVideo: false },
    { src: 'assets/images/foto-06.jpg', alt: 'Visitasi Akreditasi – Tim Asesor BAN PAUD-PDM Provinsi Jawa Timur', cat: 'akreditasi', wide: false, isVideo: false },
    { src: 'assets/images/foto-07.jpg', alt: 'Paparan dalam rangka Visitasi Akreditasi PKBM AL-FATIH 2025',       cat: 'akreditasi', wide: false, isVideo: false },
    { src: 'assets/images/foto-08.jpg', alt: 'Tim Asesor BAN PAUD-PDM bersama pengurus PKBM AL-FATIH Banyuwangi', cat: 'akreditasi', wide: false, isVideo: false }
  ]

};
