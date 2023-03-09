import type { VNodeData } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicAttributes
      extends Pick<
        VNodeData,
        'props' | 'domProps' | 'scopedSlots' | 'on' | 'nativeOn'
      > {
      ['v-show']?: boolean
      ['v-model']?: any
      ['style']?: StyleValue
    }
  }
}

export {}
