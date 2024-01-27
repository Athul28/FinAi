/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundBlendMode: theme => ({
        'backdrop-blur': 'blur(2px)',
      })
    },
    fontFamily:{
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [],
}

