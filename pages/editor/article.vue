<template>
  <div>
    <div class="title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <mark-down :height="500"></mark-down>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  name: 'Editor',
  data() {
    return {
      editorContent: '',
      form: {
        title: ''
      }
    }
  },
  mounted() {
    console.log(process, process.BROWSER_BUILD)
    if (process.browser) {
    }
  },
  methods: {
    getContent: function() {
      if (process.browser) {
        alert(this.editorContent)
      }
    }
  }
}
</script>
<style lang="scss">
</style>
