/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F17",       // primary background
        ink2: "#111827",      // secondary/panel background
        gold: {
          DEFAULT: "#C9A35A",
          bright: "#F0D28A",
          dim: "#8A7239",
        },
        teal: {
          DEFAULT: "#2F8F8A",
          bright: "#4FB8B1",
        },
        parchment: "#F3EFE4", // primary text on dark
        mist: "#9AA5B1",      // muted text
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "slow-spin": "slow-spin 70s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
