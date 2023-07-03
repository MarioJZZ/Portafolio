/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './*html', './js/*.js'],
  theme: {
    container: {
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'blue-dark': '#1f2937',
        'blue-medium': '#14213D',
        'orange-medium': '#FCA311',
        'header': '#000000',
        'section': '#E5E5E5',
      },
      screens:{
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
