import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      'truvish-main-production.up.railway.app',
      '.railway.app',
      'truvish.com',
      '.truvish.com',
      'localhost',
      '127.0.0.1'
    ],
    cors: true
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: [
      'truvish-main-production.up.railway.app',
      '.railway.app',
      'truvish.com',
      '.truvish.com',
      'localhost',
      '127.0.0.1'
    ],
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})