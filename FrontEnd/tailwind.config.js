/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    backgroundImage: {
      'Home-img': "url('/FrontEnd/src/assets/images/shunya-koide-1emWndlDHs0-unsplash.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}

