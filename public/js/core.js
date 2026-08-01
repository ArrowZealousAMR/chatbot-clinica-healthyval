window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.core = {
	elementos: {},
	temporizadorCierre: null,
	duracionAnimacionCierre: 220,

	inicializarElementos: function () {
		this.elementos = {
			botonAbrir: document.querySelector(
				'.cbc-chatbot__boton'
			),

			ventana: document.querySelector(
				'.cbc-chatbot__ventana'
			),

			botonCerrar: document.querySelector(
				'.cbc-chatbot__cerrar'
			),

			tituloChatbot: document.querySelector(
				'.cbc-chatbot__titulo'
			),

			contenidoChatbot: document.querySelector(
				'.cbc-chatbot__contenido'
			),

			pantallas: document.querySelectorAll(
				'.cbc-chatbot__pantalla'
			)
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
			console.warn(
				'No se ha encontrado la pantalla:',
				nombrePantalla
			);

			return null;
		}

		pantallaDestino.hidden = false;
		elementos.contenidoChatbot.scrollTop = 0;

		return pantallaDestino;
	},

	abrirChatbot: function () {
		const elementos = this.elementos;

		if (this.temporizadorCierre) {
			window.clearTimeout(this.temporizadorCierre);
			this.temporizadorCierre = null;
		}

		elementos.ventana.classList.remove(
			'cbc-chatbot__ventana--cerrando'
		);

		elementos.ventana.hidden = false;
		elementos.ventana.setAttribute(
			'aria-hidden',
			'false'
		);

		elementos.botonAbrir.setAttribute(
			'aria-expanded',
			'true'
		);

		window.requestAnimationFrame(function () {
			elementos.ventana.classList.add(
				'cbc-chatbot__ventana--abierta'
			);
		});

		elementos.botonCerrar.focus();
	},

	cerrarChatbot: function () {
		const elementos = this.elementos;

		if (elementos.ventana.hidden) {
			return;
		}

		elementos.ventana.classList.remove(
			'cbc-chatbot__ventana--abierta'
		);

		elementos.ventana.classList.add(
			'cbc-chatbot__ventana--cerrando'
		);

		elementos.ventana.setAttribute(
			'aria-hidden',
			'true'
		);

		elementos.botonAbrir.setAttribute(
			'aria-expanded',
			'false'
		);

		const core = this;

		this.temporizadorCierre = window.setTimeout(
			function () {
				elementos.ventana.hidden = true;

				elementos.ventana.classList.remove(
					'cbc-chatbot__ventana--cerrando'
				);

				core.temporizadorCierre = null;
			},
			this.duracionAnimacionCierre
		);

		elementos.botonAbrir.focus();
	},

	alternarChatbot: function () {
		const estaAbierto =
			this.elementos.botonAbrir.getAttribute(
				'aria-expanded'
			) === 'true';

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