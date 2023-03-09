import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

import { Nav } from './components'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div>
        <Nav />
        <RouterView />
      </div>
    )
  }
})
