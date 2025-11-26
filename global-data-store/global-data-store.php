<?php
/**
 * Plugin Name:       Global data store
 * Description:       Global data store
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Ultime
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       global-data-store
 *
 */

function global_data_store_enqueue_assets() {
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script( "global-data-store-enqueue-script", plugins_url( "build/index.js", __FILE__ ),$asset_file['dependencies'], $asset_file['version'] );
    
}   
add_action( 'enqueue_block_editor_assets', 'global_data_store_enqueue_assets' );    