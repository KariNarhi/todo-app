import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyViewComponent } from './empty-view/empty-view.component';
import { TodoEditViewComponent } from './todo-edit-view/todo-edit-view.component';
import { TodoDialogModalComponent } from './todo-dialog-modal/todo-dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDialogComponent,
    SidenavComponent,
    TodoItemComponent,
    TodosComponent,
    EmptyViewComponent,
    TodoEditViewComponent,
    TodoDialogModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
