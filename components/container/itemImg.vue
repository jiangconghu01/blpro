<template>
  <div class="com-container-itmimg">
    <img :src="require(`@/assets/images/${img}`)" >
    <p class="title">
      帝国的cms方法实现
      <span><a href="/">阅读</a></span>
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
    }
  }
}
</script>

<style lang="scss">
.com-container-itmimg {
  width: 100%;
  position: relative;
  background: #000;
  //   &:hover {
  //     background: #fff;
  //   }
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
}
</style>
