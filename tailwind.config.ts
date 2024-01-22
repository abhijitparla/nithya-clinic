import type { Config } from 'tailwindcss'
import { DefaultColors } from 'tailwindcss/types/generated/colors'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'landing': '#ffffff',
        'poppy': '#f46e58',
        'greyiee': '#749494',
      },
    },
  },
  plugins: [],
}
export default config
