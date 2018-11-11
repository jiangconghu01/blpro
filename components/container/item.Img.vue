<template>
  <div :class="{'scale':type!=='1'}" class="com-container-itmimg" >
    <img :src="require(`@/assets/images/${img}`)" >
    <p v-if="type==='1'" class="title">
      {{ title }}
      <span><a href="/">阅读</a></span>
    </p>
    <p v-else class="title2">
      <a href="/">{{ title }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      requred: false
    },
    title: {
      type: String,
      requred: false
    },
    type: {
      type: String,
      requred: false,
      default: '1'
    }
  }
}
</script>

<style lang="scss">
.com-container-itmimg {
  width: 100%;
  max-height: 165px;
  overflow: hidden;
  position: relative;
  background: #000;
  margin-bottom: 20px;
  font-size: 0;
  &.scale:hover img {
    transform: scale(1.1);
  }
  &:hover .title span {
    background: #fff;
    color: #333;
  }
  &:hover .title span a {
    color: #333;
  }
  &:hover img {
    opacity: 0.6;
  }
  img {
    width: 100%;
    transition: all 0.5s ease;
    opacity: 0.5;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    text-align: center;
    transform: translateY(-50%);
    padding: 0 15px;
    font-size: 1.6 * $fontbase;
    span {
      &:hover {
        cursor: pointer;
      }
      width: 80px;
      margin: 10px auto;
      background: transparent;
      font-size: 1.2 * $fontbase;
      border: 1px solid #fff;
      border-radius: 40px;
      padding: 4px 0;
      color: #fff;
      display: block;
    }
  }
  .title2 {
    width: 100%;
    position: absolute;
    bottom: 0px;
    padding: 0 15px;
    font-size: 1.6 * $fontbase;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
