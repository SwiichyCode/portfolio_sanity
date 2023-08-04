/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#151515",
          green: "#4EE1A0",
          grey: "#D9D9D9",
          "grey-600": "#242424",
          white: "#FFFFFF",
          red: "#FF6F5B",
        },
      },

      gap: {
        section: "80px",
      },

      maxWidth: {
        section: "1200px",
      },
    },
  },
  plugins: [],
};
