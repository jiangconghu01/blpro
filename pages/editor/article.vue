<template>
  <div class="editor-container">
    <div class="title">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <mark-down ref="markdown" :height="520" :auto-save="false" theme="OneDark" @on-save="getContent"></mark-down>
    </div>
    <div class="editor-button">
      <el-row>
        <el-button type="primary" icon="el-icon-upload" circle @click="saveArticle"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
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
      },
      isSave: false
    }
  },
  watch: {
    isSave() {
      this.getContent()
    }
  },
  mounted() {
    console.log(process, process.BROWSER_BUILD)
    if (process.browser) {
    }
  },
  methods: {
    getContent: function(content) {
      if (process.browser) {
        console.log('this is aa:' + content.markdownValue, content.htmlValue)
      }
    },
    saveArticle() {
      console.log(this.$refs.markdown)
      this.$refs.markdown.handleSave()
      //this.getContent()
    }
  }
}
</script>
<style lang="scss">
.editor-container {
  padding-top: 30px;
  width: 90%;
  padding-left: 5%;
}
.editor-button {
  position: fixed;
  right: 12px;
  bottom: 20px;
}
.el-button {
  display: block;
}
.el-button + .el-button {
  margin-left: 0;
  margin-top: 5px;
}
html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
.layout-blank {
  background-color: #eee;
  height: 100%;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #dcdfe6;
}
.el-input__inner {
  height: 35px;
  line-height: 35px;
}
</style>
