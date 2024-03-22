/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "tablet":"800px",
        "Phone":"520px",
        "Phonesm":"380px"
      }
    },
  },
  plugins: [],
}

