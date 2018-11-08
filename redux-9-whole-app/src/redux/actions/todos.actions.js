export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: 201,
      title: todo,
      completed: false
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

export const fetchTodos = (todos) => {
  return {
    type: FETCH_TODOS,
    payload: todos
  }
}
