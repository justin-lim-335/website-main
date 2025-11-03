/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      colors: {
        grayscale: {
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#d9d9d9",
          300: "#bfbfbf",
          400: "#a6a6a6",
          500: "#8c8c8c",
          600: "#737373",
          700: "#595959",
          800: "#404040",
          900: "#262626"
        },
        rainbow: {
          red: "#FF3B30",
          orange: "#FF9500",
          yellow: "#FFCC00",
          green: "#34C759",
          blue: "#007AFF",
          indigo: "#5856D6",
          violet: "#AF52DE"
        }, 
        lavender: {
          100: "#8f8d90", 
          200: "#bab8bb", 
          300:" #ac8eb8",
          400: "#7c608f",
          500: "#73517e"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
