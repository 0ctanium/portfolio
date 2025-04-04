/* eslint-disable */
const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = plugin(({ addBase, theme }) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
});
