const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const fontFamilies = theme('fontFamily')

  let utilities = {}

  for (const name in fontFamilies)  {
    utilities[`.font--${name}`] = { fontFamily: fontFamilies[name] }
  }

  addUtilities(utilities)
})
