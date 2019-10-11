<template>
  <div class="inquiryNotice">
    <div class="serch_infrom">
      <ul>
        <li>
          <p>查询范围：</p>
          <!-- <span class="sel_span" id="trigger1"></span> -->
          <popup-picker
            title
            :data="list"
            v-model="value"
            @on-show="onShow"
            @on-hide="onHide"
            @on-change="onChange"
            placeholder="请选择查询范围"
          ></popup-picker>
        </li>
        <li>
          <p>发布时间：</p>
          <input type="text" id="input_start" placeholder="请选择时间" />
          <label>-</label>
          <input type="text" id="input_end" placeholder="请选择时间" />
        </li>
      </ul>
    </div>
    <div class="serch_ss" @click="submit">提交查询</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { PopupPicker } from 'vux'
export default {
  name: 'inquiryNotice',
  components: {
    PopupPicker
  },
  data () {
    return {
      value: [],
      list: [['全部', '未读', '已读']]
    }
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
    this.setTitle('通知查询')
    console.log(this.cookiesObj)
  },
  methods: {
    submit () {
      this.$router.push('/notice/searchResult')
    },
    onChange (val) {
      console.log('val change', val)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    }
  }
}
</script>
<style lang="less" scoped>
@import url("./css/mobileSelect.css");
@import url("./css/shijian.css");
@import url("./css/public.css");
@import url("./css/inform.css");
.inquiryNotice {
  .vux-cell-box {
    padding-right: 0.12rem;
    // display: inline-block;
    width: 6.58rem;
    height: 0.74rem;
    line-height: 0.74rem;
    border: 0.01rem solid #c1c1c1;
  }
  .vux-popup-picker-select {
    text-align: center;
  }
}
</style>
