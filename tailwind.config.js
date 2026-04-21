// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-cream': '#fdf6e3',    // your warm cream hex
        'dark-brown': '#4a2c2a',    // your dark brown hex
        'warm-tan': '#d2b48c',      // your warm tan hex
        'accent-wood': '#8b5a2b',   // <-- add your accent wood color
      },
    },
  },
  plugins: [],
}