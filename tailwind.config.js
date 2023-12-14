/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2F4F4",
          100: "#E6EAE8",
          200: "#C0CAC6",
          300: "#9AA9A4",
          400: "#4E6960",
          500: "#02291C",
          600: "#022519",
          700: "#011911",
          800: "#01120D",
          900: "#010C08",
        }
      },
      fontFamily: {
        sans: ["Helvetica Now Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}

