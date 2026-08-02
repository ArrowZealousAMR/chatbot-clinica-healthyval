<?php
/**
 * Pantalla de horarios de HealthyVal.
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
	<h3
		class="cbc-chatbot__subtitulo cbc-chatbot__titulo-horarios"
	>
		Horarios
	</h3>

	<p class="cbc-chatbot__texto-horarios">
		Consulta nuestro horario de atención.
	</p>

	<div class="cbc-chatbot__informacion cbc-chatbot__informacion--horarios">

		<div class="cbc-chatbot__fila-horario">

			<div
				class="cbc-chatbot__icono-horario"
				aria-hidden="true"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
				>
					<circle
						cx="12"
						cy="12"
						r="8.5"
						stroke="currentColor"
						stroke-width="1.6"
					/>
					<path
						d="M12 7.5V12L15 14"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>

			<div class="cbc-chatbot__detalle-horario">

				<span class="cbc-chatbot__dia-horario">
					Lunes a viernes
				</span>

				<span class="cbc-chatbot__horario-semana">
					De 10:00 a 20:00
				</span>

			</div>

		</div>

		<div class="cbc-chatbot__separador-horario"></div>

		<div class="cbc-chatbot__fila-horario">

			<div
				class="cbc-chatbot__icono-horario"
				aria-hidden="true"
			>
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					focusable="false"
				>
					<rect
						x="4"
						y="5.5"
						width="16"
						height="14"
						rx="2.5"
						stroke="currentColor"
						stroke-width="1.6"
					/>
					<path
						d="M8 3.5V7.5"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
					/>
					<path
						d="M16 3.5V7.5"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
					/>
					<path
						d="M4 9H20"
						stroke="currentColor"
						stroke-width="1.6"
					/>
				</svg>
			</div>

			<div class="cbc-chatbot__detalle-horario">

				<span class="cbc-chatbot__dia-fin-semana">
					Sábados y domingos
				</span>

				<span class="cbc-chatbot__horario-sabado">
					Cerrado
				</span>

			</div>

		</div>

	</div>

	<div class="cbc-chatbot__acciones-contacto">

		<button
			type="button"
			class="cbc-chatbot__opcion cbc-chatbot__opcion--destacada cbc-chatbot__boton-cita-horarios"
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
					x="4"
					y="5.5"
					width="16"
					height="14"
					rx="2.5"
					stroke="currentColor"
					stroke-width="1.6"
				/>
				<path
					d="M8 3.5V7.5"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
				<path
					d="M16 3.5V7.5"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
				<path
					d="M4 9H20"
					stroke="currentColor"
					stroke-width="1.6"
				/>
				<path
					d="M12 12V17"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
				<path
					d="M9.5 14.5H14.5"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
				/>
			</svg>

			<span class="cbc-chatbot__texto-cita-horarios">
				Pedir cita
			</span>
		</button>

		<a
			class="cbc-chatbot__accion-contacto"
			href="tel:+34624810547"
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

			<span class="cbc-chatbot__texto-llamar-horarios">
				Llamar
			</span>
		</a>

		<a
			class="cbc-chatbot__accion-contacto cbc-chatbot__accion-contacto--whatsapp"
			href="https://wa.me/34624810547"
			target="_blank"
			rel="noopener noreferrer"
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

			<span class="cbc-chatbot__texto-whatsapp-horarios">
				WhatsApp
			</span>
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