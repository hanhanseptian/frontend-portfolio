/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    extend: {
      keyframes: {
        "testing-animasi": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "testing-animasi": "testing-animasi 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/animate")],
};
