/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  important: '#root',

  theme: {
    extend: {
      width:'100%',
      backgroundImage:{
        'hero-pattern':"url('assets/img/cover/CarsWallpapers.jpg')",
        'loginAdmin-img': "url('assets/img/cover/CarsWallpapers.jpg')",
        'loginDriver-img': "url('assets/img/cover/CarsWallpapers.jpg')"
      },
      fontFamily:{
        'dosis':"'Dosis',sans-serif",
        'roboto':"'Roboto Condensed', sans-serif",
      },
    },
  },
  plugins: [],
}
