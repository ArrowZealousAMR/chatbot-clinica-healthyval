<?php
/**
 * Pantalla de Medicina estética.
 *
 * @package ChatbotClinica
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="medicina-estetica"
	hidden
>
	<h3
		class="cbc-chatbot__subtitulo cbc-chatbot__titulo-medicina-estetica"
	>
		Medicina estética
	</h3>

	<p class="cbc-chatbot__texto-medicina-estetica">
		¿Qué tratamiento te interesa?
	</p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-estetica="facial-armonizacion"
		>
			Facial y armonización
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-estetica="piel-luminosidad"
		>
			Piel y luminosidad
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-estetica="corporales"
		>
			Tratamientos corporales
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-estetica="capilar"
		>
			Medicina capilar
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-estetica="laser-plasma"
		>
			Láser de plasma
		</button>

	</div>

	<div class="cbc-chatbot__acciones-secundarias">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-estetica"
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