import { Injectable } from '@angular/core';
import { Todo, NewTodo } from './models/Todo';
import axios, { AxiosResponse } from 'axios';
const axios_db = axios.create({ baseURL: 'http://localhost:5000' });

/* // Hard coded data
const TODOS: Todo[] = [
  {
    _id: 'IACLI',
    title: 'Install Angular CLI',
    body: 'Start the project',
    completed: false,
  },
  {
    _id: 'ABCDEFG',
    title: 'Create components',
    body: 'Build the skeleton',
    completed: false,
  },
  { _id: '1234556', title: 'Add styles', body: 'Styling', completed: false },
  {
    _id: 'AngularStuff',
    title: 'CRUD stuff',
    body: 'Data management',
    completed: false,
  },
]; */

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
      /* const index = TODOS.findIndex((todo) => todo._id === updatedTodo._id);
      TODOS[index] = updatedTodo; */
      resolve(updatedTodo);
    });
  }

  // Delete todo
  deleteTodo(deltodo: Todo) {
    return new Promise((resolve) => {
      /* const index = TODOS.findIndex((todo) => todo._id === deltodo._id);
      TODOS.splice(index, 1); */
      resolve(true);
    });
  }
}
