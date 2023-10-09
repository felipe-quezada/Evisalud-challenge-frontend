/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          primary: '#1C1C24',
          secondary: '#13131A'
        },
        white: {
          DEFAULT: '#F0F0F0'
        },
        gray: {
          DEFAULT: '#515166'
        },
        'sky-primary': '#0193C1',
        'gradiant-blue': '#018FCD'
      },
      backgroundImage: {
        'bg-mobile': "url('@/assets/bg-mobile.png')",
        'bg-desktop': "url('@/assets/bg-desktop.png')"
      },
      screen: {
        sm: '500px'
      }
    }
  },
  plugins: []
}
