/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}

