<template>
  <div class="com-container-tags clearfix" >
    <ul>
      <a v-for="(ele,index) in tags" 
         :key="index" 
         :style="{background:colors[index%10],lineHeight:small === undefined?'24px':'18px'}"
         :href="ele.link">{{ ele.name }}</a>
    </ul>
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
.com-container-tags {
  width: 100%;
  a {
    line-height: 24px;
    display: block;
    background: #999;
    float: left;
    padding: 3px 10px;
    margin: 15px 8px 0 0;
    border-radius: 3px;
    transition: all 0.5s ease;
    color: #fff;
    &:hover {
      border-radius: 0;
      text-shadow: #000 1px 1px 1px;
    }
  }
}
</style>
