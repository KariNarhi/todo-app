import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit, OnDestroy {
  @Input() todo: Todo = {
    // Initial values for todo item
    _id: 'Default',
    title: 'Default',
    body: 'Default',
    completed: false,
  };

  updateSub: Subscription;

  constructor(private todoCrudService: TodoCrudService) {
    // Subscribe to the todo's update information
    this.updateSub = this.todoCrudService.todoIsUpdated.subscribe(
      (updatedTodo: Todo) => {
        if (updatedTodo._id === this.todo._id) {
          this.todo = updatedTodo;
        }
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe from update info
    if (this.updateSub) this.updateSub.unsubscribe();
  }
}
