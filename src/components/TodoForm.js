import React, { Component } from 'react';

class TodoForm extends Component {
  
  state = {
    title: ''
  }

  handleChange =(e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit =(e) => {
    e.preventDefault();    
    this.props.onAdd(this.state)
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} required={true} type="text" name="title" value={this.state.title} placeholder="Add a todo"/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default TodoForm;