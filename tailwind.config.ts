import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF5FE",
          100: "#DDEBFD",
          200: "#BCD7FA",
          300: "#8FBBF5",
          500: "#2A8CEE",
          600: "#1B6FCC",
          700: "#1760B3",
        },
        ink: "#1C2B45",
        muted: "#58687F",
        surface: "#F5F7FA",
        line: "#E3E8EF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28, 43, 69, 0.04), 0 4px 16px rgba(28, 43, 69, 0.05)",
        lift: "0 2px 4px rgba(28, 43, 69, 0.05), 0 12px 32px rgba(28, 43, 69, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
