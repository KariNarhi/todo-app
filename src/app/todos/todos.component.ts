import { Component, OnInit } from '@angular/core';
import { Todo } from '..//models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor(private todoCrudService: TodoCrudService) {
    // Get all todos
    this.loadTodos();

    // Reload after if todo deleted
    this.todoCrudService.todoIsDeleted.subscribe((deleted: Boolean) => {
      if (deleted) {
        this.loadTodos();
      }
    });
  }

  // Get all todos
  loadTodos() {
    this.todoCrudService.getTodos().then((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  // Add new todo
  addNewTodo(addedTodo: Todo): void {
    this.todoCrudService.addTodo(addedTodo).then((newTodo: Todo) => {
      this.todos.push(newTodo);
    });
  }

  ngOnInit(): void {}
}
