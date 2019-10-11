<template>
	<div class="e-writing">
			<group>
				 <cell @click.native="toSelectSend" title="收件人" value-align="right" is-link>
					 <div class="writing-in">
						<span v-for="(item,index) in sendUser" :key="index">{{item.Name}}，</span>
					</div>
				 </cell>
				 <cell @click.native="toSelectCopy" title="抄送" value-align="right" is-link>
					<div class="writing-in" >
						<span v-for="(item,index) in copyUser" :key="index">{{item.Name}}，</span>
					</div>
				 </cell>
				<x-textarea title="主题" :max="100" v-model="emailTitle"  placeholder=""></x-textarea>
				<x-textarea title="内容" :max="100"  v-model="emailContent"  placeholder=""></x-textarea>
				<selector placeholder="请邮件类型" v-model="emailType" title="类型" :options="emailTypeList" ></selector>
				
			</group>		
			<div class="fj-p">
				<div class="fj-label">附件</div>
				<div class="fj-val">
					<div v-for="(item,index) in fileList" :key="index" class="fj-item">
						<img class="fj-img" :src="item.fileUrl">
						<a @touchend="removeFile(item)" class="s-c"></a>
					</div>
					<div class="file-input-p">
						<a class="sc-tp">上传图片</a>
						<input id="fileInput" @change="uploadFile" type="file" multiple accept="image/*" class="file-input">
					</div>
				</div>
			</div>
			
			<x-button @click.native="sendEmail(2)" type="primary">发送</x-button>
			<x-button @click.native="sendEmail(1)" >存为草稿</x-button>
			<div class="bottom-space"></div>
		</div>
</template>
<script>
import { XTextarea, Group, XInput, Selector, Cell, XButton } from 'vux'
import {uploadFile, addEmail} from '@/api/emailApi'
import {mapGetters} from 'vuex'
export default {
	name: 'writeEmail',
	components: {
		 XTextarea,
    Group,
	XInput,
	Selector,
	Cell,
	XButton
	},
	computed: {
		...mapGetters(['cookiesObj'])
	},
	data () {
		return {
			sendUser: [],
			copyUser: [],
			emailTypeList: [],
			emailType: '',
			emailTitle: '',
			emailContent: '',
			fileList: [],

			status: ''
		}
	},
	methods: {
		toSelectSend () {
			this.$store.state.email.selectType = 1
			this.$store.state.email.selectedMan = this.sendUser
			this.$router.push('man')
		},
		toSelectCopy () {
			this.$store.state.email.selectType = 2
			this.$store.state.email.selectedMan = this.copyUser
			this.$router.push('man')
		},
		uploadFile (e) {
			var fileList = e.target.files
			for (let i = 0; i < fileList.length; i++) {
				var file = fileList[i]
				const formData = new FormData()
			formData.append('file', file)

				uploadFile(formData).then(d => {
					if (i == fileList.length - 1) {
						document.getElementById('fileInput').value = ''
					}
					d = JSON.parse(d)
					this.fileList.push(d.Data)
					console.log(this.fileList)
				})
			}
		},
		removeFile (file) {
			for (var i = 0; i < this.fileList.length; i++) {
				if (file.fileUrl == this.fileList[i].fileUrl) {
					this.fileList.splice(i, 1)
				}
			}
		},
		getParam () {
			var param = {
				userId: this.cookiesObj.loginUserId,
				fileSize: 0,
				suffix: 0
			}
			if (this.sendUser.length == 0) {
				this.$vux.toast.text('请选择收件人', 'top')
				return null
			} else {
				param.mainUserIds = this.sendUser.map(item => item.Id).join()
			}
			if (this.copyUser.length == 0) {
				
			} else {
				param.copyUserIds = this.copyUser.map(item => item.Id).join()
			}
			if (!this.emailTitle) {
				this.$vux.toast.text('请输入主题', 'top')
				return null
			} else {
				param.title = this.emailTitle
			}
			if (!this.emailContent) {
				this.$vux.toast.text('请输入内容', 'top')
				return null
			} else {
				param.content = this.emailContent
			}
			
			if (this.emailType === '') {
				this.$vux.toast.text('请选择类型', 'top')
				return null
			} else {
				param.mailTypeCode = this.emailType
			}

			if (this.fileList.length > 0) {
				param.fileNameList = this.fileList.map(item => item.fileName).join()
				param.fileValueLIst = this.fileList.map(item => item.fileUrl).join()
			}
			return param
		},
		sendEmail (status) {
			this.status = status
			var param = this.getParam()
			if (!param) {
				return
			}
			param.status = status
			console.log(param)
			addEmail({
				data: JSON.stringify(param)
			}).then(res => {
				res = JSON.parse(res)
				if (res.Code == 200) {
					this.clearData()
					if (this.status == 1) {
						this.$vux.toast.text('已保存为草稿', 'top')
					} else if (this.status == 2) {
						this.$vux.toast.text('发送成功', 'top')
					}
					
					this.$router.go(-1)
				} else {
					this.$vux.toast.text(res.Msg, 'top')
				}
			})
		},
		clearData () {
			this.sendUser = []
			this.copyUser = []
			this.emailTypeList = []
			this.emailType = ''
			this.emailTitle = ''
			this.emailContent = ''
			this.fileList = []

			this.$store.state.email.selectedMan = []
		}
	},
	created () {
        
    },
	mounted () {
		console.log('write mounted...')
	},
	deactivated () {
		// this.clearData()
	},
	activated () {
		 this.setTitle('写邮件')
		switch (this.$store.state.email.selectType) {
			case 1:
				this.sendUser = this.$store.state.email.selectedMan
				break
			case 2:
				this.copyUser = this.$store.state.email.selectedMan
				break
		}

		this.$store.dispatch('email/getEmailType').then(d => {
			console.log(d)
			for (var item of d) {
				item.key = item.Id
				item.value = item.Name
			}
			this.emailTypeList = d
		})
	}
}
</script>
<style scoped src="./css/e-mail.css"></style>

<style scoped>
.file-input-p{
	position: relative;
	clear: both;
}
.file-input{
	position: absolute;
    top: 0;
    left: 0;
	height: 100%;
	opacity: 0;
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
