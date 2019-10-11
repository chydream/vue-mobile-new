<template>
<div class="layout">
   <div class="layout-header">
      <!-- <div>{{title}}</div>
      <span @click="logout">登出</span> -->
      <x-header :left-options="leftOptions" style="background:#fff;">
        <span class="title">{{title}}</span>
      </x-header>
   </div>
   <div class="layout-main">
    <transition name="fade">
      <keep-alive include="writeEmail">
        <router-view></router-view>
      </keep-alive>
    </transition>
   </div>
   <div class="layout-footer" v-if="!leftOptions.showBack">
    <tabbar>
      <tabbar-item selected>
        <i class="fa fa-comment-o" slot="icon"></i>
        <span slot="label">会话</span>
      </tabbar-item>
      <tabbar-item>
        <i class="fa fa-bars" slot="icon"></i>
        <span slot="label">应用</span>
      </tabbar-item>
      <tabbar-item>
        <i class="fa fa-user" slot="icon"></i>
        <span slot="label">联系人</span>
      </tabbar-item>
      <tabbar-item>
        <i class="fa fa-cog" slot="icon"></i>
        <span slot="label">更多</span>
      </tabbar-item>
    </tabbar>
   </div>
</div>
</template>
<script>
import {mapGetters} from 'vuex'
import { XHeader, Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  data () {
    return {
      msg: '123'
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader
  },
  computed: {
    ...mapGetters(['title']),
    leftOptions () {
      // console.log(this.$route.path)
      return {
        showBack: this.$route.path !== '/home/index'
      }
    }
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
    border-bottom: 1px solid #f2f2f2;
    // height: 40px;
    // line-height: 40px;
    // background: #f6f6f6;
  }
  .layout-header span{
      // position: absolute;
      // right: 0;
      // top: 0;
  }
  .title{
    color: #000;
    font-size: 16px;
  }
  .layout-main{
    padding: 47px 0 53px;
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
    // height: 40px;
    // line-height: 40px;
    // background: #f6f6f6;
  }
  .weui-tabbar{
    background-color: #fff;
  }
}
</style>
