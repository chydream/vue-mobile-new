import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mobileUser from './modules/mobileUser'
import mobileCommon from './modules/mobileCommon'
import email from './modules/email'
import payroll from './modules/payroll'
import notice from './modules/notice'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    mobileUser,
    mobileCommon,
    email,
    payroll,
    notice
  },
  getters
})
export default store
