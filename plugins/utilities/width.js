const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = Object.entries(
    theme('width')
  ).map(function ([name, value]) {
    return [`.width--${name}`, { width: value }]
  })

  addUtilities(Object.fromEntries(utilities), {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
