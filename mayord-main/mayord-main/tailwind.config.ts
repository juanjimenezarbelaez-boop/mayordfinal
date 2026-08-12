import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5E00",
          "orange-hover": "#E05300",
          dark: "#131313",
          surface: "#1B1C1C",
          "surface-light": "#2A2A2A",
          text: "#E4E2E1",
          "text-muted": "#929393",
        },
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-lexend)", "ui-sans-serif", "system-ui", "sans-serif"],
        label: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
