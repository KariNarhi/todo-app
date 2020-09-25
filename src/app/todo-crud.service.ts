import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { v4 as uuid_v4 } from 'uuid';

// Kovakoodattu data.
const TODOS: Todo[] = [
  {
    id: 'IACLI',
    title: 'Install Angular CLI',
    body: 'Start the project',
    completed: true,
  },
  {
    id: 'ABCDEFG',
    title: 'Create components',
    body: 'Build the skeleton',
    completed: true,
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
  addTodo(todo: Todo) {
    return new Promise((resolve) => {
      TODOS.push(todo);
      resolve(todo);
    });
  }

  // Päivitä todo
  updateTodo(newTodo: Todo) {
    return new Promise((resolve) => {
      const index = TODOS.findIndex((todo) => todo.id === newTodo.id);
      TODOS[index] = newTodo;
      resolve(newTodo);
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
