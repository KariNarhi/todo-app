import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      'is-complete': this.todo.completed,
    };

    return classes;
  }

  onToggle(todo: Todo) {
    // Toggle in UI
    this.todo.completed = !todo.completed;
  }
}
