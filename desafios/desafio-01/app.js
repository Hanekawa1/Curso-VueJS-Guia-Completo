new Vue({
    el: '#desafio',
    data: {
        nome: 'Wender Lucas Souza',
        idade: 22,
        imagem: 'https://http2.mlstatic.com/pato-de-borracha-grande-D_Q_NP_906865-MLB32378507493_092019-F.webp'
    },
    methods: {
        idadex3: function(){
            return this.idade * 3;
        },
        numeroAleatorio: function(){
            return Math.random();
        }
    }
});