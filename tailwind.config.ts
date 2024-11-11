import type {Config} from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-hands': "url('/images/woman-hands.webp')",
        'home-flower': "url('/images/flowers.jpg')",
        'nail-service': "url('/images/nails1.webp')",
        'admin': "url('/images/admin2.webp')",
        'pink-flowers': "url('/images/pink-flowers.jpg')",
        'gallery-flowers': "url('/images/nails-flowers.webp')",
        'cgu': "url('/images/cgu.webp')",
        'profil': "url('/images/profil.webp')",
        'rdv': "url('/images/rdv.webp')",
      },
      colors: {
        'bittersweet': '#FE6A6A',
        'melon': '#FFBCB2',
        'mona-lisa': '#FFA79A',
        'chardon': '#FFF2F0',
        'persian-plum': '#781B1B',
      },
      fontFamily: {
        'laBelleAurore': ['var(--font-la-belle-aurore)'],
        'jimNightshade': ['var(--font-jim_nightshade)'],
        'arima': ['var(--font-arima)'],
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
