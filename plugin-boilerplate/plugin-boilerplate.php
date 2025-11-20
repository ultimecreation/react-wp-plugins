<?php
/**
 * Plugin Name:       Plugin Boilerplate
 * Description:       Plugin boilerplate
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Ultime
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       plugin-boilerplate
 *
 */

function plugin_boilerplate_enqueue_assets() {
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script( "plugin-boilerplate-enqueue-script", plugins_url( "build/index.js", __FILE__ ),$asset_file['dependencies'], $asset_file['version'] );
    wp_enqueue_style("plugin-boilerplate-enqueue-style", plugins_url( "build/index.css", __FILE__ ) );
    
}   
add_action( 'enqueue_block_editor_assets', 'plugin_boilerplate_enqueue_assets' );    