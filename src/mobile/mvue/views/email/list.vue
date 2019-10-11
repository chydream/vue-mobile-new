<template>
	<div>
		<div class="s_tit">
			<!-- <a href="#">写邮件</a> -->
			<router-link to="write">写邮件</router-link>
		</div>
		<div class="dz-xx">
			<input @keyup="changeEmailName" v-model.trim="emailName" class="dz-ss" type="text" />
		</div>
		<div class="s_name">
			<ul>
				<li :class="{'on':type === 0}" @touchend="changeType(0)"><a href="javascript:;"><span>收件箱</span></a></li>
				<li :class="{'on':type === 1}" @touchend="changeType(1)"><a href="javascript:;"><span>草稿箱</span></a></li>
				<li :class="{'on':type === 2}" @touchend="changeType(2)"><a href="javascript:;"><span>已发送</span></a></li>
				<li :class="{'on':type === 3}" @touchend="changeType(3)"><a href="javascript:;"><span>已删除</span></a></li>
			</ul>
		</div>
		<div class="s_tab">						
			<div class="s_tt">
				<div @touchend='toEmailDetail(item)' v-for="(item,index) in emailList" :key="index" class="e-body">
					<h2>
						<i v-if="(!item.ReadStatus) && item.Status === 0"></i>{{item.UserName}}<span>{{item.SendingTime | formatDateTime('yyyy-MM-dd')}}</span>
					</h2>
					<h3><img src="./img/11124.png" />{{item.Theme}}<img v-if="item.MailTypeCode == '1'" src="./img/sd-ico.png" /></h3>
					<p v-html="item.Content"></p>
				</div>		
			
			</div>
			
		</div>		
		
		<div v-if="isMore" @touchend='getList' class="s_more2" id="more">
			<span>查看更多</span>
		</div>
		<div v-else class="no-more">没有更多了</div>
	</div>
</template>
<script>
import {getReceiveEmailList, getEmailList} from '@/api/emailApi'
import {mapGetters} from 'vuex'
export default {
	// name: 'emailList',
	data () {
		return {
			type: null,
			page: 0,
			size: 10,
			isMore: true,
			emailList: [],
			emailName: '',
			keyupTimer: 0
		}
	},
	computed: {
		...mapGetters(['cookiesObj'])
	},
	methods: {
		changeEmailName (e) {
			if (this.keyupTimer) {
				clearTimeout(this.keyupTimer)
			}
			this.keyupTimer = setTimeout(() => {
				console.log(e.target.value)
				this.changeType(this.type)
			}, 1000)
		},
		changeType (type) {
			// if (type === this.type) {
			// 	return
			// }
			this.type = type
			this.page = 0
			this.isMore = true
			this.emailList = []
			this.getList()
		},
		getList () {
			this.$vux.loading.show({
				text: '加载中'
			})
			switch (this.type) {
				case 0:
					this.getReceive()
					break
				case 1:
					this.getEmailList(1)
					break
				case 2:
					this.getEmailList(2)
					break
				case 3:
					this.getEmailList(3)
					break
			}
		},
		getReceive () {
			this.page++
			var param = {
				toUserId: this.cookiesObj.loginUserId,
				status: 0,
				page: this.page,
				size: this.size
			}
			if (this.emailName) {
				param.emilName = this.emailName
			}
			getReceiveEmailList(param).then(res => {
				this.getEmailListLater(res)
			})
		},
		getEmailList (status) {
			this.page++
			var param = {
				fromUserId: this.cookiesObj.loginUserId,
				status: status,
				page: this.page,
				size: this.size
			}
			if (this.emailName) {
				param.emilName = this.emailName
			}
			getEmailList(param).then(res => {
				this.getEmailListLater(res)
			})
		},
		getEmailListLater (res) {
			this.$vux.loading.hide()
			res = JSON.parse(res)
			var data = JSON.parse(res.Msg)
			var list = data.List
			var count = data.Count
			if (list.length < this.size) {
				this.isMore = false
			}
			for (var item of list) {
				this.emailList.push(item)
			}	
		},
		toEmailDetail (email) {
			this.$store.commit('email/setCurEmail', email)
			this.$router.push('detail')
		}
	},
	created () {
        this.setTitle('邮箱')
    },
    mounted () {
		this.changeType(0)
    }
}
</script>
<style scoped src="./css/e-mail.css"></style>
<style scoped src="./css/public.css"></style>
<style scoped>
.no-more{
	background-size: 0.24rem 0.12rem;
    font-size: 0.32rem;
    color: #666666;
    display: block;
    width: 1.8rem;
    line-height: 0.68rem;
    margin: 0 auto;
}
</style>
