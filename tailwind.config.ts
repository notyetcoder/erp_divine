import type { Config } from "tailwindcss";

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: v("page"),
        card: v("card"),
        surface: v("surface"),
        line: v("line"),
        ink: v("ink"),
        muted: v("muted"),
        link: v("link"),
        deep: "rgb(34 98 171 / <alpha-value>)",
        brand: {
          50: v("b50"),
          100: v("b100"),
          200: v("b200"),
          300: v("b300"),
          500: v("b500"),
          600: "rgb(43 119 204 / <alpha-value>)",
          700: v("b700"),
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Bricolage Grotesque Variable", "Plus Jakarta Sans Variable", "system-ui", "sans-serif"],
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
