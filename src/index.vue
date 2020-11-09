<template lang='pug'>
  .markdown-editor(:style="{height: height}")
    editor-area.editor-area(v-bind="$attrs" v-on="$listeners" @clean="clean")
    .editor-content
      md-editor(v-bind="$attrs" v-on="$listeners" ref="mdEditor")
      .separator(v-if="!$slots.default")
      slot(v-else)
      md-preview(v-bind="$attrs" v-on="$listeners")
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
  inheritAttrs: false,
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
    clean () {
      this.$refs.mdEditor.editor.setValue('')
    }
  }
}
</script>
<style lang='stylus'>
@import '@src/css/basic.styl'
.markdown-editor
  --editor-area-height 40px
  width 100%
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  border-radius 10px
  overflow hidden
  .editor-area
    width 100%
    height var(--editor-area-height)
  .editor-content
    display flex
    flex-flow row nowrap
    height calc(100% - var(--editor-area-height))
    width 100%
    box-shadow #999 1px 1px 3px
    .separator
      border 1px solid #CCC
</style>
