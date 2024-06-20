import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        pink: "#BD0A30",
        topHeadingPrimary: "#010f1c",
        topHeadingSecondary: "#021d35",
      },
      container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
});
