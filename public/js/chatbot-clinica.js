document.addEventListener('DOMContentLoaded', function () {
	/**
	 * Elementos generales del chatbot.
	 */
	const botonAbrir = document.querySelector('.cbc-chatbot__boton');
	const ventana = document.querySelector('.cbc-chatbot__ventana');
	const botonCerrar = document.querySelector('.cbc-chatbot__cerrar');
	const tituloChatbot = document.querySelector('.cbc-chatbot__titulo');
	const contenidoChatbot = document.querySelector('.cbc-chatbot__contenido');

	/**
	 * Pantallas disponibles.
	 */
	const pantallas = document.querySelectorAll('.cbc-chatbot__pantalla');

	const pantallaIdioma = document.querySelector(
		'[data-pantalla="idioma"]'
	);

	const pantallaNombre = document.querySelector(
		'[data-pantalla="nombre"]'
	);

	const pantallaFormularioNombre = document.querySelector(
		'[data-pantalla="formulario-nombre"]'
	);

	const pantallaMenu = document.querySelector(
		'[data-pantalla="menu"]'
	);

	const pantallaHorarios = document.querySelector(
		'[data-pantalla="horarios"]'
	);

	const pantallaUbicacion = document.querySelector(
		'[data-pantalla="ubicacion"]'
	);

	const pantallaContacto = document.querySelector(
		'[data-pantalla="contacto"]'
	);

	/**
	 * Elementos de selección de idioma.
	 */
	const botonesIdioma = document.querySelectorAll('[data-idioma]');

	/**
	 * Elementos relacionados con el nombre.
	 */
	const preguntaNombre = document.querySelector(
		'.cbc-chatbot__pregunta-nombre'
	);

	const botonEscribirNombre = document.querySelector(
		'.cbc-chatbot__escribir-nombre'
	);

	const botonSinNombre = document.querySelector(
		'.cbc-chatbot__continuar-sin-nombre'
	);

	const formularioNombre = document.querySelector(
		'.cbc-chatbot__formulario-nombre'
	);

	const etiquetaNombre = document.querySelector(
		'.cbc-chatbot__etiqueta-nombre'
	);

	const campoNombre = document.querySelector(
		'.cbc-chatbot__campo-nombre'
	);

	const errorNombre = document.querySelector(
		'.cbc-chatbot__error-nombre'
	);

	const botonGuardarNombre = document.querySelector(
		'.cbc-chatbot__guardar-nombre'
	);

	/**
	 * Elementos del menú principal.
	 */
	const saludoMenu = document.querySelector(
		'.cbc-chatbot__saludo-menu'
	);

	const preguntaMenu = document.querySelector(
		'.cbc-chatbot__pregunta-menu'
	);

	const botonesMenu = document.querySelectorAll('[data-menu]');

	/**
	 * Elementos de la pantalla de horarios.
	 */
	const tituloHorarios = document.querySelector(
		'.cbc-chatbot__titulo-horarios'
	);

	const horarioSemana = document.querySelector(
		'.cbc-chatbot__horario-semana'
	);

	const horarioFinSemana = document.querySelector(
		'.cbc-chatbot__horario-sabado'
	);

	/**
	 * Elementos de la pantalla de ubicación.
	 */
	const tituloUbicacion = document.querySelector(
		'.cbc-chatbot__titulo-ubicacion'
	);

	const textoMapa = document.querySelector(
		'.cbc-chatbot__texto-mapa'
	);

	const textoLlamar = document.querySelector(
		'.cbc-chatbot__texto-llamar'
	);

	/**
	 * Elementos de la pantalla de contacto.
	 */
	const tituloContacto = document.querySelector(
		'.cbc-chatbot__titulo-contacto'
	);

	/**
	 * Todos los botones que permiten volver.
	 */
	const botonesVolver = document.querySelectorAll('[data-volver]');

	/**
	 * Si falta algún elemento imprescindible, detenemos el script.
	 * Así evitamos errores que puedan afectar al resto de la página.
	 */
	if (
		!botonAbrir ||
		!ventana ||
		!botonCerrar ||
		!tituloChatbot ||
		!contenidoChatbot ||
		!pantallaIdioma ||
		!pantallaNombre ||
		!pantallaFormularioNombre ||
		!pantallaMenu ||
		!pantallaHorarios ||
		!pantallaUbicacion ||
		!pantallaContacto ||
		!preguntaNombre ||
		!botonEscribirNombre ||
		!botonSinNombre ||
		!formularioNombre ||
		!etiquetaNombre ||
		!campoNombre ||
		!errorNombre ||
		!botonGuardarNombre ||
		!saludoMenu ||
		!preguntaMenu ||
		!tituloHorarios ||
		!horarioSemana ||
		!horarioFinSemana ||
		!tituloUbicacion ||
		!textoMapa ||
		!textoLlamar ||
		!tituloContacto
	) {
		return;
	}

	/**
	 * Estado actual del chatbot.
	 *
	 * va = valenciano
	 * es = castellano
	 * en = inglés
	 */
	let idiomaActual = 'va';
	let nombreUsuario = '';

	/**
	 * Oculta todas las pantallas y muestra únicamente la solicitada.
	 */
	function mostrarPantalla(nombrePantalla) {
		pantallas.forEach(function (pantalla) {
			pantalla.hidden = true;
		});

		const pantallaDestino = document.querySelector(
			'[data-pantalla="' + nombrePantalla + '"]'
		);

		if (pantallaDestino) {
			pantallaDestino.hidden = false;
			contenidoChatbot.scrollTop = 0;
		}
	}

	/**
	 * Abre la ventana del chatbot.
	 */
	function abrirChatbot() {
		ventana.hidden = false;
		ventana.setAttribute('aria-hidden', 'false');
		botonAbrir.setAttribute('aria-expanded', 'true');
		botonCerrar.focus();
	}

	/**
	 * Cierra la ventana del chatbot.
	 */
	function cerrarChatbot() {
		ventana.hidden = true;
		ventana.setAttribute('aria-hidden', 'true');
		botonAbrir.setAttribute('aria-expanded', 'false');
		botonAbrir.focus();
	}

	/**
	 * Traduce el título de la cabecera.
	 */
	function traducirTituloChatbot() {
		if (idiomaActual === 'va') {
			tituloChatbot.textContent = 'Assistent HealthyVal';
		} else if (idiomaActual === 'en') {
			tituloChatbot.textContent = 'HealthyVal Assistant';
		} else {
			tituloChatbot.textContent = 'Asistente HealthyVal';
		}
	}

	/**
	 * Traduce todos los botones para volver.
	 */
	function traducirBotonesVolver() {
		let textoVolver = '← Volver';

		if (idiomaActual === 'va') {
			textoVolver = '← Enrere';
		} else if (idiomaActual === 'en') {
			textoVolver = '← Back';
		}

		botonesVolver.forEach(function (botonVolver) {
			botonVolver.textContent = textoVolver;
		});
	}

	/**
	 * Traduce la pantalla donde se pregunta por el nombre.
	 */
	function traducirPantallaNombre() {
		if (idiomaActual === 'va') {
			preguntaNombre.textContent = 'Com et dius?';
			botonEscribirNombre.textContent = 'Escriure el meu nom';
			botonSinNombre.textContent = 'Continuar sense nom';
		} else if (idiomaActual === 'en') {
			preguntaNombre.textContent = 'What is your name?';
			botonEscribirNombre.textContent = 'Enter my name';
			botonSinNombre.textContent = 'Continue without a name';
		} else {
			preguntaNombre.textContent = '¿Cómo te llamas?';
			botonEscribirNombre.textContent = 'Escribir mi nombre';
			botonSinNombre.textContent = 'Continuar sin nombre';
		}
	}

	/**
	 * Traduce el formulario donde se escribe el nombre.
	 */
	function traducirFormularioNombre() {
		if (idiomaActual === 'va') {
			etiquetaNombre.textContent = 'Escriu el teu nom';
			campoNombre.placeholder = 'El teu nom';
			botonGuardarNombre.textContent = 'Continuar';
		} else if (idiomaActual === 'en') {
			etiquetaNombre.textContent = 'Enter your name';
			campoNombre.placeholder = 'Your name';
			botonGuardarNombre.textContent = 'Continue';
		} else {
			etiquetaNombre.textContent = 'Escribe tu nombre';
			campoNombre.placeholder = 'Tu nombre';
			botonGuardarNombre.textContent = 'Continuar';
		}
	}

	/**
	 * Busca un botón del menú por su data-menu y cambia su texto.
	 */
	function actualizarTextoBotonMenu(valor, texto) {
		const boton = document.querySelector(
			'[data-menu="' + valor + '"]'
		);

		if (boton) {
			boton.textContent = texto;
		}
	}

	/**
	 * Traduce el menú principal completo.
	 */
	function traducirMenu() {
		if (idiomaActual === 'va') {
			saludoMenu.textContent = nombreUsuario
				? 'Hola, ' + nombreUsuario + '.'
				: 'Hola.';

			preguntaMenu.textContent = 'En què podem ajudar-te?';

			actualizarTextoBotonMenu(
				'medicina-estetica',
				'Medicina estètica'
			);

			actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recuperació i moviment'
			);

			actualizarTextoBotonMenu(
				'salud-bienestar',
				'Salut i benestar'
			);

			actualizarTextoBotonMenu('precios', 'Preus');
			actualizarTextoBotonMenu('cita', 'Demanar cita');
			actualizarTextoBotonMenu('horarios', 'Horaris');
			actualizarTextoBotonMenu('ubicacion', 'On estem');

			actualizarTextoBotonMenu(
				'contacto',
				'Contactar amb HealthyVal'
			);
		} else if (idiomaActual === 'en') {
			saludoMenu.textContent = nombreUsuario
				? 'Hello, ' + nombreUsuario + '.'
				: 'Hello.';

			preguntaMenu.textContent = 'How can we help you?';

			actualizarTextoBotonMenu(
				'medicina-estetica',
				'Aesthetic medicine'
			);

			actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recovery and movement'
			);

			actualizarTextoBotonMenu(
				'salud-bienestar',
				'Health and wellness'
			);

			actualizarTextoBotonMenu('precios', 'Prices');
			actualizarTextoBotonMenu('cita', 'Book an appointment');
			actualizarTextoBotonMenu('horarios', 'Opening hours');
			actualizarTextoBotonMenu('ubicacion', 'Find us');

			actualizarTextoBotonMenu(
				'contacto',
				'Contact HealthyVal'
			);
		} else {
			saludoMenu.textContent = nombreUsuario
				? 'Hola, ' + nombreUsuario + '.'
				: 'Hola.';

			preguntaMenu.textContent = '¿En qué podemos ayudarte?';

			actualizarTextoBotonMenu(
				'medicina-estetica',
				'Medicina estética'
			);

			actualizarTextoBotonMenu(
				'recuperacion-movimiento',
				'Recuperación y movimiento'
			);

			actualizarTextoBotonMenu(
				'salud-bienestar',
				'Salud y bienestar'
			);

			actualizarTextoBotonMenu('precios', 'Precios');
			actualizarTextoBotonMenu('cita', 'Pedir cita');
			actualizarTextoBotonMenu('horarios', 'Horarios');
			actualizarTextoBotonMenu('ubicacion', 'Dónde estamos');

			actualizarTextoBotonMenu(
				'contacto',
				'Contactar con HealthyVal'
			);
		}
	}

	/**
	 * Traduce la pantalla de horarios.
	 */
	function traducirHorarios() {
		if (idiomaActual === 'va') {
			tituloHorarios.textContent = 'Horaris';

			horarioSemana.textContent =
				'De dilluns a divendres: de 10.00 a 20.00 h.';

			horarioFinSemana.textContent =
				'Dissabtes i diumenges: tancat.';
		} else if (idiomaActual === 'en') {
			tituloHorarios.textContent = 'Opening hours';

			horarioSemana.textContent =
				'Monday to Friday: 10:00 a.m. to 8:00 p.m.';

			horarioFinSemana.textContent =
				'Saturday and Sunday: closed.';
		} else {
			tituloHorarios.textContent = 'Horarios';

			horarioSemana.textContent =
				'Lunes a viernes: de 10:00 a 20:00.';

			horarioFinSemana.textContent =
				'Sábados y domingos: cerrado.';
		}
	}

	/**
	 * Traduce la pantalla de ubicación.
	 */
	function traducirUbicacion() {
		if (idiomaActual === 'va') {
			tituloUbicacion.textContent = 'On estem';
			textoMapa.textContent = 'Obrir en Google Maps';
			textoLlamar.textContent = 'Telefonar';
		} else if (idiomaActual === 'en') {
			tituloUbicacion.textContent = 'Find us';
			textoMapa.textContent = 'Open in Google Maps';
			textoLlamar.textContent = 'Call us';
		} else {
			tituloUbicacion.textContent = 'Dónde estamos';
			textoMapa.textContent = 'Abrir en Google Maps';
			textoLlamar.textContent = 'Llamar';
		}
	}

	/**
	 * Traduce el título de la pantalla de contacto.
	 */
	function traducirContacto() {
		if (idiomaActual === 'va') {
			tituloContacto.textContent = 'Contactar amb HealthyVal';
		} else if (idiomaActual === 'en') {
			tituloContacto.textContent = 'Contact HealthyVal';
		} else {
			tituloContacto.textContent = 'Contactar con HealthyVal';
		}
	}

	/**
	 * Muestra el menú principal ya traducido.
	 */
	function mostrarMenuPrincipal() {
		traducirMenu();
		mostrarPantalla('menu');

		const primerBotonMenu = pantallaMenu.querySelector('[data-menu]');

		if (primerBotonMenu) {
			primerBotonMenu.focus();
		}
	}

	/**
	 * Abre o cierra el chatbot al pulsar el botón flotante.
	 */
	botonAbrir.addEventListener('click', function () {
		const estaAbierto =
			botonAbrir.getAttribute('aria-expanded') === 'true';

		if (estaAbierto) {
			cerrarChatbot();
		} else {
			abrirChatbot();
		}
	});

	/**
	 * Cierra el chatbot mediante la X.
	 */
	botonCerrar.addEventListener('click', cerrarChatbot);

	/**
	 * Selección del idioma.
	 */
	botonesIdioma.forEach(function (botonIdioma) {
		botonIdioma.addEventListener('click', function () {
			idiomaActual = botonIdioma.dataset.idioma;

			traducirTituloChatbot();
			traducirBotonesVolver();
			traducirPantallaNombre();

			mostrarPantalla('nombre');
			botonEscribirNombre.focus();
		});
	});

	/**
	 * Abre el formulario para introducir el nombre.
	 */
	botonEscribirNombre.addEventListener('click', function () {
		traducirFormularioNombre();

		errorNombre.hidden = true;
		errorNombre.textContent = '';

		mostrarPantalla('formulario-nombre');
		campoNombre.focus();
	});

	/**
	 * Continúa sin guardar un nombre.
	 */
	botonSinNombre.addEventListener('click', function () {
		nombreUsuario = '';
		mostrarMenuPrincipal();
	});

	/**
	 * Procesa el formulario del nombre.
	 */
	formularioNombre.addEventListener('submit', function (evento) {
		evento.preventDefault();

		const nombreIntroducido = campoNombre.value.trim();

		if (nombreIntroducido.length < 2) {
			if (idiomaActual === 'va') {
				errorNombre.textContent =
					'Escriu un nom d’almenys 2 caràcters.';
			} else if (idiomaActual === 'en') {
				errorNombre.textContent =
					'Enter a name with at least 2 characters.';
			} else {
				errorNombre.textContent =
					'Escribe un nombre de al menos 2 caracteres.';
			}

			errorNombre.hidden = false;
			campoNombre.focus();
			return;
		}

		errorNombre.hidden = true;
		errorNombre.textContent = '';
		nombreUsuario = nombreIntroducido;

		mostrarMenuPrincipal();
	});

	/**
	 * Controla todos los botones para volver.
	 */
	botonesVolver.forEach(function (botonVolver) {
		botonVolver.addEventListener('click', function () {
			const pantallaDestino = botonVolver.dataset.volver;

			if (pantallaDestino === 'nombre') {
				traducirPantallaNombre();
			}

			if (pantallaDestino === 'menu') {
				traducirMenu();
			}

			mostrarPantalla(pantallaDestino);

			const primerElemento = document.querySelector(
				'[data-pantalla="' +
					pantallaDestino +
					'"] button, [data-pantalla="' +
					pantallaDestino +
					'"] input, [data-pantalla="' +
					pantallaDestino +
					'"] a'
			);

			if (primerElemento) {
				primerElemento.focus();
			}
		});
	});

	/**
	 * Controla los botones del menú principal.
	 */
	botonesMenu.forEach(function (botonMenu) {
		botonMenu.addEventListener('click', function () {
			const opcionElegida = botonMenu.dataset.menu;

			if (opcionElegida === 'horarios') {
				traducirHorarios();
				mostrarPantalla('horarios');

				const botonVolverHorarios =
					pantallaHorarios.querySelector(
						'[data-volver="menu"]'
					);

				if (botonVolverHorarios) {
					botonVolverHorarios.focus();
				}

				return;
			}

			if (opcionElegida === 'ubicacion') {
				traducirUbicacion();
				mostrarPantalla('ubicacion');

				const primerEnlaceUbicacion =
					pantallaUbicacion.querySelector('a');

				if (primerEnlaceUbicacion) {
					primerEnlaceUbicacion.focus();
				}

				return;
			}

			if (opcionElegida === 'contacto') {
				traducirContacto();
				mostrarPantalla('contacto');

				const primerEnlaceContacto =
					pantallaContacto.querySelector('a');

				if (primerEnlaceContacto) {
					primerEnlaceContacto.focus();
				}

				return;
			}

			/**
			 * Estas opciones se conectarán en los próximos pasos:
			 *
			 * medicina-estetica
			 * recuperacion-movimiento
			 * salud-bienestar
			 * precios
			 * cita
			 */
			console.log('Opción elegida:', opcionElegida);
		});
	});

	/**
	 * Cierra el chatbot al pulsar Escape.
	 */
	document.addEventListener('keydown', function (evento) {
		if (evento.key === 'Escape' && !ventana.hidden) {
			cerrarChatbot();
		}
	});
});