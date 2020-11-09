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
import { debounce } from '@utils/tools'
export default {
  components: {},
  props: {
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  inheritAttrs: false,
  data () {
    return {
      value: '',
      editor: null
    }
  },
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
      this.editor = CodeMirror.fromTextArea(this.$refs.textarea, options)
      this.editor.on('change', editor => { // 内容改变
        this.$emit('change', editor.getValue())
        mutations.setMarkdown(editor.getValue())
      })
      this.editor.on('scroll', () => {
        const { scrollTop, height } = this?.editor?.doc
        const scrollInfo = {
          scrollTop,
          height,
          scrollHeight: document.getElementsByClassName('CodeMirror-scroll')[0].scrollHeight
        }
        this.$emit('scroll', scrollInfo)
        mutations.setEditorScrollInfo(scrollInfo)
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
