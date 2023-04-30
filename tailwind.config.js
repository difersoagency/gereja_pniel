/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner': "url('./assets/img/cross-banner.png')",
        'warta-jemaat': "url('./assets/img/warta-bg.png')",
        'ibadah': "url('./assets/img/ibadah-bg.png')",
        'phmj': "url('./assets/img/phmj.png')",
      }
    },
    colors: {
      'prim-blue' : '#141829',
      'prim-white' : '#fff',
      'pt-color' : '#FFF100',
      'pa-color' : '#6CC066',
      'gp-color' : '#0641F6',
      'pkp-color' : '#391D66',
      'pkb-color' : '#73706F',
      'pklu-green' : '#57AD84',
      'pklu-orange' : '#FF9642',
      'prim-gray' : '#E6E5E5',
    },
    fontFamily : {
      pops : ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

