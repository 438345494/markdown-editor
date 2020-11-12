<template lang='pug'>
  .md-preview(v-html="markdown" id="md-preview")
</template>

<script>
import { state } from '../store'
import marked  from 'marked'
import DOMPurify from 'dompurify'
export default {
  components: {},
  data () {
    return {
      ...state,
      marked: null
    }
  },
  inheritAttrs: false,
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
  },
  watch: {
    editorScrollInfo: {
      handler: function (newVal) {
        const { scrollTop, height, scrollHeight } = newVal
        const previewScrollHeight = document.getElementById('md-preview').scrollHeight
        const previewHeight = document.getElementById('md-preview').getBoundingClientRect().height
        document.getElementById('md-preview').scrollTop = Math.round(scrollTop / (scrollHeight - height) * (previewScrollHeight - previewHeight))
        console.log('scro', Math.round((scrollTop + height) * previewScrollHeight / scrollHeight - previewHeight))
      },
      deep: true
    }
  }
}
</script>
<style lang='stylus'>
.md-preview
  width 100%
  height 100%
  background-image linear-gradient(to right, #ADA996, #F2F2F2, #DBDBDB, #EAEAEA)
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
