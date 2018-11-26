<template>
  <div class="layout-nav-person layout-common">
    <Header></Header>
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="nav-person-container layout-container clearfix">
      <section class="left-side">
        <nuxt/>
      </section>
      <section class="right-side">
        <section class="aside-item aside-person-info">
          <p class="photo">
            <img src="../assets/images/headphoto2.jpeg" alt="">
          </p>
          <p class="name">jiangconghu | 逸风</p>
          <p class="job">Web全栈工程师</p>
          <p class="abstract">
            一个90后草根站长！17年入行。一直潜心研究web前端和后端技术，一边工作一边积累经验，分享一些个人学习记录和学习资料。
          </p>
        </section>
        <section class="aside-item infor">
          <Aside-title>微信号</Aside-title>
          <li>
            <img src="../assets/images/wechat.png" alt="">
          </li>
        </section>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/public/header.vue'
import Footer from '@/components/public/footer.vue'
import BackGround from '@/components/public/background.vue'
import AsideTitle from '@/components/container/aside.title.vue'
import img from '@/assets/images/page_bg.jpg'

export default {
  components: {
    Header,
    Footer,
    BackGround,
    AsideTitle
  },
  data() {
    return {
      bgimg: img
    }
  }
}
</script>

<style lang="scss">
.layout-nav-person {
  background-color: #f6f6f6;
  .nav-person-container {
    color: #333;
    max-width: $layout_width;
    margin: 20px auto 0;
  }
  .left-side {
    width: 68%;
    float: left;
    //background: aqua;
    //height: 1600px;
  }
  .right-side {
    width: 30%;
    float: right;
    // height: 1600px;
    // background: aqua;
  }
  .aside-item {
    padding: 35px 30px;
    margin-bottom: 20px;
    background: #fff;
    .item-img {
      margin: 0 auto;

      width: 96%;
    }
  }
  .aside-item.infor {
    color: #333;
    li {
      b {
        font-size: 1.5 * $fontbase;
      }
      a {
        color: #096;
      }
      img {
        width: 99%;
      }
      margin-bottom: 10px;
    }
  }
  .aside-item.aside-person-info {
    background: #fff url(../assets/images/banner.png) no-repeat;
    p {
      margin-top: 10px;
    }
    .photo {
      text-align: center;
      margin-top: 45px;
    }
    .photo img {
      width: 100px;
      border-radius: 50%;
    }
    .name {
      text-align: center;
      color: #3f3f3f;
      font-weight: bold;
      font-size: 1.6 * $fontbase;
    }
    .job {
      text-align: center;
    }
    .abstract {
      color: #999;
    }
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
