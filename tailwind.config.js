/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "common-modal-open": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "common-modal-close": {
          "100%": {
            transform: "scale(0)",
          },
          "0%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        commonModalOpen: "common-modal-open 0.2s forwards ease-in",
        commonModalClose: "common-modal-close 0.2s forwards ease-out",
      },
    },
  },
  plugins: [],
};
