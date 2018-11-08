<template>
  <div class="com-container-article clearfix">
    <h3 class="title" title="帝国cms 首页或者列表页 实现图文不同样式调用方法"><a href="/" target="_blank">testpage</a>{{ itemInfor.title }}</h3>
    <div class="abstrct">
      <div v-if="itemInfor.layout === 0" :style="{float:itemInfor.imgsize ==='sm'?'left':'none',width:itemInfor.imgsize ==='sm'? '28%':'100%'}" class="img">
        <img :src="require(`@/assets/images/${itemInfor.imgs[0]}`)" alt="">
      </div>
      <div v-else :style="{float:'none',width:'100%'}" class="img">
        <ul>
          <li v-for="(ele,index) in itemInfor.imgs" :key="index"><img :src="require(`@/assets/images/${ele}`)"></li>
        </ul>
      </div>
      <p class="text">
        {{ itemInfor.abstrct }}
      </p>
    </div>
    <div class="blog-infor">
      <el-row :gutter="8">
        <el-col :span="6"><div :title="itemInfor.author" class="grid-content author">{{ itemInfor.author }}</div></el-col>
        <el-col :span="4"><div class="grid-content muname">{{ itemInfor.muname }}</div></el-col>
        <el-col :span="6"><div class="grid-content date">{{ itemInfor.date }}</div></el-col>
        <el-col :span="5"><div class="grid-content view">{{ itemInfor.view }}已阅读</div></el-col>
        <el-col :span="3"><div class="grid-content like">{{ itemInfor.like }}</div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      required: false
    }
  },
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
  },
  computed: {
    itemInfor() {
      const copy = JSON.parse(JSON.stringify(this.information))
      copy.layout = 0
      const len = copy.imgs.length
      if (len === 1) return copy
      if (len === 2) copy.imgs.push('toppic-default.jpg')
      copy.layout = 1
      return copy
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
      overflow: hidden;
      cursor: pointer;
      li {
        float: left;
        width: 32%;
        height: 130px;
        overflow: hidden;
        img {
          height: 100%;
        }
      }
      li:nth-child(2) {
        margin: 0 1.5%;
      }
      img {
        width: 100%;
        transition: all 0.6s ease;
        &:hover {
          transform: scale(1.1);
        }
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
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .author {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -2px;
      cursor: pointer;
    }
    .muname {
      background: url('../../assets/images/auicon.jpg') no-repeat 0 -25px;
      cursor: pointer;
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
@media only screen and (max-width: 600px) {
  .com-container-article {
    .abstrct {
      .img {
        li {
          height: 90px;
        }
      }
    }
  }
}
</style>
