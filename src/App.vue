<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      // this.handleLoading(2000)
    }
  }
}
</script>

<style lang="less">
@import url('./style/reset.css');
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
}
body .el-table th.gutter {
  display: table-cell !important;
}
.wrap-flow{
  .weui-select{
    height: 42px;
    line-height: 42px;
    font-size: 14px;
  }
}
</style>
