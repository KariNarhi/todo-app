import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoCrudService } from '../todo-crud.service';
import { v4 as uuid_v4 } from 'uuid';
import { Todo } from '../models/Todo';

// Dialog-modaali
@Component({
  selector: 'app-todo-dialog-modal',
  templateUrl: './todo-dialog-modal.component.html',
  styleUrls: ['./todo-dialog-modal.component.css'],
  providers: [TodoCrudService],
})
export class TodoDialogModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TodoDialogModalComponent>,
    private todoService: TodoCrudService
  ) {}

  todoForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    let newTodo: Todo;

    newTodo = {
      id: uuid_v4(),
      title: this.todoForm.value.title,
      body: this.todoForm.value.body,
      completed: false,
    };

    console.log(newTodo);

    this.todoService.addTodo(newTodo).then(() => {
      this.todoForm.value.title = ''; // clear input form value
      this.todoForm.value.body = ''; // clear input form value
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
