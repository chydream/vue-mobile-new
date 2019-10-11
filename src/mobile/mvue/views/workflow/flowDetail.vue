<template>
  <div class='flow-detail'>
    <div class='detail-item'>
      <div class='detail-top'>请假条</div>
      <div class='detail-bottom'>
        <div class='item-head'>
          <table class="detail-table">
            <tbody>
              <tr>
                <td width='50' align='left'><img src='http://demo1.rockoa.com/upload/face/1.jpg' /></td>
                <td>
                  <h3><span>管理员</span><em>(项目主管)</em></h3>
                  <p>信呼开发团队/开发部</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class='item-body'>
          <table class="flow-table">
            <tbody>
              <tr>
                <td class="text-right" nowrap><span class="tip">单号</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">KA-20191009-001</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">请假</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">请假</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">请假类型</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">事假</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">开始时间</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">2019-10-09 14:00:00</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">截止时间</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">2019-10-10 12:00:00</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">时间(小时)</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">7.0(0.88天)</span></td>
              </tr>
              <tr>
                <td class="text-right" nowrap><span class="tip">说明</span></td>
                <td style='color:#888888'>：</td>
                <td width='95%'><span class="tip-content">有事hhhh</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class='detail-item'>
      <div class='detail-top'>评论</div>
      <div class='detail-bottom'>
        <x-textarea :max="20" placeholder="请输入" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
        <x-button type="primary" mini class="submit-button">提交</x-button>
      </div>
    </div>
    <div class='detail-item'>
      <div class='detail-top'>流程信息</div>
      <div class='detail-bottom'>
        <table class="flow-info-table">
          <thead>
            <tr>
              <td>状态</td>
              <td>待处理</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>处理流程</td>
              <td>上级审核 → 人事审核</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class='detail-item'>
      <div class='detail-top'>处理记录(1)</div>
      <div class='detail-bottom do-record'>
        <table class="detail-table">
          <tbody>
            <tr>
              <td width='40' align='left'><img src='http://demo1.rockoa.com/upload/face/1.jpg' /></td>
              <td>
                <h3><span>管理员</span><em>[提交](2019-10-09 13:52:03)</em></h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class='detail-item'>
      <div class='detail-top'>查阅记录(1)</div>
      <div class='detail-bottom'>
        <ul class="read-list">
          <li>
            <p><img src="http://demo1.rockoa.com/upload/face/1.jpg"></p>
            <p class="read-info"><span>管理员</span></p>
          </li>
          <li>
            <p><img src="http://demo1.rockoa.com/upload/face/1.jpg"></p>
            <p class="read-info"><span>管理员</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { Panel, XInput, Group, XButton, Cell, XTextarea } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell,
    Panel,
    XTextarea
  },
  data () {
    return {
      type: '4',
      list: [
        {
          src: '',

          title: '标题一',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        },
        {
          src: '',
          title: '标题二',
          desc:
            '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }
      ]
    }
  },
  methods: {
    change () {},
    onImgError (item, $event) {
      // console.log(item, $event)
    },
    onEvent () {}
  },
  created () {
    this.setTitle('请假条')
  }
}
</script>
<style lang='less'>
.flow-detail {
  .detail-top {
    color: #888888;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background: #fbf9fe;
    text-indent: 14px;
  }
  .detail-bottom {
    font-size: 14px;
    color: #434343;
    padding: 15px 10px;
    background: #fff;
    line-height: 30px;
    overflow: hidden;
    position: relative;
  }
  .detail-table{
    width: 100%;
    table-layout: fixed;
    empty-cells: show;
    border-collapse: collapse;
  }
  .detail-table img{
    height:40px;
    width:40px;
    border-radius:50%;
  }
  .detail-table h3{
    height: 23px;
    line-height: 23px;
    font-size: 14px;
    font-weight: normal;
    margin-top: -5px;
  }
  .do-record img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  .do-record h3{
    margin-top: -17px;
  }
  .do-record h3 em{
    font-size: 12px;
    margin-left: 4px;
    color: #888;
  }
  .detail-table p{
    height: 23px;
    line-height: 23px;
    font-size: 13px;
  }
  .item-head{
    border-bottom: 1px solid #f5f5f5;
  }
  .tip{
    color:#888888;
    padding:3px 0px;
  }
  .tip-content{
    padding:3px 0px;
  }
  .text-right{
    text-align: right;
  }
  .flow-table td{
    height: 25px;
    line-height: 25px;
  }
  .weui-textarea{
    border: 1px solid #ccc;
  }
  .submit-button{
    position:absolute;
    left: 24px;
    bottom: 15px;
  }
  .flow-info-table{
    width: 100%;
    table-layout: fixed;
    empty-cells: show;
    border-collapse: collapse;
  }
  .flow-info-table td{
    border: 1px #e5e5e5 solid;
    padding: 0px 5px;
    font-size: 13px;
  }
  .flow-info-table thead td{
    background: rgb(225, 244, 240);
  }
  .flow-info-table td:nth-child(1){
    text-align: right;
    color: #555;
  }
  .read-list li img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    line-height: 30px;
  }
  .read-list li{
    display:inline-block;
    text-align: center;
    width: 45px;
    height: 45px;
    font-size: 12px;
    color: #888888;
  }
  .read-info{
    margin-top: -10px;
  }
}
</style>
