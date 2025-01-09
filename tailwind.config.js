const { addDynamicIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./templates/**/*.html"],
  theme: {},
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
    require("daisyui"),
  ],
};
