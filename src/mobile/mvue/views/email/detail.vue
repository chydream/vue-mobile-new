<template>
	<div class="container">
		<div class="dz-xq">
			<h2><label v-if="email.MailTypeCode == '1'">[重要] </label>{{email.Theme}}</h2>
			<div class="xq-list">
				<span>发件人：</span><span>{{email.UserName}}</span>
			</div>
			<div class="xq-list">
				<span>收件人：</span><span @click="toggle" class="e-1" :class="{'e-2':isOpen}">{{email.ToName}}</span>
			</div>
			<div class="xq-list">
				<span>{{email.SendingTime | formatDateTime('yyyy-MM-dd HH:mm:ss')}}</span>
			</div>
			<div v-html="email.Content" class="xq-list">
				
			</div>
			<!-- <p v-html="email.Content"></p> -->
		</div>
		<div class="fj-p">
			<div class="fj-label">附件</div>
			<div class="fj-val">
				<div v-for="(item,index) in fileList" :key="index" class="fj-item">
					<img class="fj-img" :src="item">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {getFujian, read} from '@/api/emailApi'
import {mapGetters} from 'vuex'
export default {
	name: 'emailDetail',
	data () {
		return {
			isOpen: false,
			email: {},
			fileList: []
		}
	},
	computed: {
		...mapGetters(['cookiesObj'])
	},
	methods: {
		toggle () {
			this.isOpen = !this.isOpen
		},
		getFujian () {
			getFujian({
				mailId: this.email.Id
			}).then(res => {
				res = JSON.parse(res)
				if (res.Code == 200) {
					var list = JSON.parse(res.Msg)
					this.fileList = list[0].Url.split(',')
				} else {

				}
			})
		},
		readEmail () {
			if (this.email.Status === 0) {
				read({
					ids: this.email.Id,
					ToUserId: this.cookiesObj.loginUserId
				}).then(res => {

				})
			}		
		}
	},
	mounted () {
		this.setTitle('邮箱')

		this.email = this.$store.state.email.curEmail
		this.getFujian()
		this.readEmail()
	}
}
</script>
<style scoped src="./css/e-mail.css"></style>
<style scoped src="./css/public.css"></style>
<style scoped>
.container{
	background: #fff;
}

.fj-p{
	padding: 0.4rem 0.2rem;
}
.fj-label{
	width: 1rem;
	display: inline-block;
	vertical-align: middle;
}
.fj-val{
	width: 5rem;
	display: inline-block;
	vertical-align: middle;
}
.fj-item{
	float: left;
	position: relative;
	margin: 0 0.5rem 0.5rem 0;
	width: 1.5rem;
	height: 1.5rem;
	text-align: center;
	background: #fff;
	box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
	font-size: 0;
}
.fj-item::before{
	content: "";
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}
.fj-img{
	max-width: 100%;
	max-height: 100%;
	display: inline-block;
	vertical-align: middle;
}
</style>
