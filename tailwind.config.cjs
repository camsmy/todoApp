/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bright-blue':'#3a7bfd',
        'very-light-gray':'hsl(236, 33%, 92%)',
        'very-light-grayish-blue':'hsl(233, 11%, 84%)',
        'dark-grayish-blue':'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue':'hsl(235, 19%, 35%)',
      },
      backgroundImage:{
        'hero-pattern':'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)'
      },
      fontFamily:{
        'Josefin':['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}