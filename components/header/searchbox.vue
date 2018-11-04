<template>
  <div class="com-header-search">
    <el-input
      v-model="input23"
      placeholder="请输入内容">
      <i slot="prefix" color="#333" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input23: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.com-header-search {
  .el-icon-search {
    color: #909399;
  }
  .el-input__inner {
    height: 30px;
  }
}
</style>
