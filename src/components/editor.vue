<template lang='pug'>
  textarea.md-editor(ref="textarea" v-model="value")
</template>

<script>
import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/theme/monokai.css'
import 'codemirror/mode/javascript/javascript'
export default {
  components: {},
  data () {
    return {
      value: '',
      editor: null
    }
  },
  mounted () {
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea,{
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      indentUnit: 4,
      lineWrapping: true,
      matchBrackets: true,
      line: true,
      smartIndent: true
    })
    this.editor.on('change',(val) => {
      this.value = val.getValue()
      this.editor.setValue(this.value)
    })
  },
  methods: {
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
