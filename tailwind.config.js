/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx,js}"],
  theme: {
    fontFamily:{
      'custom':[ "Montserrat" ]
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

