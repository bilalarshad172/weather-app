import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-light': '#4B6CB7',
        'primary': '#3B4D61',
        'primary-dark': '#182848',
        'secondary-light': '#6DD5FA',
        'secondary': '#2193b0',
        'secondary-dark': '#1A7F9E',
        'accent-light': '#FFD166',
        'accent': '#F8B500',
        'accent-dark': '#E09F00',
        'dark-light': '#3F4756',
        'dark': '#2A2F38',
        'dark-dark': '#1F2329',
        'light': '#F5F7FA',
        'light-dark': '#E4E7EB',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B4D61 0%, #182848 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #6DD5FA 0%, #2193b0 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFD166 0%, #F8B500 100%)',
      },
    },
  },
  plugins: [daisyui],
};
