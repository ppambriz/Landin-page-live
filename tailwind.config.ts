import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          800: "hsl(219, 30%, 18%)",
          850: "hsl(217, 28%, 15%)",
          900: "hsl(218, 28%, 13%)",
          950: "hsl(216, 53%, 9%)",
        },
        teal: {
          200: "hsl(176, 68%, 64%)",
        },
        cyan: {
          500: "hsl(198, 60%, 50%)",
        },
        red: {
          500: "hsl(0, 100%, 63%)",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;



