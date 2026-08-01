<?php
/**
 * Estructura principal del asistente HealthyVal.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$ruta_views = plugin_dir_path( dirname( __FILE__ ) ) . 'views/';
?>

<div class="cbc-chatbot">

	<button
		type="button"
		class="cbc-chatbot__boton"
		aria-label="Abrir asistente HealthyVal"
		aria-expanded="false"
		aria-controls="cbc-chatbot-ventana"
	>
		<svg
			class="cbc-chatbot__icono-abrir"
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
		>
			<path
				d="M7 18.5L3.5 20L4.5 16.5C3.55 15.15 3 13.55 3 11.85C3 7.5 7 4 12 4C17 4 21 7.5 21 11.85C21 16.2 17 19.7 12 19.7C10.2 19.7 8.5 19.25 7 18.5Z"
				stroke="currentColor"
				stroke-width="1.7"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M8 12H8.01"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				d="M12 12H12.01"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
			<path
				d="M16 12H16.01"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
			/>
		</svg>

		<span class="cbc-chatbot__texto-oculto">
			Abrir asistente HealthyVal
		</span>
	</button>

	<section
		id="cbc-chatbot-ventana"
		class="cbc-chatbot__ventana"
		role="dialog"
		aria-modal="false"
		aria-labelledby="cbc-chatbot-titulo"
		aria-hidden="true"
		hidden
	>
		<header class="cbc-chatbot__cabecera">

			<div class="cbc-chatbot__marca">
				<h2
					id="cbc-chatbot-titulo"
					class="cbc-chatbot__titulo cbc-chatbot__logotipo"
				>
					healthyval<sup>®</sup>
				</h2>
			</div>

			<button
				type="button"
				class="cbc-chatbot__cerrar"
				aria-label="Cerrar asistente HealthyVal"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
				>
					<path
						d="M6 6L18 18"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					/>
					<path
						d="M18 6L6 18"
						stroke="currentColor"
						stroke-width="1.8"
						stroke-linecap="round"
					/>
				</svg>

				<span class="cbc-chatbot__texto-oculto">
					Cerrar asistente HealthyVal
				</span>
			</button>

		</header>

		<div class="cbc-chatbot__contenido">

			<?php require $ruta_views . 'pantalla-idioma.php'; ?>
			<?php require $ruta_views . 'pantalla-nombre.php'; ?>
			<?php require $ruta_views . 'pantalla-menu.php'; ?>

			<?php require $ruta_views . 'pantalla-horarios.php'; ?>
			<?php require $ruta_views . 'pantalla-ubicacion.php'; ?>
			<?php require $ruta_views . 'pantalla-contacto.php'; ?>

			<?php require $ruta_views . 'pantalla-medicina-estetica.php'; ?>
			<?php require $ruta_views . 'pantalla-facial-armonizacion.php'; ?>
			<?php require $ruta_views . 'pantalla-piel-luminosidad.php'; ?>
			<?php require $ruta_views . 'pantalla-corporales.php'; ?>
			<?php require $ruta_views . 'pantalla-capilar.php'; ?>
			<?php require $ruta_views . 'pantalla-laser-plasma.php'; ?>

			<?php require $ruta_views . 'pantalla-recuperacion.php'; ?>
			<?php require $ruta_views . 'pantalla-salud.php'; ?>
			<?php require $ruta_views . 'pantalla-precios.php'; ?>
			<?php require $ruta_views . 'pantalla-cita.php'; ?>

		</div>

	</section>

</div>