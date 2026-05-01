// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cki-gray': '#A8A8A8',
        'cki-sage': '#99B8A3',
        'cki-beige': '#F5E9E5',
        'cki-dark': '#333333',
        'cki-dark-charcoal': '#1a1a1a',
      },
    },
  },
  plugins: [],
}