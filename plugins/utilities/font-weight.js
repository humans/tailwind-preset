const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const fontWeights = theme('fontWeight')

  let utilities = {}

  for (const name in fontWeights)  {
    utilities[`.font--${name}`] = { fontWeight: fontWeights[name] }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
