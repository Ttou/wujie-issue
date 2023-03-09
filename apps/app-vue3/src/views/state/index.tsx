import { ElButton } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    const state = reactive({
      count: 10
    })

    function handleJump() {
      window?.$wujie.props.jump('vue2')
    }

    return {
      ...toRefs(state),
      handleJump
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.content}>
          <p>设置保活模式，切换应用时，子应用的路由和state都可以得到保留</p>
          <h3>1、改动实例的状态，切换到vue2，点击按钮再回来看看</h3>
          <div class={styles.numberContent}>
            <ElButton onClick={() => this.count--}>-</ElButton>
            <span class={styles.number}>{this.count}</span>
            <ElButton onClick={() => this.count++}>+</ElButton>
          </div>
          <div>
            <ElButton onClick={this.handleJump}>跳转vue2</ElButton>
          </div>
        </div>
      </div>
    )
  }
})
