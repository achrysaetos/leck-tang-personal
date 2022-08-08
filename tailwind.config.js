module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://www.color-name.com/dark-red.color
        'important': '#A23333',
        'selected': '#E8CCCC',
      }
    },
  },
  plugins: [],
}
