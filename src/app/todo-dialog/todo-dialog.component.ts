import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { v4 as uuid_v4 } from 'uuid';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';

export interface DialogData {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css'],
  providers: [TodoCrudService],
})
export class TodoDialogComponent implements OnInit {
  @Output() getTodos: EventEmitter<Todo[]> = new EventEmitter();
  todo: DialogData;

  constructor(public dialog: MatDialog, private todoService: TodoCrudService) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogModal, {
      width: '500px',
      data: { ...this.todo },
    });

    dialogRef.afterClosed().subscribe((todo: DialogData) => {
      if (todo) {
        this.todo = todo;

        let newTodo: Todo;

        newTodo = {
          id: uuid_v4(),
          title: todo.title,
          body: todo.desc,
          completed: false,
        };

        this.todoService.addTodo(newTodo).then(() => {
          todo.title = ''; // clear input form value
          todo.desc = ''; // clear input form value
        });
      }
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
