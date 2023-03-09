import './App.css'

import { ElAside, ElContainer, ElMain, ElMenu, ElMenuItem } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      menus: [
        {
          key: '/home',
          title: '主应用'
        },
        {
          key: '/vue2',
          title: 'Vue2子应用'
        },
        {
          key: '/vue3',
          title: 'Vue3子应用'
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <ElContainer>
        <ElAside>
          <ElMenu defaultActive={this.$route.path} router>
            {this.menus.map(v => (
              <ElMenuItem index={v.key}>{v.title}</ElMenuItem>
            ))}
          </ElMenu>
        </ElAside>
        <ElMain>
          <RouterView />
        </ElMain>
      </ElContainer>
    )
  }
})
