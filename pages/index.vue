<template>
  <div class="index-box">
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="index-layout">
      <div class="index-containner">
        <article class="left-side">
          <!-- <el-carousel trigger="click" height="350px"> -->
          <el-carousel arrow="always">
            <el-carousel-item v-for="(item,index) in banerlist" :key="index">
              <img :src="require(`@/assets/images/${item.img}`)" alt="">
              <div class="title"> 
                <h3>{{ index+1 +item.title }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
          <Article-item></Article-item>
        </article>
        <aside class="right-side">

        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BackGround from '@/components/public/background.vue'
import ArticleItem from '@/components/container/articleitem.vue'
import img from '@/assets/images/blank.jpg'

export default {
  components: {
    Logo,
    BackGround,
    ArticleItem
  },
  data() {
    return {
      bgimg: img,
      banerlist: [
        { title: '测试文章标题', img: 'banner01.jpg' },
        { title: '测试文章标题', img: 'banner02.jpg' },
        { title: '测试文章标题', img: 'banner03.jpg' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.index-layout {
  width: 90%;
  margin: 0 auto;
}
.index-containner {
  max-width: 1140px;
  margin: 20px auto 0;
  overflow: hidden;
  //height: 800px;
  .left-side {
    height: 1600px;
    width: 66%;
    float: left;
    background-color: aqua;
    .el-carousel {
      margin-bottom: 20px;
    }
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
      }
      .title {
        width: 100%;
        background-color: rgba(30, 32, 32, 0.2);
        font-size: 16px;
        margin: 0;
        position: absolute;
        bottom: 40px;
        text-align: center;
        h3 {
          color: rgb(241, 235, 235);
          opacity: 1;
        }
        // left: 50%;
        // transform: translateX(-50%);
      }
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    .el-carousel__arrow {
      background-color: rgba(197, 208, 219, 0.51);
    }
  }
  .right-side {
    height: 1600px;
    width: 32%;
    float: right;
    background-color: aqua;
  }
}
@media only screen and (max-width: 840px) {
  .right-side {
    display: none;
  }
  .index-containner .left-side {
    width: 100%;
  }
}
</style>
