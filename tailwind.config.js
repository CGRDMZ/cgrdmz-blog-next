const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    scale: {
      '101': '1.01',
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      grayscale: ['group-hover'],
      brightness: ['group-hover'],
      scale: ['group-hover']
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      };
      addUtilities(newUtilities);
    }),
    require('@tailwindcss/line-clamp'),
  ],
};
