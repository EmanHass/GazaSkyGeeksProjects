import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModules } from '../shared-modules/shared-modules.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from './users-service.service';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModules,
    ReactiveFormsModule,
  ],
  providers:[UserserviceService]
})
export class UsersModule { }
