import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { TodoEditViewComponent } from './todo-edit-view/todo-edit-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'edit/:id', component: TodoEditViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
