<template>
  <div :style="{backgroundImage:`url(${imgurl})`}" class="bg-top" >
  </div>
</template>

<script>
export default {
  props: {
    imgurl: {
      type: String,
      required: false
    }
  },
  mounted() {
    console.log(this.imgurl)
  }
}
</script>

<style lang="scss">
.bg-top {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  //margin-top: 60px;
  padding: 100px 0;
  text-align: center;
  width: 100%;
}
@media only screen and (max-width: 480px) {
  .bg-top {
    padding: 50px 0;
  }
}
</style>
