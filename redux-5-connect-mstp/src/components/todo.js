import React from 'react';
import { connect } from 'react-redux'
import { removeTodo } from '../redux/todos.actions'

const Todo = ({todo, removeTodo}) => {
  return (
    <div>
      <li >{todo.title}<button onClick={() => removeTodo(todo.id)}>Remove</button></li>
    </div>
  )
}

export default connect(null, {removeTodo})(Todo)
