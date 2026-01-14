import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel-specific configuration with clean URLs
export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel uses root path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
