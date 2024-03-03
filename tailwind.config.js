/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '378px',
      'md': '480px',
      'lg': '1024px',
      '2xl': '1440px'
    },
    fontFamily: {
      'sans': ['Space Grotesk']
    },
    extend: {
      colors: {
        'border-left': 'hsl(249, 99%, 64%)',
        'border-right': 'hsl(278, 94%, 30%)',
        'error': 'hsl(0, 100%, 66%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)'
      },
      backgroundImage: {
        'card-front': "url('assets/images/bg-card-front.png')",
        'card-back': "url('assets/images/bg-card-back.png')",
        'desktop': "url('assets/images/bg-main-desktop.png')",
        'mobile': "url('assets/images/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
