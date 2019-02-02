<template>
  <div>
    <mark-down></mark-down>
  </div>
</template>

<script>
import MarkDown from 'vue-meditor'
export default {
  name: 'Editor',
  components: {
    MarkDown
  },
  data() {
    return {
      editorContent: ''
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
