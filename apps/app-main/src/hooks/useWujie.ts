import { App } from 'vue'
import { Router } from 'vue-router'
import WujieVue from 'wujie-vue3'

const lifecycles = {
  beforeLoad: appWindow =>
    console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`),
  beforeMount: appWindow =>
    console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`),
  afterMount: appWindow =>
    console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`),
  beforeUnmount: appWindow =>
    console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`),
  afterUnmount: appWindow =>
    console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`),
  activated: appWindow =>
    console.log(`${appWindow.__WUJIE.id} activated 生命周期`),
  deactivated: appWindow =>
    console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`),
  loadError: (url, e) => console.log(`${url} 加载失败`, e)
}

const plugins = [
  {
    htmlLoader: code => {
      console.log('html-loader')
      return code
    },
    jsBeforeLoaders: [
      {
        callback(appWindow) {
          console.log('js-before-loader-callback', appWindow.__WUJIE.id)
        }
      }
    ],
    jsLoader: (code, url) => {
      console.log('js-loader', url)
      return code
    },
    jsAfterLoaders: [
      {
        callback(appWindow) {
          console.log('js-after-loader-callback', appWindow.__WUJIE.id)
        }
      }
    ],
    cssBeforeLoaders: [],
    cssLoader: (code, url) => {
      console.log('css-loader', url, code.slice(0, 50) + '...')
      return code
    },
    cssAfterLoaders: []
  }
]

export function useWujie(app: App, router: Router) {
  const { setupApp, preloadApp, bus } = WujieVue

  bus.$on('click', msg => window.alert(msg))

  bus.$on('sub-route-change', (name, path) => {
    console.log('sub-route-change:', name, path)
  })

  const degrade =
    window.localStorage.getItem('degrade') === 'true' ||
    !window.Proxy ||
    !window.CustomElementRegistry
  const props = {
    jump: name => {
      router.push({ name })
    }
  }

  setupApp({
    name: 'vue2',
    url: import.meta.env.VITE_APP_VUE2_ENTRY,
    // alive: true,
    exec: true,
    props,
    degrade,
    ...lifecycles
  })

  setupApp({
    name: 'vue3',
    url: import.meta.env.VITE_APP_VUE3_ENTRY,
    alive: true,
    exec: true,
    props,
    degrade,
    plugins,
    ...lifecycles
  })

  if (window.localStorage.getItem('preload') !== 'false') {
    preloadApp({
      name: 'vue2'
    })
    if (window.Proxy) {
      preloadApp({
        name: 'vue3'
      })
    }
  }

  app.use(WujieVue)
}
