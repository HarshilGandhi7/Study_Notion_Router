/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'richblack': {
          25: '#E0E0E0',
          800: '#080808',
          900: '#010B13', // or whatever shade you prefer
        },
      },
    },
  },
  plugins: [],
}