<template>

  <div class="message-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>留言</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left-content-box">
      <Commont-input>
        <template slot="button">
          留言
        </template>
      </Commont-input>
      <div class="commont-list-box">
        <Commont></Commont>
        <Commont></Commont>
        <Commont></Commont>
        <Commont></Commont>
      </div>
    </div>

  </div>
</template>

<script>
// import Test from '~/components/article/test.vue'
import CommontInput from '@/components/article/commont.input.vue'
import Commont from '~/components/article/commont.vue'
export default {
  layout: 'nav.person',

  components: {
    CommontInput,
    Commont
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.message-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
}
</style>
