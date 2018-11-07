<template>
  <div class="index-box">
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="index-layout">
      <div class="index-containner clearfix">
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
          <Article-item v-for="(item,index) in articleList" :key="index" :information="item"></Article-item>
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
      ],
      articleList: [
        {
          title: '正则表达式的正确打开方式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: ['toppic01.jpg', 'toppic02.jpg'],
          imgsize: 'sm',
          author: 'jiangconghu',
          muname: '慢生活',
          date: '2018-03-09',
          view: 99,
          like: 99
        },
        {
          title: '正则表达式的正确打开方式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: ['avatar.jpg'],
          imgsize: 'sm',
          author: 'jiangconghu',
          muname: '慢生活',
          date: '2018-03-09',
          view: 99,
          like: 99
        },
        {
          title: '正则表达式的正确打开方式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: ['toppic01.jpg', 'toppic02.jpg', 'avatar.jpg'],
          imgsize: 'sm',
          author: 'jiangconghu',
          muname: '慢生活',
          date: '2018-03-09',
          view: 99,
          like: 99
        },
        {
          title: '正则表达式的正确打开方式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: [],
          imgsize: 'sm',
          author: 'jiangconghu',
          muname: '慢生活',
          date: '2018-03-09',
          view: 99,
          like: 99
        },
        {
          title: '正则表达式的正确打开方式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: ['toppic01.jpg'],
          imgsize: 'lg',
          author: 'jiangconghu',
          muname: '慢生活',
          date: '2018-03-09',
          view: 99,
          like: 99
        }
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
  .left-side {
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
