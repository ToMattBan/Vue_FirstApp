export function ReverseText() {
    const ReverseText = {
        data() {
            return {
                message: 'Socorram-me, Subi No Ônibus Em Marrocos'
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