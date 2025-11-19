import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	icon: {
		src: 'text-page',
		background: '#f7a0a0d0',
		foreground: 'blue'
	},
	edit: Edit,
	save,
});
