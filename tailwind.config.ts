import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        thrashtalk: ["var(--font-thrashtalk)"],
        roboto_slab: ["var(--font-roboto)"],
      },
      colors: {
        csblue: {
          default: "#1E67FEE5",
          light: "#4080FF",
          test: "#1E67FECE",
        },
        csyellow: "#FFB800",
      },
    },
  },
  plugins: [],
};
export default config;
