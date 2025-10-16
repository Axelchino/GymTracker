/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#3b82f6',      // Vibrant blue for CTAs
          purple: '#8b5cf6',    // Secondary accent
          green: '#10b981',     // Success, PRs
          yellow: '#fbbf24',    // Warnings, highlights
          red: '#ef4444',       // Errors, delete
        },
        gray: {
          50: '#F8F9FA',        // Lightest (rare use)
          100: '#E9ECEF',       // Very light
          200: '#DEE2E6',       // Light
          300: '#CED4DA',       // Light-medium
          400: '#ADB5BD',       // Medium (muted text)
          500: '#6C757D',       // Medium-dark
          600: '#495057',       // Dark
          700: '#343A40',       // Very dark (cards)
          800: '#212529',       // Near black (secondary bg)
          900: '#000000',       // OLED black (primary bg)
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
