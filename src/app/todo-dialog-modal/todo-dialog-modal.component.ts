import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoCrudService } from '../todo-crud.service';
import { v4 as uuid_v4 } from 'uuid';
import { Todo } from '../models/Todo';

// Dialog-modal
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
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  // Create new todo from form values and close dialog
  onSubmit() {
    let newTodo: Todo;

    // Create the new todo
    newTodo = {
      id: uuid_v4(),
      title: this.todoForm.value.title,
      body: this.todoForm.value.body,
      completed: false,
    };

    // Send new todo to TodoCrudService, reset form values and close dialog
    this.todoService.addTodo(newTodo).then(() => {
      this.todoForm.reset();
      this.dialogRef.close();
    });
  }

  // Close dialog when no submit
  onNoClick(): void {
    this.dialogRef.close();
  }
}
