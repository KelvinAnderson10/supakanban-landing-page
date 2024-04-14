/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '4px 4px black',
        'md': '5px 5px black',
      }
    },
  },
  plugins: [],
}

