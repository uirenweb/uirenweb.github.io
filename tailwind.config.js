/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PtSerif: ['PT Serif', "serif"],
        Preahvihear: ["Preahvihear", "sans-serif"],
        PublicSans: ["Public Sans", "sans-serif"],
      },
      colors: {
        "darkGreen": "#136C50",
        "darkBlue": "#233065",
        "blue1": "#85A0FE",
        "blue2": "#2A4ECA",
        "lightBlue": "#F0F7FF",
        "green1": "#6A994E",
        "green2": "#20B486",
        "green3": "#7ECE89",
        "green4": "#03440C",
        "green5": "#6A994E",
        "purple1": "#233065",
        "purple2": "#6D3AE9",
        "lightPurple": "#F8F4FF",
        "orange1": "#FC7A1E",
        "orange2": "#EE455A",
        "almostWhite": "#FFFAF5",
        "lightPink": "#FFEEF0",
        "lightPink2": "#FFE9EB",
        "gray": "#E7E9EB",
      },
      width: {
        "84": '84px',
      },
      height: {
        "84": '84px',
      }
    },
  },
  plugins: [],
}

