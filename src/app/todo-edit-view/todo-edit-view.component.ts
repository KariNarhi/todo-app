import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css'],
})
export class TodoEditViewComponent implements OnInit, OnDestroy {
  todo: Todo;
  navigationSub: Subscription;

  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private todoCrudService: TodoCrudService,
    private router: Router
  ) {
    this.getTodo();
    this.navigationSub = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          this.getTodo();
        }
      }
    );
  }

  async getTodo(): Promise<Todo> {
    const todos = await this.todoCrudService.getTodos();
    const id: string = this.route.snapshot.paramMap.get('id');
    const todo: Todo = todos.find((todo: Todo) => todo.id === id);
    return (this.todo = todo);
  }

  delTodo(todo: Todo) {
    this.todoCrudService.deleteTodo(todo).then(() => {
      this.router.navigateByUrl('/');
    });
  }

  async updateTodo() {
    await this.todoCrudService
      .updateTodo(this.todo)
      .then(() => this.router.navigateByUrl('/'));
  }

  onSubmit() {
    console.log(this.editForm.value);
  }

  toggleCompleted(completed: boolean) {
    console.log(this.todo.completed);
    this.todo.completed = !completed;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.navigationSub) {
      this.navigationSub.unsubscribe();
    }
  }
}
