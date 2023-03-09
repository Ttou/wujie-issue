import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'
import type { VueConstructor } from 'vue'

export function useElementUI(Vue: VueConstructor) {
  Vue.use(ElementUI)
}
