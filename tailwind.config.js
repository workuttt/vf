/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lg-red': '#A50034',
        'lg-gray': '#666666',
        'lg-light-gray': '#F0F0F0',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
