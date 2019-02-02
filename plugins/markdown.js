import Vue from 'vue'
import MarkDown from 'vue-meditor'
const markdown = {
  install: function(Vue) {
    Vue.component('MarkDown', MarkDown)
  }
}
export default () => {
  Vue.use(markdown)
}
