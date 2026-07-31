window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.core = {
	elementos: {},

	inicializarElementos: function () {
		this.elementos = {
			botonAbrir: document.querySelector('.cbc-chatbot__boton'),
			ventana: document.querySelector('.cbc-chatbot__ventana'),
			botonCerrar: document.querySelector('.cbc-chatbot__cerrar'),
			tituloChatbot: document.querySelector('.cbc-chatbot__titulo'),
			contenidoChatbot: document.querySelector('.cbc-chatbot__contenido'),
			pantallas: document.querySelectorAll('.cbc-chatbot__pantalla')
		};
	},

	elementosValidos: function () {
		const elementos = this.elementos;

		return Boolean(
			elementos.botonAbrir &&
			elementos.ventana &&
			elementos.botonCerrar &&
			elementos.tituloChatbot &&
			elementos.contenidoChatbot &&
			elementos.pantallas.length
		);
	},

	mostrarPantalla: function (nombrePantalla) {
		const elementos = this.elementos;

		elementos.pantallas.forEach(function (pantalla) {
			pantalla.hidden = true;
		});

		const pantallaDestino = document.querySelector(
			'[data-pantalla="' + nombrePantalla + '"]'
		);

		if (!pantallaDestino) {
			return null;
		}

		pantallaDestino.hidden = false;
		elementos.contenidoChatbot.scrollTop = 0;

		return pantallaDestino;
	},

	abrirChatbot: function () {
		const elementos = this.elementos;

		elementos.ventana.hidden = false;
		elementos.ventana.setAttribute('aria-hidden', 'false');
		elementos.botonAbrir.setAttribute('aria-expanded', 'true');
		elementos.botonCerrar.focus();
	},

	cerrarChatbot: function () {
		const elementos = this.elementos;

		elementos.ventana.hidden = true;
		elementos.ventana.setAttribute('aria-hidden', 'true');
		elementos.botonAbrir.setAttribute('aria-expanded', 'false');
		elementos.botonAbrir.focus();
	},

	alternarChatbot: function () {
		const estaAbierto =
			this.elementos.botonAbrir.getAttribute('aria-expanded') === 'true';

		if (estaAbierto) {
			this.cerrarChatbot();
		} else {
			this.abrirChatbot();
		}
	},
    	inicializar: function () {
		this.inicializarElementos();

		if (!this.elementosValidos()) {
			console.error(
				'No se pudo iniciar el núcleo del chatbot.'
			);

			return false;
		}

		return true;
	}
};