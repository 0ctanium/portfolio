const defaultConfig = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", ...defaultConfig.fontFamily.sans],
        display: ['brandon-grotesque'],
      },
      spacing: {
        38: '9.5rem',
      },
      inset: {
        '-13': '-3.25rem',
      },
      borderWidth: {
        6: '6px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      borderWidth: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
