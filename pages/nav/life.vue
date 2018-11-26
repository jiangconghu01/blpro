<template>

  <div class="life-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>慢生活</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left-content-box">
      生活文章列表
    </div>

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
.life-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
}
</style>
