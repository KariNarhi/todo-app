import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { Observable } from 'rxjs';

import { v4 as uuid_v4 } from 'uuid';

const TODOS: Todo[] = [
  {
    id: uuid_v4(),
    title: 'Install Angular CLI',
    body: 'Start the project',
    completed: true,
  },
  {
    id: uuid_v4(),
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
    return new Promise((resolve) => resolve(TODOS));
  }
}
