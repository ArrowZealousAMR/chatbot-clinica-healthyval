window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.translations = {
	/**
	 * Localiza todos los elementos cuyo contenido
	 * puede cambiar según el idioma seleccionado.
	 */
	obtenerElementos: function () {
		return {
			tituloChatbot: document.querySelector(
				'.cbc-chatbot__titulo'
			),

			preguntaNombre: document.querySelector(
				'.cbc-chatbot__pregunta-nombre'
			),

			ayudaNombreInicial: document.querySelector(
				'.cbc-chatbot__ayuda-nombre-inicial'
			),

			ayudaFormularioNombre: document.querySelector(
				'.cbc-chatbot__ayuda-formulario-nombre'
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

			/*
			 * Horarios.
			 */
			tituloHorarios: document.querySelector(
				'.cbc-chatbot__titulo-horarios'
			),

			textoHorarios: document.querySelector(
				'.cbc-chatbot__texto-horarios'
			),

			tituloTablaHorarios: document.querySelector(
				'.cbc-chatbot__titulo-tabla-horarios'
			),

			diaLunes: document.querySelector(
				'.cbc-chatbot__dia-lunes'
			),

			horarioLunes: document.querySelector(
				'.cbc-chatbot__horario-lunes'
			),

			diaMartes: document.querySelector(
				'.cbc-chatbot__dia-martes'
			),

			horarioMartes: document.querySelector(
				'.cbc-chatbot__horario-martes'
			),

			diaMiercoles: document.querySelector(
				'.cbc-chatbot__dia-miercoles'
			),

			horarioMiercoles: document.querySelector(
				'.cbc-chatbot__horario-miercoles'
			),

			diaJueves: document.querySelector(
				'.cbc-chatbot__dia-jueves'
			),

			horarioJueves: document.querySelector(
				'.cbc-chatbot__horario-jueves'
			),

			diaViernes: document.querySelector(
				'.cbc-chatbot__dia-viernes'
			),

			horarioViernes: document.querySelector(
				'.cbc-chatbot__horario-viernes'
			),

			diaSabado: document.querySelector(
				'.cbc-chatbot__dia-sabado'
			),

			horarioSabado: document.querySelector(
				'.cbc-chatbot__horario-sabado'
			),

			diaDomingo: document.querySelector(
				'.cbc-chatbot__dia-domingo'
			),

			horarioDomingo: document.querySelector(
				'.cbc-chatbot__horario-domingo'
			),

			textoCitaHorarios: document.querySelector(
				'.cbc-chatbot__texto-cita-horarios'
			),

			textoLlamarHorarios: document.querySelector(
				'.cbc-chatbot__texto-llamar-horarios'
			),

			textoWhatsappHorarios: document.querySelector(
				'.cbc-chatbot__texto-whatsapp-horarios'
			),

			/*
			 * Ubicación.
			 */
			tituloUbicacion: document.querySelector(
				'.cbc-chatbot__titulo-ubicacion'
			),

			textoUbicacion: document.querySelector(
				'.cbc-chatbot__texto-ubicacion'
			),

			textoGoogleMaps: document.querySelector(
				'.cbc-chatbot__texto-google-maps'
			),

			textoAppleMaps: document.querySelector(
				'.cbc-chatbot__texto-apple-maps'
			),

			textoLlamar: document.querySelector(
				'.cbc-chatbot__texto-llamar'
			),

			textoWhatsappUbicacion: document.querySelector(
				'.cbc-chatbot__texto-whatsapp-ubicacion'
			),

			/*
			 * Contacto.
			 */
			tituloContacto: document.querySelector(
				'.cbc-chatbot__titulo-contacto'
			),

			textoContacto: document.querySelector(
				'.cbc-chatbot__texto-contacto'
			),

			textoWhatsapp: document.querySelector(
				'.cbc-chatbot__texto-whatsapp'
			),

			textoRedes: document.querySelector(
				'.cbc-chatbot__texto-redes'
			),

			/*
			 * Medicina estética.
			 */
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

			/*
			 * Recuperación y movimiento.
			 */
			tituloRecuperacion: document.querySelector(
				'.cbc-chatbot__titulo-recuperacion'
			),

			textoRecuperacion: document.querySelector(
				'.cbc-chatbot__texto-recuperacion'
			),

			botonesRecuperacion: document.querySelectorAll(
				'[data-recuperacion]'
			),

			botonCitaRecuperacion: document.querySelector(
				'.cbc-chatbot__boton-cita-recuperacion'
			),

			/*
			 * Salud y bienestar.
			 */
			tituloSalud: document.querySelector(
				'.cbc-chatbot__titulo-salud'
			),

			textoSalud: document.querySelector(
				'.cbc-chatbot__texto-salud'
			),

			botonesSalud: document.querySelectorAll(
				'[data-salud]'
			),

			botonCitaSalud: document.querySelector(
				'.cbc-chatbot__boton-cita-salud'
			),

			/*
			 * Precios.
			 */
			tituloPrecios: document.querySelector(
				'.cbc-chatbot__titulo-precios'
			),

			textoPrecios: document.querySelector(
				'.cbc-chatbot__texto-precios'
			),

			descripcionPrecios: document.querySelector(
				'.cbc-chatbot__descripcion-precios'
			),

			notaPrecios: document.querySelector(
				'.cbc-chatbot__nota-precios'
			),

			textoValoracionPrecios: document.querySelector(
				'.cbc-chatbot__texto-valoracion-precios'
			),

			textoWhatsappPrecios: document.querySelector(
				'.cbc-chatbot__texto-whatsapp-precios'
			),

			textoLlamarPrecios: document.querySelector(
				'.cbc-chatbot__texto-llamar-precios'
			),

			botonesVolver: document.querySelectorAll(
				'[data-volver]'
			)
		};
	},

	/**
	 * Cambia el texto de una opción del menú principal.
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
	 * Cambia los textos de una colección de botones
	 * utilizando uno de sus atributos data.
	 */
	actualizarBotonesPorDatos: function (
		botones,
		nombreDato,
		traducciones
	) {
		botones.forEach(function (boton) {
			const clave = boton.dataset[nombreDato];

			if (traducciones[clave]) {
				boton.textContent = traducciones[clave];
			}
		});
	},

	/**
	 * Devuelve el nombre guardado durante la sesión.
	 */
	obtenerNombreUsuario: function () {
		const state = window.CBCChatbot.state;

		if (
			!state ||
			typeof state.nombreUsuario !== 'string'
		) {
			return '';
		}

		return state.nombreUsuario.trim();
	},

	/**
	 * Añade el nombre al inicio de un mensaje
	 * cuando el usuario lo ha indicado.
	 */
	personalizarTexto: function (texto) {
		const nombre = this.obtenerNombreUsuario();

		if (!nombre) {
			return texto;
		}

		return nombre + ', ' + texto;
	},

	/**
	 * Mantiene el nombre corporativo de la cabecera.
	 */
	traducirTituloChatbot: function () {
		const elementos = this.obtenerElementos();

		if (!elementos.tituloChatbot) {
			return;
		}

		elementos.tituloChatbot.innerHTML =
			'healthyval<sup>®</sup>';
	},

	/**
	 * Traduce todos los botones para volver.
	 */
	traducirBotonesVolver: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		const textos = {
			va: '← Enrere',
			es: '← Volver',
			en: '← Back'
		};

		const texto = textos[idioma] || textos.es;

		elementos.botonesVolver.forEach(function (boton) {
			boton.textContent = texto;
		});
	},

	/**
	 * Traduce la pantalla donde se pregunta el nombre.
	 */
	traducirPantallaNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.preguntaNombre ||
			!elementos.ayudaNombreInicial ||
			!elementos.botonEscribirNombre ||
			!elementos.botonSinNombre
		) {
			return;
		}

		const textos = {
			va: {
				pregunta: 'Com et dius?',
				ayuda:
					'És opcional. L’utilitzarem per personalitzar aquesta conversa.',
				escribir: 'Escriure el meu nom',
				continuar: 'Continuar sense nom'
			},

			es: {
				pregunta: '¿Cómo te llamas?',
				ayuda:
					'Es opcional. Lo utilizaremos para personalizar esta conversación.',
				escribir: 'Escribir mi nombre',
				continuar: 'Continuar sin nombre'
			},

			en: {
				pregunta: 'What is your name?',
				ayuda:
					'This is optional. We will use it to personalise this conversation.',
				escribir: 'Enter my name',
				continuar: 'Continue without a name'
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.preguntaNombre.textContent =
			traduccion.pregunta;

		elementos.ayudaNombreInicial.textContent =
			traduccion.ayuda;

		elementos.botonEscribirNombre.textContent =
			traduccion.escribir;

		elementos.botonSinNombre.textContent =
			traduccion.continuar;
	},

	/**
	 * Traduce el formulario del nombre.
	 */
	traducirFormularioNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.etiquetaNombre ||
			!elementos.campoNombre ||
			!elementos.ayudaFormularioNombre ||
			!elementos.botonGuardarNombre
		) {
			return;
		}

		const textos = {
			va: {
				etiqueta: 'Escriu el teu nom',
				placeholder: 'El teu nom',
				ayuda:
					'El nom es conservarà únicament durant aquesta sessió per personalitzar l’assistent.',
				continuar: 'Continuar'
			},

			es: {
				etiqueta: 'Escribe tu nombre',
				placeholder: 'Tu nombre',
				ayuda:
					'El nombre se conservará únicamente durante esta sesión para personalizar el asistente.',
				continuar: 'Continuar'
			},

			en: {
				etiqueta: 'Enter your name',
				placeholder: 'Your name',
				ayuda:
					'Your name will only be kept during this session to personalise the assistant.',
				continuar: 'Continue'
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.etiquetaNombre.textContent =
			traduccion.etiqueta;

		elementos.campoNombre.placeholder =
			traduccion.placeholder;

		elementos.ayudaFormularioNombre.textContent =
			traduccion.ayuda;

		elementos.botonGuardarNombre.textContent =
			traduccion.continuar;
	},

	/**
	 * Traduce el menú principal.
	 */
	traducirMenu: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const nombre = this.obtenerNombreUsuario();
		const elementos = this.obtenerElementos();

		if (!elementos.saludoMenu || !elementos.preguntaMenu) {
			return;
		}

		const textos = {
			va: {
				saludo: nombre
					? 'Hola, ' + nombre + '.'
					: 'Hola.',

				pregunta: 'En què podem ajudar-te?',

				opciones: {
					'medicina-estetica':
						'Medicina estètica',

					'recuperacion-movimiento':
						'Recuperació i moviment',

					'salud-bienestar':
						'Salut i benestar',

					precios:
						'Preus',

					cita:
						'Demanar cita',

					horarios:
						'Horaris',

					ubicacion:
						'On estem',

					contacto:
						'Contactar amb HealthyVal'
				}
			},

			es: {
				saludo: nombre
					? 'Hola, ' + nombre + '.'
					: 'Hola.',

				pregunta: '¿En qué podemos ayudarte?',

				opciones: {
					'medicina-estetica':
						'Medicina estética',

					'recuperacion-movimiento':
						'Recuperación y movimiento',

					'salud-bienestar':
						'Salud y bienestar',

					precios:
						'Precios',

					cita:
						'Pedir cita',

					horarios:
						'Horarios',

					ubicacion:
						'Dónde estamos',

					contacto:
						'Contactar con HealthyVal'
				}
			},

			en: {
				saludo: nombre
					? 'Hello, ' + nombre + '.'
					: 'Hello.',

				pregunta: 'How can we help you?',

				opciones: {
					'medicina-estetica':
						'Aesthetic medicine',

					'recuperacion-movimiento':
						'Recovery and movement',

					'salud-bienestar':
						'Health and wellness',

					precios:
						'Prices',

					cita:
						'Book an appointment',

					horarios:
						'Opening hours',

					ubicacion:
						'Find us',

					contacto:
						'Contact HealthyVal'
				}
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.saludoMenu.textContent =
			traduccion.saludo;

		elementos.preguntaMenu.textContent =
			traduccion.pregunta;

		const translations = this;

		Object.keys(traduccion.opciones).forEach(
			function (clave) {
				translations.actualizarTextoBotonMenu(
					clave,
					traduccion.opciones[clave]
				);
			}
		);
	},

	/**
	 * Traduce la pantalla de horarios.
	 */
	traducirHorarios: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloHorarios ||
			!elementos.textoHorarios ||
			!elementos.tituloTablaHorarios ||
			!elementos.diaLunes ||
			!elementos.horarioLunes ||
			!elementos.diaMartes ||
			!elementos.horarioMartes ||
			!elementos.diaMiercoles ||
			!elementos.horarioMiercoles ||
			!elementos.diaJueves ||
			!elementos.horarioJueves ||
			!elementos.diaViernes ||
			!elementos.horarioViernes ||
			!elementos.diaSabado ||
			!elementos.horarioSabado ||
			!elementos.diaDomingo ||
			!elementos.horarioDomingo ||
			!elementos.textoCitaHorarios ||
			!elementos.textoLlamarHorarios ||
			!elementos.textoWhatsappHorarios
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Horaris',
				introduccion:
					'Consulta el nostre horari d’atenció.',
				tituloTabla: 'Horari setmanal',

				lunes: 'Dilluns',
				martes: 'Dimarts',
				miercoles: 'Dimecres',
				jueves: 'Dijous',
				viernes: 'Divendres',
				sabado: 'Dissabte',
				domingo: 'Diumenge',

				horarioLunes: '10.00–20.30',
				horarioMartes: '10.00–20.00',
				horarioMiercoles: '10.00–20.30',
				horarioJueves: '10.00–20.00',
				horarioViernes: '10.00–20.00',
				cerrado: 'Tancat',

				cita: 'Demanar cita',
				llamar: 'Telefonar',
				whatsapp: 'WhatsApp'
			},

			es: {
				titulo: 'Horarios',
				introduccion:
					'Consulta nuestro horario de atención.',
				tituloTabla: 'Horario semanal',

				lunes: 'Lunes',
				martes: 'Martes',
				miercoles: 'Miércoles',
				jueves: 'Jueves',
				viernes: 'Viernes',
				sabado: 'Sábado',
				domingo: 'Domingo',

				horarioLunes: '10:00–20:30',
				horarioMartes: '10:00–20:00',
				horarioMiercoles: '10:00–20:30',
				horarioJueves: '10:00–20:00',
				horarioViernes: '10:00–20:00',
				cerrado: 'Cerrado',

				cita: 'Pedir cita',
				llamar: 'Llamar',
				whatsapp: 'WhatsApp'
			},

			en: {
				titulo: 'Opening hours',
				introduccion:
					'Check our opening hours.',
				tituloTabla: 'Weekly opening hours',

				lunes: 'Monday',
				martes: 'Tuesday',
				miercoles: 'Wednesday',
				jueves: 'Thursday',
				viernes: 'Friday',
				sabado: 'Saturday',
				domingo: 'Sunday',

				horarioLunes: '10:00 a.m.–8:30 p.m.',
				horarioMartes: '10:00 a.m.–8:00 p.m.',
				horarioMiercoles: '10:00 a.m.–8:30 p.m.',
				horarioJueves: '10:00 a.m.–8:00 p.m.',
				horarioViernes: '10:00 a.m.–8:00 p.m.',
				cerrado: 'Closed',

				cita: 'Book an appointment',
				llamar: 'Call us',
				whatsapp: 'WhatsApp'
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.tituloHorarios.textContent =
			traduccion.titulo;

		elementos.textoHorarios.textContent =
			traduccion.introduccion;

		elementos.tituloTablaHorarios.textContent =
			traduccion.tituloTabla;

		elementos.diaLunes.textContent =
			traduccion.lunes;

		elementos.horarioLunes.textContent =
			traduccion.horarioLunes;

		elementos.diaMartes.textContent =
			traduccion.martes;

		elementos.horarioMartes.textContent =
			traduccion.horarioMartes;

		elementos.diaMiercoles.textContent =
			traduccion.miercoles;

		elementos.horarioMiercoles.textContent =
			traduccion.horarioMiercoles;

		elementos.diaJueves.textContent =
			traduccion.jueves;

		elementos.horarioJueves.textContent =
			traduccion.horarioJueves;

		elementos.diaViernes.textContent =
			traduccion.viernes;

		elementos.horarioViernes.textContent =
			traduccion.horarioViernes;

		elementos.diaSabado.textContent =
			traduccion.sabado;

		elementos.horarioSabado.textContent =
			traduccion.cerrado;

		elementos.diaDomingo.textContent =
			traduccion.domingo;

		elementos.horarioDomingo.textContent =
			traduccion.cerrado;

		elementos.textoCitaHorarios.textContent =
			traduccion.cita;

		elementos.textoLlamarHorarios.textContent =
			traduccion.llamar;

		elementos.textoWhatsappHorarios.textContent =
			traduccion.whatsapp;
	},

	/**
	 * Traduce la pantalla de ubicación.
	 */
	traducirUbicacion: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloUbicacion ||
			!elementos.textoUbicacion ||
			!elementos.textoGoogleMaps ||
			!elementos.textoAppleMaps ||
			!elementos.textoLlamar ||
			!elementos.textoWhatsappUbicacion
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'On estem',
				introduccion:
					'Ens trobaràs al barri de l’Eixample, a València.',
				googleMaps: 'Google Maps',
				appleMaps: 'Maps',
				llamar: 'Telefonar',
				whatsapp: 'WhatsApp'
			},

			es: {
				titulo: 'Dónde estamos',
				introduccion:
					'Encuéntranos en el barrio de L’Eixample, en València.',
				googleMaps: 'Google Maps',
				appleMaps: 'Maps',
				llamar: 'Llamar',
				whatsapp: 'WhatsApp'
			},

			en: {
				titulo: 'Find us',
				introduccion:
					'You can find us in the L’Eixample district of Valencia.',
				googleMaps: 'Google Maps',
				appleMaps: 'Maps',
				llamar: 'Call us',
				whatsapp: 'WhatsApp'
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.tituloUbicacion.textContent =
			traduccion.titulo;

		elementos.textoUbicacion.textContent =
			traduccion.introduccion;

		elementos.textoGoogleMaps.textContent =
			traduccion.googleMaps;

		elementos.textoAppleMaps.textContent =
			traduccion.appleMaps;

		elementos.textoLlamar.textContent =
			traduccion.llamar;

		elementos.textoWhatsappUbicacion.textContent =
			traduccion.whatsapp;
	},

	/**
	 * Traduce la pantalla de contacto.
	 */
	traducirContacto: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloContacto ||
			!elementos.textoContacto ||
			!elementos.textoWhatsapp ||
			!elementos.textoRedes
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Contactar amb HealthyVal',
				introduccion:
					'Tria com prefereixes contactar amb nosaltres.',
				whatsapp: 'WhatsApp',
				redes:
					'Segueix-nos en xarxes socials'
			},

			es: {
				titulo: 'Contactar con HealthyVal',
				introduccion:
					'Elige cómo prefieres contactar con nosotros.',
				whatsapp: 'WhatsApp',
				redes:
					'Síguenos en redes sociales'
			},

			en: {
				titulo: 'Contact HealthyVal',
				introduccion:
					'Choose how you would like to contact us.',
				whatsapp: 'WhatsApp',
				redes:
					'Follow us on social media'
			}
		};

		const traduccion = textos[idioma] || textos.es;

		elementos.tituloContacto.textContent =
			traduccion.titulo;

		elementos.textoContacto.textContent =
			traduccion.introduccion;

		elementos.textoWhatsapp.textContent =
			traduccion.whatsapp;

		elementos.textoRedes.textContent =
			traduccion.redes;
	},

	/**
	 * Devuelve el mensaje de error del nombre.
	 */
	obtenerErrorNombre: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;

		const textos = {
			va: 'Escriu un nom d’almenys 2 caràcters.',
			es: 'Escribe un nombre de al menos 2 caracteres.',
			en: 'Enter a name with at least 2 characters.'
		};

		return textos[idioma] || textos.es;
	},

	/**
	 * Traduce Medicina estética.
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
				pregunta:
					'quin tractament t’interessa?',
				preguntaSinNombre:
					'Quin tractament t’interessa?',
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
				pregunta:
					'¿qué tratamiento te interesa?',
				preguntaSinNombre:
					'¿Qué tratamiento te interesa?',
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
					'which treatment are you interested in?',
				preguntaSinNombre:
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
		const nombre = this.obtenerNombreUsuario();

		elementos.tituloMedicinaEstetica.textContent =
			traduccion.titulo;

		elementos.textoMedicinaEstetica.textContent =
			nombre
				? nombre + ', ' + traduccion.pregunta
				: traduccion.preguntaSinNombre;

		elementos.botonCitaEstetica.textContent =
			traduccion.cita;

		this.actualizarBotonesPorDatos(
			elementos.botonesEstetica,
			'estetica',
			traduccion.opciones
		);
	},

	/**
	 * Traduce Recuperación y movimiento.
	 */
	traducirRecuperacion: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloRecuperacion ||
			!elementos.textoRecuperacion ||
			!elementos.botonCitaRecuperacion ||
			!elementos.botonesRecuperacion.length
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Recuperació i moviment',
				pregunta:
					'en quina àrea podem ajudar-te?',
				preguntaSinNombre:
					'En quina àrea podem ajudar-te?',
				cita: 'Demanar cita',

				opciones: {
					fisioterapia:
						'Fisioteràpia',

					traumatologia:
						'Traumatologia',

					'medicina-regenerativa':
						'Medicina regenerativa',

					'pilates-terapeutico':
						'Pilates terapèutic',

					'entrenamiento-terapeutico':
						'Entrenament terapèutic'
				}
			},

			es: {
				titulo: 'Recuperación y movimiento',
				pregunta:
					'¿en qué área podemos ayudarte?',
				preguntaSinNombre:
					'¿En qué área podemos ayudarte?',
				cita: 'Pedir cita',

				opciones: {
					fisioterapia:
						'Fisioterapia',

					traumatologia:
						'Traumatología',

					'medicina-regenerativa':
						'Medicina regenerativa',

					'pilates-terapeutico':
						'Pilates terapéutico',

					'entrenamiento-terapeutico':
						'Entrenamiento terapéutico'
				}
			},

			en: {
				titulo: 'Recovery and movement',
				pregunta:
					'which area can we help you with?',
				preguntaSinNombre:
					'Which area can we help you with?',
				cita: 'Book an appointment',

				opciones: {
					fisioterapia:
						'Physiotherapy',

					traumatologia:
						'Traumatology',

					'medicina-regenerativa':
						'Regenerative medicine',

					'pilates-terapeutico':
						'Therapeutic Pilates',

					'entrenamiento-terapeutico':
						'Therapeutic training'
				}
			}
		};

		const traduccion = textos[idioma] || textos.es;
		const nombre = this.obtenerNombreUsuario();

		elementos.tituloRecuperacion.textContent =
			traduccion.titulo;

		elementos.textoRecuperacion.textContent =
			nombre
				? nombre + ', ' + traduccion.pregunta
				: traduccion.preguntaSinNombre;

		elementos.botonCitaRecuperacion.textContent =
			traduccion.cita;

		this.actualizarBotonesPorDatos(
			elementos.botonesRecuperacion,
			'recuperacion',
			traduccion.opciones
		);
	},

	/**
	 * Traduce Salud y bienestar.
	 */
	traducirSalud: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloSalud ||
			!elementos.textoSalud ||
			!elementos.botonCitaSalud ||
			!elementos.botonesSalud.length
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Salut i benestar',
				pregunta:
					'en quina àrea podem ajudar-te?',
				preguntaSinNombre:
					'En quina àrea podem ajudar-te?',
				cita: 'Demanar cita',

				opciones: {
					podologia:
						'Podologia',

					'perdida-peso':
						'Pèrdua de pes',

					psicologia:
						'Psicologia',

					'valoracion-integral':
						'Valoració integral',

					'prevencion-seguimiento':
						'Prevenció i seguiment'
				}
			},

			es: {
				titulo: 'Salud y bienestar',
				pregunta:
					'¿en qué área podemos ayudarte?',
				preguntaSinNombre:
					'¿En qué área podemos ayudarte?',
				cita: 'Pedir cita',

				opciones: {
					podologia:
						'Podología',

					'perdida-peso':
						'Pérdida de peso',

					psicologia:
						'Psicología',

					'valoracion-integral':
						'Valoración integral',

					'prevencion-seguimiento':
						'Prevención y seguimiento'
				}
			},

			en: {
				titulo: 'Health and wellness',
				pregunta:
					'which area can we help you with?',
				preguntaSinNombre:
					'Which area can we help you with?',
				cita: 'Book an appointment',

				opciones: {
					podologia:
						'Podiatry',

					'perdida-peso':
						'Weight management',

					psicologia:
						'Psychology',

					'valoracion-integral':
						'Comprehensive assessment',

					'prevencion-seguimiento':
						'Prevention and follow-up'
				}
			}
		};

		const traduccion = textos[idioma] || textos.es;
		const nombre = this.obtenerNombreUsuario();

		elementos.tituloSalud.textContent =
			traduccion.titulo;

		elementos.textoSalud.textContent =
			nombre
				? nombre + ', ' + traduccion.pregunta
				: traduccion.preguntaSinNombre;

		elementos.botonCitaSalud.textContent =
			traduccion.cita;

		this.actualizarBotonesPorDatos(
			elementos.botonesSalud,
			'salud',
			traduccion.opciones
		);
	},

	/**
	 * Traduce la pantalla completa de precios.
	 */
	traducirPrecios: function () {
		const idioma = window.CBCChatbot.state.idiomaActual;
		const elementos = this.obtenerElementos();

		if (
			!elementos.tituloPrecios ||
			!elementos.textoPrecios ||
			!elementos.descripcionPrecios ||
			!elementos.notaPrecios ||
			!elementos.textoValoracionPrecios ||
			!elementos.textoWhatsappPrecios ||
			!elementos.textoLlamarPrecios
		) {
			return;
		}

		const textos = {
			va: {
				titulo: 'Preus',

				introduccion:
					'Cada tractament s’adapta a les necessitats de cada persona.',

				descripcion:
					'Per oferir-te una orientació adequada, el nostre equip necessita conéixer el teu cas i el tractament que busques.',

				nota:
					'Pots sol·licitar una valoració o escriure’ns per rebre més informació.',

				valoracion:
					'Sol·licitar valoració',

				whatsapp:
					'Consultar per WhatsApp',

				llamar:
					'Telefonar'
			},

			es: {
				titulo: 'Precios',

				introduccion:
					'Cada tratamiento se adapta a las necesidades de cada persona.',

				descripcion:
					'Para ofrecerte una orientación adecuada, nuestro equipo necesita conocer tu caso y el tratamiento que buscas.',

				nota:
					'Puedes solicitar una valoración o escribirnos para recibir más información.',

				valoracion:
					'Solicitar valoración',

				whatsapp:
					'Consultar por WhatsApp',

				llamar:
					'Llamar'
			},

			en: {
				titulo: 'Prices',

				introduccion:
					'Each treatment is tailored to the needs of each person.',

				descripcion:
					'To provide appropriate guidance, our team needs to understand your case and the treatment you are looking for.',

				nota:
					'You can request an assessment or contact us for more information.',

				valoracion:
					'Request an assessment',

				whatsapp:
					'Ask via WhatsApp',

				llamar:
					'Call us'
			}
		};

		const traduccion = textos[idioma] || textos.es;
		const nombre = this.obtenerNombreUsuario();

		elementos.tituloPrecios.textContent =
			traduccion.titulo;

		elementos.textoPrecios.textContent =
			nombre
				? nombre + ', ' +
					traduccion.introduccion
						.charAt(0)
						.toLowerCase() +
					traduccion.introduccion.slice(1)
				: traduccion.introduccion;

		elementos.descripcionPrecios.textContent =
			traduccion.descripcion;

		elementos.notaPrecios.textContent =
			traduccion.nota;

		elementos.textoValoracionPrecios.textContent =
			traduccion.valoracion;

		elementos.textoWhatsappPrecios.textContent =
			traduccion.whatsapp;

		elementos.textoLlamarPrecios.textContent =
			traduccion.llamar;
	}
};