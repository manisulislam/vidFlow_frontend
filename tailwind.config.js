/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay': {
          animationDelay: '0.2s',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

