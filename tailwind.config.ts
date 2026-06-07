import type { Config } from "tailwindcss";

/**
 * AYMO Horizon — Design System
 *
 * Palette: warm white surfaces, near-black ink, a single restrained navy.
 * Typography: Archivo (grotesque, display + body) with Spline Sans Mono
 * for labels, indices, and tabular data. Tight tracking at display sizes.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FCFCFA",
        ink: {
          DEFAULT: "#15171A",
          soft: "#3D4046",
          mute: "#6E7178",
        },
        navy: {
          DEFAULT: "#1C2B45",
          deep: "#131F33",
          wash: "#EEF1F5",
        },
        line: "#E4E4DF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["var(--font-display)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.625rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.125rem, 4.25vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.625rem, 2.75vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        site: "76rem",
        prose: "42rem",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
