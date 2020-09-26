import { Component, OnInit } from '@angular/core';
import { Todo } from '..//models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoCrudService],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoCrudService) {
    this.getTodos();
  }

  // Reload todos after adding new one
  reloadTodos() {
    this.getTodos();
  }

  // Get all todos
  async getTodos() {
    const todos = await this.todoService.getTodos();
    //console.log(todos);
    this.todos = todos;
  }

  ngOnInit(): void {}
}
