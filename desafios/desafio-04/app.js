new Vue({
	el: '#desafio',
	data: {
		meuEstilo: false,
		c1: 'classe1',
		c2: 'classe2',
		userClass: 'classe1',
		cor: 'blue',
		width: '0',

		//Respostas
		perigo: true,
		classe1: 'destaque',
		classe4: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.meuEstilo = !this.meuEstilo
			}, 2000);

			//Resposta
			//Questão 01
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' 
					? 'encolher'
					: 'destaque';
			});
		},
		iniciarProgresso() {
			// setInterval(() => {
			// 	this.barra += 10
			// }, 200);
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`;

				if(valor == 100) clearInterval(temporizador);
			}, 500);
		},

		//Questão 04
		setPerigo(event) {
			if(event.target.value == 'true'){
				this.perigo = true;
			} else if (event.target.value == 'false'){
				this.perigo = false;
			}
		}
	},
	computed: {
		estilo1() {
			return {
				destaque: this.meuEstilo,
				encolher: !this.meuEstilo
			}
		},
		meuEstilo2(){
			return {
				backgroundColor: this.cor
			}
		},
		barraProgresso(){
			return {
				border: 'solid',
				width: `${this.barra}px`
			}
		}
	}
});
