import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // absolute path for Vercel
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    cors: true,
  },
})
