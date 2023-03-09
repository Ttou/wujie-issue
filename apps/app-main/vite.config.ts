import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import elementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
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
    plugins: [vueJsx(), elementPlus()],
    server: {
      open: true,
      port: 3000,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  }
})
