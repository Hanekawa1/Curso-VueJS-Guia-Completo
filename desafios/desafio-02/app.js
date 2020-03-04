new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert('Esse alerta é um alerta!')
        },
        armazenarValor(event){
            this.valor = event.target.value;
        }
    }
})