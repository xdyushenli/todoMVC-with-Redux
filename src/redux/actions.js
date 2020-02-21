let nextTodoId = 0;

// action 类型
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_FILTER = 'SET_FILTER';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
const SELECT_All = 'SELECT_All';

// filter 状态
export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}

// 新增项目
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text,
        id: nextTodoId++,
    }
}

// 修改项目
export function editTodo(id, text) {
    return {
        type: EDIT_TODO,
        id,
        text,
    }
}

// 删除项目
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id,
    }
}

// 改变项目状态
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

// 改变过滤器状态
export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter,
    }
}

// 清除所有已完成
export function clearCompleted() {
    return {
        type: CLEAR_COMPLETED,
    }
}

// 完成所有, 如果所有都已完成, 则将所有 todo 改为未完成
export function selectAll() {
    return {
        type: SELECT_All,
    }
}