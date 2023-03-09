import { Button as ElButton } from 'element-ui'
import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    function handleJump() {
      window?.$wujie.props.jump('vue3')
    }

    function handleAlert() {
      window?.parent.alert('主应用alert')
    }

    function handleEmit() {
      window?.$wujie.bus.$emit('click', 'vue2')
    }

    return {
      handleJump,
      handleAlert,
      handleEmit
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.content}>
          <p>应用可以有三种方式进行通信：</p>
          <h3>1、主应用通过 props 属性注入的方法</h3>
          <p>
            主应用通过 props 注入 jump（跳转页面）方法，子应用通过
            $wujie.props.jump(xxx) 来使用
          </p>
          <div class={styles.btnWrap}>
            <ElButton
              on={{
                ['click']: this.handleJump
              }}
            >
              点击跳转vue3
            </ElButton>
          </div>
          <h3>2、通过 window.parent 方法拿到主应用的全局方法</h3>
          <p>子应用调用 window.parent.alert 来调用主应用的 alert方法</p>
          <div class={styles.btnWrap}>
            <ElButton
              on={{
                ['click']: this.handleAlert
              }}
            >
              显示alert
            </ElButton>
          </div>
          <h3>3、通过 bus 方法发送去中心化的事件</h3>
          <p>主应用监听子应用的 click 事件</p>
          <p>
            子应用点击按钮 $wujie.bus.$emit('click', 'vue2') 发送 click 事件
          </p>
          <div class={styles.btnWrap}>
            <ElButton
              on={{
                ['click']: this.handleEmit
              }}
            >
              点击emit
            </ElButton>
          </div>
        </div>
      </div>
    )
  }
})
