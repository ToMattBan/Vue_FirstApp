export function ListComponent() {
    const ListaComponent = {
        data() {
            return {
                ListadeCompras: [
                    { id: 0, text: 'Feijão' },
                    { id: 1, text: 'Macarrão' },
                    { id: 2, text: 'Arroz' }
                ]
            }
        }
    }

    const app = Vue.createApp(ListaComponent)

    app.component('lista-compras', {
        props: ['lista'],
        template: `<li>{{ lista.text }}</li>`
    })


    return app.mount('#listWithComponent');
}