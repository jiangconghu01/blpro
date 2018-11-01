<template>
  <header class="component-header">
    <el-row>
      <el-col :span="4"> <nuxt-link to="/"> 逸风的博客</nuxt-link></el-col>
      <el-col :span="4"> <nuxt-link to="/"> 网站首页</nuxt-link></el-col>
      <el-col :span="4"> 学无止境</el-col>
      <el-col :span="4"> 慢生活</el-col>
      <el-col :span="4"> <nuxt-link to="/"> 留言</nuxt-link></el-col>
      <el-col :span="4"> <nuxt-link to="/"> 关于我</nuxt-link></el-col>
    </el-row>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
//@import '@/assets/global.scss';
.component-header {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #444;
  .el-row {
    margin: 0 auto;
    width: 55%;
    font-size: 1.8 * $fontbase;
    & .el-col:first-child {
      font-size: 2.2 * $fontbase;
    }
  }
  .blank {
    line-height: 10px;
  }
}
</style>
