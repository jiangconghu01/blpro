<template>
  <div class="index-box">
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="index-layout">
      <div class="index-containner layout-container clearfix">
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
          <section class="top-link">
            <h2>个人简介</h2>
            <div class="head-photo">
              <a href="/"><img src="../assets/images/headphoto2.jpeg" alt=""></a>
            </div>
            <p class="abstract">站长: 逸风</p>
            <p class="abstract">职业: 长方形混凝土块转移工程师</p>
            <p class="abstract">邮箱: jiangconghu_y@126.com</p>
            <p class="abstract">随心听</p>
            <!-- <audio src="../assets/music/in-the-end.mp3"></audio> -->
          </section>
          <section class="aside-item recommend">
            <Aside-title>特别推荐</Aside-title>
            <ul>
              <li v-for="(item,index) in recommendList" :key="index+'img'" class="item-img" ><Item-img :img="item.img" :title="item.title"></Item-img></li>
            </ul>
          </section>
          <section class="aside-item clicksort">
            <Aside-title>点击排行</Aside-title>
            <ul>
              <li>
                <Item-img :img="articleList[0].imgs[0]" :title="articleList[0].title" type="2"></Item-img>
              </li>
              <li v-for="(item,index) in articleList" :key="index+'small'">
                <Article-small-item :img="item.imgs" :title="item.title" :date="item.date"></Article-small-item>
              </li>
            </ul>
          </section>
          <section class="aside-item latest">
            <Aside-title>最新更新</Aside-title>
            <ul>
              <li>
                <Item-img :img="articleList[0].imgs[0]" :title="articleList[0].title" type="2"></Item-img>
              </li>
              <li v-for="(item,index) in articleList" :key="index+'small'">
                <Article-small-item :img="item.imgs" :title="item.title" :date="item.date"></Article-small-item>
              </li>
            </ul>            
          </section>
          <section class="aside-item tags">
            <Aside-title>标签</Aside-title>
            <Tags :tags="tags"></Tags>
          </section>
          <section class="aside-item infor">
            <Aside-title>站点信息</Aside-title>
            <ul>
              <li>
                <b>建站时间：</b>2018-09-09
              </li>
              <li>
                <b>建站程序：</b>nuxt+koa2+mongodb+redis
              </li>
              <li>
                <b>文章统计：</b>共25篇
              </li>
              <li>
                <b>统计数据：</b><a href="/">百度统计</a>
              </li>
              <li>
                <b>微信公众号和小程序：</b><a href="/">还在开发中</a>
              </li>
              <li>
                <b>个人微信：</b><img src="../assets/images/wechat.png" alt="">
              </li>
            </ul>
          </section>
          <section class="aside-item link">
            <Aside-title>友情链接</Aside-title>
            <ul>
              <li>
                <a href="/">逸风的博客</a>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BackGround from '@/components/public/background.vue'
import ArticleItem from '@/components/container/article.item.vue'
import ArticleSmallItem from '@/components/container/article.small.item.vue'
import ItemImg from '@/components/container/item.img.vue'
import Tags from '@/components/container/tags.vue'
import AsideTitle from '@/components/container/aside.title.vue'
import img from '@/assets/images/blank.jpg'

export default {
  components: {
    Logo,
    BackGround,
    ArticleItem,
    ArticleSmallItem,
    ItemImg,
    AsideTitle,
    Tags
  },
  data() {
    return {
      bgimg: img,
      tags: [
        { name: 'koa2', link: '/' },
        { name: 'http', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' },
        { name: 'js基础', link: '/' }
      ],
      banerlist: [
        { title: '测试文章标题', img: 'banner01.jpg' },
        { title: '测试文章标题', img: 'banner02.jpg' },
        { title: '测试文章标题', img: 'banner03.jpg' }
      ],
      recommendList: [
        {
          title: '正则表达式的正确打开方式',
          img: 'banner03.jpg'
        },
        {
          title: '正则表达式的正确打开方式',
          img: 'b04.jpg'
        },
        {
          title: '正则表达式的正确打开方式',
          img: 'b05.jpg'
        }
      ],
      articleList: [
        {
          title: '正则表达式的正确打开方sjfdsdfjsdfkjsdlfjsldfjlsdfjsdfskd式',
          abstrct:
            ' 如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...',
          imgs: ['toppic01.jpg', 'toppic02.jpg'],
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
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
  max-width: $layout_width;
  margin: 20px auto 0;
  .left-side {
    width: 68%;
    float: left;
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
    width: 30%;
    float: right;
  }
  .top-link {
    height: 400px;
    padding: 0 15px;
    background-color: #fff;
    //background: linear-gradient(to top, #2c3e50, #4ca1af);
    //background: linear-gradient(to top, #a1c4fd, #c2e9fb);
    //background: linear-gradient(to top, #d4fc79, #96e6a1);
    //background: linear-gradient(to top, #0c628a, #e4e132);
    // background-image: url('../assets/images/gradient.jpg');
    // background-size: cover;
    .head-photo {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        height: 100%;
        width: 100%;
      }
    }
    p {
      background: #f6f6f6;
      color: #555;
      margin: 5px 0;
      padding-left: 10px;
      border-radius: 5px;
      text-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px;
    }
  }
  .aside-item {
    padding: 35px 30px;
    margin-top: 20px;
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
  .aside-item.link {
    a {
      color: #333;
    }
    li {
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #f7f7f7;
    }
  }
}
</style>
