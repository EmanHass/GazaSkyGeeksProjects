import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './users/adduser/adduser.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'users-list'
  }
  ,{
    path:'users-list',
    component: UsersListComponent
  },
  {
    path:'users',
    loadChildren:()=> import('./users/users.module').then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
