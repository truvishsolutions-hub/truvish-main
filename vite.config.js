import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    allowedHosts: 'all'
  },
  preview: {
    host: true,
    port: 3000,
    allowedHosts: 'all'
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})