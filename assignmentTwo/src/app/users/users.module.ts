import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateuserComponent } from './updateuser/updateuser.component';


@NgModule({
  declarations: [
    UsersListComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    UsersListComponent,
    AdduserComponent,
    UpdateuserComponent
  ]
})
export class UsersModule { }
