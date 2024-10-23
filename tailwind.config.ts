import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-hands': "url('/images/woman-hands.webp')",
        'home-flower': "url('/images/flowers.jpg')",
        'nails1': "url('/images/nails1.webp')",
        'admin': "url('/images/admin2.webp')",
        'pink-flowers': "url('/images/pink-flowers.jpg')",
      },
      fontFamily: {
        laBelleAurore: ['var(--font-la-belle-aurore)'],
        jimNightshade: ['var(--font-jim_nightshade)'],
        arima: ['var(--font-arima)'],
      },
    },
  },
  plugins: [],
};
export default config;
