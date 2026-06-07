import type { Config } from "tailwindcss";

/**
 * AYMO Horizon — Design System
 *
 * Palette: warm white surfaces, near-black ink, a single restrained navy.
 * Typography: Newsreader (serif display) + Instrument Sans (text).
 * Spacing: generous, editorial rhythm built on an 8px base.
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
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.375rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
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
