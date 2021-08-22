const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addVariant, theme, e, postcss }) {
  const sizes = theme('screens')

  for (const screen in sizes) {
    const size = sizes[screen]

    addVariant(screen, ({ container }) => {
      const mediaRule =  postcss.atRule({ name: 'media', params: `(min-width: ${size})` })
      mediaRule.append(container.nodes)
      container.append(mediaRule)

      mediaRule.walkRules(rule => rule.selector = `.${e(`${rule.selector.slice(1)}@${screen}`)}`)
    })
  }
})
