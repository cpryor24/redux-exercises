import React, { Component } from 'react'
import TodoList from './components/todoList';
import AddTodoForm from './components/addTodoForm';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTodos } from './redux/actions/todos.actions'


class App extends Component {

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.props.dispatch(fetchTodos(res.data)))
  }

  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App)
