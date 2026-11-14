import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const vendor = (...pkgs: string[]) =>
  new RegExp(`[\\\\/]node_modules[\\\\/](${pkgs.join('|')})[\\\\/]`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: vendor('react', 'react-dom', 'scheduler'),
              priority: 40,
            },
            {
              name: 'router',
              test: vendor('react-router', 'react-router-dom'),
              priority: 30,
            },
            {
              name: 'layout',
              test: vendor(
                'framer-motion',
                'motion-dom',
                'motion-utils',
                'lucide-react'
              ),
              priority: 20,
            },
            {
              name: 'internationalization',
              test: vendor('i18next', 'react-i18next'),
              priority: 10,
            },
          ],
        },
      },
    },
  },
})
