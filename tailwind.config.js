/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#555A88',
        secondary: '#D85D5D',
        tertiary: '#555A77',
      }
    },
  },
  plugins: [],
}

