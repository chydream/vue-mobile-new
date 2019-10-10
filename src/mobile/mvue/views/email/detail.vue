<template>
	<div>
		<div class="dz-xq">
			<h2><label>[重要] </label>关于公司发展的决定</h2>
			<div class="xq-list">
				<span>发件人：</span><span>李维嘉</span>
			</div>
			<div class="xq-list">
				<span>收件人：</span><span @click="toggle" class="e-1" :class="{'e-2':isOpen}">系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,系统管理员,王小刚,李大鑫,</span>
			</div>
			<div class="xq-list">
				<span>2019-03-11 16:32:29</span>
			</div>
			<p>关于公司发展的重大决定，请全体员工今天下午3:30到三楼会议厅开会，务必准时到会。</p>
		</div>
		<div class="fj-zs">
			<div class="fj-z-img"><img src="./img/j-ico.png"></div>
			<div class="fj-z-text">
				<p class="c-0a8de5">IMG_0012.JPG</p>
				<p>53.8KB</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			isOpen: false
		}
	},
	methods: {
		toggle () {
			this.isOpen = !this.isOpen
		}
	}
}
</script>
<style scoped src="./css/e-mail.css"></style>
<style scoped src="./css/public.css"></style>
<style scoped>

</style>
