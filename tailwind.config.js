/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        vectorGradient:
          "url('/src/assets/images/vector-1.svg')",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
