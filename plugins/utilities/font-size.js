const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const fontSizes = theme('fontSize')

  let utilities = {}

  for (const name in fontSizes)  {
    utilities[`.text--${name}`] = { fontSize: fontSizes[name] }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
