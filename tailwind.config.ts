import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1440px",
      },
      backgroundImage: {
        "footer-img": "url('/assets/footer.jpg')",
      },
      boxShadow: {
        "5xl": "inset 0 0 0 1000px #00000099",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
