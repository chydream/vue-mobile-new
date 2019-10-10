const getters = {
    mobileToken: state => state.mobileUser.token,
    title: state => state.mobileCommon.title,
    cookieStart: state => state.mobileCommon.cookieStart,
    cookiesObj: state => state.mobileCommon.cookiesObj
}
export default getters
