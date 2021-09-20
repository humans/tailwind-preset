const plugin = require('tailwindcss/plugin')

const DISPLAY = {
  '.block':        { display: 'block ' },
  '.inline-block': { display: 'inline-block' },
  '.inline':       { display: 'inline' },
  '.hidden':       { display: 'none' },
}

const POSITION = {
  '.relative': { position: 'relative' },
}

const OVERFLOW = {
  '.overflow--auto':     { overflow:  'auto' },
  '.overflow--hidden':   { overflow:  'hidden' },
  '.overflow-x--scroll': { overflowX: 'scroll' },
}

const POINTER_EVENTS = {
  '.pointer-events--none': { pointerEvents: 'none' },
}

const CURSOR = {
  '.cursor--pointer': { cursor: 'pointer' },
}

const WHITE_SPACE = {
  '.white-space--no-wrap': { whiteSpace: 'nowrap' },
}

const RESIZE = {
  '.resize--none': { resize: 'none' },
}

module.exports = plugin(function ({ addUtilities, theme }) {
  addUtilities({
    ...DISPLAY,
  }, {
    variants: ['sm', 'md', 'lg', 'xl', 'no-js'],
  })

  addUtilities({
    ...POSITION,
    ...OVERFLOW,
    ...POINTER_EVENTS,
    ...CURSOR,
    ...WHITE_SPACE,
    ...RESIZE,

    '.for-screen-readers': {
      position:    'absolute',
      width:       '1px',
      height:      '1px',
      padding:     0,
      margin:      '-1px',
      overflow:    'hidden',
      clip:        'rect(0, 0, 0, 0)',
      whiteSpace:  'nowrap',
      borderWidth: 0,
    },

    '.truncate': {
      maxWidth:     '100%',
      whiteSpace:   'nowrap',
      overflow:     'hidden',
      textOverflow: 'ellipsis',
    },
  }, {
    variants: ['sm', 'md', 'lg', 'xl'],
  })
})
