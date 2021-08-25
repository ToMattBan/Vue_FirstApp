export function BindingAttribute() {
    const BindingAttribute = {
        data() {
            return {
                message: "És lindo desde " + new Date().toLocaleString()
            }
        }
    }

    return Vue.createApp(BindingAttribute).mount('#binding-message')
}