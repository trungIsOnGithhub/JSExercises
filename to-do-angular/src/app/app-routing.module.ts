import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { ToBeRoutedComponent } from './to-be-routed/to-be-routed.component';

const routes: Routes = [
  { path: "1", component: TaskListComponent },
  { path: "2", component: ToBeRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TaskListComponent,
  ToBeRoutedComponent
]
