import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { 
      center: true, 
      padding: "1rem", 
      screens: { "2xl": "1200px" } 
    },
    extend: {
      borderRadius: {
        lg: "12px",
        xl: "16px", 
        md: ".75rem",
        sm: ".1875rem",
        pill: "999px"
      },
      colors: {
        // Brand colors from Step 0
        ash: "var(--ash)",           // Ash Stone #D8D5CC
        olive: "var(--olive)",       // Olive Slate #75776A  
        graphite: "var(--graphite)", // Deep Graphite #1E1E1C
        pine: "var(--pine)",         // Optional deep olive #4f6e47
        
        // System colors
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "var(--border)",
        card: "var(--card)",
        muted: "var(--muted)",
        
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "serif"],
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: { 
        card: "0 8px 24px rgba(30,30,28,0.08)" 
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;