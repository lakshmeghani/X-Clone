/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hidden': {
          'scrollbar-width': 'none', // For Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // For Chrome, Safari, and Opera
          },
        },
      })
    },
  ],
}

