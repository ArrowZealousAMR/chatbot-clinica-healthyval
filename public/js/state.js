window.CBCChatbot = window.CBCChatbot || {};

window.CBCChatbot.state = {
	idiomaActual: 'va',
	nombreUsuario: '',
	categoriaSeleccionada: '',
	tratamientoSeleccionado: '',

	clavesSesion: {
		idioma: 'cbcIdiomaActual',
		nombre: 'cbcNombreUsuario',
		categoria: 'cbcCategoriaSeleccionada',
		tratamiento: 'cbcTratamientoSeleccionado'
	},

	/**
	 * Comprueba si sessionStorage está disponible.
	 */
	sesionDisponible: function () {
		try {
			const clavePrueba = 'cbcPruebaSesion';

			sessionStorage.setItem(clavePrueba, '1');
			sessionStorage.removeItem(clavePrueba);

			return true;
		} catch (error) {
			console.warn(
				'El almacenamiento temporal del chatbot no está disponible.',
				error
			);

			return false;
		}
	},

	/**
	 * Lee un valor de sessionStorage de forma segura.
	 */
	obtenerValorSesion: function (clave) {
		if (!this.sesionDisponible()) {
			return '';
		}

		try {
			return sessionStorage.getItem(clave) || '';
		} catch (error) {
			console.warn(
				'No se pudo recuperar un dato temporal del chatbot.',
				error
			);

			return '';
		}
	},

	/**
	 * Guarda o elimina un valor de sessionStorage.
	 */
	guardarValorSesion: function (clave, valor) {
		if (!this.sesionDisponible()) {
			return;
		}

		try {
			if (valor) {
				sessionStorage.setItem(clave, valor);
			} else {
				sessionStorage.removeItem(clave);
			}
		} catch (error) {
			console.warn(
				'No se pudo guardar un dato temporal del chatbot.',
				error
			);
		}
	},

	/**
	 * Normaliza un valor de texto.
	 */
	normalizarTexto: function (valor) {
		return typeof valor === 'string'
			? valor.trim()
			: '';
	},

	/**
	 * Comprueba que el idioma sea válido.
	 */
	normalizarIdioma: function (idioma) {
		const idiomaLimpio = this.normalizarTexto(idioma);

		return ['va', 'es', 'en'].includes(idiomaLimpio)
			? idiomaLimpio
			: 'va';
	},

	/**
	 * Recupera los datos temporales guardados
	 * durante la sesión actual del navegador.
	 */
	cargarSesion: function () {
		const idiomaGuardado = this.obtenerValorSesion(
			this.clavesSesion.idioma
		);

		const nombreGuardado = this.obtenerValorSesion(
			this.clavesSesion.nombre
		);

		const categoriaGuardada = this.obtenerValorSesion(
			this.clavesSesion.categoria
		);

		const tratamientoGuardado = this.obtenerValorSesion(
			this.clavesSesion.tratamiento
		);

		this.idiomaActual = idiomaGuardado
			? this.normalizarIdioma(idiomaGuardado)
			: 'va';

		this.nombreUsuario =
			this.normalizarTexto(nombreGuardado);

		this.categoriaSeleccionada =
			this.normalizarTexto(categoriaGuardada);

		this.tratamientoSeleccionado =
			this.normalizarTexto(tratamientoGuardado);
	},

	/**
	 * Guarda temporalmente el idioma seleccionado.
	 */
	guardarIdioma: function (idioma) {
		const idiomaNormalizado =
			this.normalizarIdioma(idioma);

		this.idiomaActual = idiomaNormalizado;

		this.guardarValorSesion(
			this.clavesSesion.idioma,
			idiomaNormalizado
		);
	},

	/**
	 * Guarda temporalmente el nombre del usuario.
	 */
	guardarNombre: function (nombre) {
		const nombreLimpio =
			this.normalizarTexto(nombre);

		this.nombreUsuario = nombreLimpio;

		this.guardarValorSesion(
			this.clavesSesion.nombre,
			nombreLimpio
		);
	},

	/**
	 * Guarda la categoría general seleccionada
	 * y elimina cualquier tratamiento anterior.
	 */
	guardarCategoria: function (categoria) {
		const categoriaLimpia =
			this.normalizarTexto(categoria);

		this.categoriaSeleccionada =
			categoriaLimpia;

		this.guardarValorSesion(
			this.clavesSesion.categoria,
			categoriaLimpia
		);

		this.guardarTratamiento('');
	},

	/**
	 * Guarda el tratamiento o especialidad concreta.
	 */
	guardarTratamiento: function (tratamiento) {
		const tratamientoLimpio =
			this.normalizarTexto(tratamiento);

		this.tratamientoSeleccionado =
			tratamientoLimpio;

		this.guardarValorSesion(
			this.clavesSesion.tratamiento,
			tratamientoLimpio
		);
	},

	/**
	 * Limpia la categoría y el tratamiento seleccionados,
	 * pero conserva el nombre y el idioma.
	 */
	limpiarSeleccion: function () {
		this.categoriaSeleccionada = '';
		this.tratamientoSeleccionado = '';

		this.guardarValorSesion(
			this.clavesSesion.categoria,
			''
		);

		this.guardarValorSesion(
			this.clavesSesion.tratamiento,
			''
		);
	},

	/**
	 * Elimina el nombre, la categoría y el tratamiento,
	 * pero mantiene el idioma seleccionado.
	 */
	limpiarDatosUsuario: function () {
		this.nombreUsuario = '';
		this.categoriaSeleccionada = '';
		this.tratamientoSeleccionado = '';

		this.guardarValorSesion(
			this.clavesSesion.nombre,
			''
		);

		this.guardarValorSesion(
			this.clavesSesion.categoria,
			''
		);

		this.guardarValorSesion(
			this.clavesSesion.tratamiento,
			''
		);
	},

	/**
	 * Elimina todos los datos temporales del chatbot
	 * y restaura el idioma inicial.
	 */
	limpiarSesion: function () {
		this.idiomaActual = 'va';
		this.nombreUsuario = '';
		this.categoriaSeleccionada = '';
		this.tratamientoSeleccionado = '';

		Object.values(this.clavesSesion).forEach(
			function (clave) {
				try {
					sessionStorage.removeItem(clave);
				} catch (error) {
					console.warn(
						'No se pudo eliminar un dato temporal del chatbot.',
						error
					);
				}
			}
		);
	}
};

window.CBCChatbot.state.cargarSesion();