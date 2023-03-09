import './assets/styles'

import { createApp } from 'vue'

import App from './App'
import { useElementPlus } from './hooks'
import router from './router'

if (window.__POWERED_BY_WUJIE__) {
  let instance: any
  window.__WUJIE_MOUNT = () => {
    instance = createApp(App)

    useElementPlus(instance)

    instance.use(router)
    instance.mount('#app')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount()
  }
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount()
} else {
  const app = createApp(App)

  useElementPlus(app)

  app.use(router)

  app.mount('#app')
}
