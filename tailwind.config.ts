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
        'gallery-flowers': "url('/images/nails-flowers.webp')",
        'cgu': "url('/images/cgu.webp')",
      },
      fontFamily: {
        laBelleAurore: ['var(--font-la-belle-aurore)'],
        jimNightshade: ['var(--font-jim_nightshade)'],
        arima: ['var(--font-arima)'],
      },
      colors: {
        'bittersweet': '#FE6A6A',
        'melon': '#FFBCB2',
        'mona-lisa':'#FFA79A',
        'chardon': '#FFF2F0',
        'persian-plum': '#781b1b',
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0, 1, 0, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
