<template>
  <div class="wrap-flow">
    <!-- <span slot="topLeft">111</span> -->
    <div class="order_checked">
        <flexbox>
          <flexbox-item :span="4">
            <group class="flex-demo" >
              <selector placeholder="请选择省份" v-model="demo02" :options="list"></selector>
            </group>
          </flexbox-item>
          <flexbox-item>
            <group class="flex-demo input-search" >
              <x-input :max="5" @on-change="change" v-model="maxValue">
                <x-button slot="right" type="primary" mini>搜索</x-button>
              </x-input>
             </group>
          </flexbox-item>
        </flexbox>
        <!-- <div class="order_checked_head">预约记录总共有：<span style="color:red;">12</span>条</div> -->
        <div class="order_checked_body">
            <div class="order_checked_item">
                <div class="item-head">
                   <h3><img src="http://demo1.rockoa.com/upload/face/1.jpg" align="absmiddle">[事假]共7.0(0.88天)小时</h3>
                   <p>2019-10-10 14:55:18</p>
                </div>
                <p><em>模块：</em><span>请假条</span></p>
                <p><em>申请人：</em><span>管理员</span></p>
                <p><em>时间：</em><span>2019-10-09 13:51:00→2019-10-09 20:51:00</span></p>
                <p><em>说明：</em><span>77</span></p>
                <div class="btn-group">
                    <input type="hidden" value="10" name="id">
                    <input class="btn_done" type="button" value="操作">
                    <a onclick="" class="detail" href="###">详情&gt;&gt;</a>
                </div>
            </div>
            <!-- <div class="order_checked_item">
                <p><em>预约姓名：</em><span>张三</span></p>
                <p><em>身份证号：</em><span>351119197002022150</span></p>
                <p><em>预约目的：</em><span>龙岩地委调查工作组</span></p>
                <p><em>预约时间：</em><span>19540608</span></p>
                <p><em>预约详情：</em><span>龙岩地委调查工作组龙岩地委调查工作组龙岩地委调查工作</span></p>
                <div class="btn-group">
                    <input type="hidden" value="12" name="id">
                    <input class="btn_done" type="button" value="处理">
                </div>
            </div> -->
        </div>
    </div>
    <div class="footer">
      <!-- <tabbar>
        <tabbar-item selected>
          <i class="fa fa-comment-o" slot="icon"></i>
          <span slot="label">我所有申请</span>
        </tabbar-item>
        <tabbar-item>
          <i class="fa fa-bars" slot="icon"></i>
          <span slot="label">处理未通过</span>
        </tabbar-item>
        <tabbar-item>
          <i class="fa fa-user" slot="icon"></i>
          <span slot="label">流程申请</span>
        </tabbar-item>
      </tabbar> -->
      <sticky :check-sticky-support="false" :offset="46">
        <tab :line-width=1>
          <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
        </tab>
      </sticky>
    </div>
