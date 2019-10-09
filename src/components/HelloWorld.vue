<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 style="font-size: 16px; text-align: center;">{{ $t("message.hello") }}</h1>
    <el-button @click.native="changeType('zh')">切换中文dddd</el-button>
    <el-button @click.native="changeType('en')">切换英文</el-button>
    <i class="fa fa-address-book"></i>
    <span>{{JSON.stringify(obj)}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: [{id: 1}]
    }
  },
  created () {
    // this.$alert({message: 'ni hao111'})
    this.$set(this.obj, 0, {id: 2, name: 2})
  },
  methods: {
    changeType (params) {
      localStorage.setItem('locale', params)
      this.$i18n.locale = params
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
$color:red;
div {color:$color;}
</style>
