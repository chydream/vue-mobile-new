<template>
<div class="layout">
   <div class="layout-header">
      <div>{{title}}</div>
      <span @click="logout">登出</span>
   </div>
   <div class="layout-main">
    <transition name="fade">
        <router-view></router-view>
    </transition>
   </div>
   <div class="layout-footer">
      <div>footer</div>
   </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: '123'
    }
  },
  computed: {
    ...mapGetters(['title'])
  },
  created () {
  },
  mounted () {
  },
  methods: {
    logout () {
      this.showConfirm('提示', '确定要退出吗？', () => {
          this.$store.dispatch('mobileUser/Logout').then(res => {
              if (res.success) {
                  this.$router.push('/')
              } else {
                  this.showToast(res.message)
              }
          })
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout{
  width: 100%;
  height: 100%;
  .layout-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #f6f6f6;
  }
  .layout-header span{
      position: absolute;
      right: 0;
      top: 0;
  }
  .layout-main{
    padding: 40px 0;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .layout-main>div{
    width:100%;
    height:100%;
    overflow-y:auto;
    box-sizing: border-box;
  }
  .layout-footer{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #f6f6f6;
  }
}
</style>
