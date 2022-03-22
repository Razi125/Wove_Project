module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgtab': "url('/images/bgImage.svg')",
        'bgunsplash': "url('/images/unsplash.svg')",
        'bgImage': "url('/images/backgroundImage.png')",
      }
      
    },
  },
  plugins: [],
}
