import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-hands': "url('/images/woman-hands.webp')",
        'home-flower': "url('/images/flowers.jpg')"
      },
      fontFamily:{
        'laBelleAurore': ['var(--font-la-belle-aurore)'],
        'jimNightshade': ['var(--font-jim_nightshade)']
      }
    },
  },
  plugins: [],
};
export default config;
