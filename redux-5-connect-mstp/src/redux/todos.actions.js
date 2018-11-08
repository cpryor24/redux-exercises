export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const FETCH_TODO = 'FETCH_TODO'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      id: 4,
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

export const fetchTodo = (todos) => {
  return {
    type: FETCH_TODO,
    payload: todos
  }
}
