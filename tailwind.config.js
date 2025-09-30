/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/task-manager-fe/src/**/*.{html,ts}",
    "./libs/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}

