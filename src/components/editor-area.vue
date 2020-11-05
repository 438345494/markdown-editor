<template lang='pug'>
  .editor-area 
    .fn-content
      .back
      .pre
      .clean
    .title {{ title }}
</template>

<script>
export default {
  components: {
  },
  props: {
    title: String
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
.editor-area
  width 100%
  position relative
  background-color lightgray
  display flex
  flex-flow row nowrap 
  align-items center
  box-sizing border-box
  padding-left 5px
  text-align center
  .title
    color #000
    margin-left 10px
    font-weight 500
  .fn-content
    display flex
    flex-flow row nowrap
    .pre, .back, .clean
      width 20px
      height 20px
      background-size 150%
      background-repeat no-repeat
      background-position center
      background-color #fff
      margin 0 0 0 5px
      border-radius 3px
      &:hover
        background-color rgb(255, 154, 38)
    .pre
      background-image url('../img/right.png')
    .back
      background-image url('../img/left.png')
    .clean
      background-size 100%
      background-image url('../img/clean.png')
</style>
