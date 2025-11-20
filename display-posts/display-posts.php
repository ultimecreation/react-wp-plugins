<?php
/**
 * Plugin Name:       Display Ultime latest posts
 * Description:      Display Ultime latest posts.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Ultime
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       display-posts
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
function create_block_display_posts_render_callback( $attributes ) {
	
	$nb_of_posts = isset( $attributes['nbOfPosts'] ) ? intval( $attributes['nbOfPosts'] ) : 5;

	$args = array(
		'posts_per_page' => $nb_of_posts,
		'post_status'    => 'publish',
		'order'          =>  $attributes['order'] ,
		'orderby'        => $attributes['orderBy'] 
	);

	$posts = get_posts( $args );

	if ( empty( $posts ) ) {
		return '<p>No posts found.</p>';
	}

	$output = '<ul '.get_block_wrapper_attributes().'>';

	foreach ( $posts as $post ) {
	
		
		if($attributes['displayFeaturedImage'] === true && has_post_thumbnail( $post->ID ) ){
			
			$output .= sprintf(
				'<li class="display-posts-item"><a href="%s">%s<br/>%s</a></li>',
				esc_url( get_permalink( $post->ID ) ),
				get_the_post_thumbnail( $post->ID, 'thumbnail' ),
				esc_html( get_the_title( $post->ID ) )
			);
		}
		else{
			$output .= sprintf(
				'<li class="display-posts-item"><a href="%s">%s</a></li>',
				esc_url( get_permalink( $post->ID ) ),
				esc_html( get_the_title( $post->ID ) ),
			);
			
	}}

	$output .= '</ul>';
	return $output;
}


function create_block_display_posts_init() {
	if ( function_exists( 'register_block_type_from_metadata' ) ) {
		register_block_type_from_metadata( __DIR__ . '/build/display-posts/',  array(
		"render_callback" => "create_block_display_posts_render_callback",
	) );
	
		return;
	}

	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php') ;
	
		return;
	}


	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
	
}
add_action( 'init', 'create_block_display_posts_init' );
