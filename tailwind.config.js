/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#A08961',
        'custom-red': '#FF6F55',
      },
      fontFamily: {
        'noto-sans-georgian': ['Noto Sans Georgian', 'serif'],
        'circe': ['Circe', 'sans-serif'],
        'encode-sans': ['Encode Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}