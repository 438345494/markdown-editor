<script>
export default {
  components: {
  },
  props: {
    layout: String,
    title: String
  },
  inheritAttrs: false,
  computed: {

  },
  data () {
    return {
    }
  },
  render (h, c) {
    const componentsSort = ['back', 'pre', 'clean'] // 模块排序
    const fns = this.layout.split(',').map(item => item.trim()).sort((p,b) => {
      return componentsSort.indexOf(p) - componentsSort.indexOf(b)
    })
    const TEMPLATE_MAP = {
      back: <div class="back" onClick={this.back}></div>,
      pre: <div class="pre" onClick={this.pre}></div>,
      clean: <div class="clean" onClick={this.clean}></div>
    }
    const arr = []
    fns.forEach(item => {
      if (TEMPLATE_MAP[item]) arr.push(TEMPLATE_MAP[item])
    })
    let template = <div class="editor-area ">
      <div class="fn-content">{
        arr
      }
      </div>
      <div class="title">{this.title}</div>
    </div>
    return template
  },
  mounted () {
  },
  methods: {
    back () {
      console.log('i am back')
    },
    pre () {
      console.log('i am pre')
    },
    clean () {
      this.$emit('clean')
    }
  }
}
</script>
<style lang='stylus'>
.editor-area
  width 100%
  position relative
  background-color #fafafa
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
