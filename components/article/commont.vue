<template>
  <div class="com-arricle-commont clearfix" >
    <div class="author clearfix">
      <div class="img"><img src="../../assets/images/headphoto2.jpeg" alt=""></div>
      <div class="infor">
        <span class="name">
          原膜传世都
        </span>
        <span class="date">
          1楼 · 2018.11.12 20:45
        </span>
      </div>
      
    </div>
    <div class="commont-text">
      jsdfiosdfjsodfjs哎呦，不错呦，只是那个音乐下载那个好像凉了。
    </div>
    <div class="reply">
      <div class="icon">
        <span> <i class="iconfont el-icon-thrid-appreciate"></i>12人赞</span>
        <span>  <i class="iconfont el-icon-thrid-message"></i>回复</span>
        <span class="up-port">
          <i class="iconfont el-icon-thrid-activity"></i>举报
        </span>
        
      </div>
      <div class="discuss">
        <p class="text"><b>jsdfjsdf:@tst账号</b>哈哈。谢谢.这种评价对我来说是最欣慰的。感谢你的认可。让我以后写起来更有动力了。</p>
        <p class="opra">2018.10.27 21:05<i class="iconfont el-icon-thrid-message"></i>回复</p>
        <p class="add-new">
          <i class="iconfont el-icon-thrid-edit"></i>添加新评论
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      requred: false
    },
    small: {
      type: String,
      requred: false
    }
  },
  data() {
    return {
      colors: [
        '#909399',
        '#E6A23C',
        '#3FB8AF',
        '#F56C6C',
        '#3299BB',
        '#EB6841',
        '#67C23A',
        '#FE4365',
        '#FC9D9A',
        '#409EFF',
        '#EDC951'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.com-arricle-commont {
  padding-top: 35px;
  width: 100%;
  padding: 20px 20px 30px;
  border-bottom: 1px solid #f0f0f0;
  .author {
    .img {
      float: left;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .infor {
      float: left;
    }
    .name {
      font-size: 1.5 * $fontbase;
      display: block;
      color: #42c02e;
    }
    .date {
      display: block;
      font-size: 1.2 * $fontbase;
      color: #969696;
    }
  }
  .commont-text {
    margin: 10px 0;
    font-size: 1.6 * $fontbase;
    line-height: 1.5;
  }
  .reply {
    .icon {
      span {
        cursor: pointer;
        margin: 0 5px 0 10px;
        color: #969696;
        i {
          margin-right: 5px;
        }
      }
      .up-port {
        display: none;
        float: right;
      }
      &:hover .up-port {
        display: inline;
      }
    }
  }
  .discuss {
    margin-top: 20px;
    padding: 5px 0 5px 20px;
    border-left: 2px solid #d9d9d9;
    .text {
      b {
        margin-right: 5px;
        color: #3194d0;
      }
    }
    .opra {
      color: #969696;
      cursor: pointer;
      i {
        margin-left: 5px;
      }
    }
    .add-new {
      color: #969696;
      cursor: pointer;
      i {
        margin-right: 5px;
      }
    }
  }
}
</style>
