// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", // Ensure this points to all necessary directories
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1F2937',
          800: '#2D3748',
          700: '#4A5568',
          600: '#718096',
        },
        green: {
          400: '#48BB78',
        },
        orange: {
          400: '#ED8936',
        },
        purple: {
          500: '#805AD5',
        },
        red: {
          400: '#F56565',
        },
      },
    },
  },
  plugins: [],
};
