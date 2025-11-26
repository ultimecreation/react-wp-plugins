import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect } from '@wordpress/data';
import { CheckboxControl } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';

export default function Edit() {
	const [newTodo, setNewTodo] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const todos = useSelect((select) => {
		const todoStore = select('global-store/todos');
		return todoStore && todoStore.getTodos();
	}, []);
	const actions = useDispatch('global-store/todos');
	const addTodo = actions && actions.addTodo;
	const toggleTodo = actions && actions.toggleTodoCompletion;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (addTodo && newTodo) {
			setIsLoading(true);
			await addTodo(newTodo);
			setNewTodo('');
			setIsLoading(false);
		}
	};

	return (
		<p {...useBlockProps()}>
			{!todos
				? __('Loading todos...', 'todo-list')
				: todos.length === 0
					? __('No todos found.', 'todo-list')
					: (
						<>
							<ul>
								{todos.map((todo, index) => (
									<CheckboxControl
										disabled={todo.isLoading}
										label={todo.title}
										checked={todo.completed}
										onChange={() => {
											if (toggleTodo) toggleTodo(todo, index);
										}}
										__nextHasNoMarginBottom={true}
									/>
								))}
							</ul>
							<form onSubmit={handleSubmit}>
								<TextControl
									value={newTodo}
									onChange={(value) => setNewTodo(value)}
									__next40pxDefaultSize={true}
									__nextHasNoMarginBottom={true}
								/>
								<Button type='submit' variant='primary' disabled={isLoading}>
									{__('Add Todo', 'todo-list')}
								</Button>
							</form>
						</>
					)}
		</p>
	);
}
