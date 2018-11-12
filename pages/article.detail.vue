<template>

  <div class="detail-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h3 class="title">关于git工具的使用</h3>
    <div class="infor">
      <span class="publish-time">2018.11.12 20:45</span>
      <span class="wordage">字数 1198</span>
    <span class="views-count">阅读 15</span><span class="comments-count">评论 0</span><span class="likes-count">喜欢 0</span></div>
    <div class="tag">
      <Tags :tags="tags" small></Tags>
    </div>
    <div class="article-content">
      <Test/>
      <div class="like-reward">
        <span class="item">很赞哦(112)</span>
        <span class="item">打赏本帖</span>
      </div>
    </div>

  </div>
</template>

<script>
import Test from '~/components/article/test.vue'
import Tags from '@/components/container/tags.vue'

export default {
  layout: 'article.detail',

  components: {
    Test,
    Tags
  },
  data() {
    return {
      tags: [
        { name: 'koa2', link: '/' },
        { name: 'http', link: '/' },
        { name: 'js基础', link: '/' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.detail-container-box {
  background-color: #fff;
  padding: 20px;
  color: #333;
  //color: red;
  h3.title {
    font-size: 2.6 * $fontbase;
    font-weight: 600;
    line-height: 1.3;
    padding: 20px 0;
    color: #222;
  }
  .tag {
    margin-bottom: 20px;
  }
  .like-reward {
    text-align: center;
    margin-top: 20px;
    span {
      display: inline-block;
      vertical-align: middle;
      margin: 0 20px;
      height: 30px;
      line-height: 30px;
      background-color: #e2523a;
      width: 120px;
      box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
