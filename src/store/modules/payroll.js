import { getTeachsalarydetaileds } from '@/api/payrollApi'
const payroll = {
  namespaced: true,
  state: {
    manList: []
  },
  getters: {},
  mutations: {},
  actions: {
    GetTeachsalarydetaileds ({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        getTeachsalarydetaileds(params).then(res => {
          resolve(res)
        })
      })
    }
  }
}
export default payroll
