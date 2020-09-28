import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoCrudService } from '../todo-crud.service';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css'],
})
export class TodoEditViewComponent implements OnInit, OnDestroy {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private todoCrudService: TodoCrudService,
    private router: Router
  ) {
    // Subscribe to navigation event
    this.navigationSub = this.router.events.subscribe(
      (event: NavigationEnd) => {
        if (event instanceof NavigationEnd) {
          // Happens when navigating to another todo's edit view
          // Reset both form and todoCompleted check value and get new todo values
          this.editForm.reset();
          this.getTodo();
        }
      }
    );
  }

  todo: Todo;
  navigationSub: Subscription;

  // Edit view form group
  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
    completed: new FormControl(false),
  });

  // Get title and body for error messages
  get title() {
    return this.editForm.get('title');
  }

  get body() {
    return this.editForm.get('body');
  }

  // Change style class when breakpoint changes to handset
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

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
    const id: string = this.route.snapshot.paramMap.get('id');
    this.todoCrudService.getTodo(id).then((todo: Todo) => {
      this.setFormValues(todo);
      this.todo = todo;
    });
  }

  // Submit changes to TodoCrudService
  async onSubmit() {
    // Gather updated/non-updated data
    this.todo.title = this.editForm.value.title;
    this.todo.body = this.editForm.value.body;
    this.todo.completed = this.editForm.value.completed;
    // Send data to CRUD service
    this.todoCrudService.updateTodo(this.todo).then((updatedTodo: Todo) => {
      this.editForm.reset();
      // Inform todo item that it's been updated
      this.todoCrudService.todoIsUpdated.next(updatedTodo);
      // Go to home view after updating
      this.router.navigateByUrl('/');
    });
  }

  // Delete todo
  delTodo() {
    // Go to home view after deleting
    this.router.navigateByUrl('/');
    // Inform todos array that a todo has been deleted
    this.todoCrudService.deleteTodo(this.todo).then(() => {
      this.todoCrudService.todoIsDeleted.next(true);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Ensure that data does not follow to another todo view
    if (this.navigationSub) this.navigationSub.unsubscribe();
  }
}
