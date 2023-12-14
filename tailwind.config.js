const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  darkMode: ['class'],
  content: ['./src/**/*.{tsx,css}'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
