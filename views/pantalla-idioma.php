<?php
/**
 * Pantalla de selección del idioma.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="idioma"
>
	<p>
		Hola, soy el asistente virtual de HealthyVal.
	</p>

	<p>
		¿En qué idioma quieres continuar?
	</p>

	<div class="cbc-chatbot__opciones">

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-idioma="va"
		>
			Valencià
		</button>

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-idioma="es"
		>
			Castellano
		</button>

	</div>
</div>
