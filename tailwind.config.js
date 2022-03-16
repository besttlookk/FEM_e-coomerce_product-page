module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: "['Kumbh Sans', 'sans-serif']",
      },

      colors: {
        primary: "hsl(26, 100%, 55%)",
        "primary-light": "hsl(25, 100%, 94%)",
        "secondary-dark": " hsl(220, 13%, 13%)",
        "secondary-gray": "hsl(219, 9%, 45%)",
        "secondary-light": "hsl(220, 14%, 75%)",
        overlay: "rgba(0,0,0,0.8)",
        bg: "hsl(223, 64%, 98%)",
        "white-overlay": "rgba(255,255,255,.5)",
      },

      spacing: {
        "cart-mob": "calc(100% + 10px)",
        "cart-desktop": "calc(100% - 20px)",
        thumb: "calc(100% + 20px)",
        "thumb-light": "calc(100% + 30px)",
        lightbox: "32rem",
      },
    },
  },
  plugins: [],
};
