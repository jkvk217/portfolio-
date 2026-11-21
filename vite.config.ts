import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves a project site from /<repo>/, so the Pages build sets
// GITHUB_PAGES and gets that base path plus a static-only plugin list.
const pages = process.env.GITHUB_PAGES === '1'

export default defineConfig({
  base: pages ? '/portfolio-/' : '/',
  plugins: [react(), tailwindcss(), ...(pages ? [] : [cloudflare()])],
  server: { port: 5305, strictPort: false },
})
