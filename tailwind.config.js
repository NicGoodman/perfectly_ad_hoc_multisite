module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'tag-light-grey': '#F2F2F2',
        'tag-light-orange': '#FCB76F',
        'tag-dark-orange': '#F47521',
        'tag-light-red': '#E25A5F',
        'tag-red': '#FF1A00',
        'tag-dark-red': '#BF3026',
        'tag-yellow': '#FBEE3C',
        'tag-teal': '#4FBBCD',
        'tag-dark-teal': '#147F91',
        'tag-gold': '#FFBC00',
        'imp-light-grey': '#f2f2f2',
        'imp-aqua': '#b9dfcf',
        'imp-gold': '#fab40f',
        'imp-red': '#e11e14',
        'imp-dark-gold': '#f99410',
        'imp-dark-red': '#bf3026',
        'imp-dark-aqua': '#0d6c78',
      },
      maxWidth: {
        'screen-xl': '1152px',
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '85': '0.85',
      }
    },
    fontFamily: {
      'proxima-nova': ['proxima-nova', 'serif'],
      'quicksand': ['Quicksand', 'serif'],
      'luchador': ['luchadorregular', 'serif'],
      'minion-pro': ['minion-pro', 'serif'],
    }
  },
  variants: {
    zIndex: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}