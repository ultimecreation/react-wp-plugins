import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import './editor.scss';
import { ToolbarGroup } from '@wordpress/components';
import { ToolbarButton } from '@wordpress/components';
import { DropdownMenu } from '@wordpress/components';
import { ToolbarDropdownMenu } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes
	return (
		<>
			<BlockControls controls={[
				{
					title: "Button 1",
					icon: "admin-generic",
					isActive: true,
					onClick: () => console.log("Btn 1 clicked")
				},
				{
					title: "Button 2",
					icon: "admin-generic",
					isActive: true,
					onClick: () => console.log("Btn 2 clicked")
				},
			]} >
				<ToolbarGroup>
					<ToolbarButton
						title='Align Left'
						icon="editor-alignleft"
						onClick={() => console.log("align left")}

					/>
					<ToolbarButton
						title='Align Center'
						icon="editor-aligncenter"
						onClick={() => console.log("align center")}

					/>
					<ToolbarButton
						title='Align Right'
						icon="editor-alignright"
						onClick={() => console.log("align right")}

					/>
					<ToolbarDropdownMenu
						label={__("More alignement options", "text-box")}
						icon="arrow-down-alt2"
						controls={[
							{
								title: __("Align Wide", "text-box"),
								icon: "align-wide"
							},
							{
								title: __("Align Full", "text-box"),
								icon: "align-full-width"
							}
						]}
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{...useBlockProps()}
				placeholder={__('test', 'text-box')}
				tagName='h2'
				onChange={(value) => setAttributes({ text: value })}
				value={text}
			/>
		</>
	);
}
