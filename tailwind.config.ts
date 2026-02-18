import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Neue Haas Grotesk Display", "PP Mori", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
      },
      colors: {
        border: "rgba(255,255,255,0.08)",
        input: "rgba(255,255,255,0.08)",
        ring: "#c8ff00",
        background: "#080808",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#0f0f0f",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#666666",
          foreground: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#c8ff00",
          foreground: "#000000",
          glow: "#c8ff00",
          secondary: "#ff3c00",
        },
        card: {
          DEFAULT: "#0f0f0f",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "2px",
        md: "2px",
        sm: "2px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "marquee-infinite": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        "marquee-infinite": "marquee-infinite 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
