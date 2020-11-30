import Vue from 'vue'

//说明：
//使用：在需要添加动画的元素上添加 myAnim='xxx'属性
//其他属性    myTime：动画时间  myDelay：动画延迟 myTarget:由父元素触发动画（id选择器）
//动画选项 :flip l2r r2l zoomIn fade spinIn
const animateScroll = function() {
  //0.8 为添加动画元素的顶部距离屏幕顶部的距离 单位%  即动画何时触发
  var perc = 0.8

  var spinInList = document.querySelectorAll("[myAnim='zoomIn']")

  //防止在浏览到页面中部点击刷新网页时，如果不滚动页面会出现空白内容
  //   $(document).ready(function() {
  //     var scrollEvent = new Event('scroll')
  //     window.dispatchEvent(scrollEvent)
  //   })
  function dis() {
    var scrollEvent = new Event('scroll')
    window.dispatchEvent(scrollEvent)
  }
  function ready(fn) {
    if (document.addEventListener) {
      //标准浏览器
      document.addEventListener(
        'DOMContentLoaded',
        function() {
          //注销时间，避免重复触发
          document.removeEventListener('DOMContentLoaded')
          fn() //运行函数
        },
        false
      )
    } else if (document.attachEvent) {
      //IE浏览器
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState == 'complete') {
          document.detachEvent('onreadystatechange')
          fn() //函数运行
        }
      })
    }
  }

  // 初始化添加了自定义动画的css
  window.addEventListener('scroll', function() {
    console.log('dsds')
    if (spinInList.length > 0) {
      Array.prototype.forEach.call(spinInList, function(ele) {
        if (isInscreen(ele, perc)) {
          ele.classList.add('zoomIn')
        }
      })
    }
  })

  function isInscreen(ele, perc) {
    if (ele == undefined) return false
    // 元素距离可视窗口的顶部的距离
    var boxTop
    boxTop = ele.getBoundingClientRect().top
    // 窗口的总高度
    var screenHeight = window.screen.availHeight
    var realPenc = boxTop / screenHeight
    if (realPenc < perc) {
      return true
    }
    return false
  }
  //ready(dis)
  dis()
}

Vue.prototype.$aniscoll = animateScroll
