import * as types from "./types";
const INITIAL_STATE = {
    todos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo],
            };
        case types.POPULATE_TODOS:
            return {
                ...state,
                todos: action.todos,
            };
        case types.UPDATE_TODO: {
            const copiedTodos = [...state.todos];
            copiedTodos[action.index] = action.todo;
            return {
                ...state,
                todos: copiedTodos,
            };

        }
        default:
            return state;
    }
}
export default reducer;