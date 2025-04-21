
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        adventure: '#1A5F7A',
        sunset: '#FFA41B',
        forest: '#4E9F3D',
        dark: '#333333',
        light: '#F5F5F5',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      boxShadow: {
        card: "0 4px 16px 0 rgba(26,95,122,0.07), 0 1.5px 8px 0 rgba(34,54,90,0.08)"
      },
      borderRadius: {
        xl: '1.25rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(.38,1.15,.7,1.12)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
