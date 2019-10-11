<template>
  <div class="notice">
    <loading :show="showLoading" text></loading>
    <div class="nav_bk">
      <!-- <span>
        <a href="javascript:;" @click="inquiryNotice">通知查询</a>
      </span>-->
      <span>
        <a href="javascript:;" @click="releaseNotice">发布通知</a>
      </span>
    </div>
    <!-- 搜索 -->
    <flexbox>
      <flexbox-item :span="6">
        <group>
          <datetime
            :title="startTitle"
            v-model="startTime"
            @on-change="startChange"
            @on-cancel="startCancel"
            @on-confirm="startOnConfirm"
          ></datetime>
        </group>
      </flexbox-item>
      <flexbox-item :span="6">
        <group>
          <datetime
            :title="endTitle"
            v-model="endTime"
            @on-change="endChange"
            @on-cancel="endCancel"
            @on-confirm="endOnConfirm"
          ></datetime>
        </group>
      </flexbox-item>
    </flexbox>

    <flexbox>
      <flexbox-item :span="4">
        <group class="flex-demo">
          <selector
            placeholder="选择状态"
            v-model="demo02"
            :options="options"
            @on-change="changeStatus"
          ></selector>
        </group>
      </flexbox-item>
      <flexbox-item>
        <group class="flex-demo input-search">
          <x-input :max="5" v-model="noticeTitle" placeholder="请输入通告标题">
            <x-button slot="right" type="primary" mini @click="searchList">搜索</x-button>
          </x-input>
        </group>
      </flexbox-item>
    </flexbox>
    <!-- 列表 -->
    <div class="inform_list" id="downLoad">
      <ul v-for="(item, index) in tableData" :key="item.Id">
        <li>
          <p>{{item.Title}}</p>
          <h2>
            <span>
              <img class="person" src="./img/person.png" />
              <label>{{item.AnnouncerName}}</label>
            </span>
            <span>
              <img class="time" src="./img/time.png" />
              <label>{{item.AnnounceTime}}</label>
            </span>
            <span class="read" v-show="isShowRead">未读</span>
            <img class="jian" :src="src" @click="readNotice(index, item.Id)" />
            <!-- <img v-else class="jian" src="./img/arrow-shang.png" /> -->
          </h2>
          <div class="inform_detail" v-show="isShowContent === index" v-html="content"></div>
        </li>
      </ul>
      <load-more :tip="loadTip" :show-loading="loading"></load-more>
    </div>

    <!-- <div class="more_btn">
      <span>查看更多</span>
      <img src="./img/xia_jian.png" />
    </div>-->
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { LoadMore, Loading, Datetime, Flexbox, FlexboxItem, Selector, Group, XInput, XButton } from 'vux'
export default {
  name: 'notice',
  components: {
    LoadMore,
    Loading,
    Datetime,
    Flexbox,
    FlexboxItem,
    Group,
    Selector,
    XInput,
    XButton
  },
  data () {
    return {
      showLoading: false,
      isShowRead: true,
      isShowContent: -1,
      src: require('./img/arrow_xia.png'),
      tableData: [],
      content: '',
      page: 1,
      pageSize: 5,
      total: 5,
      loading: false,
      loadTip: '正在加载',
      value: [],
      list: [['全部', '未读', '已读']],
      searchTitle: '查询范围',
      startTitle: '开始时间',
      endTitle: '结束时间',
      startTime: '',
      endTime: '',
      demo02: '',
      options: [{ key: '0', value: '全部' }, { key: '1', value: '已读' }, { key: '2', value: '未读' }],
      noticeTitle: '',
      readstatic: ''
    }
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])

  },
  mounted () {
    this.setTitle('通知公告')
    this.refreshData()
    console.log(this.cookiesObj)
  },
  methods: {
    // 跳转到发布通知
    releaseNotice () {
      this.$router.push('/notice/releaseNotice')
    },
    // 查询时间
    startChange (val) {
      console.log('change', val)
      this.startOnConfirm(val)
      this.startTime = val
    },
    startOnConfirm (val) {
      console.log('确定', val)
      this.startTime = val
    },
    startCancel () {
      console.log('取消')
    },
    endChange (val) {
      console.log('change', val)
      this.endOnConfirm(val)
      this.endTime = val
    },
    endOnConfirm (val) {
      console.log('确定', val)
      this.endTime = val
    },
    endCancel () {
      console.log('取消')
    },
    // 查询范围
    changeStatus (val) {
      console.log(val)
      this.readstatic = val
    },
    // 搜素
    searchList () {
      this.handleList()
    },
    // 通知列表模块
    readNotice (index, id) {
      this.isShowRead = false
      if (this.isShowContent === index) {
        this.isShowContent = -1
        this.src = require('./img/arrow-shang.png')
      } else {
        this.isShowContent = index
        this.src = require('./img/arrow_xia.png')
      }
      let params = {
        id: id,
        type: 'edit'
      }
      let paramsNew = {
        data: JSON.stringify(params)
      }
      this.$store.dispatch('notice/EditNotice', paramsNew).then(res => {
        let result = JSON.parse(res)
        if (result.Code === 200) {
          let msg = JSON.parse(result.Msg)
          this.content = msg.Content
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // 下拉加载
    refreshData () {
      var self = this
      var downLoad = document.getElementById('downLoad')
      downLoad.addEventListener('scroll', function (ev) {
        var height = this.offsetHeight
        var scrollTop = this.scrollTop
        var scrollHeight = this.scrollHeight
        if (height + scrollTop > scrollHeight - 20) {
          if (self.page < self.total) {
            if (!self.loading) {
              self.page += 1
              self.loading = true
              self.loadTip = '加载中'
              self.getNodeList(self.page)
            }
          }
        }
      })
    },
    getNodeList (page) {
      var self = this
      setTimeout(() => {
        var arr = []
        for (var i = 0; i < 5; i++) {
          arr.push({ str: 'eeeeeee' + page })
        }
        self.listArr = this.listArr.concat(arr)
        self.loading = false
        self.loadTip = '已到底部'
      }, 500)
    },
    // 根据标题，时间等获取列表
    handleList () {
      this.showLoading = true
      let params = {
        title: this.noticeTitle,
        schoolId: this.cookiesObj.schoolId,
        startTime: this.startTime,
        endTime: this.endTime,
        readstatic: this.readstatic,
        type: 0,
        userId: this.cookiesObj.loginUserId,
        page: this.page,
        size: this.pageSize
      }
      this.$store.dispatch('notice/GetNoticeListV2', params).then(res => {
        let result = JSON.parse(res)
        console.log(result)
        if (result.Code == '200') {
          // let msg = JSON.parse(result.Msg)
          // console.log(msg)
          // this.tableData = msg.List
          // this.total = msg.Count
        }
        this.showLoading = false
      }).catch(err => {
        console.log(err)
        this.showLoading = false
      })
    }
  }
}
</script>
<style lang="less">
// @import url("./css/mobileSelect.css");
// @import url("./css/shijian.css");
// @import url("./css/public.css");
@import url("./css/inform.css");
.notice {
  overflow: hidden;
  .inform_detail {
    display: block;
    // transition: all 2s linear;
  }
  .inquiryNotice {
    padding-bottom: 20px;
  }
  .weui-cells {
    font-size: 15px;
  }
}
</style>
