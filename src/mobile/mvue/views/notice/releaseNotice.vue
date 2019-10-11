<template>
  <div class="releaseNotice">
    <div class="serch_infrom">
      <ul>
        <li>
          <p>通知公告标题：</p>
          <input type="text" class="tit" placeholder="输入标题" v-model.trim="title" />
        </li>
        <span style="color: red;" v-show="isShowTitle">请输入通知公告标题</span>
        <li class="check">
          <p>通知公告类型：</p>
          <checker
            v-model="isChecked"
            default-item-class="demo5-item"
            selected-item-class="demo5-item-selected"
          >
            <checker-item value="0">发布学校通知</checker-item>
          </checker>
        </li>
        <span style="color: red" v-show="isShowType">请选择公告类型</span>
        <li>
          <p>通知公告内容：</p>
          <textarea placeholder="请输入内容" v-model="content"></textarea>
        </li>
        <span style="color: red;" v-show="isShowContent">请输入通知公告内容</span>
      </ul>
    </div>
    <div class="serch_ss" @click="publication">确定发布</div>
    <toast
      v-model="showPositionValue"
      type="success"
      :time="2000"
      is-show-mask
      :text="text"
      position="default"
    ></toast>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { Checker, CheckerItem, Toast } from 'vux'
export default {
  name: 'releaseNotice',
  components: {
    Checker,
    CheckerItem,
    Toast
  },
  data () {
    return {
      title: '',
      content: '',
      isChecked: '',
      isShowTitle: false,
      isShowType: false,
      isShowContent: false,
      showPositionValue: false,
      text: '发布成功'
    }
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
    this.setTitle('发布通知')
    console.log(this.cookiesObj)
  },
  methods: {
    publication () {
      if (this.title == '') {
        this.isShowTitle = true
        return false
      }
      if (this.isChecked == '') {
        this.isShowType = true
        return false
      }
      if (!this.content.length) {
        this.isShowContent = true
        return false
      }
      let params = {
        schoolId: this.cookiesObj.schoolId,
        title: this.title,
        // content: encodeURI(this.ruleForm.postContent),
        content: this.content,
        typeCode: this.isChecked,
        announcer: this.cookiesObj.loginUserId
      }
      let paramsNew = {
        data: JSON.stringify(params)
      }
      this.$store.dispatch('notice/AddNoticeV2', paramsNew).then(res => {
        let result = JSON.parse(res)
        console.log(result)
        if (result.Code === 200) {
          this.showPositionValue = true
          this.title = ''
          this.isChecked = ''
          this.content = ''
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import url("./css/mobileSelect.css");
@import url("./css/shijian.css");
@import url("./css/public.css");
@import url("./css/inform.css");
.releaseNotice {
  .demo5-item {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
  }
  .demo5-item-selected {
    // background: #ffffff url(./img/91.png) no-repeat right bottom;
    background: #ffffff no-repeat right bottom;
    border-color: #ff4a00;
    // border-color: green;
  }
}
</style>
