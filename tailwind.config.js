/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        offwhite: "#F7F8FA",
        ink: "#1F2937",
        blue: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        line: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-public-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
