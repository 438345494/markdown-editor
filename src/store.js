import Vue from 'vue'

const state = Vue.observable({
  mode: 'markdown'
})
const mutations = {
  setMode (val) {
    state.mode = val
  }
}

export default {
  state,
  mutations
}