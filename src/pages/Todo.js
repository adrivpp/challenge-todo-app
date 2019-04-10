import React, { Component } from 'react';
import todoService from '../services/todoService';
import TodoForm from '../components/TodoForm';

class Todos extends Component {

  state = {
    todos: [],
    isVisible: false,   
  }

  handleCreate =(todo) => {
    todoService.create(todo)
    .then((todo) => {
      this.setState({
        todos: [...this.state.todos, todo],
      })
    })
  }

  handleEdit = (id) => {
    
  }

  toggleForm =() => {
    this.setState({
      isVisible: !this.state.isVisible
    })     
  }

  findAll =() => {
    todoService.findAll()
    .then((todos) => {
      this.setState({
        todos,
      })
    })
  }

  componentDidMount() {
    this.findAll()
  }

  handleClick =() => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleDelete =(id) => {   
    todoService.delete(id)
    .then(() => {
      this.findAll()
    })
  }

  renderList =() =>{
    const { todos } = this.state
    return todos.map((todo, index) => {
      return (
        <>
          <div className="todo-element" key={`id-${index}`}>
            <i className="fas fa-trash-alt" onClick={()=>this.handleDelete(todo._id)}></i>
            <p>{todo.title}</p>                        
          </div>
        </>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <button className="toggle" onClick={this.toggleForm}>+</button>
        {this.state.isVisible && <TodoForm onAdd={this.handleCreate}/>}
        <section className="todo-list">
          {this.renderList()}
        </section>        
      </div>
    );
  }
}

export default Todos;