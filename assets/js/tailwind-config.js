tailwind.config = {
  safelist: [
    'bg-blue-100','text-blue-700',
    'bg-teal-100','text-teal-700','text-teal-600',
    'bg-amber-100','text-amber-700',
    'bg-green-100','text-green-700',
    'bg-purple-100','text-purple-700',
    'bg-slate-200','text-slate-600',
    'bg-red-100','text-red-700'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1D4ED8', dark: '#1E3A8A', light: '#DBEAFE' },
        teal:    { DEFAULT: '#0F766E', light: '#CCFBF1' }
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body:    ['Source Sans 3', 'sans-serif']
      }
    }
  }
};
