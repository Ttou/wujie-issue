import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Vue2',
  setup() {
    return {
      vue2Url: import.meta.env.VITE_APP_VUE2_ENTRY
    }
  },
  render() {
    return (
      <wujie-vue
        name="vue2"
        width="100%"
        height="100%"
        url={this.vue2Url}
        sync
      />
    )
  }
})
