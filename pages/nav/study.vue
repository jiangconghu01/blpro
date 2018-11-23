<template>

  <div class="study-container-box">
    study的文章列表

  </div>
</template>

<script>
// import Test from '~/components/article/test.vue'
// import Commont from '~/components/article/commont.vue'
// import Tags from '@/components/container/tags.vue'
// import Editor from '@/components/article/editor.vue'
// import Emoji from '@/components/article/emoji.vue'
// import CommontInput from '@/components/article/commont.input.vue'

export default {
  layout: 'nav.item',

  components: {},
  data() {
    return {}
  },
  mounted() {
    this.$demoFun()
  },
  methods: {}
}
</script>

<style lang="scss">
.study-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
}
</style>
