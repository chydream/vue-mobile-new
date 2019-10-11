<template>
  <div class="edit-leave">
    <group>
      <x-input title='请假人' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='请假类型' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='开始时间' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='截止时间' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='时间(小时)' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='剩余考勤统计' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='请假天数' :max="5" @on-change="change" v-model="maxValue"></x-input>
      <x-input title='说明' :max="5" @on-change="change" v-model="maxValue"></x-input>
    </group>
     <x-button type="primary" style="margin:15px auto;width:95%">提交</x-button>
  </div>
</template>
<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      maxValue: ''
    }
  },
  methods: {
    change () {}
  },
  created () {
     this.setTitle('请假条')
  }
}
</script>
<style lang="less">

</style>
