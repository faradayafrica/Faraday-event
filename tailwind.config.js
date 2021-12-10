module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        primary: "#05B851",
      },
      backgroundImage: {
        homeBanner: "url('./images/home-banner.svg')",
      },
    },
  },
  plugins: [],
};
