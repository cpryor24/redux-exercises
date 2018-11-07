import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../redux/todos.actions'

class AddTodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = e => this.setState({ newTodo: e.target.value })

  render() {
    return (
      <div>
        <p>
          New Todo:
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button
            onClick={() => this.props.addTodo(this.state.newTodo)}
          >Submit</button>
        </p>
      </div>
    )
  }
}

export default connect(null, {addTodo})(AddTodoForm)
