import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:  {'allowedHosts': ['afa57b3969fa.ngrok-free.app']}
}
)

