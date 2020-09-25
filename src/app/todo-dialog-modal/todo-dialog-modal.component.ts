import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

// Dialog-komponentin modaali-puoli
@Component({
  selector: 'app-todo-dialog-modal',
  templateUrl: './todo-dialog-modal.component.html',
  styleUrls: ['./todo-dialog-modal.component.css'],
})
export class TodoDialogModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<TodoDialogModalComponent>) {}

  todoForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.todoForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
