<template>
    <div class="home-wrap">
      <div class="home-item">
        <group-title>应用</group-title>
        <div class="item-body">
          <grid :show-lr-borders="false" :cols="4">
            <grid-item :label="item.name" v-for="(item,index) in items" :key="index" :link="item.url">
              <i :class="item.icon" slot="icon" style="font-size:28px;"></i>
            </grid-item>
          </grid>
        </div>
      </div>
    </div>
</template>
<script>
import { Grid, GridItem, GroupTitle } from 'vux'
export default {
    name: 'Home',
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    data () {
      return {
        grid: '111',
        items: [
          {icon: 'fa fa-envelope-o', name: '邮件'},
          {icon: 'fa fa-commenting-o', name: '通知公告'},
          {icon: 'fa fa-file-text-o', name: '工作流', url: '/workflow/index'},
          {icon: 'fa fa-wpforms', name: '考勤'},
          {icon: 'fa fa-inbox', name: '工资条'}
        ]
      }
    },
    created () {
        this.setTitle('首页')
    },
    mounted () {
    },
    computed: {
    },
    methods: {
    }
}
</script>
<style lang="less">
.home-wrap{
  height: auto!important;
  margin-top: 2px;
  // padding: 10px 0;
  .list-home li{
      height: 30px;
      line-height: 30px;
  }
  .weui-grid__icon{
    text-align: center;
  }
  .item-body{
    background: #fff;
  }
}
</style>
