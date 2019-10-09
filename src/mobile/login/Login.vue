<template>
  <div class="log-wrap" :style="{ height: height + 'px' }">
    <form id="logForm" class="log-form">
      <div class="log-input">
        <i class="sicon-user"></i><input type="text" class="input-item" placeholder="请输入用户名" v-model="userName">
      </div>
      <div class="log-input">
        <i class="sicon-key"></i><input type="password" class="input-item" placeholder="请输入密码" v-model="userPwd">
      </div>
      <p class="text-right forgot"><a href="javascript:void(0)" id="forgotPassword">忘记密码？</a></p>
      <p class="text-center"><a href="javascript:void(0)" class="log-sub" id="logSub" @click="login">登录</a></p>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import md5 from 'blueimp-md5'
export default {
  data () {
    return {
      userName: '',
      userPwd: '',
      height: ''
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    login () {
			var params = {
        username: this.userName,
        password: this.userPwd
      }
      this.$store.dispatch('mobileUser/Login', params).then(res => {
        if (res.success) {
          this.$store.dispatch('mobileUser/GetUserInfo', res.data.token).then(res => {
            // console.log(res)
            if (res.success) {
              this.$router.push('/home/index')
            }
          })
        } else {
          this.showToast('登录失败')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
/* login */
::-webkit-input-placeholder { /* WebKit browsers */
    color:#e4fcee;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#e4fcee;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#e4fcee;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:#e4fcee;
}
.text-center {
    text-align: center;
}
.text-right {
    text-align: right;
}
.log-wrap{
	background: url(http://www.qinimai.com/backend/web/statics/metronic/imgs/7.jpg);
	width: 100%;
	height: 100%;
	background-size:cover;	
}
.logo img{
	width: 79.81px;	
	height: 79.81px;
	margin-top: 105.8px;
	margin-bottom: 124.2px;
}
.sicon-user{
	width: 26.909999999999997px;
	height: 26.909999999999997px;
	background: url(./images/user.png) no-repeat 0 0;
	background-size: cover;
	display: inline-block;
	position: absolute;
	left: 9.89px;
	top: 6px;
}
.sicon-key {
  width: 26.909999999999997px;
	height: 26.909999999999997px;
  background: url(./images/password.png) no-repeat 0 0;
  background-size: cover;
  display: inline-block;
  position: absolute;
  left: 9.89px;
	top: 6px;
}
.header-title{
	color: #fff;
	margin-bottom: 79.81px;
	margin-top:15px;
	font-size: 17.94px;
}

.log-input{
	background: transparent;
	border-bottom: 1px solid #fff;
	padding: 4.6000000000000005px;
	width: 249.77999999999997px;
	margin: 0 auto;
	height: 34.96px;
	line-height: 34.96px;
	position: relative;
	margin-bottom: 18.400000000000002px;
}
.input-item{
	background-color: transparent!important;
	width: 100%;
  height: 100%!important;
  border: none!important;
  padding: 2px!important;
  text-indent: 39.1px;
	font-size: 12.88px;
	color: #e4fcee;
	box-sizing: border-box;
}
.log-form{
	width: 249.77999999999997px;
  margin: 0 auto;
  padding-top: 130px;
}
.log-form p a{
	color: #dedede;
	font-size: 11.96px;
	letter-spacing: 1px;
}
.log-form p.forgot{
	margin-top: -6.8999999999999995px;
}
.log-sub{
	width: 192.97000000000003px;
	height: 39.79px;
	line-height: 39.79px;
	display: inline-block;
	text-align: center;
	border: 1px solid #fff;
	border-radius: 39.79px;
	font-size: 17.94px!important;
	margin-top: 29.900000000000002px;
}
.fix-input{
  padding-right:0px; 
  width: 92px;
}
.validate,.validate:active,.validate:focus{
	background: transparent!important;
	color: #fff!important;
	font-size:13.799999999999999px;
	height: 34.96px !important;
	width: 87.39999999999999px;
	position: absolute;
	right: 0px;
	top: -1.1500000000000001px;
	border:none;
}
</style>
