import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { TextControl } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

export default function Edit() {
	const postType = useSelect((select) => {
		return select('core/editor').getCurrentPostType();
	}, []);
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	const subTitleValue = meta?._metadata_block_post_subtitle || '';
	const handleSubtitleChange = (value) => {
		setMeta({ ...meta, _metadata_block_post_subtitle: value });
	};
	return (
		<p {...useBlockProps()}>
			{subTitleValue || subTitleValue === '' ? (
				<TextControl
					label={__('Post subtitle', 'metadat-block')}
					value={subTitleValue}
					onChange={handleSubtitleChange}
					__nextHasNoMarginBottom={true}
					__next40pxDefaultSize={true}
				/>
			) : (__('Subtitle meta not registered.', 'metadata-block')

			)}
			<br />

		</p>
	);
}
