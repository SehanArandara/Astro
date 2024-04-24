/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg': 'rgb(15 23 42 / var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
}

