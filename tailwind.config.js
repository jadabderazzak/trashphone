/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html.twig',
    './assets/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['jakarta', 'sans-serif'],
      },
      colors: {
        trash: '#4baddb', // Global blue color
      },
    },
  },
  plugins: [],
}
