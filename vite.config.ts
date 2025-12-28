import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:  {'allowedHosts': ['1ece5e52c72b.ngrok-free.app']}
}
)

