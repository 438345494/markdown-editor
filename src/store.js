import Vue from 'vue'
import { isObj } from '@utils/tools'

export const state = Vue.observable({
  markdownValue: '',
  editorScrollInfo: {
    scrollTop: 0,
    height: 0
  }
})
export const mutations = {
  setMarkdown (val) {
    state.markdownValue = val
  },
  setEditorScrollInfo (val) {
    if (!isObj(val)) throw new Error('editorScrollInfo is not an object')
    Object.assign(state.editorScrollInfo, val)
  }
}
