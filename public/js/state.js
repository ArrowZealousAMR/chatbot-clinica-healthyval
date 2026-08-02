window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.state = {
	idiomaActual: 'va',
	nombreUsuario: '',
	categoriaSeleccionada: '',
	tratamientoSeleccionado: '',

	/**
	 * Recupera los datos temporales guardados
	 * durante la sesión actual del navegador.
	 */
	cargarSesion: function () {
		const nombreGuardado =
			sessionStorage.getItem('cbcNombreUsuario');

		const categoriaGuardada =
			sessionStorage.getItem('cbcCategoriaSeleccionada');

		const tratamientoGuardado =
			sessionStorage.getItem('cbcTratamientoSeleccionado');

		this.nombreUsuario = nombreGuardado || '';
		this.categoriaSeleccionada = categoriaGuardada || '';
		this.tratamientoSeleccionado = tratamientoGuardado || '';
	},

	/**
	 * Guarda temporalmente el nombre del usuario.
	 */
	guardarNombre: function (nombre) {
		const nombreLimpio =
			typeof nombre === 'string'
				? nombre.trim()
				: '';

		this.nombreUsuario = nombreLimpio;

		if (nombreLimpio) {
			sessionStorage.setItem(
				'cbcNombreUsuario',
				nombreLimpio
			);
		} else {
			sessionStorage.removeItem(
				'cbcNombreUsuario'
			);
		}
	},

	/**
	 * Guarda la categoría general seleccionada.
	 *
	 * Ejemplos:
	 * medicina-estetica
	 * recuperacion-movimiento
	 * salud-bienestar
	 */
	guardarCategoria: function (categoria) {
		const categoriaLimpia =
			typeof categoria === 'string'
				? categoria.trim()
				: '';

		this.categoriaSeleccionada = categoriaLimpia;

		if (categoriaLimpia) {
			sessionStorage.setItem(
				'cbcCategoriaSeleccionada',
				categoriaLimpia
			);
		} else {
			sessionStorage.removeItem(
				'cbcCategoriaSeleccionada'
			);
		}
	},

	/**
	 * Guarda el tratamiento o especialidad concreta.
	 *
	 * Ejemplos:
	 * facial-armonizacion
	 * fisioterapia
	 * psicologia
	 */
	guardarTratamiento: function (tratamiento) {
		const tratamientoLimpio =
			typeof tratamiento === 'string'
				? tratamiento.trim()
				: '';

		this.tratamientoSeleccionado =
			tratamientoLimpio;

		if (tratamientoLimpio) {
			sessionStorage.setItem(
				'cbcTratamientoSeleccionado',
				tratamientoLimpio
			);
		} else {
			sessionStorage.removeItem(
				'cbcTratamientoSeleccionado'
			);
		}
	},

	/**
	 * Limpia la categoría y el tratamiento seleccionados,
	 * pero mantiene el nombre del usuario.
	 */
	limpiarSeleccion: function () {
		this.categoriaSeleccionada = '';
		this.tratamientoSeleccionado = '';

		sessionStorage.removeItem(
			'cbcCategoriaSeleccionada'
		);

		sessionStorage.removeItem(
			'cbcTratamientoSeleccionado'
		);
	},

	/**
	 * Elimina todos los datos temporales del chatbot.
	 */
	limpiarSesion: function () {
		this.nombreUsuario = '';
		this.categoriaSeleccionada = '';
		this.tratamientoSeleccionado = '';

		sessionStorage.removeItem(
			'cbcNombreUsuario'
		);

		sessionStorage.removeItem(
			'cbcCategoriaSeleccionada'
		);

		sessionStorage.removeItem(
			'cbcTratamientoSeleccionado'
		);
	}
};

window.CBCChatbot.state.cargarSesion();