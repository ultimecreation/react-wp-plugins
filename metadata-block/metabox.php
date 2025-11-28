<?php

function metadata_block_register_metabox() {
    register_meta( 
        'post', 
        '_metadata_block_post_subtitle', 
        array(
            'single'=>true,
            'type'=>'string',
            'show_in_rest'=>true,
            'sanitize_callback'=>'sanitize_text_field',
            'auth_callback'=> function(){
                return current_user_can( 'edit_posts');
            }
        ) );
}
add_action( 'init', 'metadata_block_register_metabox');