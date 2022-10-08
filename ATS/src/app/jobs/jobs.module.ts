import { SharedModules } from './../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModules
  ]
})
export class JobsModule { }
