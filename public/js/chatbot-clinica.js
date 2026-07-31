document.addEventListener('DOMContentLoaded', function () {
	const botonAbrir = document.querySelector('.cbc-chatbot__boton');
	const ventana = document.querySelector('.cbc-chatbot__ventana');
	const botonCerrar = document.querySelector('.cbc-chatbot__cerrar');

	const pantallas = document.querySelectorAll('.cbc-chatbot__pantalla');
	const pantallaIdioma = document.querySelector('[data-pantalla="idioma"]');
	const pantallaNombre = document.querySelector('[data-pantalla="nombre"]');
	
	const pantallaFormularioNombre = document.querySelector('[data-pantalla="formulario-nombre"]');
	const pantallaMenu = document.querySelector('[data-pantalla="menu"]');
    const pantallaHorarios = document.querySelector('[data-pantalla="horarios"]');
	
	const botonesIdioma = document.querySelectorAll('[data-idioma]');
	const botonEscribirNombre = document.querySelector('.cbc-chatbot__escribir-nombre');
	const botonSinNombre = document.querySelector('.cbc-chatbot__continuar-sin-nombre');
	
	const botonesVolver = document.querySelectorAll('[data-volver]');
	const preguntaNombre = document.querySelector('.cbc-chatbot__pregunta-nombre');
	const formularioNombre = document.querySelector('.cbc-chatbot__formulario-nombre');
	
	const etiquetaNombre = document.querySelector('.cbc-chatbot__etiqueta-nombre');
	const campoNombre = document.querySelector('.cbc-chatbot__campo-nombre');
	const errorNombre = document.querySelector('.cbc-chatbot__error-nombre');
	
	const botonGuardarNombre = document.querySelector('.cbc-chatbot__guardar-nombre');
	const saludoMenu = document.querySelector('.cbc-chatbot__saludo-menu');
	const preguntaMenu = document.querySelector('.cbc-chatbot__pregunta-menu');
	const botonesMenu = document.querySelectorAll('[data-menu]');
   
	const tituloHorarios = document.querySelector('.cbc-chatbot__titulo-horarios');
    const horarioSemana = document.querySelector('.cbc-chatbot__horario-semana');
    const horarioSabado = document.querySelector('.cbc-chatbot__horario-sabado');
	const tituloChatbot = document.querySelector('.cbc-chatbot__titulo');
	
	if (
		!tituloChatbot ||
		!botonAbrir ||
		!ventana ||
		!botonCerrar ||
		!pantallaIdioma ||
		!pantallaNombre ||
		!pantallaFormularioNombre ||
		!pantallaMenu ||
		!pantallaHorarios ||
        !tituloHorarios ||
        !horarioSemana ||
        !horarioSabado ||
		!botonEscribirNombre ||
		!botonSinNombre ||
		!preguntaNombre ||
		!formularioNombre ||
		!etiquetaNombre ||
		!campoNombre ||
		!errorNombre ||
		!botonGuardarNombre ||
		!saludoMenu ||
		!preguntaMenu
		
		
	) {
		return;
	}

	let idiomaActual = 'va';
	let nombreUsuario = '';

	function mostrarPantalla(nombrePantalla) {
		pantallas.forEach(function (pantalla) {
			pantalla.hidden = true;
		});

		const pantallaDestino = document.querySelector(
			'[data-pantalla="' + nombrePantalla + '"]'
		);

		if (pantallaDestino) {
			pantallaDestino.hidden = false;
		}
	}

	function abrirChatbot() {
		ventana.hidden = false;
		ventana.setAttribute('aria-hidden', 'false');
		botonAbrir.setAttribute('aria-expanded', 'true');
		botonCerrar.focus();
	}

	function cerrarChatbot() {
		ventana.hidden = true;
		ventana.setAttribute('aria-hidden', 'true');
		botonAbrir.setAttribute('aria-expanded', 'false');
		botonAbrir.focus();
	}

	function traducirPantallaNombre() {
		if (idiomaActual === 'va') {
			preguntaNombre.textContent = 'Com et dius?';
			botonEscribirNombre.textContent = 'Escriure el meu nom';
			botonSinNombre.textContent = 'Continuar sense nom';
		} else {
			preguntaNombre.textContent = '¿Cómo te llamas?';
			botonEscribirNombre.textContent = 'Escribir mi nombre';
			botonSinNombre.textContent = 'Continuar sin nombre';
		}
	}

	function traducirFormularioNombre() {
		if (idiomaActual === 'va') {
			etiquetaNombre.textContent = 'Escriu el teu nom';
			campoNombre.placeholder = 'El teu nom';
			botonGuardarNombre.textContent = 'Continuar';
		} else {
			etiquetaNombre.textContent = 'Escribe tu nombre';
			campoNombre.placeholder = 'Tu nombre';
			botonGuardarNombre.textContent = 'Continuar';
		}
	}

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

     function traducirHorarios() {
	if (idiomaActual === 'va') {
		tituloHorarios.textContent = 'Horaris';
		horarioSemana.textContent =
			'De dilluns a divendres: de 10.00 a 20.00 h.';
		horarioSabado.textContent =
			'Dissabtes i diumenges: tancat.';
	} else {
		tituloHorarios.textContent = 'Horarios';
		horarioSemana.textContent =
			'Lunes a viernes: de 10:00 a 20:00.';
		horarioSabado.textContent =
			'Sábados y domingos: cerrado.';
	}
}

	function actualizarTextoBotonMenu(valor, texto) {
		const boton = document.querySelector('[data-menu="' + valor + '"]');

		if (boton) {
			boton.textContent = texto;
		}
	}

	function mostrarMenuPrincipal() {
		traducirMenu();
		mostrarPantalla('menu');

		const primerBotonMenu = pantallaMenu.querySelector('[data-menu]');

		if (primerBotonMenu) {
			primerBotonMenu.focus();
		}
	}

	botonAbrir.addEventListener('click', function () {
		const estaAbierto =
			botonAbrir.getAttribute('aria-expanded') === 'true';

		if (estaAbierto) {
			cerrarChatbot();
		} else {
			abrirChatbot();
		}
	});

	botonCerrar.addEventListener('click', cerrarChatbot);

	botonesIdioma.forEach(function (botonIdioma) {
		botonIdioma.addEventListener('click', function () {
			idiomaActual = botonIdioma.dataset.idioma;
			tituloChatbot.textContent = idiomaActual === 'va'? 'Assistent HealthyVal': 'Asistente HealthyVal';
			traducirPantallaNombre();
			mostrarPantalla('nombre');
			botonEscribirNombre.focus();
		});
	});

	botonEscribirNombre.addEventListener('click', function () {
		traducirFormularioNombre();
		errorNombre.hidden = true;
		errorNombre.textContent = '';
		mostrarPantalla('formulario-nombre');
		campoNombre.focus();
	});

	botonSinNombre.addEventListener('click', function () {
		nombreUsuario = '';
		mostrarMenuPrincipal();
	});

	formularioNombre.addEventListener('submit', function (evento) {
		evento.preventDefault();

		const nombreIntroducido = campoNombre.value.trim();

		if (nombreIntroducido.length < 2) {
			errorNombre.textContent =
				idiomaActual === 'va'
					? 'Escriu un nom d’almenys 2 caràcters.'
					: 'Escribe un nombre de al menos 2 caracteres.';

			errorNombre.hidden = false;
			campoNombre.focus();
			return;
		}

		errorNombre.hidden = true;
		errorNombre.textContent = '';
		nombreUsuario = nombreIntroducido;
		mostrarMenuPrincipal();
	});

	botonesVolver.forEach(function (botonVolver) {
		botonVolver.addEventListener('click', function () {
			const pantallaDestino = botonVolver.dataset.volver;

			if (pantallaDestino === 'nombre') {
				traducirPantallaNombre();
			}

			mostrarPantalla(pantallaDestino);

			const primerElemento = document.querySelector(
				'[data-pantalla="' +
					pantallaDestino +
					'"] button, [data-pantalla="' +
					pantallaDestino +
					'"] input'
			);

			if (primerElemento) {
				primerElemento.focus();
			}
		});
	});

	botonesMenu.forEach(function (botonMenu) {
	botonMenu.addEventListener('click', function () {
		const opcionElegida = botonMenu.dataset.menu;

		if (opcionElegida === 'horarios') {
			traducirHorarios();
			mostrarPantalla('horarios');

			const botonVolverHorarios = pantallaHorarios.querySelector(
				'[data-volver="menu"]'
			);

			if (botonVolverHorarios) {
				botonVolverHorarios.focus();
			}

			return;
		}

		console.log('Opción elegida:', opcionElegida);
	});
});

	document.addEventListener('keydown', function (evento) {
		if (evento.key === 'Escape' && !ventana.hidden) {
			cerrarChatbot();
		}
	});
});