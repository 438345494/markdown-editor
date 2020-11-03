<template lang='pug'>
  select.language-select(v-model="selectValue")
    option(v-for="(item, key) in selectList" :key="item.value" :value="item.value" :selected="item.selected") {{item.label}}
</template>

<script>
import config from '@config'
export default {
  components: {},
  data () {
    return {
      selectList: Object.freeze(config.languageList),
      selectValue: 0
    }
  },
  mounted () {
  },
  methods: {
  },
  watch: {
    selectValue: {
      handler: function (val) {
        this.$emit('change', val)
      },
      immediate: true
    }
  }
}
</script>
<style lang='stylus'>
.language-select
  width 100px
  outline none
  border-radius 3px
</style>
