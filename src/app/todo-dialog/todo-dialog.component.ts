import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoDialogModalComponent } from '../todo-dialog-modal/todo-dialog-modal.component';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css'],
})
// Dialogin avauspainike-komponentti
export class TodoDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(TodoDialogModalComponent, {
      width: '500px',
    });
  }
}
