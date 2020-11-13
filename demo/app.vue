<template lang='pug'>
  .test-div
    md-editor(height="400px" :options="options" :layout="layout" @change="change" @clean="clean" title="markdown 编辑器")
</template>

<script>
import 'codemirror/theme/idea.css'
export default {
  data () {
    return {
      options: {
        theme: '3024-night'
      },
      layout: 'clean, pre, back'
    }
  },
  mounted () {
  },
  methods: {
    change (val) {
      // console.log('wlx', val)
    },
    clean () {
      // console.log('wlx-clean')
    }
  }
}
</script>
<style lang='stylus'>
.test-div
  margin 30px auto
  width 1000px
</style>
