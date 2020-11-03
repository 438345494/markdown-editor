<template lang='pug'>
  .markdown-editor(:style="{height: height}")
    editor-area.editor-area
    .editor-content
      md-editor
      md-preview
</template>

<script>
import mdEditor from '@components/editor'
import mdPreview from '@components/preview'
import editorArea from '@components/editor-area'
export default {
  components: {
    mdEditor,
    mdPreview,
    editorArea
  },
  props: {
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang='stylus'>
.markdown-editor
  --editor-area-height 40px
  width 100%
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  .editor-area
    width 100%
    height var(--editor-area-height)
  .editor-content
    display flex
    flex-flow row nowrap
    height calc(100% - var(--editor-area-height))
    width 100%
</style>
