<template>
	<div class="e-writing">
			<ul>
				<li>
					<span class="left">收件人：</span>
					<div class="writing-in">
						<span v-for="(item,index) in sendUser" :key="index">{{item.Name}}，</span>
					</div>
					<span @click="toSelectSend" class="w-tj"></span>
				</li>
				<li>
					<span class="left">抄送：</span>
					<div class="writing-in" >
						<span v-for="(item,index) in copyUser" :key="index">{{item.Name}}，</span>
					</div>
					<span @click="toSelectCopy" class="w-tj"></span>
				</li>
				<li><span class="left">主题：</span><span class="e-xz-1">主题主题主题主题主题主题</span></li>
				<li><span class="left">类型：</span><span class="e-xz" id="trigger1">一般</span></li>
				<li>
					<div class="up-img">
						<table>
							<tbody>
								<tr>
									<td style="width:1rem;">附件：</td>
									<td>
										<div class="up-sc">
											<ul>
												<li><img src="./img/3124324.jpg"><a class="s-c"></a></li>
												<li><img src="./img/3124324.jpg"><a class="s-c"></a></li>
												<li><img src="./img/3124324.jpg"><a class="s-c"></a></li>
												<li><img src="./img/3124324.jpg"><a class="s-c"></a></li>
												<li><img src="./img/3124324.jpg"><a class="s-c"></a></li>
											</ul>
											<a class="sc-tp">上传图片</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
				<li>
				<p>内容：</p>
				<p>件邮内容件邮内容件邮内容件邮内容件邮内容件邮内容 件邮内容件邮内容件邮内容件邮内容件邮内容件邮内容 件邮内容件邮内容件邮内容件邮内容</p></li>
			</ul>
			<a class="send-out">发送</a>
			<div class="bottom-space"></div>
		</div>
</template>
<script>
export default {
	name: 'writeEmail',
	data () {
		return {
			sendUser: [],
			copyUser: []
		}
	},
	methods: {
		toSelectSend () {
			this.$store.state.email.selectType = 1
			this.$router.push('man')
		},
		toSelectCopy () {
			this.$store.state.email.selectType = 2
			this.$router.push('man')
		}
	},
	created () {
        this.setTitle('写邮件')
    },
	mounted () {
		console.log('write mounted...')
	},
	activated () {
		switch (this.$store.state.email.selectType) {
			case 1:
				this.sendUser = this.$store.state.email.selectedMan
				break
			case 2:
				this.copyUser = this.$store.state.email.selectedMan
				break
		}
	}
}
</script>
<style scoped src="./css/e-mail.css"></style>
<style scoped src="./css/public.css"></style>
<style scoped>

</style>
