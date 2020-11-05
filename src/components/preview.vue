<template lang='pug'>
  .md-preview(v-html="markdown")
</template>

<script>
import { state } from '../store'
import marked  from 'marked'
import DOMPurify from 'dompurify'
export default {
  components: {},
  data () {
    return {
      marked: null
    }
  },
  computed: {
    markdown: function () {
      if (this.marked) return DOMPurify.sanitize(this.marked(state.markdownValue))
      return state.markdownValue
    }
  },
  mounted () {
    this.marked = marked.setOptions({
      renderer: new marked.Renderer(),
      breaks: true,
      xhtml: true
    })
  },
  methods: {
  }
}
</script>
<style lang='stylus'>
.md-preview
  width 100%
  height 100%
  background-color #fafafa
  word-wrap break-word
  word-break break-all
  overflow-y auto
  code
    width 100%
    background-color #000
    color #fff
    display inline-block
    line-height 2
</style>
