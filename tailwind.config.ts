import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F3F8FE",
          100: "#E3EEFB",
          200: "#C8DDF6",
          300: "#9DC3EE",
          500: "#4A90DF",
          600: "#2B77CC",
          700: "#2262AB",
        },
        ink: "#22304A",
        muted: "#5F6E83",
        surface: "#F6F8FB",
        line: "#E4E9F0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(34, 48, 74, 0.04), 0 4px 16px rgba(34, 48, 74, 0.04)",
        lift: "0 2px 4px rgba(34, 48, 74, 0.04), 0 14px 36px rgba(34, 48, 74, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
