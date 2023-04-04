/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#65d3d3",
          secondary: "#1d1e27",
          accent: "#61ba18",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

