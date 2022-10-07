import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { SharedModules } from 'src/app/shared-modules/shared-modules.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    SharedModules
  ]
})
export class InterviewsModule { }
