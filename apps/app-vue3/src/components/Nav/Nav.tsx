import { defineComponent, reactive, toRefs, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import styles from './Nav.module.css'

export default defineComponent({
  name: 'Nav',
  setup() {
    const state = reactive({
      list: [
        {
          title: '首页',
          url: '/home'
        },
        {
          title: '弹窗',
          url: '/dialog'
        },
        {
          title: '路由',
          url: '/location'
        },
        {
          title: '通信',
          url: '/contact'
        },
        {
          title: '状态',
          url: '/state'
        }
      ]
    })

    const route = useRoute()

    watch(route, () => {
      window.$wujie?.bus.$emit('sub-route-change', 'vue3', route.path)
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    const renderItem = (v: any, index: number) => {
      if (index !== this.list.length - 1) {
        return [
          <RouterLink to={v.url} key={v.url}>
            {v.title}
          </RouterLink>,
          ' | '
        ]
      }
      return (
        <RouterLink to={v.url} key={v.url}>
          {v.title}
        </RouterLink>
      )
    }

    return <div class={styles.nav}>{this.list.map(renderItem)}</div>
  }
})
