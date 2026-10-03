tailwind.config = {
  safelist: [
    'bg-amber-50','bg-amber-100','bg-amber-500',
    'text-amber-600','text-amber-700',
    'bg-slate-50','bg-slate-100','bg-slate-200',
    'text-slate-500','text-slate-600','text-slate-700','text-slate-800'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#B45309', dark: '#0F172A', muted: '#FFFBEB' }
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body:    ['Source Sans 3', 'sans-serif']
      }
    }
  }
};
