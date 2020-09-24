import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  todo: string;
  desc: string;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css'],
})
export class TodoDialogComponent implements OnInit {
  todo: string;
  desc: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogModal, {
      width: '250px',
      data: { todo: this.todo, desc: this.desc },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed');
      this.todo = result;
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
