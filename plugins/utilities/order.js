const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = Object.entries(
    theme('order')
  ).map(function ([name, value]) {
    return [`.order--${name}`, { opacity: value }]
  })

  addUtilities(Object.fromEntries(utilities), {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
