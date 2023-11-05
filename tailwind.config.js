/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "rgba(61, 197, 255, 1)",
      },
      boxShadow: {
        "inner-xl": "inset 0 4px 8px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
