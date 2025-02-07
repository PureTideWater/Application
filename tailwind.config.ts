import type { Config } from 'tailwindcss'
import tailwindAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'ocean-blue': '#005F73',
        'coastal-teal': '#0A9396',
        'sand-beige': '#E9D8A6',
        'soft-white': '#FAF9F6',
        'slate': '#94A3B8',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#005F73",
        background: "#FAF9F6",
        foreground: "#94A3B8",
        primary: {
          DEFAULT: "#005F73",
          foreground: "#FAF9F6",
        },
        secondary: {
          DEFAULT: "#0A9396",
          foreground: "#FAF9F6",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#E9D8A6",
          foreground: "#005F73",
        },
        accent: {
          DEFAULT: "#E9D8A6",
          foreground: "#005F73",
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
      },
      boxShadow: {
        'premium': '0 4px 20px rgba(0, 95, 115, 0.1)',
      },
      backdropFilter: {
        'glass': 'blur(16px)',
      },
    },
  },
  plugins: [tailwindAnimate],
}

export default config