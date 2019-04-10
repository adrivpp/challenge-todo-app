import axios from 'axios';

class TodoService {
  constructor() {
    this.todos = axios.create({
      baseURL: 'http://localhost:4000/api/v1/todos',
      withCredentials: true 
    })
  }

  create(todo) {
    return this.todos.post('/', todo)
      .then(({ data }) => data);      
  }

  findAll() {
    return this.todos.get('/')
      .then(({ data }) => data);      
  }

  delete(id) {
    return this.todos.delete(`/${id}`)
      .then(({ data }) => data);
  }

  edit(id, title) {
    return this.todos.put(`/${id}`, title)
      .then(({ data }) => data);
  }
}

const todoService = new TodoService();

export default todoService;