/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        primary: "GothamRoundedPrimary",
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
],
}