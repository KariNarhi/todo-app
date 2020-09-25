import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';

import { v4 as uuid_v4 } from 'uuid';

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

  getTodos() {
    return new Promise<Todo[]>((resolve) => resolve(TODOS));
  }

  /*  getTodo(id: string) {
    const chosenTodo = TODOS.find((todo) => todo.id === id);

    return new Promise<Todo>((resolve) => resolve(chosenTodo));
  } */

  addTodo(todo: Todo) {
    return new Promise((resolve) => {
      TODOS.push(todo);
      resolve(todo);
    });
  }
}
