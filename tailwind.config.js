/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
    theme: {
      extend: {},
    },
  purge: ['./src/**/*.{svelte,js,ts}'], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}