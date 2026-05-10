/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0b1020',
          muted: '#11182b',
          soft: '#1a2438',
        },
      },
      boxShadow: {
        soft: '0 10px 40px -18px rgba(0, 0, 0, 0.55)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

