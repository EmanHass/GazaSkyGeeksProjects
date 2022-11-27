import { DetailJobComponent } from './detail-job/detail-job.component';
import { AddJobsComponent } from './add-jobs/add-jobs.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'list'
  },
  {
    path:'list',
    component:ListJobsComponent
  },
  {
    path:'add',
    component:AddJobsComponent
  },
  {
    path:'detail/:id',
    component: DetailJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
