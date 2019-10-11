import Vue from 'vue'
import {getManList, getEmailType} from '@/api/emailApi'
const email = {
    namespaced: true,
    state: {
      manList: [],
      emailTypeList: [],
      curEmail: localStorage.curEmail ? JSON.parse(localStorage.curEmail) : {}
    },
    getters: {
    },
    mutations: {
      setCurEmail (state, email) {
        state.curEmail = email
        localStorage.curEmail = JSON.stringify(email)
      }
    },
    actions: {
        getManList ({dispatch, rootGetters, state}) {
            return new Promise((resolve, reject) => {
                if (state.manList.length == 0) {
                    getManList({
                        schoolId: rootGetters.cookiesObj.schoolId
                    }).then(d => {
                        d = JSON.parse(d)
                        dispatch('createManList', d.Data)
                        resolve(state.manList)
                    })
                } else {
                    resolve(state.manList)
                }
            })
        },
        createManList ({dispatch, state}, list) {
            for (var item of list) {
                if (item.Child) {
                    dispatch('createManList', item.Child)
                } else {
                    var isHave = false
                    for (var m of state.manList) {
                        if (m.key.Id == item.Id) {
                            isHave = true
                        }
                    }
                    if (!isHave) {
                        state.manList.push({key: item, value: item.Name})
                    }  
                }
            }
        },
        getEmailType ({state}) {
            return new Promise((resolve, reject) => {
                if (state.emailTypeList.length == 0) {
                    getEmailType().then(d => {
                        d = JSON.parse(d)
                        if (d.Code == 200) {
                            var data = JSON.parse(d.Msg)
                            state.emailTypeList = data
                            resolve(data)
                        } else {
                            Vue.$vux.toast.text(d.Msg, 'top')
                            resolve([])
                        }
                    })
                } else {
                    resolve(state.emailTypeList)
                }
            })
        }
    }
}
export default email
