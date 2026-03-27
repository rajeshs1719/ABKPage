import type { Config } from 'tailwindcss'
import { COLORS } from './src/constants/colors'

const kebabColors = Object.fromEntries(
  Object.entries(COLORS).map(([key, value]) => [
    key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    value
  ])
);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: kebabColors,
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config
