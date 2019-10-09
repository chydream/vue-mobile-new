import router from '../Router'
import { ConfirmPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ConfirmPlugin)
/* eslint-disable */
export default {
  browser: {
    // function expression could be unwrapped
    versions: function () {
      var u = navigator.userAgent
      return {
        trident: u.indexOf('Trident') > -1, // IE内核
        presto: u.indexOf('Presto') > -1, // opera内核
        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
        gecko: u.indexOf('Firefox') > -1, // 火狐内核Gecko
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android
        iPhone: u.indexOf('iPhone') > -1, // iPhone
        iPad: u.indexOf('iPad') > -1, // iPad
        webApp: u.indexOf('Safari') > -1 // Safari
      }
    }
  },
  initData (token, userId, url) {
    localStorage.setItem('accessToken', token)
    localStorage.setItem('userId', userId)
    localStorage.setItem('baseUrl', url)
  },
  goBack () {
    var home = document.querySelector('#homeWrap')
    if (null !== home) {
      if (home.value === 'record') {
        this.$vux.confirm.show({
          // 组件除show外的属性
          title: '提示',
          content: '确定要离开吗？',
          onCancel () {
          },
          onConfirm () {
            router.go(-1)
          }
        })
      } else {
        window.webkit.messageHandlers.NativeMethod.postMessage('我要调用native的方法')
      }  
    } else {
      router.go(-1)
    }
  },
  goAndroidBack () {
    var home = document.querySelector('#homeWrap')
    if (null !== home) {
      myWebViewSecond.goBack()
    } else {
      router.go(-1)
    }
  },
  updateTitle (title) {
    window.webkit.messageHandlers.updateTitle.postMessage(title)
  },
  updateAndroidTitle (title) {
    myWebViewSecond.updateTitle(title)
  },
  setTitle (title) {
    var result = this.browser.versions()
    console.log()
    if (result.android) {
      this.updateAndroidTitle(title)
    } else {
      this.updateTitle(title)
    }
  }
}
