<template lang='pug'>
  .md-editor
    textarea(ref="textarea")
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/mode/markdown/markdown.js'
import { mutations } from '../store'
export default {
  components: {},
  data () {
    return {
      value: ''
    }
  },
  inject: ['options'],
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const defalutOptions = {
        mode: 'markdown',
        theme: '3024-night',
        lineNumbers: true,
        indentUnit: 2,
        autocorrect: true,
        lineWrapping: true
      }
      const options = Object.assign(defalutOptions, this.options, { // mode只可以是markdown
        mode: 'markdown'
      })
      const editor = CodeMirror.fromTextArea(this.$refs.textarea, options)
      editor.on('change', editor => {
        mutations.setMarkdown(editor.getValue())
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
  .CodeMirror
    height 100%
</style>
