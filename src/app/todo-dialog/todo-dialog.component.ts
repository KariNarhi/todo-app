import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { v4 as uuid_v4 } from 'uuid';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';
import { TodoDialogModalComponent } from '../todo-dialog-modal/todo-dialog-modal.component';

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
// Dialogin hallinta-puoli
export class TodoDialogComponent implements OnInit {
  todo: DialogData;

  constructor(public dialog: MatDialog, private todoService: TodoCrudService) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoDialogModalComponent, {
      width: '500px',
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

        console.log(newTodo);

        this.todoService.addTodo(newTodo).then(() => {
          todo.title = ''; // clear input form value
          todo.desc = ''; // clear input form value
        });
      }
    });
  }
}
