import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    UsersListComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports:[
    UsersListComponent
  ]
})
export class UsersModule { }
