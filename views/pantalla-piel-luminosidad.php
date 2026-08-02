<?php
/**
 * Pantalla de Piel y luminosidad.
 *
 * @package ChatbotClinica
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="piel-luminosidad"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-piel-luminosidad">
		Piel y luminosidad
	</h3>

	<p class="cbc-chatbot__texto-piel-luminosidad">
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
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-piel"
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