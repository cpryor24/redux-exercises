import { createStore, combineReducers } from 'redux';
import todosReducers from './reducer/todos.reducers';

let rootReducer = combineReducers({
  todos: todosReducers
})

export default createStore(rootReducer)
