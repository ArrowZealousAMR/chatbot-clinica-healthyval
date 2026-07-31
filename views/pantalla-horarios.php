<?php
/**
 * Pantalla de horarios.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="horarios"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-horarios">
		Horarios
	</h3>

	<div class="cbc-chatbot__informacion">

		<p class="cbc-chatbot__horario-semana">
			Lunes a viernes: de 10:00 a 20:00.
		</p>

		<p class="cbc-chatbot__horario-sabado">
			Sábados y domingos: cerrado.
		</p>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="menu"
	>
		← Volver
	</button>
</div>
