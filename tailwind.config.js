module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'white': '#d8cfc1',
      'dark-blue': '#206F8D',
      'orange': '#FE5929',
      'black': '#0f0506',
      'blue': '#47ACBE',
      'yellow': '#713f12',
      'brown': '#3a2c29',
      'grey': '#535f6f',
      'dark-grey': '#164e63',
      'red': '#8a3037',
      'cyan': '#164e63'

    },
    fontFamily: {
      body: 'Montserrat'
    }
    
  },
  
  plugins: [require('tailwindcss-primeui'), require('tailwindcss/colors')]
}
