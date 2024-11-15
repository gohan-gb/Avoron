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
        darkOlive: '#c4c196',
        yellow1:'#fffcc5',
        yellow2:'#e8e49a'
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
        fraunceus: ['Fraunceus', 'serif']
      },
      fontSize: {
        'custom-xl': '128px', // Custom font size 
        ' custom-lg': '100px',
      },
      lineHeight: {
        'extra-loose': '128px',   // Custom line height 
      },
    },
  },
  plugins: [],
}

