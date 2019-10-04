module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    extend: {
    }
  },
  variants: {
    borderColor: ['focus', 'active'],
    margin: ['last-child', 'responsive']
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('last-child', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`last-child${separator}${className}`)}:last-child`
        })
      })
    }
  ]
}
