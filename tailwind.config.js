module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#005c64',
        secondary: '#5ccccb',
        tertiary: '#e6f4f1',
        quaternary: '#fcfcd4',
        neighborpalete: {
          'neighbor-primary': '#5ccccb',
          'neighbor-secondary': '#00b98c',
          'neighbor-tertiary': '#2b7963',
          'neighbor-quaternary': '#2d423b',
        },
        friendpalette: {
          'friend-primary': '#5ccccb',
          'friend-secondary': '#005354',
          'friend-tertiary': '#a93800',
          'friend-quaternary': '#ff874a',
        },
      },
    },
    fontFamilys: {
      sans: ['Inter var', 'sans-serif'],
      serif: ['Inter var', 'serif'],
      mono: ['Inter var', 'monospace'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
