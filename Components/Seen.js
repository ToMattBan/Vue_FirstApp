export function Seen() {
    const Seen = {
        data() {
            return {
                seen: false
            }
        },
        mounted() {
            setInterval(() => {
                this.seen = this.seen == false ? true : false;
            }, 3000)
        }
    }

    return Vue.createApp(Seen).mount('#youSee')
}