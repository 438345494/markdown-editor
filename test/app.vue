<template lang='pug'>
  .test-div
    md-editor(height="400px" :options="options")
</template>

<script>
import mdEditor from '../src/index.vue'
import 'codemirror/theme/idea.css'
export default {
  components: {
    mdEditor
  },
  data () {
    return {
      options: {
        theme: '3024-night'
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang='stylus'>
.test-div
  width 1000px
</style>
