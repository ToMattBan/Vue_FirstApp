export function Counter() {
    const Counter = {
        data() {
            return {
                counter: 0
            }
        },
        mounted() {
            setInterval(() => {
                this.counter++
            }, 1000)
        }
    }
    
    return Vue.createApp(Counter).mount('#counter');
}