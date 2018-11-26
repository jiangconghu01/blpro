<template>
  <header class="component-header">
    <el-row>
      <el-col :span="4"> <nuxt-link to="/article/1001"> 逸风的博客</nuxt-link></el-col>
      <el-col :span="3"> <nuxt-link to="/"> 网站首页</nuxt-link></el-col>
      <el-col :span="3" class="nav"> 
        <nuxt-link to="/nav/study" class="study"> 学无止境</nuxt-link>
        <div class="select"><Hover-box></Hover-box></div>
      </el-col>
      <el-col :span="3" class="nav">
        <nuxt-link to="/nav/life" class="life"> 慢生活</nuxt-link>
        <div class="select"><Hover-box></Hover-box></div>
      </el-col>
      <el-col :span="3"> <nuxt-link to="/nav/message"> 留言</nuxt-link></el-col>
      <el-col :span="3"> <nuxt-link to="/nav/aboutme"> 关于</nuxt-link></el-col>
      <el-col :span="5"> <Search-box></Search-box></el-col>
    </el-row>
  </header>
</template>

<script>
import HoverBox from '@/components/header/hoverbox.vue'
import SearchBox from '@/components/header/searchbox.vue'
export default {
  components: {
    HoverBox,
    SearchBox
  }
}
</script>

<style lang="scss" scoped>
//@import '@/assets/global.scss';
.component-header {
  position: fixed;
  z-index: 10001;
  top: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: $bgcolor;
  .el-row {
    margin: 0 auto;
    width: 55%;
    font-size: 1.8 * $fontbase;
    .el-col {
      text-align: center;
    }
    & .el-col:first-child {
      font-size: 2.2 * $fontbase;
    }
  }
  .blank {
    line-height: 10px;
  }
  .nav {
    .select {
      display: none;
      background-color: $bgcolor;
    }
    &:hover .select {
      display: block;
    }
  }
  //   .select {
  //     ul {
  //       //   transform: scaleY(0);
  //       //   transform-origin: 0 0;
  //       display: none;
  //       //   height: 0;
  //       //   width: 0;
  //       //   overflow: hidden;
  //       //   transition: height 0.2s linear 0.1s;
  //     }
  //   }
  //   .study {
  //     &:hover + .select ul {
  //       display: block;
  //       //   height: 200px;
  //       //   width: 100%;
  //       //transform: scaleY(1);
  //     }
  //   }
  //   .life {
  //     @extend .study;
  //   }
}
</style>
