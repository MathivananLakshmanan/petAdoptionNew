import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/petAdoptionNew/', // must match your GitHub repo name
  build: {
    outDir: 'dist' // Vite will auto-create this
  }
})
