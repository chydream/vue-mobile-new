const hasPermission = {
    install (Vue) {
        Vue.directive('hasPermission', {
            bind (el, binding, vnode) {
            },
            inserted (el, binding, vnode) {
                let permissionList = vnode.context.$route.meta.permission
                if (!permissionList) {
                    return
                }
                if (permissionList.length == 0) {
                    return
                }
                if (!permissionList.includes(binding.value)) {
                    el.parentNode.removeChild(el)
                }
            },
            update (el, binding) { 
            },
            componentUpdated (el, binding) {
            },
            unbind (el, binding) {
            }
        })
    }
}
export default hasPermission
