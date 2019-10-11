<template>
  <div class="searchResult">
    <div class="inform_list">
      <ul>
        <li>
          <p>关于期末安排的通知</p>
          <h2>
            <span>
              <img class="person" src="./img/person.png" />
              <label>刘昊然</label>
            </span>
            <span>
              <img class="time" src="./img/time.png" />
              <label>2018-11-10</label>
            </span>
            <span class="read" v-show="isShowRead">未读</span>
            <img class="jian" :src="src" @click="readNotice" />
          </h2>
          <div class="inform_detail" v-show="isShowContent">
            接教育局通知全体学生须参加第六届全国安全知识网络竞赛，此项大赛可通过电脑登录习网http://aqjs.ciwong.com参
            接教育局通知全体学生须参加第六届全国安全知识网络竞赛，此项大赛可通过电脑登录习网http://aqjs.ciwong.com参
            接教育局通知全体学生须参加第六届全国安全知识网络竞赛，此项大赛可通过电脑登录习网http://aqjs.ciwong.com参
          </div>
        </li>
      </ul>
    </div>

    <div class="more_btn">
      <span>查看更多</span>
      <img src="./img/xia_jian.png" />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'searchResult',
  data () {
    return {
      isShowRead: true,
      isShowContent: false,
      src: require('./img/arrow_xia.png')
    }
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
    this.setTitle('查询结果')
    console.log(this.cookiesObj)
  },
  methods: {
    readNotice () {
      this.isShowRead = false
      this.isShowContent = !this.isShowContent
      if (this.isShowContent) {
        this.src = require('./img/arrow-shang.png')
      } else {
        this.src = require('./img/arrow_xia.png')
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url("./css/public.css");
@import url("./css/inform.css");
.searchResult {
  .inform_detail {
    display: block;
    // transition: all 2s linear;
  }
}
</style>
