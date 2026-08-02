<?php
/**
 * Pantalla de Medicina capilar.
 *
 * @package ChatbotClinica
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="capilar"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-capilar">
		Medicina capilar
	</h3>

	<p class="cbc-chatbot__texto-capilar">
		Selecciona un tratamiento.
	</p>

	<div class="cbc-chatbot__opciones">
		<p>
			Añadiremos aquí los tratamientos reales de esta categoría.
		</p>
	</div>

	<div class="cbc-chatbot__acciones-secundarias">
		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-capilar"
		>
			Pedir cita
		</button>
	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="medicina-estetica"
	>
		← Volver
	</button>
</div>