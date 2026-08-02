window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.navigation = {
	elementos: {},

	/**
	 * Localiza los botones, formularios y pantallas
	 * que participan en la navegación del chatbot.
	 */
	inicializarElementos: function () {
		this.elementos = {
			botonesIdioma: document.querySelectorAll(
				'[data-idioma]'
			),

			botonesVolver: document.querySelectorAll(
				'[data-volver]'
			),

			botonesMenu: document.querySelectorAll(
				'[data-menu]'
			),

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

			botonCitaHorarios: document.querySelector(
				'.cbc-chatbot__boton-cita-horarios'
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

			botonesRecuperacion: document.querySelectorAll(
				'[data-recuperacion]'
			),

			botonCitaRecuperacion: document.querySelector(
				'.cbc-chatbot__boton-cita-recuperacion'
			),

			pantallaSalud: document.querySelector(
				'[data-pantalla="salud"]'
			),

			botonesSalud: document.querySelectorAll(
				'[data-salud]'
			),

			botonCitaSalud: document.querySelector(
				'.cbc-chatbot__boton-cita-salud'
			),

			pantallaPrecios: document.querySelector(
				'[data-pantalla="precios"]'
			),

			botonValoracionPrecios: document.querySelector(
				'.cbc-chatbot__boton-valoracion-precios'
			)
		};
	},

	/**
	 * Comprueba únicamente los elementos imprescindibles.
	 *
	 * Los botones secundarios no bloquean la navegación
	 * completa en caso de que falte alguno temporalmente.
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
			elementos.pantallaRecuperacion &&
			elementos.pantallaSalud &&
			elementos.pantallaPrecios
		);
	},

	/**
	 * Coloca el foco en el primer elemento interactivo
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
	 * Traduce y muestra Recuperación y movimiento.
	 */
	mostrarRecuperacion: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirRecuperacion();
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla(
			'recuperacion'
		);

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra Salud y bienestar.
	 */
	mostrarSalud: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirSalud();
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla('salud');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de precios.
	 */
	mostrarPrecios: function () {
		const core = window.CBCChatbot.core;
		const translations = window.CBCChatbot.translations;

		translations.traducirPrecios();
		translations.traducirBotonesVolver();

		const pantalla = core.mostrarPantalla('precios');

		if (!pantalla) {
			console.error(
				'No se encontró la pantalla de precios.'
			);

			return;
		}

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de horarios.
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
	 * Traduce y muestra la pantalla de ubicación.
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
	 * Traduce y muestra la pantalla de contacto.
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
				state.idiomaActual =
					botonIdioma.dataset.idioma;

				translations.traducirTituloChatbot();
				translations.traducirBotonesVolver();
				translations.traducirPantallaNombre();

				const pantalla = core.mostrarPantalla(
					'nombre'
				);

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

				switch (pantallaDestino) {
					case 'nombre':
						translations.traducirPantallaNombre();
						break;

					case 'menu':
						translations.traducirMenu();
						break;

					case 'medicina-estetica':
						translations.traducirMedicinaEstetica();
						break;

					case 'recuperacion':
						translations.traducirRecuperacion();
						break;

					case 'salud':
						translations.traducirSalud();
						break;

					case 'precios':
						translations.traducirPrecios();
						break;

					case 'horarios':
						translations.traducirHorarios();
						break;

					case 'ubicacion':
						translations.traducirUbicacion();
						break;

					case 'contacto':
						translations.traducirContacto();
						break;
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
	 * Conecta los botones destacados de cita
	 * y valoración con Doctoralia.
	 */
	registrarEventosCita: function () {
		const elementos = this.elementos;
		const navigation = this;

		const botonesCita = [
			elementos.botonCitaEstetica,
			elementos.botonCitaRecuperacion,
			elementos.botonCitaSalud,
			elementos.botonCitaHorarios,
			elementos.botonValoracionPrecios
		];

		botonesCita.forEach(function (botonCita) {
			if (!botonCita) {
				return;
			}

			botonCita.addEventListener(
				'click',
				function () {
					navigation.abrirDoctoralia();
				}
			);
		});
	},

	/**
	 * Registra provisionalmente las subcategorías
	 * de Medicina estética.
	 */
	registrarEventosEstetica: function () {
		const elementos = this.elementos;

		elementos.botonesEstetica.forEach(function (boton) {
			boton.addEventListener('click', function () {
				const opcionElegida =
					boton.dataset.estetica;

				console.info(
					'Subcategoría estética pendiente:',
					opcionElegida
				);
			});
		});
	},

	/**
	 * Registra provisionalmente las especialidades
	 * de Recuperación y movimiento.
	 */
	registrarEventosRecuperacion: function () {
		const elementos = this.elementos;

		elementos.botonesRecuperacion.forEach(
			function (boton) {
				boton.addEventListener(
					'click',
					function () {
						const opcionElegida =
							boton.dataset.recuperacion;

						console.info(
							'Especialidad de recuperación pendiente:',
							opcionElegida
						);
					}
				);
			}
		);
	},

	/**
	 * Registra provisionalmente las especialidades
	 * de Salud y bienestar.
	 */
	registrarEventosSalud: function () {
		const elementos = this.elementos;

		elementos.botonesSalud.forEach(function (boton) {
			boton.addEventListener('click', function () {
				const opcionElegida =
					boton.dataset.salud;

				console.info(
					'Especialidad de salud pendiente:',
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
					case 'medicina-estetica':
						navigation.mostrarMedicinaEstetica();
						break;

					case 'recuperacion-movimiento':
						navigation.mostrarRecuperacion();
						break;

					case 'salud-bienestar':
						navigation.mostrarSalud();
						break;

					case 'precios':
						navigation.mostrarPrecios();
						break;

					case 'cita':
						navigation.abrirDoctoralia();
						break;

					case 'horarios':
						navigation.mostrarHorarios();
						break;

					case 'ubicacion':
						navigation.mostrarUbicacion();
						break;

					case 'contacto':
						navigation.mostrarContacto();
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
					'Falta alguno de los elementos imprescindibles.'
			);

			return false;
		}

		this.registrarEventosIdioma();
		this.registrarEventosNombre();
		this.registrarEventosVolver();
		this.registrarEventosMenu();
		this.registrarEventosCita();
		this.registrarEventosEstetica();
		this.registrarEventosRecuperacion();
		this.registrarEventosSalud();

		return true;
	}
};