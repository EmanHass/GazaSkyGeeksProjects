import { ProfileModule } from './profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { SharedModules } from '../shared-modules/shared-modules.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobseekersRoutingModule,
    ProfileModule,
    SharedModules
  ]
})
export class JobseekersModule { }
