const toTailwind = require("@theme-ui/tailwind")
const theme = require("./theme-ui.config.js") // Path to Theme UI config

const convertedTheme = toTailwind(theme)

console.log("Tailwind Theme:")
console.log(convertedTheme.theme.colors)

convertedTheme.theme.colors = Object.keys(convertedTheme.theme.colors).reduce(
  (colors, color) => {
    const palette = convertedTheme.theme.colors[color]
    const convertedPalette = Array.isArray(palette)
      ? palette
          .filter(Boolean)
          .reduce((map, shade, i) => ({ ...map, [(i + 1) * 100]: shade }), {})
      : palette

    return { ...colors, [color]: convertedPalette }
  },
  {}
)

console.log("Fixed Tailwind Theme:")
console.log(convertedTheme.theme.colors)

module.exports = convertedTheme
