import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetsOverviewComponent} from "../admin-pets/pets-overview/pets-overview.component";
import {TodosOverviewComponent} from "./todos-overview/todos-overview.component";

const routes: Routes = [
  {
    path: '', component: TodosOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
