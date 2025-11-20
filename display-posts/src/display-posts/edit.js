import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect } from '@wordpress/data';
import { RawHTML } from '@wordpress/element';
import { PanelBody, QueryControls, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { nbOfPosts, displayFeaturedImage, order, orderBy, selectedCategories } = attributes;


	const posts = useSelect((select) => {
		const categoryIds = selectedCategories && selectedCategories.length > 0
			? selectedCategories.map(cat => cat.id)
			: [];
		return select('core').getEntityRecords('postType', 'post', {
			per_page: nbOfPosts,
			status: 'publish',
			_embed: true,
			order,
			orderby: orderBy,
			categories: categoryIds,
		});
	}, [nbOfPosts, order, orderBy, selectedCategories]);

	const allCats = useSelect((select) => {
		return select('core').getEntityRecords('taxonomy', 'category', {
			per_page: -1
		});
	}, []);
	// const catSuggestions = allCats ? allCats.reduce((acc, cat) => {
	// 	acc[cat.name] = cat
	// 	return acc;
	// }, {}) : {};
	const catSuggestions = {};
	if (allCats) {
		for (let i = 0; i < allCats.length; i++) {
			const cat = allCats[i];
			catSuggestions[cat.name] = cat;
		}
	}

	const onDisplayFeaturedImage = (value) => {
		setAttributes({ displayFeaturedImage: value })
	};
	const onNbOfPostsChange = (value) => {
		setAttributes({ nbOfPosts: value })
	}
	const handleCategoryChange = (values) => {
		const selectedCatDoNotExists = values.some(value => typeof value === 'string' && !catSuggestions[value]);
		if (selectedCatDoNotExists) return;

		const updatedCategories = values.map(value => {
			return typeof value === 'string' ? catSuggestions[value] : value
		});
		setAttributes({ selectedCategories: updatedCategories });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<ToggleControl label={__('Show Featured Image', 'display-posts')}
						checked={displayFeaturedImage}
						onChange={onDisplayFeaturedImage}
					/>
					<QueryControls
						numberOfItems={nbOfPosts}
						onNumberOfItemsChange={onNbOfPostsChange}
						minItems={1}
						maxItems={10}
						orderBy={orderBy}
						onOrderByChange={(value) => { setAttributes({ orderBy: value }) }}
						order={order}
						categorySuggestions={catSuggestions}
						selectedCategories={selectedCategories}
						onCategoryChange={handleCategoryChange}
					/>
				</PanelBody>

			</InspectorControls>

			<ul {...useBlockProps()}>
				{posts && posts.length > 0 ? (
					posts.map((post) => (
						<li key={post.id}>


							{post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] && displayFeaturedImage &&
								<img src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ''} alt={post.title.rendered} height={100} />
							}
							<a href={post.link}>
								<RawHTML>
									{post.title.rendered || __('(No title)', 'display-posts')}
								</RawHTML>
							</a>


						</li>
					))
				) : (
					<li>{__('No posts found.', 'display-posts')}</li>
				)}
			</ul>
		</>
	);
}
