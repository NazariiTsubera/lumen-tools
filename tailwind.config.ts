import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f8f4",
        ink: "#17201d",
        muted: "#61706b",
        line: "#dce2d6",
        leaf: "#0c7c59",
        moss: "#07533d",
        amber: "#f1b845",
        cobalt: "#3d68d8",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(20, 38, 30, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
