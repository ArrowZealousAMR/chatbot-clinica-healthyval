<?php
/**
 * Plugin Name: Chatbot Clínica
 * Description: Chatbot guiado y configurable para clínicas.
 * Version: 0.1.0
 * Author: INVOLUCRA'T
 * Text Domain: chatbot-clinica
 * Domain Path: /languages
 * Requires at least: 6.5
 * Requires PHP: 8.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Carga los archivos CSS y JavaScript públicos del chatbot.
 */
function cbc_cargar_archivos_publicos() {
	wp_enqueue_style(
		'cbc-chatbot-estilos',
		plugin_dir_url( __FILE__ ) . 'public/css/chatbot-clinica.css',
		array(),
		'0.1.0'
	);

	wp_enqueue_script(
		'cbc-chatbot-script',
		plugin_dir_url( __FILE__ ) . 'public/js/chatbot-clinica.js',
		array(),
		'0.1.0',
		true
	);
}

add_action( 'wp_enqueue_scripts', 'cbc_cargar_archivos_publicos' );

/**
 * Carga la vista principal del chatbot.
 */
function cbc_mostrar_chatbot() {
	$ruta_vista = plugin_dir_path( __FILE__ ) . 'views/chatbot.php';

	if ( file_exists( $ruta_vista ) ) {
		require $ruta_vista;
	}
}

add_action( 'wp_footer', 'cbc_mostrar_chatbot' );
