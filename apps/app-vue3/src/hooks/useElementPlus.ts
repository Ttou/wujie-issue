import 'element-plus/dist/index.css'

import ElementPlus from 'element-plus'
import { App } from 'vue'

export function useElementPlus(app: App) {
  app.use(ElementPlus)
}
