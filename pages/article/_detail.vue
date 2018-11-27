<template>

  <div class="detail-container-box">
    <div class="bread-crumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章详情</el-breadcrumb-item>
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
        <el-button class="item" type="text" @click="openReward()">打赏本帖</el-button>
        
      </div>
    </div>
    <div class="share">

    </div>
    <div class="before-after">
      <p class="before">
        上一篇 : <a href="/">关于vue的文章</a>
      </p>
      <p class="next">
        下一篇 : <a href="/">nuxt配置基本要求</a>
      </p>
    </div>
    <div class="commont">
      <Commont-input>
        <template slot="button">
          发送
        </template>
      </Commont-input>
      <!-- <Editor></Editor> -->
      <div class="commont-list-box">
        <Commont></Commont>
        <Commont></Commont>
        <Commont></Commont>
        <Commont></Commont>
      </div>
    </div>

  </div>
</template>

<script>
import Test from '~/components/article/test.vue'
import Commont from '~/components/article/commont.vue'
import Tags from '@/components/container/tags.vue'
import Editor from '@/components/article/editor.vue'
import Emoji from '@/components/article/emoji.vue'
import CommontInput from '@/components/article/commont.input.vue'

export default {
  layout: 'article.detail',

  components: {
    Test,
    Tags,
    Editor,
    Commont,
    CommontInput,
    Emoji
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
  mounted() {
    this.$demoFun()
  },
  methods: {
    openReward() {
      this.$alert('<strong>暂时 <i>没有</i> 开发</strong>', '打赏', {
        dangerouslyUseHTMLString: true
      })
      console.log(...this.tags)
    }
  }
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
    margin-top: 60px;
    .item {
      display: inline-block;
      vertical-align: middle;
      margin: 0 20px;
      height: 30px;
      line-height: 30px;
      background-color: #ea6f5a;
      width: 120px;
      box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      text-align: center;
      cursor: pointer;
      color: #fff;
    }
    .el-button {
      white-space: normal;
      font-size: inherit;
      font-weight: normal;
      padding: 0 0;
      &:focus {
        color: #fff;
        border-color: #ea6f5a;
        background-color: #ea6f5a;
      }
    }
  }
  .share,
  .before-after,
  .commont {
    margin-top: 40px;
    .commont-list-box {
      margin-top: 20px;
    }
  }
  .before-after {
    p {
      height: 40px;
      line-height: 40px;
    }
    a {
      color: #333;
      font-size: 1.6 * $fontbase;
      font-weight: 500;
      &:hover {
        color: #175199;
      }
    }
  }
}
</style>
