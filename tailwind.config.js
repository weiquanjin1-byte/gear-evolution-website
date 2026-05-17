/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cyber: {
          dark: '#050814',
          panel: '#0b1020',
          cyan: '#00e5ff',
          violet: '#8b5cf6',
          pink: '#ff3df2',
          steel: '#94a3b8',
        },
      },
      boxShadow: {
        neon: '0 0 24px rgba(0, 229, 255, 0.28)',
        violet: '0 0 28px rgba(139, 92, 246, 0.34)',
        pink: '0 0 22px rgba(255, 61, 242, 0.25)',
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(0,229,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
