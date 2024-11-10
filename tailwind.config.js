/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#fefaef',
        dark: '#403f2d',
        light: '#fefaef',
        yellow:'#e8e49a',
        yellowText: '#fffdc4',
        olive: '#dcddcb',
        darkOlive: '#c4c196'
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        fraunceus: ['Fraunceus', 'serif']
      }
    },
  },
  plugins: [],
}

