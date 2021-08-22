const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = Object.entries(
    theme('opacity')
  ).map(function ([name, value]) {
    return [`.opacity--${name}`, { opacity: value }]
  })

  addUtilities(Object.fromEntries(utilities), {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
