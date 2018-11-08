import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../actions/todos.actions';

const initialState = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      let theId = action.payload;
      return state.filter(todo => todo.id !== parseInt(theId));

    case FETCH_TODOS:
      return action.payload;

    default:
      return state;
  }
}
