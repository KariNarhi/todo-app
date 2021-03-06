import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { TodoCrudService } from './todo-crud.service';

import { AppComponent } from './app.component';
import { TodoDialogButtonComponent } from './todo-dialog-button/todo-dialog-button.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodosComponent } from './todos/todos.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { TodoEditViewComponent } from './todo-edit-view/todo-edit-view.component';
import { TodoDialogModalComponent } from './todo-dialog-modal/todo-dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDialogButtonComponent,
    SidenavComponent,
    TodoItemComponent,
    TodosComponent,
    HomeViewComponent,
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
    HttpClientModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
    TodoCrudService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
