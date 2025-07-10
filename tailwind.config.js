module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Purple-500': 'hsl(259, 100%, 65%)',
        'Red-400': 'hsl(0, 100%, 67%)',
        'Grey-100': 'hsl(0, 0%, 94%)',
        'Grey-200': 'hsl(0, 0%, 86%)',
        'Grey-500': 'hsl(0, 1%, 44%)',
        'Black': 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        'family': ['Poppins', 'sans-serif'],
      },
      fontStretch: {
        'expanded': 'expanded',
        'extra-expanded': 'extra-expanded',
      }
    },
  },
  plugins: [],
}