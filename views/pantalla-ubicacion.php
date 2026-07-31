<?php
/**
 * Pantalla de ubicación de HealthyVal.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="ubicacion"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-ubicacion">
		Dónde estamos
	</h3>

	<div class="cbc-chatbot__informacion">

		<p class="cbc-chatbot__direccion">
			Carrer del Dr. Sumsi, 46<br>
			L'Eixample<br>
			46005 València
		</p>

	</div>

	<div class="cbc-chatbot__acciones-contacto">

		<a
			class="cbc-chatbot__accion-contacto"
			href="https://maps.app.goo.gl/7RBfNJABeiQr7HMDA?g_st=ic"
			target="_blank"
			rel="noopener noreferrer"
			data-contacto="mapa"
		>
			<span aria-hidden="true">📍</span>
			<span class="cbc-chatbot__texto-mapa">Abrir en Google Maps</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="tel:+34624810547"
			data-contacto="telefono"
		>
			<span aria-hidden="true">📞</span>
			<span class="cbc-chatbot__texto-llamar">Llamar</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto cbc-chatbot__accion-contacto--whatsapp"
			href="https://wa.me/34624810547"
			target="_blank"
			rel="noopener noreferrer"
			data-contacto="whatsapp"
		>
			<span aria-hidden="true">💬</span>
			<span>WhatsApp</span>
		</a>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="menu"
	>
		← Volver
	</button>
</div>