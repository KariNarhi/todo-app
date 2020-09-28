import { Injectable } from '@angular/core';
import { Todo, NewTodo } from './models/Todo';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  // Inform todos array that a todo has been removed
  public todoIsDeleted: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false
  );

  // Get todos observable version
  getTodos_observable(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  // Get single todo observable version
  getTodo_observable(id: string): Observable<Todo> {
    return this.http.get<Todo>(`/api/todos/${id}`);
  }

  // Add todo observable version
  addTodo_observable(newTodo: NewTodo): Observable<Todo> {
    return this.http.post<Todo>('/api/todos', newTodo);
  }

  // Update todo observable version
  updateTodo_observable(updatedTodo: Todo): Observable<Todo> {
    return this.http.put<Todo>('/api/todos', updatedTodo);
  }

  // Delete todo observable version
  deleteTodo_observable(deltodo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`/api/todos/${deltodo._id}`);
  }
}
