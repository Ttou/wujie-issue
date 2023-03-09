import { ElButton } from 'element-plus'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      dialog: null
    })

    function handleAdd() {
      if (state.dialog) return
      const ele = document.createElement('div')
      ele.innerHTML = 'body中插入position为fixed元素'
      ele.style.cssText =
        'position: fixed; z-index: 100; top: 0; left: 0; width: 400px; text-align: center; height: 100px; line-height: 100px; background-color: #41b883'
      document.body.appendChild(ele)
      state.dialog = ele
    }

    function handleRemove() {
      if (state.dialog) document.body.removeChild(state.dialog)
      state.dialog = null
    }

    return {
      handleAdd,
      handleRemove
    }
  },
  render() {
    return (
      <div>
        <ElButton onClick={this.handleAdd}>点击插入body</ElButton>
        <ElButton onClick={this.handleRemove}>点击删除body</ElButton>
      </div>
    )
  }
})
