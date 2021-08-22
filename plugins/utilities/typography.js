const plugin = require('tailwindcss/plugin')

const TEXT_ALIGNMENT = {
  '.text--center': { textAlign: 'center', },
  '.text--left':   { textAlign: 'left',   },
  '.text--right':  { textAlign: 'right',  },
}

const TEXT_TRANSFORM = {
  '.uppercase':  { textTransform: 'uppercase' },
  '.capitalize': { textTransform: 'capitalize' },
}

const TEXT_DECORATION = {
  '.underline': { textDecoration: 'underline' },
}

const FONT_STYLE = {
  '.italic': { fontStyle: 'italic' },
}

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = {
    ...TEXT_ALIGNMENT,
    ...TEXT_TRANSFORM,
    ...TEXT_DECORATION,
    ...FONT_STYLE,
  }

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
