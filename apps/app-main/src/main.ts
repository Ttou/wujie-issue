import './assets/styles'

import { createApp } from 'vue'

import App from './App'
import { useWujie } from './hooks'
import router from './router'

function bootstrap() {
  const app = createApp(App)

  useWujie(app, router)

  app.use(router).mount('#app')
}
bootstrap()
