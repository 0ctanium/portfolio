const defaultConfig = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...defaultConfig.fontFamily.sans],
        display: ['brandon-grotesque'],
      },
      spacing: {
        38: '9.5rem',
      },
      borderWidth: {
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
