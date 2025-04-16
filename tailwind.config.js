module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        codedex: "0 4px 0 0 rgb(0 0 0 / 20%)",
        "codedex-hover": "0 8px 0 0 rgb(0 0 0 / 20%)",
      },
    },
    colors: {
      white: "#FFFFFF",
      "off-white": "#F8F9FA",
      "light-gray": "#E9ECEF",
      gray: "#CED4DA",
      "dark-gray": "#6C757D",
      black: "#212529",

      // Primary colors - vibrant palette
      primary: "#FF5A5F", // Primary red accent
      secondary: "#3C91E6", // Bright blue
      success: "#56E39F", // Mint green
      warning: "#FFDE59", // Bright yellow
      purple: "#9D4EDD", // Vibrant purple
      pink: "#FF99C8", // Light pink
      teal: "#2EC4B6", // Teal

      // Background colors
      "bg-dark": "#1A1A2E", // Dark blue background
      "bg-medium": "#16213E", // Medium blue background
      "bg-light": "#0F3460", // Lighter blue background
      "bg-accent": "#E94560", // Accent background

      // Keep original colors for compatibility
      "dark-blue": "#206F8D",
      orange: "#FE5929",
      blue: "#47ACBE",
      yellow: "#FFDE59",
      brown: "#3a2c29",
      grey: "#6C757D",
      "dark-grey": "#16213E",
      red: "#FF5A5F",
      cyan: "#2EC4B6",
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ["Inter", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
      pixel: ["VT323", "monospace"], // Keep pixel font for thematic elements
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      full: "9999px",
    },
  },

  plugins: [require("tailwindcss-primeui"), require("tailwindcss/colors")],
};
