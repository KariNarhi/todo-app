import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/Todo';
import { v4 as uuid_v4 } from 'uuid';

// Dialog-modal
@Component({
  selector: 'app-todo-dialog-modal',
  templateUrl: './todo-dialog-modal.component.html',
  styleUrls: ['./todo-dialog-modal.component.css'],
})
export class TodoDialogModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TodoDialogModalComponent>) {}

  // Dialog form group
  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  // Get title and body for error messages
  get title() {
    return this.todoForm.get('title');
  }

  get body() {
    return this.todoForm.get('body');
  }

  // Create new todo from form values
  onSubmit() {
    // Create the new todo
    const newTodo: Todo = {
      _id: uuid_v4(),
      title: this.todoForm.value.title,
      body: this.todoForm.value.body,
      completed: false,
    };

    //Reset form values, close dialog and send new todo data to TodoComponent (dialog-button in between)
    this.todoForm.reset();
    this.dialogRef.close(newTodo);
  }

  // Close dialog when no submit
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
