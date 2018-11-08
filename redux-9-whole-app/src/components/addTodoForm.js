import React, { Component } from 'react';
import { addTodo } from '../redux/actions/todos.actions';
import { connect } from 'react-redux'

class AddTodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value
    })
  }

  handleClick = () => {
    this.props.addTodo(this.state.newTodo)
  }

  render() {
    return (
      <div>
        <label>New Todo: </label>
        <input type="text" onChange={this.handleChange} value={this.state.newTodo}/>
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    )
  }
}

export default connect(null, { addTodo })(AddTodoForm)
