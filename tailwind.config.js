/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          amber: '#FFBF00',
          dark: '#0A0A0A',
          zinc: '#18181B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
