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
        background: {
          DEFAULT: '#050505',
          alt: '#0A0A0A',
          card: '#0D0E12',
          cardElevated: '#12141A',
        },
        cyan: {
          neon: '#00F0FF',
        },
        electric: {
          blue: '#0A84FF',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 240, 255, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(0, 240, 255, 0.12) 0%, rgba(5, 5, 5, 0) 70%)',
        'radial-blue': 'radial-gradient(circle at center, rgba(10, 132, 255, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(20, 22, 28, 0.8) 0%, rgba(10, 11, 14, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}
