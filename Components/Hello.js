export function HelloWorldApp() {    
    const HelloWorldApp = {
        data() {
            return {
                hello_world_message: 'Hello World with Vue!'
            }
        }
    }
    
    return Vue.createApp(HelloWorldApp).mount('#hello_world');
}