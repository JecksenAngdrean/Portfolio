/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index//*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textprimary: "#9d9a93",
        textsecondary: "#c9c5c6",
        bgprimary: "#b4b1aa",
        bgsecondary: "#4c4942",
        bgthird: "#bdbab5",
      },
    },
  },
  variants: {
    // ...
    margin: ["responsive"],
    margin: ["responsive", "hover", "focus"],
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "100%px",
          },
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "100%",
          },
          "@screen xl": {
            maxWidth: "100%",
          },
        },
      });
    },
  ],
};
