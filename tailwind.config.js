/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        agiVoilet: "#8b69db",
      },
      animation: {
        text: "text 5s ease infinite",
        moveleft: "moveleft 1s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        moveleft:{
        "0%":{
          transform:'translateX(0%)'
        },
        "100%":{
          transform:'translateX(-50%)'
        }
      }

      },
    },
  },
  plugins: [],
};
