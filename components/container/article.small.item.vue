<template>
  <div class="com-container-smallitem clearfix">
    <ul>
      <li class="img"><img :src="require(`@/assets/images/${imgurl}`)"></li>
      <li class="text">
        <p class="title">{{ title }}</p>
        <p class="date">{{ date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: Array,
      requred: false
    },
    title: {
      type: String,
      requred: false
    },
    date: {
      type: String,
      requred: false
    }
  },
  computed: {
    imgurl() {
      return this.img && this.img.length > 0
        ? this.img[0]
        : 'toppic-default.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
.com-container-smallitem {
  color: #48494d;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  .img {
    width: 100px;
    height: 75px;
    overflow: hidden;
    display: block;
    border: #efefef 1px solid;
    float: left;
    margin-right: 10px;
    &:hover img {
      transform: scale(1.1);
    }
    img {
      transition: all 0.6s ease;
      height: 100%;
      width: 100%;
    }
  }
  .text {
    font-size: 1.6 * $fontbase;
    font-weight: 400;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
    .date {
      font-size: 12px;
      color: #9a9a9a;
      margin-top: 10px;
    }
  }
}
</style>
