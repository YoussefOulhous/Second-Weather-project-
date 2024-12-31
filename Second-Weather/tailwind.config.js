/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Roboto', 'sans-serif'],
    },
    screens: {
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px',
      'xl':	'1280px',
    },
  },
  plugins: [],
  darkMode:"class"
  
}

