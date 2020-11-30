<template>

  <div class="study-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学无止境</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left-content-box">
      <Article-item v-for="(item,index) in articleList" :key="index" :information="item"></Article-item>
    </div>

  </div>
</template>

<script>
// import Test from '~/components/article/test.vue'
// import Commont from '~/components/article/commont.vue'
// import Tags from '@/components/container/tags.vue'
// import Editor from '@/components/article/editor.vue'
// import Emoji from '@/components/article/emoji.vue'
// import CommontInput from '@/components/article/commont.input.vue'
import ArticleItem from '@/components/container/article.item.vue'
export default {
  layout: 'nav.item',

  components: {
    ArticleItem
  },
  data() {
    return {
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
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
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
          link: '/article/1001',
          view: 99,
          like: 99
        }
      ]
    }
  },
  mounted() {
    this.$aniscoll()
  },
  methods: {}
}
</script>

<style lang="scss">
.study-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
}
</style>
