import {getManList} from '@/api/emailApi'
const email = {
    namespaced: true,
    state: {
      manList: []
    },
    getters: {
    },
    mutations: {
      
    },
    actions: {
        getManList ({dispatch, rootGetters, state}) {
            if (state.manList.length == 0) {
                getManList({
                    schoolId: rootGetters.cookiesObj.schoolId
                }).then(d => {
                    d = JSON.parse(d)
                    dispatch('createManList', d.Data)
                })
            } else {

            }
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
        }
    }
}
export default email
