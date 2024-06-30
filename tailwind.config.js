/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        convite_desktop: "URL('./src/assets/bg_convite.png')",
        convite_mobile: "URL('./src/assets/bg_mobile.png')",
        convite: "URL('./src/assets/convite.png')"
      },
      backgroundSize: {
        '50%': '50%',
        '100%': '100% 50%',
        '100%': '100% 100%',
      },
      backgroundPosition: {
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
        'center': 'center',
      },
    }
  },
  plugins: [],
}

