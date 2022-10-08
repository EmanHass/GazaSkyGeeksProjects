import { SharedModules } from './../../shared-modules/shared-modules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekersRoutingModule } from './jobseekers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobseekersRoutingModule,
    SharedModules
  ]
})
export class JobseekersModule { }
