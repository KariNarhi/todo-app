import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { v4 as uuid_v4 } from 'uuid';

// Kovakoodattu data.
const TODOS: Todo[] = [
  {
    id: 'IACLI',
    title: 'Install Angular CLI',
    body: 'Start the project',
    completed: false,
  },
  {
    id: 'ABCDEFG',
    title: 'Create components',
    body: 'Build the skeleton',
    completed: false,
  },
  { id: uuid_v4(), title: 'Add styles', body: 'Styling', completed: false },
  {
    id: uuid_v4(),
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

  // Hae todot
  getTodos() {
    return new Promise<Todo[]>((resolve) => resolve(TODOS));
  }

  // Lisää todo
  addTodo(newTodo: Todo) {
    return new Promise((resolve) => {
      TODOS.push(newTodo);
      resolve(newTodo);
    });
  }

  // Päivitä todo
  updateTodo(updatedTodo: Todo) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo.id === updatedTodo.id);
      TODOS[index] = updatedTodo;
      resolve(updatedTodo);
    });
  }

  // Poista todo
  deleteTodo(deltodo: Todo) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo.id === deltodo.id);
      TODOS.splice(index, 1);
      resolve(true);
    });
  }
}
