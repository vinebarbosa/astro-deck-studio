import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join, resolve } from 'path'

const srcRoot = join(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  root: srcRoot,
  publicDir: resolve(__dirname, 'src', 'assets'),
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '/@': srcRoot
    }
  },
  build: {
    outDir: join('..', 'build'),
    emptyOutDir: false,
    rollupOptions: {}
  },
  server: {
    port: process.env.PORT === undefined ? 3000 : +process.env.PORT
  },
  optimizeDeps: {
    exclude: ['path']
  }
})
