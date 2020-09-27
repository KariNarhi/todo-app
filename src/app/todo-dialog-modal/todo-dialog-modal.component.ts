import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoCrudService } from '../todo-crud.service';
import { NewTodo } from '../models/Todo';

// Dialog-modal
@Component({
  selector: 'app-todo-dialog-modal',
  templateUrl: './todo-dialog-modal.component.html',
  styleUrls: ['./todo-dialog-modal.component.css'],
  providers: [TodoCrudService],
})
export class TodoDialogModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TodoDialogModalComponent>) {}

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  // Create new todo from form values
  onSubmit() {
    // Create the new todo
    const newTodo: NewTodo = {
      title: this.todoForm.value.title,
      body: this.todoForm.value.body,
    };

    //Reset form values, close dialog and send new todo data to TodoComponent (dialog-button in between)
    this.todoForm.reset();
    this.dialogRef.close(newTodo);
  }

  // Close dialog when no submit
  onNoClick(): void {
    this.dialogRef.close();
  }
}
