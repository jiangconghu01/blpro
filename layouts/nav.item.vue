<template>
  <div class="layout-nav-item">
    <Header></Header>
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="nav-item-container clearfix">
      <section class="right-side"></section>
      <nuxt/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/public/header.vue'
import Footer from '@/components/public/footer.vue'
import BackGround from '@/components/public/background.vue'
import img from '@/assets/images/page_bg.jpg'

export default {
  components: {
    Header,
    Footer,
    BackGround
  },
  data() {
    return {
      bgimg: img
    }
  }
}
</script>

<style lang="scss">
.layout--nav-item {
  background-color: #f6f6f6;
  .nav-item-container {
    max-width: 1140px;
    margin: 20px auto 0;
  }
  .right-side {
    width: 32%;
    float: right;
    height: 1600px;
    background: aqua;
  }
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
