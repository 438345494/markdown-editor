import mdEditor from './index.vue'

mdEditor.install = function (Vue) {
  Vue.component(mdEditor.name, mdEditor)
}

export default mdEditor