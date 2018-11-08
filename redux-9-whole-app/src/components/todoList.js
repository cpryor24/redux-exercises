import React from 'react';
import Todo from './todo';
import { connect } from 'react-redux';

const TodoList = ( props ) => {
  let listOfTodos = props.todos.map(todo => <Todo key={todo.id} todo={todo} />)

  return (
    <div>
      <h2>Todo List</h2>
      <ul>{listOfTodos}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList)
