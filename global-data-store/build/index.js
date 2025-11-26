/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todos-store/actions.js":
/*!************************************!*\
  !*** ./src/todos-store/actions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodo: () => (/* binding */ addTodo),
/* harmony export */   populateTodos: () => (/* binding */ populateTodos),
/* harmony export */   toggleTodoCompletion: () => (/* binding */ toggleTodoCompletion),
/* harmony export */   updateTodo: () => (/* binding */ updateTodo)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");



function* addTodo(title) {
  try {
    const todo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_2__.ADD_TODO,
      todo
    };
  } catch (error) {
    console.error("Error creating todo:", error);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)("core/notices").createErrorNotice(error.message || "Failed to create todo.");
  }
}
function* toggleTodoCompletion(todo, index) {
  try {
    yield updateTodo({
      ...todo,
      isLoading: true
    }, index);
    const updatedTodo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.toggleTodo)(todo);
    return updateTodo(updatedTodo, index);
  } catch (error) {
    console.error("Error toggling todo:", error);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)("core/notices").createErrorNotice(error.message || "Failed to toggle todo.");
  }
}
const updateTodo = (todo, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__.UPDATE_TODO,
    todo,
    index
  };
};
const populateTodos = todos => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__.POPULATE_TODOS,
    todos
  };
};

/***/ }),

/***/ "./src/todos-store/controls.js":
/*!*************************************!*\
  !*** ./src/todos-store/controls.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodo: () => (/* binding */ createTodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchTodos: () => (/* binding */ fetchTodos),
/* harmony export */   toggleTodo: () => (/* binding */ toggleTodo)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const fetchTodos = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_TODOS
  };
};
const createTodo = title => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CREATE_TODO,
    title
  };
};
const toggleTodo = todo => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_TODO,
    todo
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  },
  CREATE_TODO({
    title
  }) {
    return window.fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  },
  TOGGLE_TODO({
    todo
  }) {
    return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        completed: !todo.completed
      })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }
});

/***/ }),

/***/ "./src/todos-store/index.js":
/*!**********************************!*\
  !*** ./src/todos-store/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/todos-store/selectors.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./src/todos-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/todos-store/reducer.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)("global-store/todos", {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_1__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_4__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/todos-store/reducer.js":
/*!************************************!*\
  !*** ./src/todos-store/reducer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const INITIAL_STATE = {
  todos: []
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO:
      {
        const copiedTodos = [...state.todos];
        copiedTodos[action.index] = action.todo;
        return {
          ...state,
          todos: copiedTodos
        };
      }
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);

/***/ }),

/***/ "./src/todos-store/resolvers.js":
/*!**************************************!*\
  !*** ./src/todos-store/resolvers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodos: () => (/* binding */ getTodos)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");



function* getTodos() {
  try {
    const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_2__.fetchTodos)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_1__.populateTodos)(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)("core/notices").createErrorNotice(error.message || "Failed to fetch todos.");
  }
}

/***/ }),

/***/ "./src/todos-store/selectors.js":
/*!**************************************!*\
  !*** ./src/todos-store/selectors.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCompletedTodosCount: () => (/* binding */ getCompletedTodosCount),
/* harmony export */   getPendingTodosCount: () => (/* binding */ getPendingTodosCount),
/* harmony export */   getTodos: () => (/* binding */ getTodos),
/* harmony export */   getTodosCount: () => (/* binding */ getTodosCount)
/* harmony export */ });
const getTodos = state => {
  return state.todos;
};
const getTodosCount = state => {
  return state.todos.length;
};
const getCompletedTodosCount = state => {
  return state.todos.filter(todo => todo.completed).length;
};
const getPendingTodosCount = state => {
  return state.todos.filter(todo => !todo.completed).length;
};

/***/ }),

/***/ "./src/todos-store/types.js":
/*!**********************************!*\
  !*** ./src/todos-store/types.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_TODO: () => (/* binding */ ADD_TODO),
/* harmony export */   CREATE_TODO: () => (/* binding */ CREATE_TODO),
/* harmony export */   FETCH_TODOS: () => (/* binding */ FETCH_TODOS),
/* harmony export */   POPULATE_TODOS: () => (/* binding */ POPULATE_TODOS),
/* harmony export */   TOGGLE_TODO: () => (/* binding */ TOGGLE_TODO),
/* harmony export */   UPDATE_TODO: () => (/* binding */ UPDATE_TODO)
/* harmony export */ });
const ADD_TODO = "ADD_TODO";
const POPULATE_TODOS = "POPULATE_TODOS";
const FETCH_TODOS = "FETCH_TODOS";
const CREATE_TODO = "CREATE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_store_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-store/index.js */ "./src/todos-store/index.js");

})();

/******/ })()
;
//# sourceMappingURL=index.js.map