import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // Brand — DPS Society navy
        navy: {
          50: "#EFF2F8",
          100: "#D7DEEC",
          200: "#A8B6D4",
          300: "#6E83B5",
          400: "#3D5396",
          500: "#26397A",
          600: "#1B2B5E",
          700: "#15244B",
          800: "#101A38",
          900: "#0B1226",
          DEFAULT: "#1B2B5E",
        },
        gold: {
          light: "#D8B25A",
          DEFAULT: "#C4952B",
          dark: "#A67C22",
        },
        ink: "#1A1A1A",
        paper: "#F8F7F4",
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
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
