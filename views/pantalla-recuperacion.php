<?php
/**
 * Pantalla de Recuperación y movimiento.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="recuperacion"
	hidden
>
	<h3
		class="cbc-chatbot__subtitulo cbc-chatbot__titulo-recuperacion"
	>
		Recuperación y movimiento
	</h3>

	<p class="cbc-chatbot__texto-recuperacion">
		¿En qué área podemos ayudarte?
	</p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-recuperacion="fisioterapia"
		>
			Fisioterapia
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-recuperacion="traumatologia"
		>
			Traumatología
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-recuperacion="medicina-regenerativa"
		>
			Medicina regenerativa
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-recuperacion="pilates-terapeutico"
		>
			Pilates terapéutico
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-recuperacion="entrenamiento-terapeutico"
		>
			Entrenamiento terapéutico
		</button>

	</div>

	<div class="cbc-chatbot__acciones-secundarias">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-recuperacion"
		>
			Pedir cita
		</button>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="menu"
	>
		← Volver
	</button>
</div>