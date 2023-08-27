/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#306fc7',
        'secondary': '#F3B246',
        'tertiary':'#f3f7f3'
      }
    },
  },
  plugins: [],
}

