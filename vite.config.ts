import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages subpath: haugenau20.github.io/new-year-system/
export default defineConfig({
  base: '/new-year-system/',
  plugins: [react()],
})
