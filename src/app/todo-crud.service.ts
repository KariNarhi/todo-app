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

  // Inform todo that it has been updated
  public todoIsUpdated: BehaviorSubject<Todo> = new BehaviorSubject<Todo>({
    _id: 'Default',
    title: 'Default',
    body: 'Default',
    completed: false,
  });

  // Get todos observable version
  getTodos_observable(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  // Add todo observable version
  addTodo_observable(newTodo: NewTodo): Observable<Todo> {
    return this.http.post<Todo>('/api/todos', newTodo);
  }

  // Update todo observable version
  updateTodo_observable(updatedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>('/api/todos', updatedTodo);
  }

  // Delete todo
  deleteTodo(deltodo: Todo) {
    return new Promise((resolve) => {
      axios_db.delete(`/api/todos/${deltodo._id}`);
      resolve(true);
    });
  }
}
