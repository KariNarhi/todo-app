import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [TodoCrudService],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoCrudService) {}

  ngOnInit(): void {
    //this.todoService.currentTodo.subscribe((todo: Todo) => (this.todo = todo));
  }

  // Set dynamic class
  setClasses() {
    let classes = {
      'is-complete': this.todo.completed,
    };

    return classes;
  }
}
