/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/*.js',
    './assets/js/*.min.js'
  ],
  safelist: [
    'bg-blue-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

