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

  constructor(private todoService: TodoCrudService) {}

  getTodos() {
    return this.todoService.getTodos().then((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  ngOnInit(): void {
    this.getTodos();
  }
}
