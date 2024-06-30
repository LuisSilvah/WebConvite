/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        convite_desktop: "URL('/bg_desktop.png')",
        convite_mobile: "URL('/bg_mobile.png')",
        desktop_clean: "URL('/bg_desktop_clean.png')",
        mobile_clean: "URL('/bg_mobile_clean.png')",
        // convite: "URL('/convite.png')"
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

