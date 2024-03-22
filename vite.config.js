import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  return {
    plugins: [react()],
    server: {
      open: true, 
    },
    base: mode === "development" ? "" : "/react-three-fiber-luma/",
    build: {
      outDir: 'docs'
    },
    envDir:"env",
  }
})
