<template>
  <div class="wrap-flow">
    <div class="order_checked">
      <div class="flow-item" :class="{'active': tab == '我所有申请'}">
        <flexbox>
          <flexbox-item :span="4">
            <group class="flex-demo" >
              <selector placeholder="选择模块" v-model="selectItem" :options="selectList"></selector>
            </group>
          </flexbox-item>
          <flexbox-item>
            <group class="flex-demo input-search" >
              <x-input :max="5" @on-change="inputChange" v-model="maxValue">
                <x-button slot="right" type="primary" mini>搜索</x-button>
              </x-input>
             </group>
          </flexbox-item>
        </flexbox>
        <div class="order_checked_body">
            <div class="order_checked_item">
                <div class="item-head">
                   <h3><img src="http://demo1.rockoa.com/upload/face/1.jpg" align="absmiddle">[事假]共7.0(0.88天)小时</h3>
                   <p>2019-10-10 14:55:18</p>
                </div>
                <p><em>模块：</em><span>请假条</span></p>
                <p><em>申请人：</em><span>管理员</span></p>
                <p><em>时间：</em><span class="date-time">2019-10-09 13:51:00→2019-10-09 20:51:00</span></p>
                <p><em>说明：</em><span>77</span></p>
                <div class="btn-group">
                    <input type="hidden" value="10" name="id">
                    <input class="btn_done" type="button" value="操作" @click="showAction">
                    <a onclick="" class="detail" href="###">详情&gt;&gt;</a>
                </div>
                <span class="item-status">待处理</span>
            </div>
            <div class="order_checked_item">
                <div class="item-head">
                   <h3><img src="http://demo1.rockoa.com/upload/face/1.jpg" align="absmiddle">[事假]共7.0(0.88天)小时</h3>
                   <p>2019-10-10 14:55:18</p>
                </div>
                <p><em>模块：</em><span>请假条</span></p>
                <p><em>申请人：</em><span>管理员</span></p>
                <p><em>时间：</em><span class="date-time">2019-10-09 13:51:00→2019-10-09 20:51:00</span></p>
                <p><em>说明：</em><span>77</span></p>
                <div class="btn-group">
                    <input type="hidden" value="10" name="id">
                    <input class="btn_done" type="button" value="操作" @click="showAction">
                    <a onclick="" class="detail" href="###">详情&gt;&gt;</a>
                </div>
            </div>
        </div>
      </div>
      <div class="flow-item" :class="{active: tab == '处理未通过'}">
        <flexbox>
          <flexbox-item :span="4">
            <group class="flex-demo" >
              <selector placeholder="选择模块" v-model="selectItem" :options="selectList"></selector>
            </group>
          </flexbox-item>
          <flexbox-item>
            <group class="flex-demo input-search" >
              <x-input :max="5" @on-change="inputChange" v-model="maxValue">
                <x-button slot="right" type="primary" mini>搜索</x-button>
              </x-input>
             </group>
          </flexbox-item>
        </flexbox>
        <div class="order_checked_body">
            <div class="order_checked_item">
                <div class="item-head">
                   <h3><img src="http://demo1.rockoa.com/upload/face/1.jpg" align="absmiddle">[事假]共7.0(0.88天)小时</h3>
                   <p>2019-10-10 14:55:18</p>
                </div>
                <p><em>模块：</em><span>请假条ddddddd</span></p>
                <p><em>申请人：</em><span>管理员</span></p>
                <p><em>时间：</em><span class="date-time">2019-10-09 13:51:00→2019-10-09 20:51:00</span></p>
                <p><em>说明：</em><span>77</span></p>
                <div class="btn-group">
                    <input type="hidden" value="10" name="id">
                    <input class="btn_done" type="button" value="操作" @click="showAction">
                    <a onclick="" class="detail" href="###">详情&gt;&gt;</a>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <sticky :check-sticky-support="false" :offset="46">
        <tab :line-width=1>
          <tab-item :selected="tab === item" v-for="(item, index) in tabItems" @click.native="activeTabItem(item)" :key="index">{{item}}</tab-item>
        </tab>
      </sticky>
    </div>
    <!-- 操作 -->
    <actionsheet
      v-model="isAction"
      :menus="actionMenu"
      @on-click-menu="actionClick"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
    <!-- 我所有申请 -->
    <actionsheet
      v-model="isApply"
      :menus="applyMenu"
      @on-click-menu="applyClick"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
    <!-- 流程申请 -->
    <actionsheet
      v-model="isWorkflow"
      :menus="workflowMenu"
      @on-click-menu="workflowClick"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
</div>
</template>
<script>
import { Flexbox, FlexboxItem, Selector, Group, XInput, XButton, Tabbar, TabbarItem, Tab, TabItem, Sticky, Actionsheet } from 'vux'
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Workflow',
  data () {
    return {
      selectItem: '',
      selectList: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      maxValue: '',
      tabItems: ['我所有申请', '处理未通过', '流程申请'],
      tab: '我所有申请',
      isAction: false,
      actionMenu: {
        menu1: '详情',
        menu2: '编辑',
        menu3: '删除'
      },
      isApply: false,
      applyMenu: {
        menu1: '未通过',
        menu2: '已完成',
        menu3: '待处理',
        menu4: '抄送给我'
      },
      isWorkflow: false,
      workflowMenu: {
        menu1: '请假条',
        menu2: '调课'
      }
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
    Sticky,
    Actionsheet
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
    this.setTitle('工作流')
    console.log(this.cookiesObj)
  },
  methods: {
    log () {},
    inputChange () {},
    showAction () {
      this.isAction = true
    },
    activeTabItem (item) {
      this.tab = item
      if (item == '我所有申请') {
        this.isApply = true
      }
      if (item == '流程申请') {
        this.isWorkflow = true
      }
    },
    actionClick () {},
    applyClick () {},
    workflowClick () {}
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
  .date-time{
    line-height: 22px;
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
    padding: 6px 5px;
  }
  .flow-item{
    display: none;
  }
  .active{
    display: block !important;
  }
  .item-status{
    position:absolute;
    right: 0;
    top: 0;
    height: 20px;
    line-height: 20px;
    font-size: 12px !important;
    background: #1AAD19;
    color: #fff !important;
    text-align: center;
    border: none;
    padding: 0 6px;
  }
}
</style>
