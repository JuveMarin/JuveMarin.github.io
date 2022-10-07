new Vue({
	el: "#app",
	data: () => ({
		numero: null,
		factorial: null,
		worker: null,
		cargando: false,
		mostrarCopiado: false,
	}),
	mounted() {
		if (typeof Worker === "undefined") return alert("Tu navegador no soporta los web workers. Prueba usando uno más reciente.");
		this.worker = new Worker("worker.js");
		this.worker.onmessage = evento => {
			this.factorial = evento.data;
			this.cargando = false;
			this.enfocar();
		};
		this.enfocar();
	},
	watch: {
		numero() {
			this.factorial = null;
		}
	},
	methods: {
		copiarAlPortapapeles(texto) {
			if (!texto) return;
			if (!navigator.clipboard) {
				return this.copiarAlPortapapelesSiLaPrimeraOpcionFalla(texto);
			}
			navigator.clipboard.writeText(texto)
				.then(() => {
					this.indicarCopiadoExitoso();
				})
				.catch(error => {
					// Por si el usuario no da permiso u ocurre un error
					console.log("Hubo un error: ", error);
					this.copiarAlPortapapelesSiLaPrimeraOpcionFalla(texto);
				});
		},
		copiarAlPortapapelesSiLaPrimeraOpcionFalla(texto) {
			prompt("Presiona CTRL + C para copiar, y luego presiona ENTER", texto);
			this.indicarCopiadoExitoso();
		},
		indicarCopiadoExitoso() {
			this.mostrarCopiado = true;
			setTimeout(() => {
				this.mostrarCopiado = false;
			}, 1000);
		},
		enfocar() {
			this.$refs.input.focus();
		},
		calcularFactorial() {
			if (!this.worker) return;
			this.factorial = null;
			if (!this.numero) return this.enfocar();
			this.cargando = true;
			this.worker.postMessage(this.numero);
		}
	},
});