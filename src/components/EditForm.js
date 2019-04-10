import React, { Component } from 'react';

class TodoForm extends Component {
  
  state = {
    title: this.props.title
  }

  handleChange =(e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit =(e) => {
    e.preventDefault();    
    this.props.onEdit(this.state)
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} required={true} type="text" name="title" value={this.state.title}/>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default TodoForm;