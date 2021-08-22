const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addVariant, theme, e, postcss }) {
  addVariant('no-js', ({ modifySelectors }) => {
    modifySelectors(({ className }) => {
      return `.no-js ${e(`${className}@no-js`)}`
    })
  })
})
