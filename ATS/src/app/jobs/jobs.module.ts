import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { SharedModules } from '../shared-modules/shared-modules.module';
import { JobsService } from './jobs.service';
import { DetailJobComponent } from './detail-job/detail-job.component';


@NgModule({
  declarations: [
    ListJobsComponent,
    AddJobsComponent,
    DetailJobComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModules,
    ReactiveFormsModule
  ],
  providers:[JobsService]
})
export class JobsModule { }
