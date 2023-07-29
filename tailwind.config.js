/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        box: "0 0 6px rgba(155,155,155, 0.25)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
