export function ReverseText() {
    const ReverseText = {
        data() {
            return {
                message: 'socorram me subi no onibus em marrocos'
            }
        },
        methods: {
            reverseText() {
                this.message = this.message
                    .split('')
                    .reverse()
                    .join('')
            }
        }
    }

    return Vue.createApp(ReverseText).mount('#userInteract')
}