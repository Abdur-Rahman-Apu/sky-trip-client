/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deepViolet': '#40407a',
        'background': '#F1F4F4'
      }
    },
  },
  plugins: [require("daisyui")],
}
