import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TRAC_NGHIEM_KTCT_MMT/',
  optimizeDeps: {
    include: ['mammoth', 'pdfjs-dist'],
    exclude: ['pdfjs-dist/build/pdf.worker.min.mjs']
  },
  server: {
    host: true, // Listen on all addresses including LAN and ngrok
    port: 5175,
    strictPort: false, // Try next port if 5175 is taken
    allowedHosts: [
      '.ngrok-free.app',
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok.app',
    ],
    hmr: {
      clientPort: 443, // For ngrok HTTPS
    },
  },
  preview: {
    host: true,
    port: 4173,
  },
})
