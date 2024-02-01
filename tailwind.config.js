module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          400: "#b8b8b8",
          500: "#9c9c9c",
          600: "#6d6d6d",
          900: "#202020",
          "900_01": "#272727",
          "400_01": "#bcbcbc",
          "400_02": "#c4c4c4",
          "400_03": "#c1c1c1",
        },
        blue_gray: {
          50: "#ebf2f7",
          "900_14": "#18274b14",
          "900_1e": "#18274b1e",
          "900_23": "#18274b23",
        },
        red: { 600: "#e23d3d" },
        teal: { 300: "#5bc7a0", A100: "#a2ffd2" },
        black: { 900: "#000000", "900_66": "#00000066" },
        deep_orange: { 200: "#ffafaf" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "inset 0px 8px  28px -6px #18274b1e",
        bs: "0px 8px  24px -4px #18274b14",
        bs2: "0px 18px  88px -4px #18274b23",
      },
      fontFamily: { roboto: "Roboto" },
      textShadow: { ts: "0px 18px  88px #18274b23" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
