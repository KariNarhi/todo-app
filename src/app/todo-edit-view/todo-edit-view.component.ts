import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css'],
})
export class TodoEditViewComponent implements OnInit, OnDestroy {
  todo: Todo;
  navigationSub: Subscription;

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    completed: new FormControl(false),
  });

  constructor(
    private route: ActivatedRoute,
    private todoCrudService: TodoCrudService,
    private router: Router
  ) {
    // Get selected todo
    this.getTodo();
    this.navigationSub = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          // Happens when navigating to another todo's edit view
          // Get another selected todo, reset both form and todoCompleted check value.
          this.getTodo();
          this.editForm.reset();
        }
      }
    );
  }

  // Init form values from todo data
  // This prevents the form values from being empty at start
  setFormValues(todo: Todo) {
    this.editForm.setValue({
      title: todo.title,
      body: todo.body,
      completed: todo.completed,
    });
  }

  // Get single selected todo
  getTodo() {
    this.todoCrudService.getTodos_observable().subscribe((todos: Todo[]) => {
      const id: string = this.route.snapshot.paramMap.get('id');
      const todo: Todo = todos.find((todo: Todo) => todo._id === id);
      this.setFormValues(todo);
      this.todo = todo;
    });
  }

  // Submit changes to TodoCrudService
  async onSubmit() {
    this.todo.title = this.editForm.value.title;
    this.todo.body = this.editForm.value.body;
    this.todo.completed = this.editForm.value.completed;
    this.todoCrudService
      .updateTodo_observable(this.todo)
      .subscribe((updatedTodo: Todo) => {
        this.editForm.reset();
        this.todoCrudService.todoIsUpdated.next(updatedTodo);
        this.router.navigateByUrl('/');
      });
  }

  // Delete todo
  delTodo(todo: Todo) {
    this.todoCrudService.deleteTodo(todo).then(() => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Ensure that data does not follow to another todo view
    if (this.navigationSub) {
      this.navigationSub.unsubscribe();
    }
  }
}
