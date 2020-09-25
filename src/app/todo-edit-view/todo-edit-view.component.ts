import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css'],
})
export class TodoEditViewComponent implements OnInit {
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoCrudService: TodoCrudService
  ) {}

  async getTodo(): Promise<Todo> {
    const todos = await this.todoCrudService.getTodos();
    const id: string = this.route.snapshot.paramMap.get('id');
    const todo: Todo = todos.find((todo: Todo) => todo.id === id);
    console.log(todo);
    return (this.todo = todo);
  }

  ngOnInit(): void {
    this.getTodo();
  }
}
