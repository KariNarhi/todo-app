import { Component, OnInit } from '@angular/core';
import { NewTodo, Todo } from '..//models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoCrudService],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private todoService: TodoCrudService) {}

  // Add new todo
  addNewTodo(addedTodo: NewTodo): void {
    this.todoService
      .addTodo_observable(addedTodo)
      .subscribe((newTodo: Todo) => {
        this.todos.push(newTodo);
      });
  }

  ngOnInit(): void {
    // Get all todos
    this.todoService.getTodos_observable().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }
}
