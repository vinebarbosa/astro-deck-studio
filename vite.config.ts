import react from '@vitejs/plugin-react'
import { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'

const srcRoot = resolve(__dirname, 'src')

export default ({ command }: ConfigEnv): UserConfig => {
  // DEV
  if (command === 'serve') {
    return {
      root: srcRoot,
      publicDir: 'assets',
      base: '/',
      plugins: [react()],
      resolve: {
        alias: {
          '/@': srcRoot
        }
      },
      server: {
        port: process.env.PORT === undefined ? 3000 : +process.env.PORT
      },
      optimizeDeps: {
        exclude: ['path']
      }
    }
  }
  // PROD
  return {
    root: srcRoot,
    base: resolve(__dirname, 'build'),
    publicDir: resolve(__dirname, 'src', 'assets'),
    plugins: [react()],
    resolve: {
      alias: {
        '/@': srcRoot
      }
    },
    build: {
      outDir: resolve(__dirname, 'build'),
      emptyOutDir: true,
      rollupOptions: {}
    },
    server: {
      port: process.env.PORT === undefined ? 3000 : +process.env.PORT
    },
    optimizeDeps: {
      exclude: ['path']
    }
  }
}
