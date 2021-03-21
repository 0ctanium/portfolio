module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans'],
        display: ['brandon-grotesque'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
