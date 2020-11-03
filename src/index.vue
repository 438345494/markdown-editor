<template lang='pug'>
  .markdown-editor
    md-editor
    md-preview
</template>

<script>
import mdEditor from '@components/editor'
import mdPreview from '@components/preview'
export default {
  components: {
    mdEditor,
    mdPreview
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
  width 100%
  display flex
  flex-flow row nowrap
</style>
