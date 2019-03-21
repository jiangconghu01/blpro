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
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog :visible.sync="dialogFormVisible" title="收货地址">
      <el-form :model="formdata">
        <el-form-item :label-width="formLabelWidth" label="活动名称">
          <el-input v-model="formdata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" label="活动区域">
          <el-select v-model="formdata.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      isSave: false,
      dialogFormVisible: false,
      formdata: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
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
        // this.$axios.get('/article/savearticle?a=33&b=77').then(a => {
        //   console.log(a)
        // })
        const title = this.form.title
        const tag = 'js'
        const markdownValue = content.markdownValue
        const htmlValue = content.htmlValue
        //const content =
        this.$axios
          .post('/article/savearticle', {
            title,
            tag,
            markdownValue,
            htmlValue
          })
          .then(res => {
            console.log(res)
            this.dialogFormVisible = true
          })
      }
    },
    saveArticle() {
      this.$refs.markdown.handleSave() //直接调用组件内部方法，参见组件源码
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
