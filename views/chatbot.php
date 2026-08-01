<?php
/**
 * Estructura principal del chatbot.
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
		💬
	</button>

	<section
		id="cbc-chatbot-ventana"
		class="cbc-chatbot__ventana"
		aria-hidden="true"
		hidden
	>
		<header class="cbc-chatbot__cabecera">

			<h2 class="cbc-chatbot__titulo">
				Asistente HealthyVal
			</h2>

			<button
				type="button"
				class="cbc-chatbot__cerrar"
				aria-label="Cerrar asistente"
			>
				×
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
			<?php require $ruta_views . 'pantalla-recuperacion.php'; ?>
			<?php require $ruta_views . 'pantalla-salud.php'; ?>
			<?php require $ruta_views . 'pantalla-precios.php'; ?>
			<?php require $ruta_views . 'pantalla-cita.php'; ?>

		</div>

	</section>

</div>