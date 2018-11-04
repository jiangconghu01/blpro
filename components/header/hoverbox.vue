<template>
  <ul class="com-header-hovbox">
    <li v-for="(ele,index) in routelist" :key="index"><nuxt-link :to="ele.route"> {{ ele.text }}</nuxt-link></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      routelist: [
        { text: '网络基础', route: '/' },
        { text: '构建工具', route: '/' },
        { text: '框架库', route: '/' },
        { text: '语言基础', route: '/' },
        { text: '数据和算法', route: '/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.com-header-hovbox {
  width: 100%;
  font-size: 1.6 * $fontbase;
  li {
    height: 40px;
    line-height: 40px;
    //width: 120px;
  }
}
</style>
