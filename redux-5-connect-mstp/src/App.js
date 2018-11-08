import React, { Component } from 'react'
import './App.css'
import TodoList from './components/todosList'
import AddTodoForm from './components/addTodoForm'
import { connect } from 'react-redux'
import axios from 'axios';
import { fetchTodo } from './redux/todos.actions'

class App extends Component {
  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => this.props.dispatch(fetchTodo(res.data)))
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

export default connect()(App)
