/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          neonGreen: '#1DA1F4',
        },
      },
    },
    plugins: [],
  }