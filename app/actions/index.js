import * as types from '../constants/ActionTypes'

export function addTodo(text) {
    return {type: types.ADD_TODO, text}
}

export function deleteTodo(id) {
    return {type: types.DELETE_TODO, id}
}

export function editTodo(id, text) {
    return {type: types.EDIT_TODO, id, text}
}

export function completeTodo(id) {
    return {type: types.COMPLETE_TODO, id}
}

export function completeAll() {
    return {type: types.COMPLETE_ALL}
}

export function clearCompleted() {
    return {type: types.CLEAR_COMPLETED}
}

function requestTodos() {
    return {
        type: types.REQUEST_TODOS
    }
}

function receiveTodos(json) {
    return {
        type: types.RECEIVE_TODOS,
        todos: json
    }
}

function _fetchTodos() {
    return dispatch => {
        dispatch(requestTodos())
        return fetch(`/api/todos/`)
            .then(response => response.json())
            .then(json => dispatch(receiveTodos(json)))
    }
}

export function fetchTodos() {
    return (dispatch, getState) => {
        dispatch(_fetchTodos())
    }
}
