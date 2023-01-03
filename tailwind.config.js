/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      '0.01':'0.01px',
    },
    extend: {},
    colors:{
      'gray': '#b3b3b3',
      'black': '#000',
      'white': '#fff',
      'dark_blue':'#450af5',
      'light_green':'#c4efd9',
      'green': '#1ed760',
      'dark_green':'#006450',
      'gray-1': '#494346',
      'gray-2':'#292627'
    },
  },
  plugins: [],
}