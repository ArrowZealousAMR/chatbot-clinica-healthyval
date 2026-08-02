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
	 * Los elementos secundarios no bloquean el chatbot
	 * si falta temporalmente alguno de ellos.
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
	 * Comprueba que la función de traducción indicada existe
	 * antes de ejecutarla.
	 */
	ejecutarTraduccion: function (nombreFuncion) {
		const translations = window.CBCChatbot.translations;

		if (
			translations &&
			typeof translations[nombreFuncion] === 'function'
		) {
			translations[nombreFuncion]();
		}
	},

	/**
	 * Guarda una categoría y elimina cualquier tratamiento
	 * previamente seleccionado.
	 */
	guardarCategoria: function (categoria) {
		const state = window.CBCChatbot.state;

		if (!state) {
			return;
		}

		if (typeof state.guardarCategoria === 'function') {
			state.guardarCategoria(categoria);
		} else {
			state.categoriaSeleccionada = categoria;
		}

		if (typeof state.guardarTratamiento === 'function') {
			state.guardarTratamiento('');
		} else {
			state.tratamientoSeleccionado = '';
		}
	},

	/**
	 * Guarda la especialidad o tratamiento seleccionado.
	 */
	guardarTratamiento: function (tratamiento) {
		const state = window.CBCChatbot.state;

		if (!state) {
			return;
		}

		if (typeof state.guardarTratamiento === 'function') {
			state.guardarTratamiento(tratamiento);
		} else {
			state.tratamientoSeleccionado = tratamiento;
		}
	},

	/**
	 * Traduce y muestra el menú principal.
	 */
	mostrarMenuPrincipal: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirMenu');
		this.ejecutarTraduccion('traducirBotonesVolver');

		const pantalla = core.mostrarPantalla('menu');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra Medicina estética.
	 */
	mostrarMedicinaEstetica: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion(
			'traducirMedicinaEstetica'
		);
		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

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

		this.ejecutarTraduccion('traducirRecuperacion');
		this.ejecutarTraduccion('traducirBotonesVolver');

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

		this.ejecutarTraduccion('traducirSalud');
		this.ejecutarTraduccion('traducirBotonesVolver');

		const pantalla = core.mostrarPantalla('salud');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de precios.
	 */
	mostrarPrecios: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirPrecios');
		this.ejecutarTraduccion('traducirBotonesVolver');

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

		this.ejecutarTraduccion('traducirHorarios');
		this.ejecutarTraduccion('traducirBotonesVolver');

		const pantalla = core.mostrarPantalla('horarios');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de ubicación.
	 */
	mostrarUbicacion: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirUbicacion');
		this.ejecutarTraduccion('traducirBotonesVolver');

		const pantalla = core.mostrarPantalla('ubicacion');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de contacto.
	 */
	mostrarContacto: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirContacto');
		this.ejecutarTraduccion('traducirBotonesVolver');

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
		const navigation = this;

		elementos.botonesIdioma.forEach(function (botonIdioma) {
			botonIdioma.addEventListener('click', function () {
				state.idiomaActual =
					botonIdioma.dataset.idioma;

				navigation.ejecutarTraduccion(
					'traducirTituloChatbot'
				);

				navigation.ejecutarTraduccion(
					'traducirBotonesVolver'
				);

				navigation.ejecutarTraduccion(
					'traducirPantallaNombre'
				);

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
				navigation.ejecutarTraduccion(
					'traducirFormularioNombre'
				);

				navigation.ejecutarTraduccion(
					'traducirBotonesVolver'
				);

				elementos.errorNombre.hidden = true;
				elementos.errorNombre.textContent = '';

				elementos.campoNombre.value =
					state.nombreUsuario || '';

				const pantalla = core.mostrarPantalla(
					'formulario-nombre'
				);

				navigation.enfocarPrimerElemento(pantalla);
			}
		);

		elementos.botonSinNombre.addEventListener(
			'click',
			function () {
				if (
					typeof state.guardarNombre === 'function'
				) {
					state.guardarNombre('');
				} else {
					state.nombreUsuario = '';
				}

				elementos.campoNombre.value = '';

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

				if (
					typeof state.guardarNombre === 'function'
				) {
					state.guardarNombre(nombreIntroducido);
				} else {
					state.nombreUsuario = nombreIntroducido;
				}

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
		const navigation = this;

		elementos.botonesVolver.forEach(function (botonVolver) {
			botonVolver.addEventListener('click', function () {
				const pantallaDestino =
					botonVolver.dataset.volver;

				if (!pantallaDestino) {
					return;
				}

				const traduccionesPantalla = {
					nombre: 'traducirPantallaNombre',
					menu: 'traducirMenu',
					'medicina-estetica':
						'traducirMedicinaEstetica',
					recuperacion:
						'traducirRecuperacion',
					salud: 'traducirSalud',
					precios: 'traducirPrecios',
					horarios: 'traducirHorarios',
					ubicacion: 'traducirUbicacion',
					contacto: 'traducirContacto'
				};

				if (traduccionesPantalla[pantallaDestino]) {
					navigation.ejecutarTraduccion(
						traduccionesPantalla[
							pantallaDestino
						]
					);
				}

				navigation.ejecutarTraduccion(
					'traducirBotonesVolver'
				);

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
	 * Guarda las subcategorías seleccionadas
	 * de Medicina estética.
	 *
	 * Cuando existan sus pantallas, aquí se añadirá
	 * también la navegación a cada una.
	 */
	registrarEventosEstetica: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesEstetica.forEach(function (boton) {
			boton.addEventListener('click', function () {
				const opcionElegida =
					boton.dataset.estetica;

				navigation.guardarCategoria(
					'medicina-estetica'
				);

				navigation.guardarTratamiento(
					opcionElegida
				);

				console.info(
					'Subcategoría estética seleccionada:',
					opcionElegida
				);
			});
		});
	},

	/**
	 * Guarda las especialidades seleccionadas
	 * de Recuperación y movimiento.
	 */
	registrarEventosRecuperacion: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesRecuperacion.forEach(
			function (boton) {
				boton.addEventListener(
					'click',
					function () {
						const opcionElegida =
							boton.dataset.recuperacion;

						navigation.guardarCategoria(
							'recuperacion-movimiento'
						);

						navigation.guardarTratamiento(
							opcionElegida
						);

						console.info(
							'Especialidad de recuperación seleccionada:',
							opcionElegida
						);
					}
				);
			}
		);
	},

	/**
	 * Guarda las especialidades seleccionadas
	 * de Salud y bienestar.
	 */
	registrarEventosSalud: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesSalud.forEach(function (boton) {
			boton.addEventListener('click', function () {
				const opcionElegida =
					boton.dataset.salud;

				navigation.guardarCategoria(
					'salud-bienestar'
				);

				navigation.guardarTratamiento(
					opcionElegida
				);

				console.info(
					'Especialidad de salud seleccionada:',
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
						navigation.guardarCategoria(
							'medicina-estetica'
						);

						navigation.mostrarMedicinaEstetica();
						break;

					case 'recuperacion-movimiento':
						navigation.guardarCategoria(
							'recuperacion-movimiento'
						);

						navigation.mostrarRecuperacion();
						break;

					case 'salud-bienestar':
						navigation.guardarCategoria(
							'salud-bienestar'
						);

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