import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css'],
})
export class TodoDialogComponent implements OnInit {
  todo: DialogData;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogModal, {
      width: '250px',
      data: { ...this.todo },
    });

    dialogRef.afterClosed().subscribe((todo: DialogData) => {
      //console.log(todo);
      this.todo = todo;
    });
  }
}

@Component({
  selector: 'todo-dialog-modal',
  templateUrl: 'todo-dialog-modal.html',
})
export class TodoDialogModal {
  constructor(
    public dialogRef: MatDialogRef<TodoDialogModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
