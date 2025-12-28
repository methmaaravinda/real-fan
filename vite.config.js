import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // You can change this to any port you prefer (e.g., 3000, 8080)
    host: true, // Expose server to network (same as --host flag)
    open: true, // Automatically open browser when server starts
  },
})

