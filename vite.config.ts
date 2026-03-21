import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 'allowedHosts': ['6ceb-2401-4900-93ac-8a07-394c-8071-ab4-3530.ngrok-free.app'] }
}
)

