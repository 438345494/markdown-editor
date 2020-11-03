<template lang='pug'>
  .editor-area
    language-select.language-select(@change="languageChange")
</template>

<script>
import languageSelect from './language-select'
export default {
  components: {
    languageSelect
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    languageChange (val) {
      console.log('val', val)
    }
  }
}
</script>
<style lang='stylus'>
.editor-area
  width 100%
  background-color #000
  position relative
  display flex
  flex-flow row nowrap 
  align-items center
  .language-select
    position absolute
    right 10px
</style>
