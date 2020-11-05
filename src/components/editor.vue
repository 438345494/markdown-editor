<template lang='pug'>
  .md-editor
    textarea(ref="textarea")
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/mode/markdown/markdown.js'
export default {
  components: {},
  data () {
    return {
      value: ''
    }
  },
  props: {
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const defalutOptions = {
        mode: 'markdown',
        theme: 'cobalt',
        lineNumbers: true,
        indentUnit: 2,
        autofocus: true,
        autocorrect: true
      }
      const options = Object.assign(defalutOptions, this.options)
      const editor = CodeMirror.fromTextArea(this.$refs.textarea, options)
      editor.setValue(this.value)
      editor.on('change', editor => {
        console.log('editor has change: ', editor.getValue())
      })
    }
  }
}
</script>
<style lang='stylus'>
.md-editor
  width 100%
  height 100%
  overflow-x hidden
  overflow-y auto
  outline none
  box-sizing border-box
</style>
