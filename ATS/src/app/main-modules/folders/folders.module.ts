import { SharedModules } from './../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FoldersRoutingModule,
    SharedModules
  ]
})
export class FoldersModule { }
