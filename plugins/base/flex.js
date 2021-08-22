const plugin = require('tailwindcss/plugin')

const FLEX_DIRECTION = {
  '.flex--column': { flexDirection: 'column' },
  '.flex--row':    { flexDirection: 'row' },
}

const FLEX_WRAP = {
  '.flex--wrap':         { flexWrap: 'wrap' },
  '.flex--wrap-reverse': { flexWrap: 'wrap-reverse' },
  '.flex--nowrap':       { flexWrap: 'nowrap' },
}

const JUSTIFY_CONTENT = {
  '.justify-content--flex-start':    { justifyContent: 'flex-start' },
  '.justify-content--flex-end':      { justifyContent: 'flex-end' },
  '.justify-content--center':        { justifyContent: 'center' },
  '.justify-content--space-between': { justifyContent: 'space-between' },
  '.justify-content--space-around':  { justifyContent: 'space-around' },
  '.justify-content--space-evenly':  { justifyContent: 'space-evenly' },
}

const ALIGN_ITEMS = {
  '.align-items--center':     { alignItems: 'center' },
  '.align-items--flex-start': { alignItems: 'flex-start' },
  '.align-items--flex-end':   { alignItems: 'flex-end' },
  '.align-items--baseline':   { alignItems: 'baseline' },
  '.align-items--stretch':    { alignItems: 'stretch' },
}

const ALIGN_SELF = {
  '.align-self--auto':       { alignSelf: 'auto' },
  '.align-self--center':     { alignSelf: 'center' },
  '.align-self--flex-start': { alignSelf: 'flex-start' },
  '.align-self--flex-end':   { alignSelf: 'flex-end' },
  '.align-self--stretch':    { alignSelf: 'stretch' },
}

const FLEX_SHRINK = {
  '.flex-shrink--none': { flexShrink: '0' },
}

module.exports = plugin(function ({ addUtilities, theme }) {
  const utilities = {
    ...FLEX_DIRECTION,
    ...FLEX_WRAP,
    ...JUSTIFY_CONTENT,
    ...ALIGN_ITEMS,
    ...ALIGN_SELF,
    ...FLEX_SHRINK,

  }

  addUtilities({
    '.flex': { display: 'flex' },
  }, {
    variants: ['sm', 'md', 'lg', 'xl', 'no-js'],
  })

  addUtilities(utilities, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})