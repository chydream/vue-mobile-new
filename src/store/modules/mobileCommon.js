import {getArrIndex, reqFullScreen, exitFullScreen, getCookiesObj, setCookie} from '@/util/tool'
import {getTokenByPC} from '@/api/commonApi'
const mobileCommon = {
    namespaced: true,
    state: {
        title: 'header',
        cookieStr: 'username=school_edu; loginName=school_edu; roleCode=SchoolAdmin; Token=1c4e55a5',
        // cookieStr: '',
        cookieStart: {},
        // cookiesObj: { schoolId: 'eeeea2b869e44b3bbd797f4d781aceaf' },
        cookiesObj: null
    },
    getters: {
    },
    mutations: {
        SET_TITLE (state, params) {
            state.title = params
        }
    },
    actions: {
      GgetTokenByPC ({state, commit, dispatch}) {
        if (document.cookie != '') {
          state.cookieStart = getCookiesObj(document.cookie)
        } else {
          state.cookieStart = getCookiesObj(state.cookieStr)
          setCookie('Token', state.cookieStart.Token, 0)
          setCookie('loginName', state.cookieStart.loginName, 0)
          setCookie('roleCode', state.cookieStart.roleCode, 0)
        }
        return new Promise((resolve, reject) => {
            if (state.cookiesObj) {
              resolve()
              return
            }
            var params = {
              Token: state.cookieStart.Token,
              roleCode: state.cookieStart.roleCode
            }
            getTokenByPC(params).then(res => {
              var result = JSON.parse(res)
              // console.log(result)
              if (result.Code == 200) {
                var strData = result.Data
                setCookie('img', strData.Img, 0)
                setCookie('loginUserId', strData.UserId, 0)
                setCookie('teacherId', strData.SelfId, 0)
                setCookie('realName', strData.RealName, 0)
                // setCookie('studentId', strData.ClassInfoList[0].SelfId, 0)
                // setCookie('classId', strData.ClassInfoList[0].ClassId, 0)
                setCookie('schoolId', strData.SchoolId, 0)
                // setCookie('gradeId', strData.ClassInfoList[0].GradeId, 0)
                state.cookiesObj = getCookiesObj(document.cookie)
              } 
              resolve(res)
            }).catch(error => {
              reject(error)
            })
        })
      }
    }
}
export default mobileCommon
