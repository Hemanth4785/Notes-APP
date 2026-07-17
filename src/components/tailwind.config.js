/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,xaxis,jsx,tsx}",
  ],
 // tailwind.config.js
theme: {
  extend: {
    colors: {
      'input-border': '#2a2a2a',
      'input-border-focus': '#6a6a6a',
    }
  }
},
  plugins: [],
}