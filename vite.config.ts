import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages subpath. The repo is "New-Year-System"
// and Pages paths are case-sensitive, so the site is served at
// https://haugenau20.github.io/New-Year-System/ — the case here must match.
export default defineConfig({
  base: '/New-Year-System/',
  plugins: [react()],
})
