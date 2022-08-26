import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesListComponent } from './files-list/files-list.component';


@NgModule({
  declarations: [
    FilesListComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ]
})
export class FilesModule { }
