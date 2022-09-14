import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
