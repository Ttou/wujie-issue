import { ElButton, ElDialog, ElOption, ElPopover, ElSelect } from 'element-plus'
import { defineComponent, reactive, toRefs } from 'vue'

import { AppendBody } from '@/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'Dialog',
  setup() {
    const state = reactive({
      show: false,
      selectOpts: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      selected: ''
    })

    return {
      ...toRefs(state)
    }
  },
  render() {
    return (
      <div class={styles.view}>
        <div class={styles.content}>
          <p>弹窗无需子应用做任何处理就可使用</p>
          <h3>1、打开弹窗</h3>
          <div>
            <ElButton onClick={() => (this.show = true)}>点击打开弹窗</ElButton>
          </div>
          <h3>2、打开选择器</h3>
          <div>
            <ElSelect v-model={this.selected} placeholder="请选择">
              {this.selectOpts.map(v => (
                <ElOption
                  value={v.value}
                  label={v.value}
                  key={v.value}
                ></ElOption>
              ))}
            </ElSelect>
          </div>
          <h3>3、打开气泡卡片</h3>
          <div>
            <ElPopover
              placement={'top-start'}
              title="标题"
              width={200}
              trigger={'hover'}
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
              v-slots={{
                ['reference']: () => <ElButton>hover 激活</ElButton>
              }}
            ></ElPopover>
          </div>
          <h3>4、手动向body中append弹窗</h3>
          <AppendBody />
        </div>
        <ElDialog
          v-model={this.show}
          title="提示"
          width="30%"
          showClose
          v-slots={{
            ['default']: () => <span>这是一段信息</span>,
            ['footer']: () => (
              <span>
                <ElButton onClick={() => (this.show = false)}>取消</ElButton>
                <ElButton type={'primary'} onClick={() => (this.show = false)}>
                  确定
                </ElButton>
              </span>
            )
          }}
        ></ElDialog>
      </div>
    )
  }
})
