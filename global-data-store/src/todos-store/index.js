import { createReduxStore, register } from "@wordpress/data";
import * as actions from "./actions";
import * as selectors from "./selectors";
import * as resolvers from "./resolvers";
import controls from "./controls";
import reducer from "./reducer";


const store = createReduxStore("global-store/todos", {
    reducer,
    actions,
    selectors,
    resolvers,
    controls
});
register(store);