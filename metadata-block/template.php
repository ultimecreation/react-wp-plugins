<?php 

function metadata_block_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template = array(
        array( 'create-block/metadata-block' ),
    );
}
add_action( 'init', 'metadata_block_register_template' );