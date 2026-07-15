import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f8fafc",
        muted: "#a9b4c4",
        line: "rgba(148, 163, 184, 0.22)",
        paper: "#0b1018",
        accent: "#ffffff",
        moss: "#4f6f52"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.38)"
      }
    }
  },
  plugins: []
};

export default config;
