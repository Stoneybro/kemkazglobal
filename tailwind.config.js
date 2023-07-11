/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{poppins: ["poppins"]},
      colors:{
        'primary':'#1F7CFF',
        'secondary':'#F5F6FB'
      }
    },
  },
  plugins: [],
}

