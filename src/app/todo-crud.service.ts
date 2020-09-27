import { Injectable } from '@angular/core';
import { Todo, NewTodo } from './models/Todo';
import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';
const axios_db = axios.create({ baseURL: 'http://localhost:5000' });

@Injectable({
  providedIn: 'root',
})
export class TodoCrudService {
  constructor() {}

  // Sync Todo
  private todoSource = new BehaviorSubject<Todo>({
    _id: 'Default',
    title: 'Default',
    body: 'Default',
    completed: false,
  });

  currentTodo = this.todoSource.asObservable();

  updateTodoComponent(todo: Todo) {
    this.todoSource.next(todo);
  }

  // Get todos
  getTodos(): Promise<Todo[]> {
    const dataPromise: Promise<Todo[]> = axios_db
      .get('/api/todos')
      .then((res: AxiosResponse<Todo[]>) => res.data);

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
