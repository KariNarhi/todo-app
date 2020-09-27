import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodo } from '../models/Todo';

import { TodoDialogModalComponent } from '../todo-dialog-modal/todo-dialog-modal.component';

@Component({
  selector: 'app-todo-dialog-button',
  templateUrl: './todo-dialog-button.component.html',
  styleUrls: ['./todo-dialog-button.component.css'],
})
// Dialog opening button component
export class TodoDialogButtonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Output() onSubmit = new EventEmitter<NewTodo>();

  ngOnInit(): void {}

  // Open dialog when button is clicked
  openDialog(): void {
    this.dialog
      .open(TodoDialogModalComponent, {
        width: '500px',
      })
      .afterClosed()
      .subscribe((addedTodo: NewTodo) => {
        if (addedTodo) {
          // Emit event to TodosComponent on submit
          this.onSubmit.emit(addedTodo);
        }
      });
  }
}
