<template>
  <div id="commont-input">
    <el-input
      :autosize="{ minRows: 10, maxRows: 20}"
      v-model="value"
      type="textarea"
      placeholder="请输入内容"
      resize="none">
    </el-input>
    <div class="icon clearfix">
      <i class="icon iconfont el-icon-thrid-smile" @click="showEmoji = !showEmoji"></i>
      <el-button type="success" size="small" class="submit" @click="submit">提交</el-button>
      <transition name="fade" mode="">
        <div v-if="showEmoji" class="emoji-box" >
          <el-button 
            :plain="true" 
            class="pop-close" 
            type="danger" 
            size="mini" 
            icon="close"
            @click="showEmoji = false"></el-button>
          <vue-emoji
            @select="selectEmoji">
          </vue-emoji>
          <span class="pop-arrow arrow"></span>
        </div>       
      </transition>
    </div>
    <transition-group tag="div" name="list" class="comment">
      <p v-for="(item,index) in data" :key="index" class="item">
        <span v-html="$emoji(item)"></span>
      </p>
    </transition-group>
  </div>
</template>

<script>
import vueEmoji from './emoji.vue'
//import emoji from '@/datautils/emoji.js'
export default {
  name: 'CommontInputBox',
  components: {
    vueEmoji
  },
  data() {
    return {
      value: '',
      showEmoji: false,
      data: []
    }
  },
  methods: {
    selectEmoji(code) {
      this.showEmoji = false
      this.value += code
    },
    submit() {
      this.data.push(this.value)
      this.value = ''
      console.log(this.$emoji)
    }
  }
}
</script>

<style lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#commont-input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  width: 500px;
  .icon {
    position: relative;
    margin-top: 20px;
    .iconfont {
      cursor: pointer;
      color: #f7ba2a;
    }
    .emoji-box {
      position: absolute;
      z-index: 10;
      left: -10px;
      top: 24px;
      box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.2);
      background: white;
      .el-button {
        position: absolute;
        border: none;
        color: #ff4949;
        right: 12px;
        top: 12px;
        z-index: 10;
      }
      .arrow {
        left: 10px;
      }
    }
    .submit {
      float: right;
    }
  }
  .comment {
    margin-top: 20px;
    .item {
      margin-top: 20px;
      padding: 10px;
      margin: 0;
      border-top: 1px solid #bfcbd9;
    }
  }
}

.clearfix {
  &:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-move {
  transition: transform 0.4s;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute !important;
}
.list-move {
  transition: all 0.5s;
}
</style>
