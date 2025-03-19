import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'e796-103-163-192-20.ngrok-free.app',  // Add your ngrok URL here
      'localhost', // Optionally add localhost
    ],
  },
})
