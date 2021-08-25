export function List() {
    const List = {
        data() {
            return {
                tarefas: [
                    { text: "Lavar a louça" },
                    { text: "Tirar o lixo" },
                    { text: "Me fazer um PIX" },
                ]
            }
        }
    }

    return Vue.createApp(List).mount('#listWithFor')
}