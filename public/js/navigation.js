window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.navigation = {
	elementos: {},

	/**
	 * Localiza los botones, formularios y pantallas
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
			),

			pantallaMedicinaEstetica: document.querySelector(
				'[data-pantalla="medicina-estetica"]'
			),

			botonesEstetica: document.querySelectorAll(
				'[data-estetica]'
			),

			botonCitaEstetica: document.querySelector(
				'.cbc-chatbot__boton-cita-estetica'
			),

			pantallaRecuperacion: document.querySelector(
				'[data-pantalla="recuperacion"]'
			),

			pantallaSalud: document.querySelector(
				'[data-pantalla="salud"]'
			),

			pantallaPrecios: document.querySelector(
				'[data-pantalla="precios"]'
			),

			pantallaCita: document.querySelector(
				'[data-pantalla="cita"]'
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
			elementos.botonesMenu.length &&
			elementos.botonEscribirNombre &&
			elementos.botonSinNombre &&
			elementos.formularioNombre &&
			elementos.campoNombre &&
			elementos.errorNombre &&
			elementos.pantallaMenu &&
			elementos.pantallaHorarios &&
			elementos.pantallaUbicacion &&
			elementos.pantallaContacto &&
			elementos.pantallaMedicinaEstetica &&
			elementos.botonesEstetica.length &&
			elementos.botonCitaEstetica &&
			elementos.pantallaRecuperacion &&
			elementos.pantallaSalud &&
			elementos.pantallaPrecios &&
			elementos.pantallaCita
		);
	},

	/**
	 * Coloca el foco en el primer botón, enlace o campo
	 * disponible dentro de una pantalla.
	 */
	enfocarPrimerElemento: function (pantalla) {
		if (!pantalla) {
			return;
		}

		const primerElemento = pantalla.querySelector(
			'button:not([disabled]), input:not([disabled]), a[href]'
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
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla('menu');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra Medicina estética.
	 */
	mostrarMedicinaEstetica: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirMedicinaEstetica();
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla(
			'medicina-estetica'
		);

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra una pantalla básica:
	 * recuperación, salud, precios o cita.
	 */
	mostrarPantallaBasica: function (nombrePantalla) {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirPantallasBasicas();
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla(nombrePantalla);

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
	 * Conecta los botones y el formulario relacionados
	 * con el nombre del usuario.
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
				translations.traducirBotonesVolver();

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

				if (!pantallaDestino) {
					return;
				}

				if (pantallaDestino === 'nombre') {
					translations.traducirPantallaNombre();
				}

				if (pantallaDestino === 'menu') {
					translations.traducirMenu();
				}

				translations.traducirBotonesVolver();

				const pantalla = core.mostrarPantalla(
					pantallaDestino
				);

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
		translations.traducirBotonesVolver();

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
		translations.traducirBotonesVolver();

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
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla('contacto');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Abre Doctoralia en una pestaña nueva.
	 */
	abrirDoctoralia: function () {
		const urlDoctoralia =
			'https://www.doctoralia.es/clinicas/healthyval';

		const nuevaVentana = window.open(
			urlDoctoralia,
			'_blank',
			'noopener,noreferrer'
		);

		if (nuevaVentana) {
			nuevaVentana.opener = null;
		}
	},

	/**
	 * Conecta el botón de cita de Medicina estética
	 * con Doctoralia.
	 */
	registrarEventoCitaEstetica: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonCitaEstetica.addEventListener(
			'click',
			function () {
				navigation.abrirDoctoralia();
			}
		);
	},

	/**
	 * Registra temporalmente los botones de las subcategorías
	 * de Medicina estética.
	 *
	 * Más adelante cada opción abrirá su propia pantalla.
	 */
	registrarEventosEstetica: function () {
		const elementos = this.elementos;

		elementos.botonesEstetica.forEach(function (boton) {
			boton.addEventListener('click', function () {
				const opcionElegida = boton.dataset.estetica;

				console.log(
					'Subcategoría estética pendiente:',
					opcionElegida
				);
			});
		});
	},

	/**
	 * Conecta los botones del menú principal.
	 */
	registrarEventosMenu: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesMenu.forEach(function (botonMenu) {
			botonMenu.addEventListener('click', function () {
				const opcionElegida =
					botonMenu.dataset.menu;

				switch (opcionElegida) {
					case 'horarios':
						navigation.mostrarHorarios();
						break;

					case 'ubicacion':
						navigation.mostrarUbicacion();
						break;

					case 'contacto':
						navigation.mostrarContacto();
						break;

					case 'medicina-estetica':
						navigation.mostrarMedicinaEstetica();
						break;

					case 'recuperacion-movimiento':
						navigation.mostrarPantallaBasica(
							'recuperacion'
						);
						break;

					case 'salud-bienestar':
						navigation.mostrarPantallaBasica(
							'salud'
						);
						break;

					case 'precios':
						navigation.mostrarPantallaBasica(
							'precios'
						);
						break;

					case 'cita':
						navigation.mostrarPantallaBasica(
							'cita'
						);
						break;

					default:
						console.warn(
							'Opción de menú no reconocida:',
							opcionElegida
						);
				}
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
				'No se pudo iniciar la navegación del chatbot. ' +
					'Falta alguno de los elementos necesarios.'
			);

			return false;
		}

		this.registrarEventosIdioma();
		this.registrarEventosNombre();
		this.registrarEventosVolver();
		this.registrarEventosMenu();
		this.registrarEventoCitaEstetica();
		this.registrarEventosEstetica();

		return true;
	}
};