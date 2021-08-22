const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const leadings = theme('leading')

  let utilities = {}

  for (const name in leadings)  {
    utilities[`.leading--${name}`] = { lineHeight: leadings[name] }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
