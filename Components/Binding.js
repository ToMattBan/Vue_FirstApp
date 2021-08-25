export function BindingAttribute() {
    const BindingAttribute = {
        data() {
            return {
                message: "Vuçê foi hasxhkeadu em " + new Date().toLocaleString()
            }
        }
    }

    return Vue.createApp(BindingAttribute).mount('#binding-message')
}