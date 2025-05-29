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
  preview: {
    host: true, // permite acesso externo
    port: 4173,
    allowedHosts: [process.env.ENDPOINT], // <- coloque aqui o domínio do seu servidor
  },
})
