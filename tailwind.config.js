/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      animation: {
        fade: 'fadeOut 1s ease forwards',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 70 },
          '100%': { opacity: 0 },
        },
      }),
    },
    colors: {
      'black-pearl': '#080e2c',
      'gold': '#d5b65e',
      'dead': '#86e2d5',
      'snow': '#e8ecf1',
    },

  },
  plugins: [
    require('flowbite/plugin')
  ]
}

