<?php
/**
 * Pantalla de contacto y redes sociales de HealthyVal.
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
	<h3
		id="cbc-chatbot-titulo-contacto"
		class="cbc-chatbot__subtitulo cbc-chatbot__titulo-contacto"
	>
		Contactar con HealthyVal
	</h3>

	<p
		id="cbc-chatbot-texto-contacto"
		class="cbc-chatbot__texto-contacto"
	>
		Elige cómo prefieres contactar con nosotros.
	</p>

	<div
		class="cbc-chatbot__acciones-contacto"
		aria-labelledby="cbc-chatbot-titulo-contacto"
	>
		<a
			class="cbc-chatbot__accion-contacto"
			href="tel:+34624810547"
			data-contacto="telefono"
			aria-label="Llamar a HealthyVal al 624 810 547"
		>
			<svg
				class="cbc-chatbot__icono-contacto"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M6.6 3.5L9.2 3C9.8 2.9 10.4 3.2 10.7 3.8L12 6.8C12.2 7.3 12.1 7.9 11.7 8.3L10.2 9.8C11.2 12 12.9 13.8 15.2 14.8L16.7 13.3C17.1 12.9 17.7 12.8 18.2 13L21.2 14.3C21.8 14.6 22.1 15.2 22 15.8L21.5 18.4C21.3 19.4 20.4 20.1 19.4 20.1C10.8 20.1 3.9 13.2 3.9 4.6C3.9 3.6 4.6 2.7 5.6 2.5L6.6 3.5Z"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<span class="cbc-chatbot__texto-telefono">
				624 810 547
			</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto cbc-chatbot__accion-contacto--whatsapp cbc-chatbot__enlace-whatsapp"
			href="https://wa.me/34624810547"
			target="_blank"
			rel="noopener noreferrer"
			data-contacto="whatsapp"
			data-whatsapp-contexto="contacto"
			aria-label="Abrir WhatsApp de HealthyVal"
		>
			<svg
				class="cbc-chatbot__icono-contacto"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M20.5 11.7C20.5 16.4 16.7 20.2 12 20.2C10.5 20.2 9 19.8 7.8 19.1L3.5 20.5L4.9 16.4C4.1 15 3.7 13.4 3.7 11.7C3.7 7 7.4 3.2 12.1 3.2C16.8 3.2 20.5 7 20.5 11.7Z"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M9 8.2C9.3 7.9 9.7 8 9.9 8.4L10.8 10.4C11 10.7 10.9 11 10.7 11.3L10 12C10.8 13.5 12 14.7 13.5 15.4L14.2 14.7C14.5 14.4 14.8 14.4 15.1 14.5L17.1 15.5C17.5 15.7 17.6 16.1 17.3 16.4C16.6 17.3 15.6 17.7 14.6 17.4C11.1 16.5 8.4 13.8 7.5 10.3C7.2 9.4 7.6 8.8 9 8.2Z"
					stroke="currentColor"
					stroke-width="1.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<span class="cbc-chatbot__texto-whatsapp">
				WhatsApp
			</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto"
			href="mailto:info@healthyval.es"
			data-contacto="correo"
			aria-label="Enviar un correo electrónico a info@healthyval.es"
		>
			<svg
				class="cbc-chatbot__icono-contacto"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<rect
					x="3"
					y="5"
					width="18"
					height="14"
					rx="2"
					stroke="currentColor"
					stroke-width="1.6"
				/>
				<path
					d="M4 7L12 13L20 7"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<span class="cbc-chatbot__texto-correo">
				info@healthyval.es
			</span>
		</a>
	</div>

	<div class="cbc-chatbot__separador-contacto">
		<span
			id="cbc-chatbot-texto-redes"
			class="cbc-chatbot__texto-redes"
		>
			Síguenos en redes sociales
		</span>
	</div>

	<nav
		class="cbc-chatbot__redes-sociales"
		aria-labelledby="cbc-chatbot-texto-redes"
	>
		<a
			class="cbc-chatbot__red-social"
			href="https://www.instagram.com/healthyval.clinica/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Abrir Instagram de HealthyVal"
			title="Instagram"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<rect
					x="3.5"
					y="3.5"
					width="17"
					height="17"
					rx="5"
					stroke="currentColor"
					stroke-width="1.6"
				/>
				<circle
					cx="12"
					cy="12"
					r="4"
					stroke="currentColor"
					stroke-width="1.6"
				/>
				<circle
					cx="17.4"
					cy="6.8"
					r="1"
					fill="currentColor"
				/>
			</svg>

			<span class="cbc-chatbot__texto-oculto">
				Instagram
			</span>
		</a>

		<a
			class="cbc-chatbot__red-social"
			href="https://www.facebook.com/profile.php?id=61580146342069"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Abrir Facebook de HealthyVal"
			title="Facebook"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M14.5 8H17V4.5C16.6 4.4 15.2 4.3 13.6 4.3C10.5 4.3 8.4 6.2 8.4 9.7V12H5V15.9H8.4V24H12.6V15.9H16.1L16.7 12H12.6V10.1C12.6 9 12.9 8.2 14.5 8Z"
					fill="currentColor"
				/>
			</svg>

			<span class="cbc-chatbot__texto-oculto">
				Facebook
			</span>
		</a>

		<a
			class="cbc-chatbot__red-social"
			href="https://www.linkedin.com/company/109755305"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Abrir LinkedIn de HealthyVal"
			title="LinkedIn"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<rect
					x="3"
					y="9"
					width="4"
					height="12"
					fill="currentColor"
				/>
				<circle
					cx="5"
					cy="5"
					r="2"
					fill="currentColor"
				/>
				<path
					d="M10 9H14V10.7C14.8 9.5 16.1 8.7 18 8.7C21.4 8.7 22 10.9 22 14.1V21H18V14.9C18 13.4 18 11.5 15.9 11.5C13.8 11.5 13.5 13.1 13.5 14.8V21H10V9Z"
					fill="currentColor"
				/>
			</svg>

			<span class="cbc-chatbot__texto-oculto">
				LinkedIn
			</span>
		</a>

		<a
			class="cbc-chatbot__red-social"
			href="https://www.tiktok.com/@healthyval_?_r=1&amp;_t=ZN-98Xxgrljn1i"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Abrir TikTok de HealthyVal"
			title="TikTok"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M14.5 4V14.1C14.5 17 12.2 19.3 9.3 19.3C6.4 19.3 4.1 17 4.1 14.1C4.1 11.2 6.4 8.9 9.3 8.9C9.8 8.9 10.3 9 10.8 9.1V12.3C10.4 12.1 9.9 12 9.5 12C8.3 12 7.3 13 7.3 14.2C7.3 15.4 8.3 16.4 9.5 16.4C10.8 16.4 11.6 15.4 11.6 14V4H14.5Z"
					fill="currentColor"
				/>
				<path
					d="M14.5 4C15 6.5 16.9 8.4 19.5 8.9V11.9C17.5 11.8 15.8 11 14.5 9.8V4Z"
					fill="currentColor"
				/>
			</svg>

			<span class="cbc-chatbot__texto-oculto">
				TikTok
			</span>
		</a>

		<a
			class="cbc-chatbot__red-social"
			href="https://youtube.com/@healthyval?si=cUaGX-Rw6pLUjET-"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Abrir YouTube de HealthyVal"
			title="YouTube"
		>
			<svg
				width="24"
				height="22"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M21 8.1C20.8 6.9 19.9 6 18.7 5.8C17 5.5 14.8 5.4 12 5.4C9.2 5.4 7 5.5 5.3 5.8C4.1 6 3.2 6.9 3 8.1C2.7 9.3 2.6 10.6 2.6 12C2.6 13.4 2.7 14.7 3 15.9C3.2 17.1 4.1 18 5.3 18.2C7 18.5 9.2 18.6 12 18.6C14.8 18.6 17 18.5 18.7 18.2C19.9 18 20.8 17.1 21 15.9C21.3 14.7 21.4 13.4 21.4 12C21.4 10.6 21.3 9.3 21 8.1Z"
					stroke="currentColor"
					stroke-width="1.5"
				/>
				<path
					d="M10 9L15 12L10 15V9Z"
					fill="currentColor"
				/>
			</svg>

			<span class="cbc-chatbot__texto-oculto">
				YouTube
			</span>
		</a>
	</nav>

	<button
		type="button"
		class="cbc-chatbot__volver"
		data-volver="menu"
	>
		← Volver
	</button>
</div>