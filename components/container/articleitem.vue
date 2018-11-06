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
    <div class="blog-infor">
      <el-row :gutter="6">
        <el-col :span="4"><div class="grid-content author">{{ infor.author }}</div></el-col>
        <el-col :span="4"><div class="grid-content muname">{{ infor.muname }}</div></el-col>
        <el-col :span="6"><div class="grid-content date">{{ infor.date }}</div></el-col>
        <el-col :span="6"><div class="grid-content view">{{ infor.view }}已阅读</div></el-col>
        <el-col :span="4"><div class="grid-content like">{{ infor.like }}</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infor: {
        author: '蒋从虎',
        muname: '慢生活',
        date: '2018-10-31',
        view: 66,
        like: 99
      }
    }
  }
}
</script>

<style lang="scss">
.com-container-article {
  width: 100%;
  background-color: #fff;
  color: #555;
  padding: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 2 * $fontbase;
    width: 100%;
    margin-bottom: 10px;
    //transform: rotateX(5deg);
    //text-overflow: ellipsis;
    // white-space: nowrap;
    //overflow: hidden;
  }
  .abstrct {
    .img {
      width: 28%;
      float: left;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    font-size: 1.4 * $fontbase;
  }
  .blog-infor {
    padding-top: 20px;
    float: left;
    font-size: 1.2 * $fontbase;
    width: 65%;
    .grid-content {
      padding-left: 20px;
      //display: inline;
      height: 16px;
      line-height: 16px;
    }
    .author {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -2px;
    }
    .muname {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -25px;
    }
    .date {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -46px;
    }
    .view {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -66px;
    }
    .like {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -87px;
    }
  }
}
@media only screen and (max-width: 1100px) {
  .com-container-article .blog-infor {
    width: 85%;
  }
}
</style>
