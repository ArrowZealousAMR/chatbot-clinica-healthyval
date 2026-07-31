<?php
/**
 * Pantalla de contacto y redes sociales.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div
	class="cbc-chatbot__pantalla"
	data-pantalla="contacto"
	hidden
>
	<h3 class="cbc-chatbot__subtitulo cbc-chatbot__titulo-contacto">
		Contactar con HealthyVal
	</h3>

	<div class="cbc-chatbot__acciones-contacto">

		<a
			class="cbc-chatbot__accion-contacto"
			href="tel:+34624810547"
		>
			<span aria-hidden="true">📞</span>
			<span>624 810 547</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto cbc-chatbot__accion-contacto--whatsapp"
			href="https://wa.me/34624810547"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden="true">💬</span>
			<span>WhatsApp</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="mailto:info@healthyval.es"
		>
			<span aria-hidden="true">✉️</span>
			<span>info@healthyval.es</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="https://www.instagram.com/healthyval.clinica/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden="true">◎</span>
			<span>Instagram</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="https://www.facebook.com/profile.php?id=61580146342069"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden="true">f</span>
			<span>Facebook</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="https://www.linkedin.com/company/109755305"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span aria-hidden="true">in</span>
			<span>LinkedIn</span>
		</a>

	</div>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="menu"
	>
		← Volver
	</button>
</div>
