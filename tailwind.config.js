/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'enrique': ['Enrique', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    themes: ["wireframe"],
  },
}
