<template>

  <div>
    <el-row :gutter="10">
      <el-col 
        :xs="8" 
        :sm="6" 
        :md="4" 
        :lg="3" 
        :xl="1"><div class="grid-content bg-purple"/></el-col>
      <el-col 
        :xs="4" 
        :sm="6" 
        :md="8" 
        :lg="9" 
        :xl="11"><div class="grid-content bg-purple-light"/></el-col>
      <el-col 
        :xs="4" 
        :sm="6" 
        :md="8" 
        :lg="9" 
        :xl="11"><div class="grid-content bg-purple"/></el-col>
      <el-col 
        :xs="8" 
        :sm="6" 
        :md="4" 
        :lg="3" 
        :xl="1"><div class="grid-content bg-purple-light"/></el-col>
    </el-row>
    <div class="test">
      <label>sdfjsdf</label>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {}
}
</script>

<style lang="scss">
div {
  color: red;
}
.test {
  transform: translateY(50%);
}
</style>
