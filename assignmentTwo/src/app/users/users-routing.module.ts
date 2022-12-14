import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'addUser'
  },
  {
    path:'addUser',
    component:AdduserComponent
  },
  {
    path:'edit/:id',
    component:UpdateuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