</div>
</template>
<script>
import { Flexbox, FlexboxItem, Selector, Group, XInput, XButton, Tabbar, TabbarItem, Tab, TabItem, Sticky } from 'vux'
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: '111',
      demo02: '',
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      maxValue: '',
      list4: ['我所有申请', '处理未通过', '流程申请'],
      demo4: '流程申请'
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Group,
    Selector,
    XInput,
    XButton,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    Sticky
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
     this.setTitle('工作流')
    console.log(this.cookiesObj)
  },
  methods: {
    change () {}
  }
}
</script>
<style lang="less" scoped>
.wrap-flow{
  /*预约审批*/
  .order_checked{
      margin-left: 3%;
      margin-right: 3%;
      padding-bottom: 20px;
      width: 94%;
      overflow: hidden;
  }
  .order_checked_head{
      height: 40px;
      line-height: 40px;
      text-indent: 15px;
      font-size: 14px;
      background: #fff;
      margin-top: 10px;
  }
  .order_checked_body{
      font-size: 14px;
      color: #434343;
  }
  .order_checked_body .order_checked_item{
      padding: 20px 15px;
      background: #fff;
      line-height: 30px;
      overflow: hidden;
      margin-top: 10px;
      position: relative;
  }

  .order_checked_body .order_checked_item em{
      width: 85px;
      color: #222;
      display: block;
      float: left;
      letter-spacing: 1px;
  }
  .order_checked_body .order_checked_item span{
      margin-left: 85px;
      color: #555;
      display: block;
      font-size: 13px;
  }
  .btn-group{
      border-top: 1px solid #f5f5f5;
      text-align: left;
      margin-top: 10px;
      padding-top: 10px;
      position: relative;
  }
  .btn-group p{
      background-color: #ccc;
      padding: 4px 0px 6px;
      text-align: center;
      margin-bottom: 6px;
  }
  .detail{
    color: #3D8EDB;
    font-size: 14px;
    padding-top: 7px;
    position:absolute;
    right: 10px;
    top: 5px;
  }
  .oAgree{
      border: 1px solid #80c269;
      padding: 0px 10px;
      position: absolute;
      right: 15px;
      top:15px;
      color: #80c269;
      transform:rotate(30deg);
      -webkit-transform:rotate(30deg);
      -moz-transform:rotate(30deg);
      -ms-transform:rotate(30deg);
      -o-transform:rotate(30deg);
  }
  .oDec{
      border: 1px solid #f19ec2;
      padding: 0px 10px;
      position: absolute;
      right: 15px;
      top:15px;
      color: #f19ec2;
      transform:rotate(30deg);
      -webkit-transform:rotate(30deg);
      -moz-transform:rotate(30deg);
      -ms-transform:rotate(30deg);
      -o-transform:rotate(30deg);
  }
  .btn-text{
      height: 25px;
      line-height: 25px;
      width: 94%;
      border-radius: 3px;
      border: 1px solid #ccc;
      text-indent: 4px;
  }
  .btn-send{
      height: 25px;
      line-height: 25px;
      width: 40px;
      border-radius: 3px;
      border: 1px solid #ccc;
      margin-left: 10px;
      font-size: 12px;
      color: #555;
  }
  .btn_idea,.btn_refuse,.btn_agree,.btn_sub{
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      width: 45px;
      background: #f19ec2;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      border: none;
      margin:0px 3px 0px 0px;
  }
  .btn_done{
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      width: 70px;
      background: #ff6647;
      color: #fff;
      text-align: center;
      border-radius: 3px;
      border: none;

  }
  .model{
      position:fixed;
      z-index:100;
      left:0px;
      top:0px;
      background:#e7e7e7;
      width:100%;
      height:100%;
  }
  .model_form{
      position: absolute;
      top:60px;
      left:0px;
      z-index: 1000;
      margin-left: 3%;
      margin-right: 3%;
      width: 94%;
  }
  .model ul li{
      width: 100%;
      height: 40px;
      text-align: center;
      margin-bottom: 10px;
      font-size: 14px;
      background: #fff;
  }
  .model ul li input[type='radio']{
      width: 10%;
      line-height: 40px;
      display: none;
  }
  .model ul li label{
      width: 100%;
      height: 40px;
      display: inline-block;
      line-height: 40px;
      color: #a7a7a7;
      letter-spacing: 10px;
  }
  .model ul li input[type='radio']:checked+label{
      background: #3498db;
      color: #fff;
  }
  .model ul li input[type='text']{
      height: 20px;
      line-height: 20px;
      width: 100%;
      padding: 10px 0;
      text-indent: 7px;
  }
  .model ul li input[type='submit']{
      height: 40px;
      line-height: 40px;
      width: 100%;
      background: #ff6647;
      color: #fff;
      letter-spacing: 10px;
      font-size: 14px;
  }
  .item-head h3 {
    font-weight: normal;
    font-size: 15px;
  }
  .item-head h3 img{
    border-radius: 15px;
    height: 24px;
    width: 24px;
    margin-right: 5px;
  }
  .item-head p{
    font-size: 12px;
    color: #aaaaaa;
    margin-top: -2px;
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    // height: 40px;
    // line-height: 40px;
    // background: #f6f6f6;
  }
  .input-search .weui-cell{
    padding: 7px 15px;
  }
  .weui-select{
    font-size: 14px;
  }
}
</style>
