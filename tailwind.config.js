/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: "#abaaf3",
        darkPurple: "#3a2564",
        btnBg: "#5636be",
        footerBg: "#322460",
        socialBg: "#abaaf3",
        textColor: "#805bf0",
        section3Bg: "#4244e6",
        cartBg: "#f9766a",
        iconColor: "#24a5f1",
        slideColor: "#33a2a4",
        sssBtn: "#1a9d99",
        sssBtnHover: "#157e7a",
        sssBg: "#edf8f4",
        sssTitle: "#4a4c79",
        onlineBg: "#ebfbf2",
        nameColor: "#585557",
        speBtnColor: "#34a0a4",
      },
    },
  },
  plugins: [],
};
