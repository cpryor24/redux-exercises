import React, { Component } from 'react'
import './App.css'
import TodoList from './components/todosList'
import AddTodoForm from './components/addTodoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App
