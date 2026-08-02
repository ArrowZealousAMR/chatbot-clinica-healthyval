window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.navigation = {
	elementos: {},

	telefonoWhatsApp: '34624810547',

	urlDoctoralia:
		'https://www.doctoralia.es/clinicas/healthyval',

	/**
	 * Localiza los botones, formularios, enlaces y pantallas
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
			),

			enlacesWhatsApp: document.querySelectorAll(
				'a[href*="wa.me/34624810547"]'
			)
		};
	},

	/**
	 * Comprueba únicamente los elementos imprescindibles.
	 *
	 * Los elementos secundarios no bloquean todo el chatbot
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
	 * Obtiene el estado compartido del chatbot.
	 */
	obtenerEstado: function () {
		return window.CBCChatbot.state || null;
	},

	/**
	 * Obtiene el idioma activo.
	 */
	obtenerIdioma: function () {
		const state = this.obtenerEstado();

		if (
			!state ||
			typeof state.idiomaActual !== 'string'
		) {
			return 'es';
		}

		const idioma = state.idiomaActual.trim();

		return ['va', 'es', 'en'].includes(idioma)
			? idioma
			: 'es';
	},

	/**
	 * Obtiene el nombre del usuario eliminando
	 * los espacios innecesarios.
	 */
	obtenerNombreUsuario: function () {
		const state = this.obtenerEstado();

		if (
			!state ||
			typeof state.nombreUsuario !== 'string'
		) {
			return '';
		}

		return state.nombreUsuario.trim();
	},

	/**
	 * Obtiene la categoría seleccionada.
	 */
	obtenerCategoriaSeleccionada: function () {
		const state = this.obtenerEstado();

		if (
			!state ||
			typeof state.categoriaSeleccionada !== 'string'
		) {
			return '';
		}

		return state.categoriaSeleccionada.trim();
	},

	/**
	 * Obtiene el tratamiento o especialidad seleccionado.
	 */
	obtenerTratamientoSeleccionado: function () {
		const state = this.obtenerEstado();

		if (
			!state ||
			typeof state.tratamientoSeleccionado !== 'string'
		) {
			return '';
		}

		return state.tratamientoSeleccionado.trim();
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
			'button:not([disabled]), ' +
			'input:not([disabled]), ' +
			'a[href]'
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
		const translations =
			window.CBCChatbot.translations;

		if (
			translations &&
			typeof translations[nombreFuncion] === 'function'
		) {
			translations[nombreFuncion]();
		}
	},

	/**
	 * Guarda el idioma seleccionado.
	 */
	guardarIdioma: function (idioma) {
		const state = this.obtenerEstado();

		if (!state) {
			return;
		}

		if (typeof state.guardarIdioma === 'function') {
			state.guardarIdioma(idioma);
		} else {
			state.idiomaActual = idioma;
		}
	},

	/**
	 * Guarda el nombre del usuario.
	 */
	guardarNombre: function (nombre) {
		const state = this.obtenerEstado();

		if (!state) {
			return;
		}

		const nombreLimpio =
			typeof nombre === 'string'
				? nombre.trim()
				: '';

		if (typeof state.guardarNombre === 'function') {
			state.guardarNombre(nombreLimpio);
		} else {
			state.nombreUsuario = nombreLimpio;
		}
	},

	/**
	 * Guarda una categoría y elimina cualquier tratamiento
	 * previamente seleccionado.
	 */
	guardarCategoria: function (categoria) {
		const state = this.obtenerEstado();

		if (!state) {
			return;
		}

		const categoriaLimpia =
			typeof categoria === 'string'
				? categoria.trim()
				: '';

		if (typeof state.guardarCategoria === 'function') {
			state.guardarCategoria(categoriaLimpia);
		} else {
			state.categoriaSeleccionada =
				categoriaLimpia;
		}

		this.guardarTratamiento('');
	},

	/**
	 * Guarda la especialidad o tratamiento seleccionado.
	 */
	guardarTratamiento: function (tratamiento) {
		const state = this.obtenerEstado();

		if (!state) {
			return;
		}

		const tratamientoLimpio =
			typeof tratamiento === 'string'
				? tratamiento.trim()
				: '';

		if (
			typeof state.guardarTratamiento === 'function'
		) {
			state.guardarTratamiento(
				tratamientoLimpio
			);
		} else {
			state.tratamientoSeleccionado =
				tratamientoLimpio;
		}
	},

	/**
	 * Marca visual y semánticamente una opción
	 * como seleccionada dentro de su grupo.
	 */
	marcarOpcionSeleccionada: function (
		botones,
		botonSeleccionado
	) {
		botones.forEach(function (boton) {
			const estaSeleccionado =
				boton === botonSeleccionado;

			boton.setAttribute(
				'aria-pressed',
				estaSeleccionado ? 'true' : 'false'
			);

			boton.classList.toggle(
				'cbc-chatbot__opcion--seleccionada',
				estaSeleccionado
			);
		});
	},

	/**
	 * Traduce y muestra el menú principal.
	 */
	mostrarMenuPrincipal: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirMenu');
		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

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

		this.ejecutarTraduccion(
			'traducirRecuperacion'
		);

		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

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
		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

		const pantalla = core.mostrarPantalla('salud');

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de precios.
	 */
	mostrarPrecios: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion('traducirPrecios');
		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

		const pantalla = core.mostrarPantalla(
			'precios'
		);

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
		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

		const pantalla = core.mostrarPantalla(
			'horarios'
		);

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de ubicación.
	 */
	mostrarUbicacion: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion(
			'traducirUbicacion'
		);

		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

		const pantalla = core.mostrarPantalla(
			'ubicacion'
		);

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Traduce y muestra la pantalla de contacto.
	 */
	mostrarContacto: function () {
		const core = window.CBCChatbot.core;

		this.ejecutarTraduccion(
			'traducirContacto'
		);

		this.ejecutarTraduccion(
			'traducirBotonesVolver'
		);

		const pantalla = core.mostrarPantalla(
			'contacto'
		);

		this.actualizarEnlacesWhatsApp();

		this.enfocarPrimerElemento(pantalla);
	},

	/**
	 * Conecta los botones para elegir idioma.
	 */
	registrarEventosIdioma: function () {
		const elementos = this.elementos;
		const core = window.CBCChatbot.core;
		const navigation = this;

		elementos.botonesIdioma.forEach(
			function (botonIdioma) {
				botonIdioma.addEventListener(
					'click',
					function () {
						const idioma =
							botonIdioma.dataset.idioma;

						navigation.guardarIdioma(
							idioma
						);

						navigation.ejecutarTraduccion(
							'traducirTituloChatbot'
						);

						navigation.ejecutarTraduccion(
							'traducirBotonesVolver'
						);

						navigation.ejecutarTraduccion(
							'traducirPantallaNombre'
						);

						navigation.actualizarEnlacesWhatsApp();

						const pantalla =
							core.mostrarPantalla(
								'nombre'
							);

						navigation.enfocarPrimerElemento(
							pantalla
						);
					}
				);
			}
		);
	},

	/**
	 * Conecta los botones y el formulario relacionados
	 * con el nombre del usuario.
	 */
	registrarEventosNombre: function () {
		const elementos = this.elementos;
		const core = window.CBCChatbot.core;
		const translations =
			window.CBCChatbot.translations;
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
					navigation.obtenerNombreUsuario();

				const pantalla = core.mostrarPantalla(
					'formulario-nombre'
				);

				navigation.enfocarPrimerElemento(
					pantalla
				);
			}
		);

		elementos.botonSinNombre.addEventListener(
			'click',
			function () {
				navigation.guardarNombre('');

				elementos.campoNombre.value = '';
				elementos.errorNombre.hidden = true;
				elementos.errorNombre.textContent = '';

				navigation.actualizarEnlacesWhatsApp();
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
					if (
						translations &&
						typeof translations
							.obtenerErrorNombre ===
							'function'
					) {
						elementos.errorNombre.textContent =
							translations
								.obtenerErrorNombre();
					} else {
						elementos.errorNombre.textContent =
							'Escribe un nombre de al menos 2 caracteres.';
					}

					elementos.errorNombre.hidden = false;

					elementos.campoNombre.setAttribute(
						'aria-invalid',
						'true'
					);

					elementos.campoNombre.focus();

					return;
				}

				elementos.errorNombre.hidden = true;
				elementos.errorNombre.textContent = '';

				elementos.campoNombre.removeAttribute(
					'aria-invalid'
				);

				navigation.guardarNombre(
					nombreIntroducido
				);

				navigation.actualizarEnlacesWhatsApp();
				navigation.mostrarMenuPrincipal();
			}
		);

		elementos.campoNombre.addEventListener(
			'input',
			function () {
				if (elementos.errorNombre.hidden) {
					return;
				}

				if (
					elementos.campoNombre.value
						.trim()
						.length >= 2
				) {
					elementos.errorNombre.hidden = true;
					elementos.errorNombre.textContent = '';

					elementos.campoNombre.removeAttribute(
						'aria-invalid'
					);
				}
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

		elementos.botonesVolver.forEach(
			function (botonVolver) {
				botonVolver.addEventListener(
					'click',
					function () {
						const pantallaDestino =
							botonVolver.dataset.volver;

						if (!pantallaDestino) {
							return;
						}

						const traduccionesPantalla = {
							nombre:
								'traducirPantallaNombre',

							'formulario-nombre':
								'traducirFormularioNombre',

							menu:
								'traducirMenu',

							'medicina-estetica':
								'traducirMedicinaEstetica',

							recuperacion:
								'traducirRecuperacion',

							salud:
								'traducirSalud',

							precios:
								'traducirPrecios',

							horarios:
								'traducirHorarios',

							ubicacion:
								'traducirUbicacion',

							contacto:
								'traducirContacto'
						};

						const funcionTraduccion =
							traduccionesPantalla[
								pantallaDestino
							];

						if (funcionTraduccion) {
							navigation.ejecutarTraduccion(
								funcionTraduccion
							);
						}

						navigation.ejecutarTraduccion(
							'traducirBotonesVolver'
						);

						navigation.actualizarEnlacesWhatsApp();

						const pantalla =
							core.mostrarPantalla(
								pantallaDestino
							);

						navigation.enfocarPrimerElemento(
							pantalla
						);
					}
				);
			}
		);
	},

	/**
	 * Abre Doctoralia en una pestaña nueva.
	 */
	abrirDoctoralia: function () {
		const nuevaVentana = window.open(
			this.urlDoctoralia,
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
	 * Obtiene la etiqueta visible correspondiente
	 * a una categoría.
	 */
	obtenerEtiquetaCategoria: function (categoria) {
		const idioma = this.obtenerIdioma();

		const textos = {
			va: {
				'medicina-estetica':
					'medicina estètica',

				'recuperacion-movimiento':
					'recuperació i moviment',

				'salud-bienestar':
					'salut i benestar'
			},

			es: {
				'medicina-estetica':
					'medicina estética',

				'recuperacion-movimiento':
					'recuperación y movimiento',

				'salud-bienestar':
					'salud y bienestar'
			},

			en: {
				'medicina-estetica':
					'aesthetic medicine',

				'recuperacion-movimiento':
					'recovery and movement',

				'salud-bienestar':
					'health and wellness'
			}
		};

		const traducciones = textos[idioma] || textos.es;

		return traducciones[categoria] || '';
	},

	/**
	 * Localiza el botón asociado a la selección guardada
	 * y obtiene su texto ya traducido.
	 */
	obtenerEtiquetaTratamiento: function (
		categoria,
		tratamiento
	) {
		if (!tratamiento) {
			return '';
		}

		const selectores = {
			'medicina-estetica':
				'[data-estetica="' +
				tratamiento +
				'"]',

			'recuperacion-movimiento':
				'[data-recuperacion="' +
				tratamiento +
				'"]',

			'salud-bienestar':
				'[data-salud="' +
				tratamiento +
				'"]'
		};

		const selector = selectores[categoria];

		if (!selector) {
			return '';
		}

		const boton = document.querySelector(selector);

		if (!boton) {
			return tratamiento;
		}

		return boton.textContent.trim();
	},

	/**
	 * Detecta desde qué pantalla se abre WhatsApp.
	 */
	obtenerContextoWhatsApp: function (enlace) {
		if (!enlace) {
			return 'contacto';
		}

		if (enlace.dataset.whatsappContexto) {
			return enlace.dataset.whatsappContexto;
		}

		const pantalla = enlace.closest(
			'[data-pantalla]'
		);

		if (!pantalla) {
			return 'contacto';
		}

		return pantalla.dataset.pantalla || 'contacto';
	},

	/**
	 * Construye el mensaje de WhatsApp según:
	 *
	 * idioma,
	 * nombre,
	 * pantalla actual,
	 * categoría,
	 * tratamiento seleccionado.
	 */
	construirMensajeWhatsApp: function (contexto) {
		const idioma = this.obtenerIdioma();
		const nombre = this.obtenerNombreUsuario();

		const categoria =
			this.obtenerCategoriaSeleccionada();

		const tratamiento =
			this.obtenerTratamientoSeleccionado();

		const etiquetaCategoria =
			this.obtenerEtiquetaCategoria(categoria);

		const etiquetaTratamiento =
			this.obtenerEtiquetaTratamiento(
				categoria,
				tratamiento
			);

		const saludos = {
			va: nombre
				? 'Hola, soc ' + nombre + '.'
				: 'Hola.',

			es: nombre
				? 'Hola, soy ' + nombre + '.'
				: 'Hola.',

			en: nombre
				? 'Hello, my name is ' + nombre + '.'
				: 'Hello.'
		};

		const mensajes = {
			va: {
				contacto:
					'M’agradaria contactar amb l’equip de HealthyVal.',

				ubicacion:
					'Necessite informació sobre la ubicació de la clínica.',

				horarios:
					'Necessite informació sobre els horaris i la disponibilitat.',

				precios:
					'M’agradaria rebre informació sobre els preus i sol·licitar una valoració.',

				medicina:
					'M’agradaria rebre informació sobre medicina estètica.',

				recuperacion:
					'M’agradaria rebre informació sobre recuperació i moviment.',

				salud:
					'M’agradaria rebre informació sobre salut i benestar.',

				tratamiento:
					'M’interessa {tratamiento} i m’agradaria rebre més informació o demanar cita.',

				categoria:
					'M’interessa l’àrea de {categoria} i m’agradaria rebre més informació.'
			},

			es: {
				contacto:
					'Me gustaría contactar con el equipo de HealthyVal.',

				ubicacion:
					'Necesito información sobre la ubicación de la clínica.',

				horarios:
					'Necesito información sobre los horarios y la disponibilidad.',

				precios:
					'Me gustaría recibir información sobre los precios y solicitar una valoración.',

				medicina:
					'Me gustaría recibir información sobre medicina estética.',

				recuperacion:
					'Me gustaría recibir información sobre recuperación y movimiento.',

				salud:
					'Me gustaría recibir información sobre salud y bienestar.',

				tratamiento:
					'Me interesa {tratamiento} y me gustaría recibir más información o pedir cita.',

				categoria:
					'Me interesa el área de {categoria} y me gustaría recibir más información.'
			},

			en: {
				contacto:
					'I would like to contact the HealthyVal team.',

				ubicacion:
					'I need information about the clinic location.',

				horarios:
					'I need information about opening hours and availability.',

				precios:
					'I would like information about prices and to request an assessment.',

				medicina:
					'I would like information about aesthetic medicine.',

				recuperacion:
					'I would like information about recovery and movement services.',

				salud:
					'I would like information about health and wellness services.',

				tratamiento:
					'I am interested in {tratamiento} and would like more information or to book an appointment.',

				categoria:
					'I am interested in {categoria} and would like more information.'
			}
		};

		const traduccion =
			mensajes[idioma] || mensajes.es;

		let cuerpoMensaje = traduccion.contacto;

		if (etiquetaTratamiento) {
			cuerpoMensaje =
				traduccion.tratamiento.replace(
					'{tratamiento}',
					etiquetaTratamiento
				);
		} else if (
			etiquetaCategoria &&
			[
				'medicina-estetica',
				'recuperacion',
				'salud'
			].includes(contexto)
		) {
			cuerpoMensaje =
				traduccion.categoria.replace(
					'{categoria}',
					etiquetaCategoria
				);
		} else {
			switch (contexto) {
				case 'ubicacion':
					cuerpoMensaje =
						traduccion.ubicacion;
					break;

				case 'horarios':
					cuerpoMensaje =
						traduccion.horarios;
					break;

				case 'precios':
					cuerpoMensaje =
						traduccion.precios;
					break;

				case 'medicina-estetica':
					cuerpoMensaje =
						traduccion.medicina;
					break;

				case 'recuperacion':
					cuerpoMensaje =
						traduccion.recuperacion;
					break;

				case 'salud':
					cuerpoMensaje =
						traduccion.salud;
					break;

				default:
					cuerpoMensaje =
						traduccion.contacto;
			}
		}

		return saludos[idioma] + ' ' + cuerpoMensaje;
	},

	/**
	 * Genera la URL final de WhatsApp.
	 */
	construirUrlWhatsApp: function (contexto) {
		const mensaje =
			this.construirMensajeWhatsApp(contexto);

		return (
			'https://wa.me/' +
			this.telefonoWhatsApp +
			'?text=' +
			encodeURIComponent(mensaje)
		);
	},

	/**
	 * Actualiza todos los enlaces de WhatsApp
	 * con el mensaje personalizado correspondiente.
	 */
	actualizarEnlacesWhatsApp: function () {
		const navigation = this;

		this.elementos.enlacesWhatsApp.forEach(
			function (enlace) {
				const contexto =
					navigation.obtenerContextoWhatsApp(
						enlace
					);

				enlace.href =
					navigation.construirUrlWhatsApp(
						contexto
					);
			}
		);
	},

	/**
	 * Actualiza cada enlace justo antes de abrirlo.
	 */
	registrarEventosWhatsApp: function () {
		const navigation = this;

		this.elementos.enlacesWhatsApp.forEach(
			function (enlace) {
				const actualizarEnlace = function () {
					const contexto =
						navigation
							.obtenerContextoWhatsApp(
								enlace
							);

					enlace.href =
						navigation
							.construirUrlWhatsApp(
								contexto
							);
				};

				enlace.addEventListener(
					'pointerenter',
					actualizarEnlace
				);

				enlace.addEventListener(
					'focus',
					actualizarEnlace
				);

				enlace.addEventListener(
					'click',
					actualizarEnlace
				);
			}
		);
	},

	/**
	 * Guarda las subcategorías seleccionadas
	 * de Medicina estética.
	 */
	registrarEventosEstetica: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesEstetica.forEach(
			function (boton) {
				boton.setAttribute(
					'aria-pressed',
					'false'
				);

				boton.addEventListener(
					'click',
					function () {
						const opcionElegida =
							boton.dataset.estetica;

						navigation.guardarCategoria(
							'medicina-estetica'
						);

						navigation.guardarTratamiento(
							opcionElegida
						);

						navigation.marcarOpcionSeleccionada(
							elementos.botonesEstetica,
							boton
						);

						navigation.actualizarEnlacesWhatsApp();

						console.info(
							'Subcategoría estética seleccionada:',
							opcionElegida
						);
					}
				);
			}
		);
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
				boton.setAttribute(
					'aria-pressed',
					'false'
				);

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

						navigation.marcarOpcionSeleccionada(
							elementos
								.botonesRecuperacion,
							boton
						);

						navigation.actualizarEnlacesWhatsApp();

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

		elementos.botonesSalud.forEach(
			function (boton) {
				boton.setAttribute(
					'aria-pressed',
					'false'
				);

				boton.addEventListener(
					'click',
					function () {
						const opcionElegida =
							boton.dataset.salud;

						navigation.guardarCategoria(
							'salud-bienestar'
						);

						navigation.guardarTratamiento(
							opcionElegida
						);

						navigation.marcarOpcionSeleccionada(
							elementos.botonesSalud,
							boton
						);

						navigation.actualizarEnlacesWhatsApp();

						console.info(
							'Especialidad de salud seleccionada:',
							opcionElegida
						);
					}
				);
			}
		);
	},

	/**
	 * Conecta los botones del menú principal.
	 */
	registrarEventosMenu: function () {
		const elementos = this.elementos;
		const navigation = this;

		elementos.botonesMenu.forEach(
			function (botonMenu) {
				botonMenu.addEventListener(
					'click',
					function () {
						const opcionElegida =
							botonMenu.dataset.menu;

						switch (opcionElegida) {
							case 'medicina-estetica':
								navigation.guardarCategoria(
									'medicina-estetica'
								);

								navigation
									.mostrarMedicinaEstetica();
								break;

							case 'recuperacion-movimiento':
								navigation.guardarCategoria(
									'recuperacion-movimiento'
								);

								navigation
									.mostrarRecuperacion();
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
					}
				);
			}
		);
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
		this.registrarEventosWhatsApp();
		this.registrarEventosEstetica();
		this.registrarEventosRecuperacion();
		this.registrarEventosSalud();

		this.actualizarEnlacesWhatsApp();

		return true;
	}
};