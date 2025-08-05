import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          layout: [
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-icons',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-slot',
            'class-variance-authority',
            'clsx',
            'embla-carousel-react',
            'framer-motion',
            'tailwind-merge',
            'tailwindcss-animate',
          ],
          internationalization: ['i18next', 'react-i18next'],
        },
      },
    },
  },
})
