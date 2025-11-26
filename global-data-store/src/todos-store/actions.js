import { dispatch } from "@wordpress/data";
import { createTodo, toggleTodo } from "./controls";
import * as types from "./types";

export function* addTodo(title) {
    try {
        const todo = yield createTodo(title);
        return {
            type: types.ADD_TODO,
            todo,
        };
    } catch (error) {
        console.error("Error creating todo:", error);
        dispatch("core/notices").createErrorNotice(
            error.message || "Failed to create todo."
        );
    }
}

export function* toggleTodoCompletion(todo, index) {
    try {
        yield updateTodo({ ...todo, isLoading: true }, index);
        const updatedTodo = yield toggleTodo(todo);
        return updateTodo(updatedTodo, index);

    } catch (error) {
        console.error("Error toggling todo:", error);
        dispatch("core/notices").createErrorNotice(
            error.message || "Failed to toggle todo."
        );
    }
}

export const updateTodo = (todo, index) => {
    return {
        type: types.UPDATE_TODO,
        todo,
        index,
    };
}
export const populateTodos = (todos) => {
    return {
        type: types.POPULATE_TODOS,
        todos,
    };
}