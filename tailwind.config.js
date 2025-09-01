import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'news-primary': '#1a202c',
        'news-secondary': '#2d3748',
        'news-accent': '#3182ce',
      },
    },
  },
  plugins: [tailwindcss()],
});
