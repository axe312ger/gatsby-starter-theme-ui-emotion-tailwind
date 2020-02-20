const preset = require("@theme-ui/preset-tailwind")

module.exports = {
  ...preset,
  colors: {
    ...preset.colors,
    foo: "tomato",
  },
}
