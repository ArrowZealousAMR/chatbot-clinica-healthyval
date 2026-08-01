window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.translations = {
	/**
	 * Localiza los elementos cuyo contenido cambia según el idioma.
	 */
	obtenerElementos: function () {
		return {
			tituloChatbot: document.querySelector(
				'.cbc-chatbot__titulo'
			),

			preguntaNombre: document.querySelector(
				'.cbc-chatbot__pregunta-nombre'
			),

			botonEscribirNombre: document.querySelector(
				'.cbc-chatbot__escribir-nombre'
			),

			botonSinNombre: document.querySelector(
				'.cbc-chatbot__continuar-sin-nombre'
			),

			etiquetaNombre: document.querySelector(
				'.cbc-chatbot__etiqueta-nombre'
			),

			campoNombre: document.querySelector(
				'.cbc-chatbot__campo-nombre'
			),

			botonGuardarNombre: document.querySelector(
				'.cbc-chatbot__guardar-nombre'
			),

			saludoMenu: document.querySelector(
				'.cbc-chatbot__saludo-menu'
			),

			preguntaMenu: document.querySelector(
				'.cbc-chatbot__pregunta-menu'
			),

			tituloHorarios: document.querySelector(
				'.cbc-chatbot__titulo-horarios'
			),

			horarioSemana: document.querySelector(
				'.cbc-chatbot__horario-semana'
			),

			horarioFinSemana: document.querySelector(
				'.cbc-chatbot__horario-sabado'
			),

			tituloUbicacion: document.querySelector(
				'.cbc-chatbot__titulo-ubicacion'
			),

			textoMapa: document.querySelector(
				'.cbc-chatbot__texto-mapa'
			),

			textoLlamar: document.querySelector(
				'.cbc-chatbot__texto-llamar'
			),

			tituloContacto: document.querySelector(
				'.cbc-chatbot__titulo-contacto'
			),

			tituloMedicinaEstetica: document.querySelector(
				'.cbc-chatbot__titulo-medicina-estetica'
			),

			textoMedicinaEstetica: document.querySelector(
				'.cbc-chatbot__texto-medicina-estetica'
			),

			botonesEstetica: document.querySelectorAll(
				'[data-estetica]'
			),

			botonCitaEstetica: document.querySelector(
				'.cbc-chatbot__boton-cita-estetica'
			),

			botonesVolver: document.querySelectorAll(
				'[data-volver]'
			)
		};
	},

	/**
	 * Cambia el texto de un botón del menú principal.
	 */
	actualizarTextoBotonMenu: function (valor, texto) {
		const boton = document.querySelector(
			'[data-menu="' + valor + '"]'
		);

		if (boton) {
			boton.textContent = texto;
		}
	},

	/**
	 * Traduce el título de la cabecera.
	 */
	traducirTituloChatbot: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (!elementos.tituloChatbot) {
			return;
		}

		if (idioma === 'va') {
			elementos.tituloChatbot.textContent =
				'Assistent HealthyVal';
		} else if (idioma === 'en') {
			elementos.tituloChatbot.textContent =
				'HealthyVal Assistant';
		} else {
			elementos.tituloChatbot.textContent =
				'Asistente HealthyVal';
		}
	},

	/**
	 * Traduce todos los botones para volver.
	 */
	traducirBotonesVolver: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		let texto = '← Volver';

		if (idioma === 'va') {
			texto = '← Enrere';
		} else if (idioma === 'en') {
			texto = '← Back';
		}

		elementos.botonesVolver.forEach(function (boton) {
			boton.textContent = texto;
		});
	},

	/**
	 * Traduce la pantalla donde se pregunta por el nombre.
	 */
	traducirPantallaNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.preguntaNombre ||
			!elementos.botonEscribirNombre ||
			!elementos.botonSinNombre
		) {
			return;
		}

		if (idioma === 'va') {
			elementos.preguntaNombre.textContent =
				'Com et dius?';

			elementos.botonEscribirNombre.textContent =
				'Escriure el meu nom';

			elementos.botonSinNombre.textContent =
				'Continuar sense nom';
		} else if (idioma === 'en') {
			elementos.preguntaNombre.textContent =
				'What is your name?';

			elementos.botonEscribirNombre.textContent =
				'Enter my name';

			elementos.botonSinNombre.textContent =
				'Continue without a name';
		} else {
			elementos.preguntaNombre.textContent =
				'¿Cómo te llamas?';

			elementos.botonEscribirNombre.textContent =
				'Escribir mi nombre';

			elementos.botonSinNombre.textContent =
				'Continuar sin nombre';
		}
	},

	/**
	 * Traduce el formulario donde se escribe el nombre.
	 */
	traducirFormularioNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.etiquetaNombre ||
			!elementos.campoNombre ||
			!elementos.botonGuardarNombre
		) {
			return;
		}

		if (idioma === 'va') {
			elementos.etiquetaNombre.textContent =
				'Escriu el teu nom';

			elementos.campoNombre.placeholder =
				'El teu nom';

			elementos.botonGuardarNombre.textContent =
				'Continuar';
		} else if (idioma === 'en') {
			elementos.etiquetaNombre.textContent =
				'Enter your name';

			elementos.campoNombre.placeholder =
				'Your name';

			elementos.botonGuardarNombre.textContent =
				'Continue';
		} else {
			elementos.etiquetaNombre.textContent =
				'Escribe tu nombre';

			elementos.campoNombre.placeholder =
				'Tu nombre';

			elementos.botonGuardarNombre.textContent =
				'Continuar';
		}
	},

	/**
	 * Traduce el menú principal.
	 */
	traducirMenu: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const nombre = window.CBCChatbot.state.nombreUsuario;
		const elementos = this.obtenerElementos();

		if (!elementos.saludoMenu || !elementos.preguntaMenu) {
			return;
		}

		if (idioma === 'va') {
			elementos.saludoMenu.textContent = nombre
				? 'Hola, ' + nombre + '.'
				: 'Hola.';

			elementos.preguntaMenu.textContent =
				'En què podem ajudar-te?';

			this.actualizarTextoBotonMenu(
				'medicina-estetica',
				'Medicina estètica'
			);

			this.actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recuperació i moviment'
			);

			this.actualizarTextoBotonMenu(
				'salud-bienestar',
				'Salut i benestar'
			);

			this.actualizarTextoBotonMenu(
				'precios',
				'Preus'
			);

			this.actualizarTextoBotonMenu(
				'cita',
				'Demanar cita'
			);

			this.actualizarTextoBotonMenu(
				'horarios',
				'Horaris'
			);

			this.actualizarTextoBotonMenu(
				'ubicacion',
				'On estem'
			);

			this.actualizarTextoBotonMenu(
				'contacto',
				'Contactar amb HealthyVal'
			);
		} else if (idioma === 'en') {
			elementos.saludoMenu.textContent = nombre
				? 'Hello, ' + nombre + '.'
				: 'Hello.';

			elementos.preguntaMenu.textContent =
				'How can we help you?';

			this.actualizarTextoBotonMenu(
				'medicina-estetica',
				'Aesthetic medicine'
			);

			this.actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recovery and movement'
			);

			this.actualizarTextoBotonMenu(
				'salud-bienestar',
				'Health and wellness'
			);

			this.actualizarTextoBotonMenu(
				'precios',
				'Prices'
			);

			this.actualizarTextoBotonMenu(
				'cita',
				'Book an appointment'
			);

			this.actualizarTextoBotonMenu(
				'horarios',
				'Opening hours'
			);

			this.actualizarTextoBotonMenu(
				'ubicacion',
				'Find us'
			);

			this.actualizarTextoBotonMenu(
				'contacto',
				'Contact HealthyVal'
			);
		} else {
			elementos.saludoMenu.textContent = nombre
				? 'Hola, ' + nombre + '.'
				: 'Hola.';

			elementos.preguntaMenu.textContent =
				'¿En qué podemos ayudarte?';

			this.actualizarTextoBotonMenu(
				'medicina-estetica',
				'Medicina estética'
			);

			this.actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recuperación y movimiento'
			);

			this.actualizarTextoBotonMenu(
				'salud-bienestar',
				'Salud y bienestar'
			);

			this.actualizarTextoBotonMenu(
				'precios',
				'Precios'
			);

			this.actualizarTextoBotonMenu(
				'cita',
				'Pedir cita'
			);

			this.actualizarTextoBotonMenu(
				'horarios',
				'Horarios'
			);

			this.actualizarTextoBotonMenu(
				'ubicacion',
				'Dónde estamos'
			);

			this.actualizarTextoBotonMenu(
				'contacto',
				'Contactar con HealthyVal'
			);
		}
	},

	/**
	 * Traduce la pantalla de horarios.
	 */
	traducirHorarios: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloHorarios ||
			!elementos.horarioSemana ||
			!elementos.horarioFinSemana
		) {
			return;
		}

		if (idioma === 'va') {
			elementos.tituloHorarios.textContent =
				'Horaris';

			elementos.horarioSemana.textContent =
				'De dilluns a divendres: de 10.00 a 20.00 h.';

			elementos.horarioFinSemana.textContent =
				'Dissabtes i diumenges: tancat.';
		} else if (idioma === 'en') {
			elementos.tituloHorarios.textContent =
				'Opening hours';

			elementos.horarioSemana.textContent =
				'Monday to Friday: 10:00 a.m. to 8:00 p.m.';

			elementos.horarioFinSemana.textContent =
				'Saturday and Sunday: closed.';
		} else {
			elementos.tituloHorarios.textContent =
				'Horarios';

			elementos.horarioSemana.textContent =
				'Lunes a viernes: de 10:00 a 20:00.';

			elementos.horarioFinSemana.textContent =
				'Sábados y domingos: cerrado.';
		}
	},

	/**
	 * Traduce la pantalla de ubicación.
	 */
	traducirUbicacion: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloUbicacion ||
			!elementos.textoMapa ||
			!elementos.textoLlamar
		) {
			return;
		}

		if (idioma === 'va') {
			elementos.tituloUbicacion.textContent =
				'On estem';

			elementos.textoMapa.textContent =
				'Obrir en Google Maps';

			elementos.textoLlamar.textContent =
				'Telefonar';
		} else if (idioma === 'en') {
			elementos.tituloUbicacion.textContent =
				'Find us';

			elementos.textoMapa.textContent =
				'Open in Google Maps';

			elementos.textoLlamar.textContent =
				'Call us';
		} else {
			elementos.tituloUbicacion.textContent =
				'Dónde estamos';

			elementos.textoMapa.textContent =
				'Abrir en Google Maps';

			elementos.textoLlamar.textContent =
				'Llamar';
		}
	},

	/**
	 * Traduce el título de la pantalla de contacto.
	 */
	traducirContacto: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (!elementos.tituloContacto) {
			return;
		}

		if (idioma === 'va') {
			elementos.tituloContacto.textContent =
				'Contactar amb HealthyVal';
		} else if (idioma === 'en') {
			elementos.tituloContacto.textContent =
				'Contact HealthyVal';
		} else {
			elementos.tituloContacto.textContent =
				'Contactar con HealthyVal';
		}
	},

	/**
	 * Devuelve el mensaje de error del campo del nombre.
	 */
	obtenerErrorNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;

		if (idioma === 'va') {
			return 'Escriu un nom d’almenys 2 caràcters.';
		}

		if (idioma === 'en') {
			return 'Enter a name with at least 2 characters.';
		}

		return 'Escribe un nombre de al menos 2 caracteres.';
	},

	/**
	 * Traduce la pantalla y las subcategorías
	 * de Medicina estética.
	 */
	traducirMedicinaEstetica: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloMedicinaEstetica ||
			!elementos.textoMedicinaEstetica ||
			!elementos.botonCitaEstetica ||
			!elementos.botonesEstetica.length
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Medicina estètica',
				pregunta: 'Quin tractament t’interessa?',
				cita: 'Demanar cita',
				opciones: {
					'facial-armonizacion':
						'Facial i harmonització',

					'piel-luminosidad':
						'Pell i lluminositat',

					corporales:
						'Tractaments corporals',

					capilar:
						'Medicina capil·lar',

					'laser-plasma':
						'Làser de plasma'
				}
			},

			es: {
				titulo: 'Medicina estética',
				pregunta: '¿Qué tratamiento te interesa?',
				cita: 'Pedir cita',
				opciones: {
					'facial-armonizacion':
						'Facial y armonización',

					'piel-luminosidad':
						'Piel y luminosidad',

					corporales:
						'Tratamientos corporales',

					capilar:
						'Medicina capilar',

					'laser-plasma':
						'Láser de plasma'
				}
			},

			en: {
				titulo: 'Aesthetic medicine',
				pregunta:
					'Which treatment are you interested in?',
				cita: 'Book an appointment',
				opciones: {
					'facial-armonizacion':
						'Facial treatments and harmonisation',

					'piel-luminosidad':
						'Skin and radiance',

					corporales:
						'Body treatments',

					capilar:
						'Hair treatments',

					'laser-plasma':
						'Plasma laser'
				}
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.tituloMedicinaEstetica.textContent =
			traduccion.titulo;

		elementos.textoMedicinaEstetica.textContent =
			traduccion.pregunta;

		elementos.botonCitaEstetica.textContent =
			traduccion.cita;

		elementos.botonesEstetica.forEach(function (boton) {
			const clave = boton.dataset.estetica;

			if (traduccion.opciones[clave]) {
				boton.textContent =
					traduccion.opciones[clave];
			}
		});
	},

	/**
	 * Traduce las pantallas que todavía tienen
	 * contenido provisional.
	 */
	traducirPantallasBasicas: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;

		const textos = {
			recuperacion: {
				va: {
					titulo: 'Recuperació i moviment',
					mensaje:
						'Aquesta secció estarà disponible pròximament.'
				},
				es: {
					titulo: 'Recuperación y movimiento',
					mensaje:
						'Esta sección estará disponible próximamente.'
				},
				en: {
					titulo: 'Recovery and movement',
					mensaje:
						'This section will be available soon.'
				}
			},

			salud: {
				va: {
					titulo: 'Salut i benestar',
					mensaje:
						'Aquesta secció estarà disponible pròximament.'
				},
				es: {
					titulo: 'Salud y bienestar',
					mensaje:
						'Esta sección estará disponible próximamente.'
				},
				en: {
					titulo: 'Health and wellness',
					mensaje:
						'This section will be available soon.'
				}
			},

			precios: {
				va: {
					titulo: 'Preus',
					mensaje:
						'Aquesta secció estarà disponible pròximament.'
				},
				es: {
					titulo: 'Precios',
					mensaje:
						'Esta sección estará disponible próximamente.'
				},
				en: {
					titulo: 'Prices',
					mensaje:
						'This section will be available soon.'
				}
			},

			cita: {
				va: {
					titulo: 'Demanar cita',
					mensaje:
						'Aquesta secció estarà disponible pròximament.'
				},
				es: {
					titulo: 'Pedir cita',
					mensaje:
						'Esta sección estará disponible próximamente.'
				},
				en: {
					titulo: 'Book an appointment',
					mensaje:
						'This section will be available soon.'
				}
			}
		};

		Object.keys(textos).forEach(function (nombrePantalla) {
			const pantalla = document.querySelector(
				'[data-pantalla="' + nombrePantalla + '"]'
			);

			if (!pantalla) {
				return;
			}

			const subtitulo = pantalla.querySelector(
				'.cbc-chatbot__subtitulo'
			);

			const texto = pantalla.querySelector('p');

			if (!subtitulo || !texto) {
				return;
			}

			const traduccionesPantalla =
				textos[nombrePantalla];

			const traduccion =
				traduccionesPantalla[idioma] ||
				traduccionesPantalla.es;

			subtitulo.textContent =
				traduccion.titulo;

			texto.textContent =
				traduccion.mensaje;
		});
	}
};