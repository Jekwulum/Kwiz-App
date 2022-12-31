/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cust-green": "#147d1b",
        "cust-light": "#FFFFFF",
        "cust-dark-body": "#494F4a",
        "cust-dark-nav": "#000000"
      },
    },
  },
  plugins: [],
}
