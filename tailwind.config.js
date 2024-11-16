/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dark: "#191a23",
        gray: "#292a32",
        green: "#b9ff66",
        black: "#000",
        grey: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        h4: "'Space Grotesk'",
      },
      borderRadius: {
        "26xl": "45px",
        sm: "14px",
        "6xs": "7px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "21xl": "40px",
      "11xl": "30px",
      "5xl": "24px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
