import Vue from 'vue'

export const state = Vue.observable({
  markdownValue: ''
})
export const mutations = {
  setMarkdown (val) {
    state.markdownValue = val
  }
}
