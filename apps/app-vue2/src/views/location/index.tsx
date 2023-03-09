import { Button as ElButton } from 'element-ui'
import { defineComponent } from 'vue'

import styles from './index.module.css'

export default defineComponent({
  setup() {
    const host = location.host
    const windowHost = window.location.host

    function handleClick() {
      window.$wujie.location.href =
        'https://wujicode.cn/xy/app/prod/official/index'
    }

    return {
      host,
      windowHost,
      handleClick
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.content}>
          <p>
            当用户访问location来获取当前的url时，wujie统一拦截并回填子应用正确的地址
          </p>
          <h3>1、获取 location.host 的值</h3>
          <blockquote>
            <div>{this.host}</div>
          </blockquote>
          <h3>2、获取 window.location.host 的值</h3>
          <blockquote>
            <div>{this.windowHost}</div>
          </blockquote>
          <h3>3、修改window.location.href</h3>
          <ElButton
            class={styles.btnWrap}
            type={'warning'}
            on={{
              ['click']: this.handleClick
            }}
          >
            跳转无极
          </ElButton>
          <p>
            子应用修改location.href，会将当前的子应用的shadow删除并且替换成一个iframe
          </p>
          <blockquote>
            <div>如果子应用配置路由同步，浏览器可通过回退回到子应用</div>
          </blockquote>
        </div>
      </div>
    )
  }
})
