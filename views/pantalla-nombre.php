<?php
/**
 * Pantallas relacionadas con el nombre del usuario.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="nombre"
	hidden
>
	<p class="cbc-chatbot__pregunta-nombre"></p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__escribir-nombre"
		>
			Escribir mi nombre
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__continuar-sin-nombre"
		>
			Continuar sin nombre
		</button>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="idioma"
	>
		← Volver
	</button>
</div>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="formulario-nombre"
	hidden
>
	<form class="cbc-chatbot__formulario-nombre">

		<label
			for="cbc-chatbot-nombre"
			class="cbc-chatbot__etiqueta-nombre"
		>
			Escribe tu nombre
		</label>

		<input
			type="text"
			id="cbc-chatbot-nombre"
			class="cbc-chatbot__campo-nombre"
			name="cbc_chatbot_nombre"
			maxlength="50"
			autocomplete="given-name"
		>

		<p
			class="cbc-chatbot__error-nombre"
			role="alert"
			hidden
		></p>

		<button
			type="submit"
			class="cbc-chatbot__opcion cbc-chatbot__guardar-nombre"
		>
			Continuar
		</button>

	</form>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="nombre"
	>
		← Volver
	</button>
</div>