import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  render() {
    return <div class={styles.view}>首页</div>
  }
})
