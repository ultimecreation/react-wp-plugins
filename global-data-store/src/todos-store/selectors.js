

export const getTodos = (state) => {
    return state.todos;
}

export const getTodosCount = (state) => {
    return state.todos.length;
}

export const getCompletedTodosCount = (state) => {
    return state.todos.filter(todo => todo.completed).length;
}

export const getPendingTodosCount = (state) => {
    return state.todos.filter(todo => !todo.completed).length;
}