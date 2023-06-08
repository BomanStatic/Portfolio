/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily:{
        quicksand: ['Geologica', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

