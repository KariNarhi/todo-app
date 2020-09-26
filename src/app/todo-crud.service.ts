import { Injectable } from '@angular/core';
import { Todo, NewTodo } from './models/Todo';
import axios, { AxiosResponse } from 'axios';
const axios_db = axios.create({ baseURL: 'http://localhost:5000' });

@Injectable({
  providedIn: 'root',
})
export class TodoCrudService {
  constructor() {}

  // Get todos
  getTodos(): Promise<Todo[]> {
    const promise: Promise<AxiosResponse<Todo[]>> = axios_db.get('/api/todos');

    const dataPromise = promise.then((res: AxiosResponse<Todo[]>) => res.data);

    return new Promise((resolve) => {
      resolve(dataPromise);
    });
  }

  // Add todo
  addTodo(newTodo: NewTodo) {
    return new Promise((resolve) => {
      axios_db.post('/api/todos', newTodo);
      resolve(newTodo);
    });
  }

  // Update todo
  updateTodo(updatedTodo: Todo) {
    return new Promise((resolve) => {
      axios_db.put('/api/todos', updatedTodo);
      resolve(updatedTodo);
    });
  }

  // Delete todo
  deleteTodo(deltodo: Todo) {
    return new Promise((resolve) => {
      axios_db.delete(`/api/todos/${deltodo._id}`);
      resolve(true);
    });
  }
}
