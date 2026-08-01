<?php
/**
 * Pantalla de Facial y armonización.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="facial-armonizacion"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-facial-armonizacion">
		Facial y armonización
	</h3>

	<p class="cbc-chatbot__texto-facial-armonizacion">
		¿Qué tratamiento te interesa?
	</p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-tratamiento="acido-hialuronico"
		>
			Ácido hialurónico
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-tratamiento="toxina-botulinica"
		>
			Toxina botulínica
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-tratamiento="rinomodelacion"
		>
			Rinomodelación
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-tratamiento="aumento-labios"
		>
			Aumento de labios
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-tratamiento="armonizacion-facial"
		>
			Armonización facial
		</button>

	</div>

	<div class="cbc-chatbot__acciones-secundarias">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-facial"
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
