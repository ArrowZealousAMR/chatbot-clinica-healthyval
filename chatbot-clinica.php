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
	'cbc-chatbot-base',
	plugin_dir_url( __FILE__ ) . 'public/css/base.css',
	array(),
	'0.1.0'
);

wp_enqueue_style(
	'cbc-chatbot-layout',
	plugin_dir_url( __FILE__ ) . 'public/css/layout.css',
	array( 'cbc-chatbot-base' ),
	'0.1.0'
);

wp_enqueue_style(
	'cbc-chatbot-components',
	plugin_dir_url( __FILE__ ) . 'public/css/components.css',
	array( 'cbc-chatbot-layout' ),
	'0.1.0'
);

wp_enqueue_style(
	'cbc-chatbot-responsive',
	plugin_dir_url( __FILE__ ) . 'public/css/responsive.css',
	array( 'cbc-chatbot-components' ),
	'0.1.0'
);

	wp_enqueue_script(
    'cbc-chatbot-state',
    plugin_dir_url(__FILE__) . 'public/js/state.js',
    array(),
    '0.1.0',
    true
);

wp_enqueue_script(
    'cbc-chatbot-core',
    plugin_dir_url(__FILE__) . 'public/js/core.js',
    array('cbc-chatbot-state'),
    '0.1.0',
    true
);

wp_enqueue_script(
    'cbc-chatbot-translations',
    plugin_dir_url(__FILE__) . 'public/js/translations.js',
    array('cbc-chatbot-core'),
    '0.1.0',
    true
);

wp_enqueue_script(
    'cbc-chatbot-navigation',
    plugin_dir_url(__FILE__) . 'public/js/navigation.js',
    array(
        'cbc-chatbot-core',
        'cbc-chatbot-state',
        'cbc-chatbot-translations'
    ),
    '0.1.0',
    true
);

wp_enqueue_script(
    'cbc-chatbot-main',
    plugin_dir_url(__FILE__) . 'public/js/main.js',
    array(
        'cbc-chatbot-navigation'
    ),
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
