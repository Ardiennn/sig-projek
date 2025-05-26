// ardiennn/sig-projek/sig-projek-844f129b697ffc0a538d26a1c15375276dd9afc9/tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "opensans": ['Open Sans', 'sans-serif'],
        "outfit": ['Outfit', 'sans-serif'],
        "playfair": ['Playfair Display', 'serif'], // Font baru untuk judul
        "lora": ['Lora', 'serif'],               // Font baru untuk teks
      },
      colors: {
        'darkBg': '#3A2E2C',    // Cokelat tua hangat
        'lightBg': '#F5F5DC',   // Beige/Krem
        'accent': '#8B4513',    // SaddleBrown (Cokelat sedang)
        'accentLight': '#D2B48C', // Tan (Cokelat muda)
      },
      backgroundImage: {
        // Gradien baru dengan nuansa kopi
        'themeGradient': "linear-gradient(45deg, #8B4513 0%, #D2B48C 50%, #A0522D 100%)",
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      keyframes: {
        loaderLetter: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          }
        },
      },
      animation: {
        loader: 'loaderLetter 1.0s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;