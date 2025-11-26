import { dispatch } from "@wordpress/data";
import { populateTodos } from "./actions";
import { fetchTodos } from "./controls";

export function* getTodos() {
    try {
        const todos = yield fetchTodos();
        return populateTodos(todos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        dispatch("core/notices").createErrorNotice(
            error.message || "Failed to fetch todos."
        );
    }

}