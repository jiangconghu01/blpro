<template>
  <div class="com-container-article clearfix">
    <h3 class="title" title="帝国cms 首页或者列表页 实现图文不同样式调用方法"><a href="/" target="_blank">testpage</a>帝国cms 首页或者列表页 实现图文不同样式调用方法</h3>
    <div class="abstrct">
      <div class="img">
        <img src="../../assets/images//toppic01.jpg" alt="">
      </div>
      <p class="text">
        如图，要实现上图效果，我采用如下方法：1、首先在数据库模型，增加字段，分别是图片2，图片3。2、增加标签模板，用if，else if 来判断，输出。思路已打开，样式调用就可以多样化啦！...
      </p>
    </div>
    <div class="blog-infor"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routelist: [
        { text: '网络基础', route: '/' },
        { text: '构建工具', route: '/' },
        { text: '框架库', route: '/' },
        { text: '语言基础', route: '/' },
        { text: '数据和算法', route: '/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.com-container-article {
  width: 100%;
  background-color: #fff;
  color: #555;
  padding: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 2 * $fontbase;
    width: 100%;
    color: #555;
    margin-bottom: 10px;
    //transform: rotateX(5deg);
    //text-overflow: ellipsis;
    // white-space: nowrap;
    //overflow: hidden;
  }
  .abstrct {
    .img {
      width: 32%;
      float: left;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    .text {
      color: #555;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    font-size: 1.4 * $fontbase;
  }
}
</style>
