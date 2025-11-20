<?php
// This file is generated. Do not modify it manually.
return array(
	'display-posts' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/display-posts',
		'version' => '0.1.0',
		'title' => 'Display posts',
		'category' => 'text',
		'icon' => 'admin-post',
		'description' => 'Display display posts',
		'keywords' => array(
			'display',
			'post'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'display-posts',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'nbOfPosts' => array(
				'type' => 'number',
				'default' => 5
			),
			'displayFeaturedImage' => array(
				'type' => 'boolean',
				'default' => false
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'selectedCategories' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		)
	)
);
