import { combineReducers } from 'redux';

// 改变显示状态
function setFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case 'SET_FILTER': {
            return action.filter;
        }
        default: {
            return state;
        }
    }
}

// 操作 todo 项目
function operateTodo(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        }
        case 'EDIT_TODO': {
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        text: action.text,
                    })
                }
                return todo;
            })
        }
        case 'DELETE_TODO': {
            return state.filter(todo => {
                return todo.id !== action.id;
            })
        }
        case 'TOGGLE_TODO': {
            return state.map(todo => {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    })
                }
                return todo;
            })
        }
        case 'CLEAR_COMPLETED': {
            return state.filter(todo => {
                return !todo.completed;
            })
        }
        case 'SELECT_All': {
            // 当前所有 todo 项是否都已完成
            let completeAll = true;

            for (let todo of state) {
                if (!todo.completed) {
                    completeAll = false;
                    break;
                }
            }

            // 如果所有 todo 项都已完成, 则将所有 todo 项改为未完成状态, 否则将所以 todo 改为完成状态
            if (completeAll) {
                return state.map((todo) => {
                    return Object.assign({}, todo, {
                        completed: false,
                    })
                })
            } else {
                return state.map((todo) => {
                    if (!todo.completed) {
                        return Object.assign({}, todo, {
                            completed: true,
                        })
                    }
                    return todo;
                })
            }
        }
        default: {
            return state;
        }
    }
}

const todoReducers = combineReducers({
    filter: setFilter,
    todos: operateTodo,
});

export default todoReducers;