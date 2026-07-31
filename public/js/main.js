document.addEventListener('DOMContentLoaded', function () {

	if (!window.CBCChatbot) {
		return;
	}

	const core = window.CBCChatbot.core;
	const navigation = window.CBCChatbot.navigation;

	if (!core.inicializar()) {
		return;
	}
	const elementos = core.elementos;

	elementos.botonAbrir.addEventListener('click', function () {
		core.alternarChatbot();
	});

	elementos.botonCerrar.addEventListener('click', function () {
		core.cerrarChatbot();
	});

	document.addEventListener('keydown', function (evento) {
		if (
			evento.key === 'Escape' &&
			!elementos.ventana.hidden
		) {
			core.cerrarChatbot();
		}
	});
	navigation.inicializar();
});