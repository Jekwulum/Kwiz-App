/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cust-green": "#147d1b",
        "cust-light": "#FFFFFF",
      },
    },
  },
  plugins: [],
}
