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
  },
  {
    path:'files',
    loadChildren:()=> import('./files/files.module').then(m=>m.FilesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
