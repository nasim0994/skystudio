module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      {
        light: {
          primary: "#d6b33f",
          secondary: "#11716A",
          neutral: "#444",
          "neutral-content": "#757872",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
