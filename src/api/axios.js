import axios from 'axios'
import store from '@/store'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = false // 跨域请求，允许保存cookie
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// if (store.getters.token) {
	// 	config.headers['token'] = store.getters.token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  if (store.getters.cookieStart && store.getters.cookieStart.Token != 'undefined') {
    config.headers['loginName'] = store.getters.cookieStart.loginName 
    config.headers['roleCode'] = store.getters.cookieStart.roleCode 
    config.headers['Token'] = store.getters.cookieStart.Token
	}
	return config
}, function (error) {
	console.log('error' + error)
	return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	return response
}, function (error) {
	console.log(error)
	return Promise.reject(new Error('服务器君开小差了，请稍后再试'))
})
export default axios
