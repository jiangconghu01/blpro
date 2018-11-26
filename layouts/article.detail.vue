<template>
  <div class="layout-article-detail layout-common">
    <Header></Header>
    <Back-ground :imgurl="bgimg"></Back-ground>
    <div class="article-detai-container layout-container clearfix">
      <section class="left-side">
        <nuxt/>
      </section>
      <section class="right-side">
        <section class="aside-item tags">
          <Aside-title type="center">标签</Aside-title>
          <Tags :tags="tags"></Tags>
        </section>
        <section class="aside-item clicksort">
          <Aside-title>推荐阅读</Aside-title>
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
import ArticleSmallItem from '@/components/container/article.small.item.vue'
import Tags from '@/components/container/tags.vue'
import ItemImg from '@/components/container/item.img.vue'
import img from '@/assets/images/page_bg.jpg'

export default {
  components: {
    Header,
    Footer,
    BackGround,
    AsideTitle,
    ArticleSmallItem,
    ItemImg,
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
      articleList: [
        {
          title: '正则表达式的正确打开方sjfdsdfjsdfkjsdlfjsldfjlsdfjsdfskd式',
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
  }
}
</script>

<style lang="scss">
.layout-article-detail {
  background-color: #f6f6f6;
  .article-detai-container {
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
