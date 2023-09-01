/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        cell: {
          max: "460px"
        },
        tablet: {
          max: "850px"
        }
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
}

