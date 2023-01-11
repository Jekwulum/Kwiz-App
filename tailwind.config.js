/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#3522a1",
        "cust-light": "#FFFFFF",
        "cust-dark-body": "#202124",
        "cust-dark-nav": "#000000"
      },
    },
  },
  plugins: [],
}
