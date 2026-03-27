import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { 'allowedHosts': ['1211-2401-4900-c919-c7de-5cc-4323-52f6-3cfb.ngrok-free.app'] }
}
)

