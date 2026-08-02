<?php
/**
 * Menú principal del chatbot.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="menu"
	hidden
>
	<p
		id="cbc-chatbot-saludo-menu"
		class="cbc-chatbot__saludo-menu"
		aria-live="polite"
	>
		Hola.
	</p>

	<p
		id="cbc-chatbot-pregunta-menu"
		class="cbc-chatbot__pregunta-menu"
	>
		¿En qué podemos ayudarte?
	</p>

	<nav
		class="cbc-chatbot__menu-principal"
		aria-labelledby="cbc-chatbot-pregunta-menu"
	>
		<div class="cbc-chatbot__opciones">

			<button
				type="button"
				class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada"
				data-menu="medicina-estetica"
			>
				Medicina estética
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="recuperacion-movimiento"
			>
				Recuperación y movimiento
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="salud-bienestar"
			>
				Salud y bienestar
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="precios"
			>
				Precios
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada"
				data-menu="cita"
			>
				Pedir cita
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="horarios"
			>
				Horarios
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="ubicacion"
			>
				Dónde estamos
			</button>

			<button
				type="button"
				class="cbc-chatbot__opcion"
				data-menu="contacto"
			>
				Contactar con HealthyVal
			</button>

		</div>
	</nav>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="nombre"
	>
		← Volver
	</button>
</div>