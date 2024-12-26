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
          primary: "#1A2751",
          secondary: "#018FD7",
          neutral: "#444",
          "neutral-content": "#757872",
          "base-100": "#fff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
