import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions/todos.actions'

const Todo = ({todo, removeTodo}) => {

  let handleClick = (id) => {
    removeTodo(id)
  }

  return (
    <div>
      <li key={todo.id}>{todo.title} <button onClick={() => handleClick(todo.id)}>Remove</button></li>
    </div>
  )
}

export default connect(null, { removeTodo })(Todo)
