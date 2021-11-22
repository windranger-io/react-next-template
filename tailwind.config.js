/* eslint-disable  @typescript-eslint/no-var-requires */ module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#2a2b36',
          850: '#1f2128',
          950: '#191b1f',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
