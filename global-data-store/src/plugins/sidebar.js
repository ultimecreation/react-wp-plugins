import { TextControl } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { PluginSidebar, PluginBlockSettingsMenuItem, PluginDocumentSettingPanel, PluginPostStatusInfo, PluginPrePublishPanel, PluginPostPublishPanel } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";

const SidebarContent = () => {
    const subtitleValue = useSelect((select) => {
        return select('core/editor').getEditedPostAttribute('meta')._metadata_block_post_subtitle;

    });
    const { editPost } = useDispatch('core/editor');
    return (
        <PluginSidebar
            name="Meta fields Sidebar  "
            title={__('Meta fields', 'global-data-store')}

            icon="database"
        >
            <PanelBody title={__('Global Data Store Info', 'global-data-store')} >
                <TextControl
                    label={__('Subtitle option', 'global-data-store')}
                    value={subtitleValue}
                    onChange={(value) => {
                        editPost({ meta: { _metadata_block_post_subtitle: value } })
                    }}
                />
            </PanelBody>
        </PluginSidebar>
    )
}

registerPlugin('global-data-store-sidebar', {
    title: 'Meta fields Sidebar',
    icon: 'database',
    render: () => <SidebarContent />
});