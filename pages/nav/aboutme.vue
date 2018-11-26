<template>

  <div class="aboutme-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>关于</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="left-content-box">
      <h3 class="title">转行码农</h3>
      <p>
        14年毕业后在入职某国企施工单位，在重庆工地搬砖两年，很迷茫。16年底离开重庆到杭州转行做java开发，17年中旬至今从事web前端开发。
      </p>
      <div class="contact item">
        <span>可以通过以下方式联系到我:</span>
        <ul>
          <li>企鹅：<b>1239395043</b></li>
          <li>邮箱：<b>jiangconghu_y@126.com</b></li>
          <li>github: <a href="https://github.com/jiangconghu01">https://github.com/jiangconghu01</a></li>
        </ul>
      </div>
      <div class="item">
        <h3 class="title">关于本站</h3>
        <p>
          本站主要个人用于记录学习笔记，技术分享、交流，同时也提供共享书籍上传和下载。
        </p>
        <span>本站结构:</span>
        <ul>
          <li>前端：<b>nuxt.js</b></li>
          <li>后端：<b>koa2+mongodb</b></li>
        </ul>
      </div>
      <div class="item">
        <h3 class="title">特别说明</h3>
        <ul>
          <li>本站文章仅代表个人观点，和任何组织或个人无关。</li>
          <li>本站所有个人联系方式只做技术交流用，如有估计发垃圾信息，广告等坚决拉黑</li>
          <li>本站源码托管在github上，路过的道友觉得还可以的望点个星星</li>
          <li>本站所有样式设计都仿制<a href="https://www.yangqq.com">https://www.yangqq.com</a>的模板</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Test from '~/components/article/test.vue'

export default {
  layout: 'nav.person',

  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.aboutme-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
  h3.title {
    font-size: 2 * $fontbase;
    font-weight: 600;
    line-height: 0.95;
    margin: 20px 0;
    padding-left: 15px;
    color: #222;
    border-left: 0.25rem solid #6bc30d;
  }
  p {
    margin-top: 10px;
  }
  .item {
    margin-top: 15px;
    ul {
      margin-top: 10px;
    }
    li {
      margin-top: 10px;
      b {
        font-weight: normal;
        color: #0366d6;
      }
      a {
        color: #0366d6;
      }
    }
  }
}
</style>
