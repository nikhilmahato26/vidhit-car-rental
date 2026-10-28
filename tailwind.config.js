/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#334E68',
          600: '#243B53',
          700: '#1B2A3D',
          800: '#14263D', // Primary deep navy
          900: '#0B1726',
          950: '#070E18',
        },
        brand: {
          blue: '#246BCE',
          'blue-hover': '#1B56A8',
          'blue-light': '#EBF2FC',
          gold: '#F2B84B',
          'gold-hover': '#DFA134',
          'gold-light': '#FEF7EC',
        },
        charcoal: '#263238',
        surface: '#F4F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(20, 38, 61, 0.08), 0 2px 6px -2px rgba(20, 38, 61, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(20, 38, 61, 0.16), 0 4px 12px -2px rgba(20, 38, 61, 0.08)',
        'cta': '0 10px 25px -5px rgba(36, 107, 206, 0.4)',
        'cta-gold': '0 10px 25px -5px rgba(242, 184, 75, 0.4)',
      },
    },
  },
  plugins: [],
}
