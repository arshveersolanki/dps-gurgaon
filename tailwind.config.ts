import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "9999px",
    },
    extend: {
      colors: {
        // Brand — DPS Gurgaon forest green (derived from real-site #155b2e).
        forest: {
          50: "#ECF6EF",
          100: "#D0E8D8",
          200: "#A6CDB4",
          300: "#6FB089",
          400: "#2F8B5A",
          500: "#1B7340",
          600: "#155b2e",
          700: "#114826",
          800: "#0B331B",
          900: "#07200F",
          DEFAULT: "#155b2e",
        },
        // Multi-accent system used for the "In Numbers" ring counters and
        // editorial accents. Hues borrowed from the real DPS site's palette.
        teal: { light: "#3FC093", DEFAULT: "#15a876", dark: "#0F7B57" },
        rust: { light: "#D75A33", DEFAULT: "#a8340d", dark: "#7F2008" },
        ochre: { light: "#D8B25A", DEFAULT: "#C19A4B", dark: "#8E6D2A" },
        slate: { light: "#5C7387", DEFAULT: "#2c4a5e", dark: "#1B2F3D" },
        ink: "#1A1A1A",
        paper: "#FFFFFF",
        cream: "#F4F1EA",
        mist: "#6B7280",
        // Semantic tokens (theme-aware via CSS vars; channels for /alpha)
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        deva: ["var(--font-deva)", "var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        mega: "-0.035em",
        tight2: "-0.018em",
        label: "0.22em",
      },
      maxWidth: {
        editorial: "70ch",
        shell: "1480px",
      },
      transitionTimingFunction: {
        boutique: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        tickerScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        ticker: "tickerScroll 48s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
