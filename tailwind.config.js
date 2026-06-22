/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy ramp — primary brand
        navy: {
          50:  '#f1f5fb',
          100: '#dbe6f4',
          200: '#b8cce8',
          300: '#8aa8d6',
          400: '#5a7fbf',
          500: '#3a5d9f',
          600: '#2a4681',
          700: '#1f3568',
          800: '#172748',
          900: '#0f1b33',
          950: '#0a1325',
        },
        // Slate ramp — neutrals
        slate2: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Metallic gold accent
        gold: {
          50:  '#fdfaf0',
          100: '#faf3d8',
          200: '#f3e4a6',
          300: '#e9cd6b',
          400: '#d9b23e',
          500: '#c2972a',
          600: '#a37a23',
          700: '#805e20',
          800: '#6a4d20',
          900: '#5b411f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'nav': '0 4px 30px rgba(15, 27, 51, 0.08)',
        'card': '0 10px 40px -10px rgba(15, 27, 51, 0.15)',
        'glow-gold': '0 0 0 1px rgba(217, 178, 62, 0.25), 0 8px 30px -6px rgba(217, 178, 62, 0.35)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0f1b33 0%, #1f3568 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d9b23e 0%, #c2972a 100%)',
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
