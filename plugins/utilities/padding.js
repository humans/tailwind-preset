const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  let utilities = {}

  const paddings = theme('padding')

  for (const name in paddings)  {
    const prefix = (name === 'DEFAULT') ? 'pad' : `pad-${name}`

    utilities[`.${prefix}`]         = { padding:       paddings[name] }
    utilities[`.${prefix}--left`]   = { paddingLeft:   paddings[name] }
    utilities[`.${prefix}--right`]  = { paddingRight:  paddings[name] }
    utilities[`.${prefix}--top`]    = { paddingTop:    paddings[name] }
    utilities[`.${prefix}--bottom`] = { paddingBottom: paddings[name] }

    utilities[`.${prefix}--sides`]  = {
      paddingLeft:  paddings[name],
      paddingRight: paddings[name],
    }

    utilities[`.${prefix}--ends`]  = {
      paddingTop:    paddings[name],
      paddingBottom: paddings[name],
    }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
