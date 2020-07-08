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
      },
      maxWidth: {
        'screen-xl': '1152px',
      }
    },
    fontFamily: {
      'proxima-nova': ['proxima-nova', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
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