<?php
/**
 * Menú principal del chatbot.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="menu"
	hidden
>
	<p class="cbc-chatbot__saludo-menu"></p>

	<p class="cbc-chatbot__pregunta-menu"></p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada"
			data-menu="medicina-estetica"
		>
			Medicina estética
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="recuperacion-movimiento"
		>
			Recuperación y movimiento
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="salud-bienestar"
		>
			Salud y bienestar
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="precios"
		>
			Precios
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="cita"
		>
			Pedir cita
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="horarios"
		>
			Horarios
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="ubicacion"
		>
			Dónde estamos
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-menu="contacto"
		>
			Contactar con HealthyVal
		</button>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="nombre"
	>
		← Volver
	</button>
</div>