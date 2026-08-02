<?php
/**
 * Pantalla de Salud y bienestar.
 *
 * @package ChatbotClinica
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="salud"
	hidden
>
	<h3
		class="cbc-chatbot__subtitulo cbc-chatbot__titulo-salud"
	>
		Salud y bienestar
	</h3>

	<p class="cbc-chatbot__texto-salud">
		¿En qué área podemos ayudarte?
	</p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-salud="podologia"
		>
			Podología
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-salud="perdida-peso"
		>
			Pérdida de peso
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-salud="psicologia"
		>
			Psicología
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-salud="valoracion-integral"
		>
			Valoración integral
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-salud="prevencion-seguimiento"
		>
			Prevención y seguimiento
		</button>

	</div>

	<div class="cbc-chatbot__acciones-secundarias">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-salud"
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