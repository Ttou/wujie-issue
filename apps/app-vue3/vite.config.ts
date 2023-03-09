import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    resolve: {
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
    },
    plugins: [vueJsx()],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    server: {
      cors: true,
      port: 3002,
      host: '0.0.0.0'
    }
  }
})
