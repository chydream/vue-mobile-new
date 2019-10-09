import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import common from './modules/common'
import mobileUser from './modules/mobileUser'
import mobileCommon from './modules/mobileCommon'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    common,
    mobileUser,
    mobileCommon    
  },
  getters
})
export default store
