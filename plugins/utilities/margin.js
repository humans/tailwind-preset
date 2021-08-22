const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, theme }) {
  let utilities = {}

  const margins = theme('margin')

  for (const name in margins)  {
    const prefix = (name === 'DEFAULT') ? 'push' : `push-${name}`

    utilities[`.${prefix}`]         = { margin:       margins[name] }
    utilities[`.${prefix}--left`]   = { marginLeft:   margins[name] }
    utilities[`.${prefix}--right`]  = { marginRight:  margins[name] }
    utilities[`.${prefix}--top`]    = { marginTop:    margins[name] }
    utilities[`.${prefix}--bottom`] = { marginBottom: margins[name] }

    utilities[`.${prefix}--sides`]  = {
      marginLeft:  margins[name],
      marginRight: margins[name],
    }

    utilities[`.${prefix}--ends`]  = {
      marginTop:    margins[name],
      marginBottom: margins[name],
    }
  }

  for (const name in margins)  {
    const prefix = (name === 'DEFAULT') ? 'pull' : `pull-${name}`

    utilities[`.${prefix}`]         = { margin:       `-${margins[name]}` }
    utilities[`.${prefix}--left`]   = { marginLeft:   `-${margins[name]}` }
    utilities[`.${prefix}--right`]  = { marginRight:  `-${margins[name]}` }
    utilities[`.${prefix}--top`]    = { marginTop:    `-${margins[name]}` }
    utilities[`.${prefix}--bottom`] = { marginBottom: `-${margins[name]}` }

    utilities[`.${prefix}--sides`]  = {
      marginLeft:  `-${margins[name]}`,
      marginRight: `-${margins[name]}`,
    }

    utilities[`.${prefix}--ends`]  = {
      marginTop:    `-${margins[name]}`,
      marginBottom: `-${margins[name]}`,
    }
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
