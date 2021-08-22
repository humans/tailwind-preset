const plugin = require('tailwindcss/plugin')

function gridTemplateColumns (values) {
  return Object.entries(values).map(function ([name, value]) {
    return [`.grid-columns--${name}`, { gridTemplateColumns: value }]
  })
}

function gridColumns (values) {
  return Object.entries(values).map(function ([name, value]) {
    return [`.columns--${name}`, { gridColumn: value }]
  })
}

function gridGaps (values) {
  return Object.entries(values).map(function ([name, value]) {
    const selector = (name === 'DEFAULT') ? 'gap' : `gap--${name}`

    return [`.${selector}`, { gap: value }]
  })
}

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = {
    '.grid': { display: 'grid' },
    ...Object.fromEntries(gridTemplateColumns(theme('gridTemplateColumns'))),
    ...Object.fromEntries(gridColumns(theme('gridColumn'))),
    ...Object.fromEntries(gridGaps(theme('gap'))),
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
