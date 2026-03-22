import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 'allowedHosts': ['14f4-2401-4900-93bb-6ff3-412c-62d4-552e-40d.ngrok-free.app'] }
}
)

