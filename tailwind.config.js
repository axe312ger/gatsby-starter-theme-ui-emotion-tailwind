console.log("hallo")

module.exports = {
  theme: {
    extend: {
      fontWeight: {
        foo: "700",
        bar: 700, // this is broken, will not be found
      },
    },
  },
}
