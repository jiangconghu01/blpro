<template>
  <div>
    <div ref="editor" style="text-align:left;"></div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data() {
    return {
      editorContent: ''
    }
  },
  mounted() {
    console.log(process, process.BROWSER_BUILD)
    if (process.browser) {
      var E = require('wangeditor')
      var editor = new E(this.$refs.editor)
      editor.customConfig.uploadImgShowBase64 = true
      editor.customConfig.menus = [
        //'head', // 标题
        //'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        //'italic', // 斜体
        //'underline', // 下划线
        //'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        //'list', // 列表
        //'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        //'table', // 表格
        'video', // 插入视频
        'code', // 插入代码
        'undo', // 撤销
        'redo' // 重复
      ]
      editor.customConfig.onchange = html => {
        this.editorContent = html
      }
      editor.create()
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
