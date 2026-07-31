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
		Benvingut/da a HealthyVal.
	</p>

	<p>
		Selecciona el teu idioma / Selecciona tu idioma / Choose your language
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

		<button
			type="button"
			class="cbc-chatbot__opcion"
			data-idioma="en"
		>
			English
		</button>

	</div>
</div>