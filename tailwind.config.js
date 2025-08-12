/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    './app/**/*.{js,tsx,ts,jsx}',
    './components/**/*.{js,tsx,ts,jsx}',
    './hooks/**/*.{js,tsx,ts,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
