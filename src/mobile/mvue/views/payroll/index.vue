<template>
  <div class="payroll">
    <group :title="title">
      <datetime
        :title="dateTime"
        v-model="value"
        @on-change="change"
        @on-cancel="cancel"
        @on-confirm="onConfirm"
      ></datetime>
    </group>
    <!-- v-show="this.salaryList.length > 0" -->
    <div class="payroll-body" v-show="isShowList">
      <h3>
        <span>{{this.value}}</span> &nbsp; &nbsp;
        <span>工资明细</span>
      </h3>
      <ul v-for="(item,key,index) in salaryList" :key="index">
        <li>
          <span class="fl leftCul">{{key}}</span>
          <span class="fr">{{item}}</span>
        </li>
      </ul>
    </div>
    <p class="leftCul" v-show="isShowMore">无更多信息~</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { Datetime, Group } from 'vux'
export default {
  name: 'payroll',
  components: {
    Datetime,
    Group
  },
  data () {
    return {
      title: '工资查询',
      dateTime: '选择日期',
      value: '',
      teacherId: '',
      salaryList: {},
      isShowList: false,
      isShowMore: false
    }
  },
  computed: {
    ...mapGetters(['cookiesObj', 'cookieStart'])
  },
  mounted () {
    this.setTitle('工资条')
    this.teacherId = this.cookiesObj.teacherId
  },
  methods: {
    change (val) {
      console.log('change', val)
      this.onConfirm(val)
    },
    onConfirm (val) {
      let time = val.slice(0, 7)
      this.value = time
      let params = {
        month: time,
        teachId: this.teacherId
      }
      this.$store.dispatch('payroll/GetTeachsalarydetaileds', params).then(res => {
        let result = JSON.parse(res)
        console.log(result)
        if (result.Code == '200') {
          this.salaryList = result.Data
          if (this.salaryList) {
            this.isShowList = true
            this.isShowMore = false
          }
        } else {
          this.salaryList = {}
          this.isShowList = false
          this.isShowMore = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    cancel () {
      console.log('取消')
    }
  }
}
</script>
<style lang="less" scoped>
.payroll {
  padding: 0;
  /deep/ .weui-cells__title {
    font-size: 16px;
    padding-bottom: 10px;
    color: #000;
  }
  /deep/ .weui-cells {
    font-size: 14px;
  }
  .payroll-body {
    padding: 10px 40px;

    ul {
      font-size: 15px;
      overflow: hidden;
    }
    li {
      padding-top: 10px;
    }
    .leftCul {
      color: rgba(165, 162, 162, 0.87);
    }
  }
  p {
    &.leftCul {
      padding: 30px 0 0 40px;
    }
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
}
</style>
