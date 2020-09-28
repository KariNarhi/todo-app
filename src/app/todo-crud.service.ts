import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { BehaviorSubject } from 'rxjs';

// Hard coded data
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
];

@Injectable({
  providedIn: 'root',
})
export class TodoCrudService {
  constructor() {}

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

  // Get todos
  getTodos(): Promise<Todo[]> {
    return new Promise<Todo[]>((resolve) => resolve(TODOS));
  }

  // Get todos
  getTodo(id: string): Promise<Todo> {
    const singleTodo = TODOS.find((todo) => todo._id === id);
    return new Promise<Todo>((resolve) => resolve(singleTodo));
  }

  // Add todo
  addTodo(newTodo: Todo) {
    return new Promise((resolve) => {
      //TODOS.push(newTodo);
      resolve(newTodo);
    });
  }

  // Update todo
  updateTodo(updatedTodo: Todo) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo._id === updatedTodo._id);
      TODOS[index] = updatedTodo;
      resolve(updatedTodo);
    });
  }

  // Delete todo
  deleteTodo(deltodo: Todo) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo._id === deltodo._id);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }
}
