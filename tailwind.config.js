/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  darkMode: 'class', // This enables dark mode by adding a `dark` class to the `html` or `body` tag
  theme: {
    extend: {
      // You can add custom colors or extend other theme properties here
    },
  },
  plugins: [],
}
module.exports = {
  darkMode: 'class', // Enable dark mode by class
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e0e0e0',
      },
    },
  },
  plugins: [],
}


