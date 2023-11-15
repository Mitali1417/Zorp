/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greyShade:"#f0f0f0",
      }
    },
    fontFamily:{
      Roboto: ['Roboto', 'sans-serif']
    } 
  },
  plugins: [],
}

