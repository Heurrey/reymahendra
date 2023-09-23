/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        white: '#fafaee',
        blue: '#1820EF',
        red: '#FF4F42',
        yellow: '#FFC023',
      },
      screen: {
        '2xl': '1320px',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
    backgroundImage: {
      'her': "url('dist/img/reyMhndra1.png')",
    }
  },
  plugins: [],
}





