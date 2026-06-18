import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0A0A0B",
          50: "#1A1A1D",
          100: "#141416",
          200: "#111113",
          300: "#0D0D0F",
          400: "#0A0A0B",
          500: "#070708",
        },
        emerald: {
          DEFAULT: "#047857",
          light: "#059669",
          dark: "#065F46",
          muted: "#064E3B",
        },
        champagne: {
          DEFAULT: "#C9A962",
          light: "#D4BC7A",
          dark: "#A88B4A",
          muted: "#8B7340",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(4, 120, 87, 0.18), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201, 169, 98, 0.06), transparent)",
        "card-gradient":
          "linear-gradient(135deg, rgba(4, 120, 87, 0.08) 0%, rgba(10, 10, 11, 0) 50%, rgba(201, 169, 98, 0.04) 100%)",
      },
      boxShadow: {
        premium:
          "0 0 0 1px rgba(201, 169, 98, 0.12), 0 8px 32px rgba(0, 0, 0, 0.48)",
        "premium-light":
          "0 0 0 1px rgba(4, 120, 87, 0.08), 0 4px 24px rgba(0, 0, 0, 0.06)",
        glow: "0 0 40px rgba(4, 120, 87, 0.15)",
        "glow-gold": "0 0 30px rgba(201, 169, 98, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;