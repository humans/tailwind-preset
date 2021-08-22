const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const tracking = theme('tracking')

  let utilities = {}

  for (const name in tracking)  {
    utilities[`.tracking--${name}`] = { letterSpacing: tracking[name] }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
