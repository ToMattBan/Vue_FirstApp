export function CopyText() {
    const CopyText = {
        data() {
            return {
                message: "Texto igual!"
            }
        }
    }

    return Vue.createApp(CopyText).mount('#copyText');
}