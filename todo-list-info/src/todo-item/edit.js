import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect } from '@wordpress/data';

export default function Edit() {
	const data = useSelect((select) => {
		const store = select('global-store/todos');
		if (!store) return null;
		return {
			totalTodoCount: store.getTodos().length,
			doneCount: store.getCompletedTodosCount(),
			pendingCount: store.getPendingTodosCount(),
		};

	})

	return (
		<p {...useBlockProps()}>
			{!data && (
				<p>
					{__('Make sure the plugin is activated!', 'todo-list-info')}
				</p>
			)}
			{data && (
				<ul>
					<li>
						{__('Total Todos: ', 'todo-list-info')} {data.totalTodoCount}
					</li>
					<li>
						{__('Completed Todos: ', 'todo-list-info')} {data.doneCount}
					</li>
					<li>
						{__('Pending Todos: ', 'todo-list-info')} {data.pendingCount}
					</li>
				</ul>
			)}
		</p>
	);
}
