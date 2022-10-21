/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {  
      colors: {
        'Primary-Bright-Blue': 'hsl(220, 98%, 61%)',
        'gradient-1': 'hsl(192, 100%, 67%)',
        'gradient-2': 'hsl(280, 87%, 65%)'
      }    
    },
  },
  plugins: [],
}
