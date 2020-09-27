import { Injectable } from '@angular/core';
import { Todo, NewTodo } from './models/Todo';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { HttpClient } from '@angular/common/http';
const axios_db = axios.create({ baseURL: 'http://localhost:5000' });

@Injectable({
  providedIn: 'root',
})
export class TodoCrudService {
  constructor(private http: HttpClient) {}

  // Get todos observable version
  getTodos_observable(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  // Add todo observable version
  addTodo_observable(newTodo: NewTodo): Observable<Todo> {
    return this.http.post<Todo>('/api/todos', newTodo);
  }

  // Add todo
  addTodo(newTodo: NewTodo) {
    return new Promise((resolve) => {
      axios_db
        .post('/api/todos', newTodo)
        .then(() => resolve())
        .catch((err) => console.log(err));
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

/*   // BehaviorSubject for single todo
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
  } */
