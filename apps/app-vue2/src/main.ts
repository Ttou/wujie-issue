import './assets/styles'

import Vue from 'vue'

import App from './App'
import { useElementUI } from './hooks'
import router from './router'

useElementUI(Vue)

Vue.config.productionTip = false

if (window.__POWERED_BY_WUJIE__) {
  let instance
  window.__WUJIE_MOUNT = () => {
    instance = new Vue({ router, render: h => h(App) }).$mount('#app')
  }
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy()
  }
  // module脚本异步加载，应用主动调用生命周期
  window.__WUJIE.mount()
} else {
  new Vue({ router, render: h => h(App) }).$mount('#app')
}
