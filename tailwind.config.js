/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mobile: {
          max: "850px"
        }
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
}

