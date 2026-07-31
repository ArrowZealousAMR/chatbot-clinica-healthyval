window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.navigation = {
	elementos: {},

	/**
	 * Localiza todos los botones, formularios y pantallas
	 * que participan en la navegación del chatbot.
	 */
	inicializarElementos: function () {
		this.elementos = {
			botonesIdioma: document.querySelectorAll('[data-idioma]'),
			botonesVolver: document.querySelectorAll('[data-volver]'),
			botonesMenu: document.querySelectorAll('[data-menu]'),

			botonEscribirNombre: document.querySelector(
				'.cbc-chatbot__escribir-nombre'
			),

			botonSinNombre: document.querySelector(
				'.cbc-chatbot__continuar-sin-nombre'
			),

			formularioNombre: document.querySelector(
				'.cbc-chatbot__formulario-nombre'
			),

			campoNombre: document.querySelector(
				'.cbc-chatbot__campo-nombre'
			),

			errorNombre: document.querySelector(
				'.cbc-chatbot__error-nombre'
			),

			pantallaMenu: document.querySelector(
				'[data-pantalla="menu"]'
			),

			pantallaHorarios: document.querySelector(
				'[data-pantalla="horarios"]'
			),

			pantallaUbicacion: document.querySelector(
				'[data-pantalla="ubicacion"]'
			),

			pantallaContacto: document.querySelector(
				'[data-pantalla="contacto"]'
			)
		};
	},

	/**
	 * Comprueba que existen los elementos imprescindibles.
	 */
	elementosValidos: function () {
		const elementos = this.elementos;

		return Boolean(
			elementos.botonesIdioma.length &&
			elementos.botonEscribirNombre &&
			elementos.botonSinNombre &&
			elementos.formularioNombre &&
			elementos.campoNombre &&
			elementos.errorNombre &&
			elementos.pantallaMenu
		);
	},

	/**
	 * Coloca el foco en el primer botón, enlace o campo
	 * de una pantalla.
	 */
	enfocarPrimerElemento: function (pantalla) {
		if (!pantalla) {
			return;
		}

		const primerElemento = pantalla.querySelector(
			'button, input, a'
		);

		if (primerElemento) {
			primerElemento.focus();
		}
	},

	/**
	 * Traduce y muestra el menú principal.
	 */
	mostrarMenuPrincipal: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirMenu();

		const pantalla = core.mostrarPantalla('menu');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Conecta los botones para elegir idioma.
	 */
	registrarEventosIdioma: function () {
		const elementos = this.elementos;
		const state = window.CBCChatbot.state;
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;
		const navigation = this;

		elementos.botonesIdioma.forEach(function (botonIdioma) {
			botonIdioma.addEventListener('click', function () {
				state.idiomaActual = botonIdioma.dataset.idioma;

				translations.traducirTituloChatbot();
				translations.traducirBotonesVolver();
				translations.traducirPantallaNombre();

				const pantalla = core.mostrarPantalla('nombre');

				navigation.enfocarPrimerElemento(pantalla);
			});
		});
	},

	/**
	 * Conecta los botones relacionados con el nombre.
	 */
	registrarEventosNombre: function () {
		const elementos = this.elementos;
		const state = window.CBCChatbot.state;
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;
		const navigation = this;

		elementos.botonEscribirNombre.addEventListener(
			'click',
			function () {
				translations.traducirFormularioNombre();

				elementos.errorNombre.hidden = true;
				elementos.errorNombre.textContent = '';

				const pantalla = core.mostrarPantalla(
					'formulario-nombre'
				);

				navigation.enfocarPrimerElemento(pantalla);
			}
		);

		elementos.botonSinNombre.addEventListener(
			'click',
			function () {
				state.nombreUsuario = '';
				navigation.mostrarMenuPrincipal();
			}
		);

		elementos.formularioNombre.addEventListener(
			'submit',
			function (evento) {
				evento.preventDefault();

				const nombreIntroducido =
					elementos.campoNombre.value.trim();

				if (nombreIntroducido.length < 2) {
					elementos.errorNombre.textContent =
						translations.obtenerErrorNombre();

					elementos.errorNombre.hidden = false;
					elementos.campoNombre.focus();

					return;
				}

				elementos.errorNombre.hidden = true;
				elementos.errorNombre.textContent = '';

				state.nombreUsuario = nombreIntroducido;

				navigation.mostrarMenuPrincipal();
			}
		);
	},

	/**
	 * Conecta todos los botones que permiten volver.
	 */
	registrarEventosVolver: function () {
		const elementos = this.elementos;
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;
		const navigation = this;

		elementos.botonesVolver.forEach(function (botonVolver) {
			botonVolver.addEventListener('click', function () {
				const pantallaDestino =
					botonVolver.dataset.volver;

				if (pantallaDestino === 'nombre') {
					translations.traducirPantallaNombre();
				}

				if (pantallaDestino === 'menu') {
					translations.traducirMenu();
				}

				const pantalla =
					core.mostrarPantalla(pantallaDestino);

				navigation.enfocarPrimerElemento(pantalla);
			});
		});
	},

	/**
	 * Abre la pantalla de horarios.
	 */
	mostrarHorarios: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirHorarios();

		const pantalla = core.mostrarPantalla('horarios');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Abre la pantalla de ubicación.
	 */
	mostrarUbicacion: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirUbicacion();

		const pantalla = core.mostrarPantalla('ubicacion');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Abre la pantalla de contacto.
	 */
	mostrarContacto: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirContacto();

		const pantalla = core.mostrarPantalla('contacto');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Abre Doctoralia en una pestaña nueva.
	 */
	abrirDoctoralia: function () {
		const urlDoctoralia =
			'https://www.doctoralia.es/clinicas/healthyval';

		window.open(
			urlDoctoralia,
			'_blank',
			'noopener,noreferrer'
		);
	},

	/**
	 * Conecta los botones del menú principal.
	 */
	registrarEventosMenu: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesMenu.forEach(function (botonMenu) {
			botonMenu.addEventListener('click', function () {
				const opcionElegida = botonMenu.dataset.menu;

				if (opcionElegida === 'horarios') {
					navigation.mostrarHorarios();
					return;
				}

				if (opcionElegida === 'ubicacion') {
					navigation.mostrarUbicacion();
					return;
				}

				if (opcionElegida === 'contacto') {
					navigation.mostrarContacto();
					return;
				}

				if (opcionElegida === 'cita') {
					navigation.abrirDoctoralia();
					return;
				}

				/**
				 * Estas opciones se conectarán después:
				 *
				 * medicina-estetica
				 * recuperacion-movimiento
				 * salud-bienestar
				 * precios
				 */
				console.log(
					'Opción pendiente de conectar:',
					opcionElegida
				);
			});
		});
	},

	/**
	 * Activa todos los eventos de navegación.
	 */
	inicializar: function () {
		this.inicializarElementos();

		if (!this.elementosValidos()) {
			console.error(
				'No se pudo iniciar la navegación del chatbot.'
			);

			return false;
		}

		this.registrarEventosIdioma();
		this.registrarEventosNombre();
		this.registrarEventosVolver();
		this.registrarEventosMenu();

		return true;
	}
};