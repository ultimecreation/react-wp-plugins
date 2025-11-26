import * as types from "./types";
export const fetchTodos = () => {
    return {
        type: types.FETCH_TODOS,

    }
}
export const createTodo = (title) => {
    return {
        type: types.CREATE_TODO,
        title,
    }
}
export const toggleTodo = (todo) => {
    return {
        type: types.TOGGLE_TODO,
        todo,
    }
}

export default {
    FETCH_TODOS() {
        return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
    },
    CREATE_TODO({ title }) {
        return window.fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();

            });
    },
    TOGGLE_TODO({ todo }) {
        return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ completed: !todo.completed }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            });
    },
};